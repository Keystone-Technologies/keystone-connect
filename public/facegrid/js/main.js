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
var headFootHeight;



    var tempJSON = [
        {"width":100, "height":100, "src":"temp/images-1.jpg", "class": "", "text":"Mom", "email":"ktravis@connexinsoftware.com "},
        {"width":100, "height":100, "src":"temp/images-1.jpg", "class": "", "text":"Dad", "email":"stravis@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/images-2.jpg", "class": "", "text":"Andy", "email":"abelval@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/images-3.jpg", "class": "", "text":"Stefan", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/images-4.jpg", "class": "", "text":"Mason", "email":"mdrothert@gmail.com"},
        {"width":100, "height":100, "src":"temp/images-5.jpg", "class": "", "text":"Jason", "email":"thejasonslewis@gmail.com"},
        {"width":100, "height":100, "src":"temp/images-6.jpg", "class": "", "text":"Ben", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/images-7.jpg", "class": "", "text":"Rob", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/imgres-12.jpg", "class": "", "text":"Eric", "email":"ehumes@keystone-it.com"},
        {"width":100, "height":100, "src":"temp/images-8.jpg", "class": "", "text":"Caleb", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/images-9.jpg", "class": "", "text":"Adam", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/imgres-10.jpg", "class": "", "text":"Montez", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/imgres-11.jpg", "class": "", "text":"Dave", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/imgres-11.jpg", "class": "", "text":"Cody", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/imgres-11.jpg", "class": "", "text":"Josh", "email":"sadams@keystone-technologies.com"},
        {"width":100, "height":100, "src":"temp/imgres-11.jpg", "class": "", "text":"Keith", "email":"sadams@keystone-technologies.com"}
    ];

function freewallAddCells(){
    var temp =
        "<div class='brick {class}' style='width:{width}px; height:{height}px;' name='{text}' email='{email}'><img src={src} /><h1>{text}</h1></div>";
//          var w = 1, h = 1, html = '', limitItem = 10;

    var w = 1, h = 1, html = '', limitItem = tempJSON.length;

    for (var i = 0; i < limitItem; ++i){
        html += temp
            .replace(/\{width\}/, tempJSON[i].width)
            .replace("{height}", tempJSON[i].height)
            .replace("{src}", tempJSON[i].src)
            .replace("{class}", tempJSON[i].class)
            .replace("{email}", tempJSON[i].email)
            .replace("{text}", tempJSON[i].text)
            .replace("{text}", tempJSON[i].text);
    }

    $("#freewall1").html(html);
    $(".folder").children("img").remove();
    // addMenuToIcons();
}

function addMenuToIcons() {
    var dropdownHtml = "<div class=\"dropdown icon-menu\"><a class=\"fa fa-bars dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-expanded=\"true\"></a><ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"dropdownMenu2\"></ul></div>";
    var deleteItem = "<li role=\"presentation\"><a class=\"delete-icon\" role=\"menuitem\" tabindex=\"-1\">Delete</a></li>";
    var addToItem = "<li class=\"dropdown add-dropdown\" role=\"presentation\"><a class=\"add-to-menu-item\">Add To</a><ul class=\"add-flyout\"></ul></li>";
    var addToDropdown = "";
    $(".brick").append(dropdownHtml);
    $(".icon-menu ul").append(deleteItem);
    $(".icon-menu ul").append(addToItem);
    populateAddTo();
    
}

function populateAddTo() {
    $(".add-flyout").empty();
    $("#freewall1 .folder").each(function(){
        var $this = $(this).clone().children().remove().end().text();
        $(".add-flyout").append("<li class=\"add-flyout-item list-unstyled\">" + $this + "</li>");
    });
    deleteItem();
} 


function deleteItem(){
    $('.delete-icon').click(function() {
        console.log("Icon Deleted");
        $(this).parentsUntil($(".free-wall")).remove();
        populateAddTo();
    });
    $('.add-flyout-item').click(function() {
        console.log("Icon added to folder");
        $(this).parentsUntil($(".free-wall")).remove();
        populateAddTo();
    });
};

function freewallInit() {

    var wall = new freewall("#freewall1");
    wall.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize:0,
        cellW: 100,
        cellH: 100,
//        rightToLeft: true,
        onResize: function() {
            // wall.fitWidth();
//            wall.setHoles({
//             top:0,
//             left:0,
//             width:4,
//             height:5   
//            });
//            $(".folder").removeClass("brick");
        }
    });
    
    wall.fitWidth();
    console.log("grids loaded");
}
    function sizeVideoFrame(){
        headFootHeight =  $("#header").outerHeight() + $(".grid-container").outerHeight();
        var iframeHeight = document.documentElement.clientHeight - headFootHeight;
        $("#vid-container iframe").css("height", iframeHeight)
        console.log("running size function");
    };
  
function staticEventHandlers() {
    $(window).resize(function() {
        sizeVideoFrame();
    });
}


$(function () {
    freewallAddCells();
    freewallInit();
    staticEventHandlers();
});
