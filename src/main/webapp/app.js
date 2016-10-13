<!--ngRoute is build in module in angular js used for navigation (ModelAndView) -->
var app = angular.module('myApp', ['ngRoute']);



app.config(function($routeProvider) {
	  $routeProvider
<!--http://localhost:8081/CollaborationFrontEnd/ -->
	  .when('/', {
	    templateUrl : 'c_home/home.html',
	    controller  : 'HomeController'
	  })
	  
	  .when('/about', {
	    templateUrl : 'c_about/about.html',
	    controller  : 'AboutController'
	  })
	  
	  .when('/login1', {
	    templateUrl : 'c_login/login1.html',
	    controller  : 'LoginController'
	  })
	  
	   .when('/login', {
	    templateUrl : 'c_user/login.html',
	    controller  : 'UserController'
	  })
	  
	  .when('/register1', {
	    templateUrl : 'c_register/register1.html',
	    controller  : 'RegisterController'
	  })
	  
	   .when('/register', {
	    templateUrl : 'c_user/register.html',
	    controller  : 'UserController'
	  })
	  
	   .when('/blog_create', {
	    templateUrl : 'c_blog/blog_create.html',
	    controller  : 'BlogController'
	  })
	  
	  .when('/list_blog', {
	    templateUrl : 'c_blog/list_blog.html',
	    controller  : 'BlogController'
	  })
	  .when('/view_blog', {
	    templateUrl : 'c_blog/view_blog.html',
	    controller  : 'BlogController'
	  })
	  
	  .when('/list_chat_forum', {
	    templateUrl : 'c_forum/list_chat_forum',
	    controller  : 'ChatForumController'
	  })
	  
	  .when('/view_chat_forum', {
	    templateUrl : 'c_forum/view_chat_forum',
	    controller  : 'ChatForumController'
	  })
	  
	   .when('/friend', {
	    templateUrl : 'c_friend/friend.html',
	    controller  : 'FriendController'
	  })
	  
	  .when('/search_friend.html', {
	    templateUrl : 'c_friend/search_friend.html',
	    controller  : 'FriendController'
	  })
	  
	  .when('/view_friend.html', {
	    templateUrl : 'c_friend/view_friend.html',
	    controller  : 'FriendController'
	  })
	  

	  .otherwise({redirectTo: '/'});
	});

