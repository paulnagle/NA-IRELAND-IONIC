angular.module('na_ireland.services', [])

// WP POSTS RELATED FUNCTIONS
.service('PostService', function ($rootScope, $http, $q, WORDPRESS_API_URL){

	this.getRecentPosts = function(page) {
		var deferred = $q.defer();

		$http.jsonp(WORDPRESS_API_URL + 'get_recent_posts/' +
		'?page='+ page +
		'&callback=JSON_CALLBACK')
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};


	this.getPost = function(postId) {
		var deferred = $q.defer();

		$http.jsonp(WORDPRESS_API_URL + 'get_post/' +
		'?post_id='+ postId +
		'&callback=JSON_CALLBACK')
		.success(function(data) {
			deferred.resolve(data);
		})
		.error(function(data) {
			deferred.reject(data);
		});

		return deferred.promise;
	};

	this.shortenPosts = function(posts) {
		//we will shorten the post
		//define the max length (characters) of your post content
		var maxLength = 10;
		return _.map(posts, function(post){
			if(post.content.length > maxLength){
				//trim the string to the maximum length
				var trimmedString = post.content.substr(0, maxLength);
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf("</p>")));
				post.content = trimmedString;
			}
			return post;
		});
	};

	this.sharePost = function(link){
		window.plugins.socialsharing.share('Check this post here: ', null, null, link);
	};

})


;
