angular.module('MyApp').controller('MyCtrl', ['$scope', '$firebase', '$translate',
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
