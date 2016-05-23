var app = angular.module("news" ,["ui.router"]);


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "/home.html",
		controller: "MainCtrl"
	})
	/* same as $routeprovider when using ngRoute
	.when("/home",{
		templateUrl: "/home.html",
		controller: "MainCtrl"
	*/
	$urlRouterProvider.otherwise("home")
}])



app.controller("MainCtrl", ["$scope", "posts" function($scope, posts){
	$scope.greeting = "Hello World!"

	$scope.posts = posts.posts
	// it goes to the posts module and gets the post object
	];

	$scope.addPost = function(){
		if(!$scope.title || $scope.title === ""){
			return;
		}
		$scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0})
		// make the input box aka $scope.title blank after submit
		$scope.title = ""
		$scope.link = ""
	};

	$scope.upvote = function(post){
		post.upvotes = post.upvotes + 1
	}

	$scope.downvote = function(post){
		post.upvotes = post.upvotes - 1
	}

}]);


app.factory("posts", [function(){
	var object = {
		posts: []
	};
	return object;
}])