'use strict';

eventsApp.controller('eventsController', 
	function eventsController($scope) {

		$scope.event = {
			name: 'Angular Boot Camp',
			date: '12/25/2013',
			time: '11:11 am'
		}
 	}
);