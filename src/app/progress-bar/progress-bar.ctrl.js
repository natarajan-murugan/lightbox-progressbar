var app = angular.module('lb-pb-app');

app.controller('progressBarCtrl', ['$scope','configService', 'progressService' ,'$log', function($scope,configService, progressService,$log) {

var progressConfig = '';
	
	configService.getJSON('data.json').then(function(data){
		if(data && data.data.lightbox){
			progressConfig = data.data.lightbox;
			progressService
			   .start(progressConfig)
			   .then(null, null, function(prog) {
			   	$scope.progress = prog;
			   	$scope.finish =progressConfig.finish;
			     //console.log($scope.progressConfig.finish);
			   })
			   .catch(function error(msg) {
    			$log.error(msg);
 				 });
		}
	})
		$scope.start =function($scope) {
			progressService
			   .start(progressConfig)
			   .catch(function error(msg) {
    			$log.error(msg);
 				 });;
		}
}]);
