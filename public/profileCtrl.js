angular.module('userProfiles')
.controller('profileCtrl', function( $scope, userInfo, friendService ) {
	$scope.currentUser = userInfo.currentUser;
	$scope.friends = userInfo.friends;
});
