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

function thumbnailDraggable($thumb) {
    $thumb.draggable({
        containment: "#home",
        scroll: false,
        cursorAt: {
            top: -15
        },
        axis: "y",
        stop: function () {
            LockClickEvents($(this));
            $("#app-tray").droppable("destroy");

        },
        drag: function (event, ui) {
            appTrayDroppable();
            grid1Droppable();
            var margin = ui.offset.top;
        }
    });
}

function addLocks($object) {
    $object.children(".save-icon").remove();
    $object.prepend("<img class=\"save-icon\" src=\"img/unlock3.svg\" />");
    $(".icon").parent().siblings(".save-icon")
        .css({"visibility": "visible"});
    $(".folder").siblings(".save-icon")
        .css({"visibility": "visible"});
    $(".icon").parent().siblings(".gs-resize-handle")
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

//function appTrayDroppable($droppable,$accept) {
//    $droppable.droppable({
//        accept: $accept,
//
//        tolerance: "touch",
//        drop: function (event, ui) {
//            if($droppable.find("li").hasClass('thumb-empty')) {
//                var thumbCopy = $(ui.draggable).contents().clone();
//                $(ui.draggable).empty();
//                thumbCopy.appendTo($droppable.find("thumb-empty").first());
//                $droppable.find("thumb-empty").first()
//                    .removeClass("thumb-empty")
//                    .addClass("thumb-occupied");
//            }
//        }
//    });
//}

function appTrayDroppable() {
    $("#app-tray").droppable({
        accept: "#grid-1 li, #grid-2 li, #grid-3 li, #grid-4 li, #grid-5 li",

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
        tolerance: "pointer",
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

function createFolderDroppable() {
    console.log("drop function running");
    $("#create-folder").droppable({
        tolerance: "pointer",
        hoverClass: "dropzone-hover",
        activeClass: "dropzone-active",
        drop: function (event, ui) {
            $(ui.draggable).empty();
            $(ui.draggable)
                .append("<div class=\"folder\"><h2>folder</h2></div>")
//                .addClass("thumb-occupied")
                .removeClass("thumb-empty");
            $(ui.draggable)
                .append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
            showFolderModal();
        }
    });
}
function trashDroppable() {
    $("#trash").droppable({
        accept: ".brick",
        hoverClass: "dropzone-hover",
        activeClass: "dropzone-active",
        tolerance: "pointer",
        drop: function (event, ui) {
            $(ui.draggable)
                .empty()
                .addClass("thumb-empty")
                .removeClass("thumb-occupied");
        }
    });
}

function requestPassword() {
    $("#password-modal").modal({
        backdrop : 'static',
        keyboard : false
    })
        .modal('show');

    $("#login-button").click(function() {

        if($(".password-input").val() === "test" && $(".username-input").val() === "test"){
            console.log("modal closed");
            $("#password-modal").modal("hide");
        }
    });
}

//function showFolderModal() {
//    $(".folder").click(function () {
////        newName;
////        inputVal;
//        $currentFolder = $(this);
//        startingName = $currentFolder.children("h2").text();
//        $(".folder-modal").modal('show');
//        $(".folder-name").html(startingName);
//        $(".folder-name").on("dblclick", function () {
//            $(this).addClass("hidden");
//            $(".folder-input")
////                .attr("value", startingName)
////                .attr("placeholder", startingName)
//                .val(startingName)
//                .removeClass("hidden")
//                .keyup(function (event) {
//                    if (event.keyCode == 13) {
//                        inputVal = $(".folder-input").val();
//                        $(".folder-input")
//                            .addClass("hidden")
//                            .val(null);
//                        $(".folder-name")
//                            .removeClass("hidden")
//                            .html(inputVal);
//                        console.log(inputVal);
//                        newName = inputVal;
//                        $currentFolder.children("h2").html(newName);
//                        resetVariables();
//                    }
//                });
//        });
//    });
//}

//function resetVariables(){
//    newName = null;
//    inputVal = null;
//    startingName = null;
//    $currentFolder = null;
//    showFolderModal();
//}

function bannerCloseEvent(){
    $(".close-banner").click(function(){
        $(".banner").hide();
    });
};

//function loadSerial($gridId) {    //holds data and loads serialized objects
//    $.each(json, function () {
//        console.log("running");
//        $gridId.prepend("<li></li>")
//            .find("li")
//            .attr("data-sizex", this.size_x)
//            .attr("data-sizey", this.size_y)
//            .attr("data-row", this.row)
//            .attr("data-col", this.col)
//            .addClass("gs-w");
//
//        $gridId.find("li:first-child").prepend("<a><img /></a>")
//            .find("img")
//            .addClass("icon")
//            .attr("src", this.img)
//            .parent()
//            .attr("href", this.url);
//    });
//}


//function testAjax() {
//    $.ajax({
//        type: 'POST',
//        dataType: 'jsonp',
//        url: 'http://keystone-connect.dev.kit.cm/api/grid/1',
//        success: function(data) {
//            json = data;
//            console.log(json[0].label);
//            loadSerial($("#grid-3 ul,#grid-4 ul,#grid-5 ul"));
//            return json;
//        },
//        error: function(data) {
//            console.log('error', data );
//        }
//    });
//}



function freewallAddCells(){
    var temp =
        "<div class='brick' style='width:{width}px; height:{height}px;'><img src={src} /></div>";
//          var w = 1, h = 1, html = '', limitItem = 10;


    var tempJSON = [
        {"width":100, "height":100, "src":"img/GoogleBlogs_AppIcon.png"},
        {"width":100, "height":100, "src":"img/GmailAppIcon.png"},
        {"width":100, "height":100, "src":"img/FlightsAppIcon.png"},
        {"width":100, "height":100, "src":"img/GoogleMaps_AppIcon.png"},
        {"width":100, "height":100, "src":"img/AdvancedSearch_AppIcon-copy.png"},
        {"width":100, "height":100, "src":"img/AmazonPrime_AppIcon.png"},
        {"width":100, "height":100, "src":"img/Flickr_AppIcon.png"},
        {"width":200, "height":100, "src":"img/Forum_AppIcon.png"},
        {"width":200, "height":100, "src":"img/GamesOther_AppIcon.png"},
        {"width":200, "height":200, "src":"img/GoogleEarth_AppIcon.png"},
        {"width":100, "height":100, "src":"img/GoogleFinance_AppIcon.png"},
        {"width":100, "height":100, "src":"img/GoogleTranslate_AppIcon.png"},
        {"width":200, "height":100, "src":"img/InformationAppIcon.png"},
        {"width":200, "height":200, "src":"img/JewishFaith_AppIcon.png"},
        {"width":200, "height":100, "src":"img/Nest_AppIcon.png"},
        {"width":200, "height":100, "src":"img/OpenActivitiesCalendar_AppIcon.png"}
    ];
    var w = 1, h = 1, html = '', limitItem = tempJSON.length;

    for (var i = 0; i < limitItem; ++i){
        html += temp
            .replace(/\{width\}/, tempJSON[i].width)
            .replace("{height}", tempJSON[i].height)
            .replace("{src}", tempJSON[i].src);
    }

    $("#freewall1").html(html);
    $("#freewall2").html(html);
    $("#freewall3").html(html);
    $("#freewall4").html(html);
}

function freewallInit() {

    var wall = new freewall("#freewall1");
    wall.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize:0,
        cellW: 100,
        cellH: 100,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall.fitWidth();

    var wall2 = new freewall("#freewall2");
    wall2.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize:0,
        cellW: 100,
        cellH: 100,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall2.fitWidth();

    var wall3 = new freewall("#freewall3");
    wall3.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize:0,
        cellW: 100,
        cellH: 100,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall3.fitWidth();

    var wall4 = new freewall("#freewall4");
    wall4.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize:0,
        cellW: 100,
        cellH: 100,
        onResize: function() {
            wall.fitWidth();
        }
    });
    wall4.fitWidth();

    console.log("grids loaded");
    brickDraggable($(".brick"));
}

function brickDraggable($thumb) {
    $thumb.draggable({
        containment: "#home",
        scroll: false,
//        cursorAt: {
//            top: -15
//        },
        stop: function () {
            console.log("dragging stopped");
            freewallInit();
//            $thumb.draggable("destroy");
        },
        drag: function (event, ui) {
            console.log("dragging");
        }
    });
}

function wall2Droppable() {
    $("#freewall2").droppable({
        accept: "#freewall1 .brick",
        hoverClass: "dropzone-hover",
        activeClass: "dropzone-active",
        tolerance: "pointer",
        drop: function (event, ui) {
            $(ui.draggable)
                .attr("data-delay", "")
                .attr("data-position", "")
                .prependTo($("#freewall2"));
            var wall1Clone = $("#freewall1").clone();
            var wall2Clone = $("#freewall2").clone();
            $("#freewall1").remove();
            $("#freewall2").remove();
            wall1Clone.appendTo($(".grid-container"));
            wall2Clone.appendTo($(".grid-container"));
//                $("#freewall1").clone().appendTo($(".grid-container"));
//                $("#freewall2").clone().appendTo($(".grid-container"));
            freewallInit();
        }
    });
}


$(function () {
    freewallAddCells();
    freewallInit();
    wall2Droppable();
//    requestPassword();
//    thumbnailDraggable($(".gs-w"));
    trashDroppable();
//    createFolderDroppable();
//    addLocks($(".gs-w"));
//    LockClickEvents($(".gs-w"));
//    showFolderModal();
    bannerCloseEvent();
});