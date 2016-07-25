var chatApp = angular.module('chatApp', ['ui.bootstrap', 'ngStorage']);

//main Controller for the Chat App
(function(){
chatApp.controller('mainController', function ($scope, $uibModal , $window ,$localStorage , $rootScope , chatService) {  
    
    //open a new chat Box instance to star chat
    $scope.open = function () {
            var chatBox = $uibModal.open({
				    controller: 'chatController',
                    templateUrl: 'chatBox.html',
                    resolve: {
                    userName: function () {
                    return $scope.user;
                    }
                 }
             });
          $scope.user = "";
     }
   
   //getting global chat data
   $rootScope.chats = chatService.getData();
    
   //getting global latest chat
   $rootScope.latestData = function() {
         return chatService.getData();
       }
    
   //triggring "on" storage event to sync localstorage between different tabs
    angular.element($window).on('storage', function(event) {
    $rootScope.$apply(function() {
        $rootScope.chats = chatService.getData();
        $rootScope.latestData = function() {
              return chatService.getData();
           }
        });
      });
   });
})();