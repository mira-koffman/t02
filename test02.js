var $todolist;

$(function () {
    $todolist = $('#todolist');
    $("#add").on('click', addListItem);
    $(document).on('click', '.done', finishItem);
     
    $(document).keyup('#new-text', function(event){
        if(event.keyCode == 13){
            addListItem();   
    }
    event.stopPropagation();
});
       
});

function addListItem() {
    if ($("#new-text").val() !== '') {
        var text = $("#new-text").val();
        $("#todolist").prepend('<li><input type="checkbox" id="mycheckbox" class="done"/>' + text + '</li>');
        $("#new-text").val('');
    }
}

function finishItem() {
    var $this = $(this),
        $parent = $this.parent();
    
    if ($this.is(':checked')) {
        $parent.css('textDecoration', 'line-through');
                
        $todolist.append($parent);
        
    } else {
        $parent.css('textDecoration', 'none');
        
        $todolist.prepend($parent);
    }
}