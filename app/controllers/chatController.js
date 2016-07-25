//controller for chat Box
(function(){
chatApp.controller("chatController", function(chatService , $uibModalInstance , userName ,$scope , $rootScope) {
    
     //timestamp for chat message
     var date = new Date();
     var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
     var messageSendTime = new Date(utc + (3600000*(+5.5)));
    
     //add a new message from particular user
     $scope.addMessage = function() {
        var messageObj = {
        user: userName,
        message: $scope.message,
        time :  messageSendTime.toLocaleString()   
    }
    $rootScope.chats.push(messageObj);  
    chatService.setData($rootScope.chats);
    $scope.message = "";
  };
    
    //close the chat box and delete all the current chat
    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
        $rootScope.chats.splice(0,$rootScope.chats.length)
      };
   });
})();