var gridster1;
var gridster2;
var gridster3;
var appTray;
var json =
    [
        { "size_y": 2, "row": 1, "col": 1, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 2, "row": 2, "col": 3, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 2, "row": 3, "col": 2, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 2 },
        { "size_y": 2, "row": 1, "col": 3, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 2, "row": 2, "col": 5, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 3, "col": 4, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 1, "col": 6, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 2, "row": 4, "col": 8, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 2 },
        { "size_y": 1, "row": 3, "col": 9, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 2, "row": 1, "col": 7, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 2 },
        { "size_y": 1, "row": 2, "col": 6, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 3, "col": 7, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 1, "col": 9, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 2, "col": 4, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 3, "col": 6, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 1, "col": 5, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 2, "col": 1, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 3, "col": 5, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 1, "col": 4, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 2, "col": 2, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 3, "col": 8, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 1, "col": 2, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 2, "col": 9, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 },
        { "size_y": 1, "row": 3, "col": 8, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1 }
    ];

function thumbnailDraggable($thumb) {
    $thumb.draggable({
        containment: "#home",
        scroll: false,
        cursorAt: {
            top: -15
        },
        axis: "y",
        stop: function () {
            $(this).children(".save-icon").remove();
            $(this).prepend("<img class=\"save-icon\" src=\"img/unlock3.svg\" />");
            LockClickEvents($(this));
        },
        drag: function (event, ui) {
            var margin = ui.offset.top;
            if (margin < 125) {
                $("#trash").show();
            }
            else {
                $("#trash").hide();
            }
            if (margin > $(window).height() - 100) {
                $("#create-folder").show();
            }
            else {
                $("#create-folder").hide();
            };
        }
    });
}

function trashDroppable() {
    $("#trash").droppable({
        tolerance: "touch",
        drop: function (event, ui) {
            $(ui.draggable).empty();
            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#trash").hide();
        }
    });
}

//function appTrayDroppable() {
//    $("#app-tray").droppable({
//        tolerance: "touch",
//        drop: function (event, ui) {
//            //            $(ui.draggable).empty();
//            $(ui.draggable).appendTo("#app-tray")
//                .attr("data-row", 1)
//                .attr("data-col", 6);
//            //            thumbnailDraggable($(".gs-w"));
//            //            initAppTray();
//        }
//    });
//}

function createFolderDroppable() {
    $("#create-folder").droppable({
        tolerance: "touch",
        drop: function (event, ui) {
            $(ui.draggable).empty();
            $(ui.draggable).append("<div class=\"folder\"><h2>folder</h2></div>");
            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#create-folder").hide();
            //            initGrid3();
            showModal();
        }
    });
}

function LockClickEvents($object) {
    console.log('attach lock click event again ' + $object);

    $object.children('.save-icon').on("click", function () {
        if($(this).hasClass("icon-locked")){
            $(this)
                .attr("src", "img/unlock3.svg")
                .removeClass("icon-locked")
                .parent()
                .addClass("gs-w")
                .draggable("enable");
        }
        else{
            $(this)
                .attr("src", "img/lock24.svg")
                .addClass("icon-locked");
            $(this)
                .parent()
                .removeClass('gs-w')
                .draggable("disable");
        }
    });
}



function showModal() {
    $(".folder").dblclick(function () {
        $(".folder-modal").modal('show');
    });
}

function loadSerial($gridId) {    //holds data and loads serialized objects
    //        gridster.remove_all_widgets();
    console.log("Adding grid 3 thumbnails");

    $.each(json, function () {
        $gridId.prepend("<li></li>")
            .find("li")
            .attr("data-sizex", this.size_x)
            .attr("data-sizey", this.size_y)
            .attr("data-row", this.row)
            .attr("data-col", this.col)
            .addClass("gs-w");

        $gridId.find("li:first-child").prepend("<img />")
            .find("img")
            .addClass("icon")
            .attr("src", this.img);
    });
}

function initGrid1() {
    gridster1 = $("#grid-1 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        //helper: 'clone',
        //        namespace: '#grid-1',
        resize: {
            enabled: true
        },
    }).data('gridster1');
}

function initGrid2() {
    gridster2 = $("#grid-2 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        //helper: 'clone',
        //        namespace: '#grid-2',
        resize: {
            enabled: true
        },
    }).data('gridster2');
}

function initGrid3() {
    gridster3 = $("#grid-3 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        //helper: 'clone',
        //        namespace: '#grid-3',
        resize: {
            enabled: true
        },
    }).data('gridster3');
}

function initAppTray() {
    appTray = $("#app-tray ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 3,
        max_cols: 3,
        //helper: 'clone',
        //        namespace: '#app-Tray',
        resize: {
            enabled: true
        },
    }).data('appTray');
}

$(function () {
    loadSerial($("#grid-3 ul"));
    initGrid1();
    initGrid2();
    initGrid3();
    initAppTray();
    thumbnailDraggable($(".gs-w"));
    trashDroppable();
//    appTrayDroppable();
    createFolderDroppable();
    LockClickEvents($("#grid-1 .gs-w"));

});


//    console.log(JSON.stringify(gridster.serialize()));

//    $.ajax({
//       type: 'GET',
//       url: 'http://keystone-connect.dev.kit.cm/api/grid/1',
//       success: function(data) {
//           console.log('success', data);
//       },
//       dataType: 'jsonp'
//       
//    });


//$.getJSON( "serialize.json" , function( result ){
//        alert(result.start.count);
//    });