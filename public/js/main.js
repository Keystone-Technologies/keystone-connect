var gridster;

$(".folder").click(function(){
    $(".folder-modal").modal('show');
});

$(function () {

    //$('.icon').resizable({
    //    start: function(e, ui) {
    //        console.log('resizing started');
    //    },
    //    resize: function(e, ui) {
    //
    //    },
    //    stop: function(e, ui) {
    //        console.log('resizing stopped');
    //    }
    //});
    $(".gs-w").draggable({
        containment: "#home",
        scroll: false,
        cursorAt: {
            top: -15
        },
        axis: "y",

        drag: function(event, ui) {
            var margin = ui.offset.top;
            if(margin<125){
                //    $(this).parent().remove();
                $("#trash").show();
            }
            else{
                $("#trash").hide();
            }
            if(margin>$(window).height() - 100){
                //    $(this).parent().remove();
                $("#create-folder").show();
            }
            else{
                $("#create-folder").hide();
            }



        }
    });


    $("#trash").droppable ({
        tolerance: "touch",
        drop: function(event, ui) {
            $(ui.draggable).empty();
            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#trash").hide();
        }
    });
    $("#create-folder").droppable ({
        tolerance: "touch",
        drop: function(event, ui) {
            $(ui.draggable).empty();
            $(ui.draggable).append("<div class=\"folder\"><h2>folder</h2></div>");
            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#create-folder").hide();
        }
    });

    gridster = $(".gridster ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        //helper: 'clone',
        resize: {
            enabled: true
        }
    }).data('gridster');

});