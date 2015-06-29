

app.controller('HomeCtrl', ['$scope', function($scope) {

  // scope variables to be used to alternate link display
  $scope.showAbout = true;
  $scope.showContact = true;
  $scope.showFaq = true;
  $scope.showHome = false;


}])

  .controller('AboutCtrl', ['$scope', function($scope) {

    // scope variables to be used to alternate link display
    $scope.showAbout = false;
    $scope.showContact = true;
    $scope.showFaq = true;
    $scope.showHome = true;


  }])

  .controller('ContactCtrl', ['$scope', function($scope) {

    // scope variables to be used to alternate link display
    $scope.showAbout = true;
    $scope.showContact = false;
    $scope.showFaq = true;
    $scope.showHome = true;

  }])

  .controller('FaqCtrl', ['$scope', function($scope) {

    // scope variables to be used to alternate link display
    $scope.showAbout = true;
    $scope.showContact = true;
    $scope.showFaq = false;
    $scope.showHome = true;

  }]);