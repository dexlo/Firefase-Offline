var myApp = angular.module("MyApp", ["firebase"]);
var MyCtrl;

MyCtrl = function ($scope, $firebase) {
	var stationsRef;
	OfflineFirebase.restore();
	stationsRef = new OfflineFirebase('https://transpole.firebaseio.com/stationsCtrl');
	stationsRef.on('value', function (snapshot) {
		console.log(snapshot.val());
	}, undefined, undefined, true);
	// stationsRef = new Firebase("https://transpole.firebaseio.com/stationsCtrl");
	$scope.items = $firebase(stationsRef);
	$scope.add = function () {
		$scope.items.$add({
			title: 'test add'
		});
	};
	$scope.remove = function (id) {
		$scope.items.$remove(id);
	};
};
