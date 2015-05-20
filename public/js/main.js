//var ajaxData;
var appTray;

var gridster1;
var gridster2;
var gridster3;
var gridster4;
var gridster5;
//var json = testAjax();
var newName;
var inputVal;
var startingName;
var $currentFolder;

var json =
    [
        { "size_y": 2, "row": 1, "col": 1, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com" },
        { "size_y": 2, "row": 2, "col": 3, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 2, "row": 3, "col": 2, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 2, "url": "http://facebook.com"  },
        { "size_y": 2, "row": 1, "col": 3, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 2, "row": 2, "col": 5, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 4, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 1, "col": 6, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 2, "row": 4, "col": 8, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 2, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 9, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 2, "row": 1, "col": 7, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 2, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 2, "col": 6, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 7, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 1, "col": 9, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 2, "col": 4, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 6, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 1, "col": 5, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 2, "col": 1, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 5, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 1, "col": 4, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 2, "col": 2, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 8, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 1, "col": 2, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 2, "col": 9, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  },
        { "size_y": 1, "row": 3, "col": 8, "label": "facebook", "img": "img\/FacebookAppIcon.png", "size_x": 1, "url": "http://facebook.com"  }
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
//            addLocks($(this));
            LockClickEvents($(this));
//            $("#create-folder").hide();
            $("#trash").hide();
            $("#create-folder").hide();
            $("#app-tray").droppable("destroy");

        },
        drag: function (event, ui) {

            appTrayDroppable();
            grid1Droppable();

            var margin = ui.offset.top;
            $("#trash").show();
            $("#create-folder").css("display", "block");
        }
    });
}

function addLocks($object) {
    $object.children(".save-icon").remove();
    $object.prepend("<img class=\"save-icon\" src=\"img/unlock3.svg\" />");
    $(".icon").siblings(".save-icon")
        .css({"visibility": "visible"});
    $(".folder").siblings(".save-icon")
        .css({"visibility": "visible"});
    $(".icon").siblings(".gs-resize-handle")
        .css({"visibility": "visible"});
    $(".folder").siblings(".gs-resize-handle")
        .css({"visibility": "visible"});
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



function appTrayDroppable($droppable,$accept) {
    $droppable.droppable({
        accept: $accept,

        tolerance: "touch",
        drop: function (event, ui) {
            if($droppable.find("li").hasClass('thumb-empty')) {
                var thumbCopy = $(ui.draggable).contents().clone();
                $(ui.draggable).empty();
                thumbCopy.appendTo($droppable.find("thumb-empty").first());
                $droppable.find("thumb-empty").first()
                    .removeClass("thumb-empty")
                    .addClass("thumb-occupied");
            }
        }
    });
}

function appTrayDroppable() {
    $("#app-tray").droppable({
        accept: "#grid-1 li, #grid-2 li, #grid-3 li",

        tolerance: "pointer",
        drop: function (event, ui) {
            if($("#app-tray li").hasClass('thumb-empty')) {
                var thumbCopy = $(ui.draggable).contents().clone();
                $(ui.draggable)
                    .empty()
                    .addClass("thumb-empty")
                    .removeClass("thumb-occupied");
                thumbCopy.appendTo($("#app-tray .thumb-empty").first());
                $("#app-tray .thumb-empty").first()
                    .removeClass("thumb-empty")
                    .addClass("thumb-occupied");
            }
        }
    });
}

function grid1Droppable() {
    $("#grid-1").droppable({
        accept: "#app-tray li",

        tolerance: "touch",
        drop: function (event, ui) {
            if($("#grid-1 li").hasClass('thumb-empty')) {
                var thumbCopy = $(ui.draggable).contents().clone();
                $(ui.draggable)
                    .empty()
                    .addClass("thumb-empty")
                    .removeClass("thumb-occupied");
                thumbCopy.appendTo($("#grid-1 .thumb-empty").first());
                $("#grid-1 .thumb-empty").first()
                    .removeClass("thumb-empty")
                    .addClass("thumb-occupied");
            }
        }
    });
}

function trashDroppable() {
    $("#trash").droppable({
        tolerance: "touch",
        drop: function (event, ui) {
            $(ui.draggable)
                .empty()
                .addClass("thumb-empty")
                .removeClass("thumb-occupied");
//            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#trash").hide();
        }
    });
}

function createFolderDroppable() {
    console.log("drop function running");
    $("#create-folder").droppable({
        tolerance: "pointer",
        hoverClass: ".dropzone-active",
        drop: function (event, ui) {
            $(ui.draggable).empty();
            $(ui.draggable)
                .append("<div class=\"folder\"><h2>folder</h2></div>")
                .addClass("thumb-occupied")
                .removeClass("thumb-empty");
            $(ui.draggable)
                .append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            $("#create-folder").hide();
            showModal();
        }

    });
}



function showModal() {
    $(".folder").dblclick(function () {
//        newName;
//        inputVal;
        $currentFolder = $(this);
        startingName = $currentFolder.children("h2").text();
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


        $gridId.find("li:first-child").prepend("<a><img /></a>")
            .find("img")
            .addClass("icon")
            .attr("src", this.img)
            .parent()
            .attr("href", this.url);
    });
    initGrid3();
    initGrid4();
    initGrid5();
}

function initGrid1() {
    console.log("grid 1 initializing");
    gridster1 = $("#grid-1 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        resize: {
            enabled: true
        }
    }).data('gridster1');
}

function initGrid2() {
    console.log("grid 2 initializing");
    gridster2 = $("#grid-2 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        resize: {
            enabled: true
        }
    }).data('gridster2');
}

function initGrid3() {
    console.log("grid 3 initializing");
    gridster3 = $("#grid-3 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        resize: {
            enabled: true
        }
    }).data('gridster3');
}

function initGrid4() {
    console.log("grid 4 initializing");
    gridster4 = $("#grid-4 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        resize: {
            enabled: true
        }
    }).data('gridster4');
}

function initGrid5() {
    console.log("grid 5 initializing");
    gridster5 = $("#grid-5 ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        max_cols: 8,
        resize: {
            enabled: true
        }
    }).data('gridster5');
}

function initAppTray() {
    appTray = $("#app-tray ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 3,
        max_cols: 3,
        resize: {
            enabled: true
        }
    }).data('appTray');
}

//function testAjax() {
//    console.log('test ajax');
//    $.ajax({
//       type: 'POST',
//       dataType: 'json',
//       url: 'http://keystone-connect.dev.kit.cm/api/grid/1',
//       success: function(data) {
//           console.log('success', data);
//           json = data;
//           
//           //initGrid3();
//       },
//       error: function(data) {
//           console.log('error', data );
//       }
//    }); 
//    return json;
//}

$(function () {
//    testAjax();
    loadSerial($("#grid-3 ul,#grid-4 ul,#grid-5 ul"));
    initGrid1();
    initGrid2();

    initAppTray();
    thumbnailDraggable($(".gs-w"));
    trashDroppable();
    createFolderDroppable();
    addLocks($(".gs-w"));
    LockClickEvents($(".gs-w"));
    showModal();

})



//$(".folder-input").bind("submit", function() {
//    console.log("Form Submitted");
//})


//    console.log(JSON.stringify(gridster.serialize()));




//$.getJSON( "serialize.json" , function( result ){
//        alert(result.start.count);
//    });