var gridster1;
var gridster2;
var gridster3;
var json =
    [
        {"size_y":1,"row":1,"col":1,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":2,"col":3,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":2,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":2},
        {"size_y":1,"row":1,"col":3,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":2,"col":5,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":4,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":1,"col":6,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":1,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":9,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":2,"row":1,"col":7,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":2},
        {"size_y":1,"row":2,"col":6,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":7,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":1,"col":9,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":2,"col":4,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":6,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":1,"col":5,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":2,"col":1,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":5,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":1,"col":4,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":2,"col":2,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":3,"col":8,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":1,"col":2,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":2,"col":9,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1},
        {"size_y":1,"row":4,"col":1,"label":"facebook","img":"img\/FacebookAppIcon.png","size_x":1}
    ];

$(".folder").click(function(){
    $(".folder-modal").modal('show');
});

$(".save-icon").on("click", function(){
    $(this).attr("src", "img/lock24.svg");
    $(this).fadeOut(2000);
});


$(function () {
    var loadSerial = function() {    //holds data and loads serialized objects
//        gridster.remove_all_widgets();
        $.each(json, function() {
            $("#grid-3 ul").prepend("<li data-row=\"" + this.row + "\" data-col=\"" + this.col + "\" data-sizex=\"" + this.size_x + "\" data-sizey=\"" + this.size_y + "\" class=\"gs-w\"><img class=\"icon\" src=\"" + this.img + "\" /><span class=\"gs-resize-handle gs-resize-handle-both\"></span></li>");
        });
    };
    loadSerial();

    $(".gs-w").draggable({
        containment: "#home",
        scroll: false,
        cursorAt: {
            top: -15
        },
        axis: "y",

        stop: function(){
            $(this).children(".save-icon").remove();
//            $(this).children(".saved").remove();
            $(this).prepend("<img class=\"save-icon\" src=\"img/unlock3.svg\" />");
        },

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
            initGrid3();
        }
    });

    gridster1 = $("#grid-1 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        //helper: 'clone',
        resize: {
            enabled: true
        },
    }).data('gridster1');

    gridster2 = $("#grid-2 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        //helper: 'clone',
        resize: {
            enabled: true
        },
    }).data('gridster2');


    var initGrid3 = function() {
        gridster3 = $("#grid-3 ul").gridster({
            widget_margins: [8, 8],
            widget_base_dimensions: [90, 90],
            min_cols: 8,
            max_cols: 8,
            //helper: 'clone',
            resize: {
                enabled: true
            },
        }).data('gridster3');
    };

    initGrid3();

    //console.log(JSON.stringify(gridster.serialize()));
    //
    //$.ajax({
    //   type: 'GET',
    //   url: 'http://keystone-connect.dev.kit.cm/api/grid/1',
    //   success: function(data) {
    //       console.log('success', data);
    //   },
    //   dataType: 'json'
    //
    //});
    //
    //
    //$.getJSON( "serialize.json" , function( result ){
    //    alert(result.start.count);
    //});

});