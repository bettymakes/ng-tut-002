'use strict';

eventsApp.controller('eventsController', 
	function eventsController($scope) {

		$scope.snippet='<span style="color:red">hi there!</span>';
		$scope.booleanVal=true;
		$scope.booleanVal2=true;
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
					booleanVal2: true,
					upVoteCount: 0
				},
				{
					name: "Scopes for fun and profit",
					creatorName: "Mulan Fah",
					duration: "1.5 hours",
					level: "Dummies",
					abstract: "In this session, you'll learn how to scope stuff for fun and profit!",
					booleanVal2: true,
					upVoteCount: 0
				},
				{
					name: "Well Behaved Controllers",
					creatorName: "Pika Chu",
					duration: "5 hours",
					level: "Mediocre",
					abstract: "In this session, you'll learn about well behaved controllers and cool stuff like that for a really long time!",
					booleanVal2: true,
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

		$scope.showHideFunc2 = function(session){
			if (session.booleanVal2 === true){
				session.booleanVal2 = false;
			} 
			else{
				session.booleanVal2 = true;
			}
			console.log(session.booleanVal2);
		};

		// $scope.showHideFunc = function(x){
		// 	if ($scope.x === true){
		// 		$scope.x = false;
		// 	} 
		// 	else{
		// 		$scope.x = true;
		// 	}
		// 	console.log($scope.x);
		// 	console.log(x);
		// };
 	}
);