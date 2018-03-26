/**
 * NPR Story API meta box functions and features
 */
document.addEventListener('DOMContentLoaded', () => {
	'use strict';
	var $ = jQuery;

	// contains the inputs
	var $container = $( '#ds-npr-publish-actions' );

	// initialize the form
	$container.find( 'input' ).on( 'change', li_checking );

	// Upon update, do the thing
	li_checking.call( $container.find( '#send_to_api' ) );

	/*
	 * If a checkbox in an li gets unchecked, uncheck and disable its child li
	 * If a checkbox in an li gets checked, enable its child li
	 */
	function li_checking( event ) {
		var checked =  $( this ).prop('checked');
		var $results = $( this ).closest( 'li' ).children( 'ul' ).children( 'li' ); // Only get the first level of list.
		$results.each( function( element ) {
			// Triggering the change event on the child does not work.
			if ( checked ) {
				var recurse = $( this ).children( 'label' ).children( 'input' ).prop( 'disabled', false );
				li_checking.call( recurse );
			} else {
				recurse = $( this ).children( 'label' ).children( 'input' ).prop( 'disabled', true ).prop( 'checked', false );
				li_checking.call( recurse );
			}
		});
	}

	// edit the time selector
	$( '#nprone-expiry-edit' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '#nprone-expiry-form' ).toggleClass( 'hidden' );
		$( this ).toggleClass( 'hidden' );
	});
	// close the time selector
	$( '#nprone-expiry-cancel' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '#nprone-expiry-form' ).toggleClass( 'hidden' );
		$( '#nprone-expiry-edit' ).toggleClass( 'hidden' );
	});
	// save the time selector
	$( '#nprone-expiry-save' ).on( 'click', function( event ) {
		event.preventDefault();
		$( '#nprone-expiry-form' ).toggleClass( 'hidden' );
		$( '#nprone-expiry-edit' ).toggleClass( 'hidden' );

		// but then it needs to update the displayed data in #nprone-expiry-display. How is it to do that?
		// Is there an underscore template that we can fill with the data?
	});


	// Activate the date picker, if and only if the browser doesn't have a native datepicker
	// @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date#JavaScript
	var test = document.createElement( 'input' );
	test.type = 'date';
	if ( test.type !== 'date' ) {
		$( '#nprone-expiry-datepicker' ).attr('type', 'text').css('width', '8em').datepicker({
			dateFormat: 'yy-mm-dd'
		});
	}
});
