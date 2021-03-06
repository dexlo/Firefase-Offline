	var myApp = angular.module('MyApp', ['firebase', 'pascalprecht.translate'])

	.config(['$translateProvider',
	function ($translateProvider) {
			$translateProvider.translations('fr', {
				'TITLE': 'Hello',
				'FOO': 'This is a paragraph'
			});

			$translateProvider.preferredLanguage('fr');
}])

	.run(['$rootScope', '$firebase',
	function ($rootScope, $firebase) {
			var firebase_dates;
			firebase_dates = new Firebase('https://transpole.firebaseio.com/dates');
			$rootScope.DATES = $firebase(firebase_dates);
}])

	.controller('MyCtrl', ['$scope', '$firebase', '$translate',
		function ($scope, $firebase, $translate) {
			var stationsRef;
			OfflineFirebase.restore();
			stationsRef = new OfflineFirebase('https://transpole.firebaseio.com/stationsCtrl');
			stationsRef.on('value', function (snapshot) {
				console.log(snapshot.val());
			}, undefined, undefined, true);

			$scope.items = $firebase(stationsRef);
			$scope.add = function () {
				$scope.items.$add({
					date: Firebase.ServerValue.TIMESTAMP
				});
			};

			$scope.remove = function (id) {
				$scope.items.$remove(id);
			};

			$scope.formatDate = function (date, format) {
				return moment(date).format('DD/MM/YYYY HH:mm:ss');
			};
	}]);
