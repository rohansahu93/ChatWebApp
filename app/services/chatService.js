//main service for chat App for retrieving and storing chat on to localstorage
(function(){
chatApp.factory("chatService", function($window, $rootScope , $localStorage) {
      var chats = new Array();
      return {
        setData: function(val) {
          $localStorage.chat = val;
          return this;
        },
        getData: function() {
           chats = $localStorage.chat;                 
           return chats ? chats : []; 
         }
      };
  });
})();