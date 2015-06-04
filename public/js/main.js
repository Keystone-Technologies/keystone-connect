1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
221
222
223
224
225
226
227
228
229
230
231
232
233
234
235
236
237
238
239
240
241
242
243
244
245
246
247
248
249
250
251
252
253
254
255
256
257
258
259
260
261
262
263
264
265
266
267
268
269
270
271
272
273
274
275
276
277
278
279
280
281
282
283
284
285
286
287
288
289
290
291
292
293
294
295
296
297
298
299
300
301
302
303
304
305
306
307
308
309
310
311
312
313
314
315
316
317
318
319
320
321
322
323
324
325
326
327
328
329
330
331
332
333
334
335
336
337
338
339
340
341
342
343
344
345
346
347
348
349
350
351
352
353
354
355
356
357
358
var appTray;

var gridster1;
var gridster2;
var gridster3;
var gridster4;
var gridster5;
var json = testAjax();
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
//            $("#trash").hide();
//            $("#create-folder").hide();
            $("#app-tray").droppable("destroy");

        },
        drag: function (event, ui) {
            appTrayDroppable();
            grid1Droppable();
            var margin = ui.offset.top;
//            $("#trash").show();
//            $("#create-folder").css("display", "block");
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

function trashDroppable() {
    $("#trash").droppable({
        accept: ".gs-w",
        hoverClass: "dropzone-hover",
        activeClass: "dropzone-active",
        tolerance: "pointer",
        drop: function (event, ui) {
            $(ui.draggable)
                .empty()
                .addClass("thumb-empty")
                .removeClass("thumb-occupied");
//            $(ui.draggable).append("<span class=\"gs-resize-handle gs-resize-handle-both\"></span>");
//            $("#trash").hide();
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

function showFolderModal() {
    $(".folder").click(function () {
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
    showFolderModal();
}

function loadSerial($gridId) {    //holds data and loads serialized objects
    $.each(json, function () {
        console.log("running");
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

function testAjax() {
//    console.log('test ajax');
    $.ajax({
        type: 'POST',
        dataType: 'jsonp',
        url: 'http://keystone-connect.dev.kit.cm/api/grid/1',
        success: function(data) {
//           console.log('success', data);
            json = data;
            console.log(json[0].label);
            loadSerial($("#grid-3 ul,#grid-4 ul,#grid-5 ul"));
            return json;
            //initGrid3();
        },
        error: function(data) {
            console.log('error', data );
        }
    });
}

$(function () {
    requestPassword();
    initGrid1();
    initGrid2();
    initAppTray();
    thumbnailDraggable($(".gs-w"));
    trashDroppable();
    createFolderDroppable();
    addLocks($(".gs-w"));
    LockClickEvents($(".gs-w"));
    showFolderModal();
});