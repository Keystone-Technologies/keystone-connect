var appTray;
var gridster1;
var gridster2;
var gridster3;

var newName;
var inputVal;
var startingName;
var $currentFolder;



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
            addLocks($(this));
            LockClickEvents($(this));
//            $("#create-folder").hide();
        },
        drag: function (event, ui) {
            var margin = ui.offset.top;
            if (margin < 125) {
                $("#trash").show();
            }
            else {
                $("#trash").hide();
            }
            if (margin > $("body").height() - 100) {
                $("#create-folder").css("display", "block");
            }
            //            else {
            //                $("#create-folder").hide();
            //            };
        }
    });
}

function addLocks($object) {
    $object.children(".save-icon").remove();
    $object.prepend("<img class=\"save-icon\" src=\"img/unlock3.svg\" />");
}

function LockClickEvents($object) {
    $object.children('.save-icon').on("click", function () {
        if ($(this).hasClass("icon-locked")) {
            $(this)
                .attr("src", "img/unlock3.svg")
                .removeClass("icon-locked")
                .parent()
                .addClass("gs-w")
                .draggable("enable");
        }
        else {
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

function createFolderDroppable() {
    console.log("drop function running");
    $("#create-folder").droppable({
        tolerance: "touch",
        drop: function (event, ui) {
            console.log("icon dropped");
            $(ui.draggable).empty();
            $(ui.draggable).append("<div class=\"folder\"><h2>folder</h2></div>");
            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#create-folder").hide();
            showModal();
        }
    });
}



function showModal() {
    $(".folder").dblclick(function () {
//        newName;
//        inputVal;
        startingName = $(this).children("h2").text();
        $currentFolder = $(this);
        $(".folder-modal").modal('show');
        $(".folder-name").html(startingName);
        $(".folder-name").on("dblclick", function () {
            $(this).addClass("hidden");
            $(".folder-input")
//                .attr("value", startingName)
//                .attr("placeholder", startingName)
                .val(startingName)
                .removeClass("hidden")
                .keyup(function (event) {
                    if (event.keyCode == 13) {
                        inputVal = $(".folder-input").val();
                        $(".folder-input")
                            .addClass("hidden")
                            .val(null);
                        $(".folder-name")
                            .removeClass("hidden")
                            .html(inputVal);
                        console.log(inputVal);
                        newName = inputVal;
                        $currentFolder.children("h2").html(newName);
                        resetVariables();
                    }
                });
        });
    });
}

function resetVariables(){
    newName = null;
    inputVal = null;
    startingName = null;
    $currentFolder = null;
    showModal();
}

function loadSerial($gridId) {    //holds data and loads serialized objects
    //        gridster.remove_all_widgets();
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
    addLocks($(".gs-w"));
    LockClickEvents($(".gs-w"));
    showModal();
})



//$(".folder-input").bind("submit", function() {
//    console.log("Form Submitted");
//})


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