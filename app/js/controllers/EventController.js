'use strict';

eventsApp.controller('eventsController', 
	function eventsController($scope) {

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
					name: "Directives Masterclass"
				},
				{
					name: "Scopes for fun and profit"
				},
				{
					name: "Well Behaved Controllers"
				}
			]
		}
 	}
);