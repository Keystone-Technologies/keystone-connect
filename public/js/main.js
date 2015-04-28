var gridster;

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
    //$(".icon").draggable({
    //    containment: "#home",
    //    scroll: false,
    //    cursorAt: {
    //        top: 15
    //    },
    //    axis: "y",
    //    drag: function (event, ui) {
    //        var margin = ui.offset.top
    //
    //    }
    //});
    //
    //$("#home").droppable ({
    //    drop: function() { alert('dropped'); }
    //});

    gridster = $(".gridster ul").gridster({
        widget_margins: [8, 8],
        widget_base_dimensions: [90, 90],
        min_cols: 8,
        helper: 'clone',
        resize: {
            enabled: true
        }
    }).data('gridster');

});