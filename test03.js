var sitesApp=angular.module('sitesApp',[]);
sitesApp.controller('siteListCtrl',function($scope)
                    {
                        $scope.textbox="";
                        $scope.nameOfSite="http://www.korotkin.co.il";
                        $scope.newSite=function()
                        {
var ElFrame=document.getElementById("OurSite");
var ElSite=document.getElementById("siteTextBox");
ElFrame.setAttribute("src",ElSite.value);
$scope.textbox='';    
  };
          

var Responselist;

$(function () {
    Responselist = $('#Responselist');
    $("#resButton").on('click', addResponse);
  
     
   /* $(document).keyup('#new-text', function(event){
        if(event.keyCode == 13){
            addListItem();   
    }
    event.stopPropagation();
});*/
       
});

function addResponse() {
    if ($("#resTextbox").val() !== '') {
        var text = $("#resTextbox").val();
        $("#Responselist").prepend('<li>' + text + '</li>');
        $("#resTextbox").val('');
    }
}

