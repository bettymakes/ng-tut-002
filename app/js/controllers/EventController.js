'use strict';

eventsApp.controller('eventsController', 
	function eventsController($scope) {

		$scope.snippet='<span style="color:red">hi there!</span>';
		$scope.booleanVal=true;
		$scope.event = {
			name: 'Angular Boot Camp',
			date: '12/25/2013',
			time: '11:11 am',
			location: {
				address: '62 Yoyo Drive',
				city: 'Mountain View',
				state: 'California',
			},
			imageUrl: '/app/img/egg.jpg',
			sessions: [
				{
					name: "Directives Masterclass",
					creatorName: "Jon Doe",
					duration: "2 hours",
					level: "Super Smart",
					abstract: "In this session, you'll learn the ins and outs of directives! Yay!",
					upVoteCount: 0
				},
				{
					name: "Scopes for fun and profit",
					creatorName: "Mulan Fah",
					duration: "1.5 hours",
					level: "Dummies",
					abstract: "In this session, you'll learn how to scope stuff for fun and profit!",
					upVoteCount: 0
				},
				{
					name: "Well Behaved Controllers",
					creatorName: "Pika Chu",
					duration: "5 hours",
					level: "Mediocre",
					abstract: "In this session, you'll learn about well behaved controllers and cool stuff like that for a really long time!",
					upVoteCount: 0
				}
			]
		}

		$scope.upVoteSession = function(session) {
			session.upVoteCount++;
		};

		$scope.downVoteSession = function(session) {
			session.upVoteCount--;
		};

		$scope.showHideFunc = function(){
			if ($scope.booleanVal === true){
				$scope.booleanVal = false;
			} 
			else{
				$scope.booleanVal = true;
			}
			console.log($scope.booleanVal);
		};
 	}
);