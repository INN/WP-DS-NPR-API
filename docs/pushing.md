# Pushing Stories to the NPR API

After you set up the WordPress NPR API Plugin, pushing stories to the NPR API couldn't be easier. In **Settings > NPR API > NPR Push Post Type** you can select what type of posts you want to push to the API. The default will be Post, meaning as you create and publish posts they will automatically be pushed to the NPR API. Or if you have a custom post type you want to reserve for stories pushed to the API, you can select this in the **NPR Push Post Type** setting, and only those posts will be pushed. 

![NPR API plugin settings page](/assets/npr-api-wp-plugin-settings.png)

In other words if you **do not** want all your regular WordPress posts to get automatically pushed to the NPR API, make sure the **NPR Push Post Type** is not set to `Post` or the default value of `- Select -`. If you set it to `npr_story_post` nothing will be pushed since this is the post type for NPR stories already in the API, and they won't be overwritten by WordPress. 

## Verifying Pushed Stories

Let's say we have a lovely post and we want to share it with the world through the NPR API. We've got **NPR Push Post Type** set to `post` so when we publish this post it will be pushed to the NPR API automatically:

![NPR API plugin settings page](/assets/test-post-for-npr-api.png)

We can easily verify that it was successfully pushed by checking for an `npr_story_id` value in the post's Custom Fields:

![Custom Fields in a post showing an NPR story iD](/assets/post-custom-fields-api.png)

If the push fails you will instead see an error message in a custom field named `npr_push_story_error`:

![NPR API push error message](/assets/npr-api-push-error.png)

If you get push errors check **Settings > NPR API** to make sure correct values are entered for your API Ket, Pull URL, Push URL, Org ID, and NPR Push Post Type.

## Pushing Multiple Stories to the NPR API

You can select any number of posts for pushing to the NPR API in bulk. In the **All Posts** screen for the post type you've selected as the **NPR Push Post Type**, you'll find a new Bulk Action:

![NPR API push bulk action menu item](/assets/bulk-action-push-to-npr.png)

Simply select the posts you want to push, then choose "Push Story to NPR" from the dropdown menu and click "Apply".

## Pushing Story Updates to the NPR API

If you edit a story that's been previously pushed to the NPR API, when you update the post it will automatically update the story in the NPR API.

## Deleting Posts from the NPR API

You can delete any of your stories from the NPR API by simply deleting them in WordPress. Stories you pull from the API can't be deleted in this way, as you only have delete access to stories created on your WordPress site.