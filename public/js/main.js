var appTray;
//var json = testAjax();
var newName;
var inputVal;
var startingName;
var $currentFolder;

// var tempJSON = [
//     { "width": 400, "height": 400, "initialPosition":"0-0", "src": "", "class": "rss", "text": "<div class=\"widget text-center\"><h2><span class=\"glyphicon glyphicon-comment\"></span>News RSS</h2><div id=\"rss-feeds\" class=\"rss-feed\"></div></div>" },
//     { "width": 400, "height": 400, "initialPosition":"0-4", "src": "", "class": "rss", "text": "<div class=\"widget text-center\"><h2><span class=\"glyphicon glyphicon-cutlery\"></span>Food Menu</h2><div id=\"food-rss\" class=\"rss-feed\"></div></div>" },
//     { "width": 200, "height": 100, "initialPosition":"0-8", "src": "", "class": "folder", "text": "My Home" },
//     { "width": 200, "height": 100, "initialPosition":"0-10", "src": "", "class": "folder", "text": "My Health" },
//     { "width": 400, "height": 400, "initialPosition":"0-12", "src": "", "class": "rss", "text": "<div class=\"widget text-center\"><h2><span class=\"glyphicon glyphicon-usd\"></span>Finance</h2><div id=\"finance-rss\" class=\"rss-feed\"></div></div>" },
//     { "width": 400, "height": 400, "initialPosition":"0-16", "src": "", "class": "rss", "text": "<div class=\"widget text-center\"><h2><span class=\"glyphicon glyphicon-scale\"></span>Health</h2><div id=\"health-rss\" class=\"rss-feed\"></div></div>" },
//     { "width": 100, "height": 100, "initialPosition":"1-8", "src": "", "class": "folder", "text": "My Office" },
//     { "width": 200, "height": 200, "initialPosition":"1-9", "src": "", "class": "folder", "text": "My Connect" },
//     { "width": 100, "height": 100, "initialPosition":"1-11", "src": "", "class": "folder", "text": "My Home" },
//     { "width": 100, "height": 100, "initialPosition":"2-8", "src": "", "class": "folder", "text": "My Finances" },
//     { "width": 100, "height": 100, "initialPosition":"2-11", "src": "", "class": "folder", "text": "My Faith" },
//     { "width": 200, "height": 100, "initialPosition":"3-8", "src": "", "class": "folder", "text": "My Photos & Videos" },
//     { "width": 200, "height": 100, "initialPosition":"3-10", "src": "", "class": "folder", "text": "My News & Entertainment" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 200, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 200, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 200, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 200, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 200, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" }
// ];

// var appTrayJSON = [
//     { "width": 100, "height": 100, "src": "img/AppStore_Icon.png", "class": "app-store-icon", "text": "" },
//     { "width": 100, "height": 100, "src": "img/InformationAppIcon.png", "class": "", "text": "" }
// ];
// var appStoreJSON = [
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Email.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
//     { "width": 100, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" }
// ];


function requestPassword() {
    $("#password-modal").modal({
        backdrop: 'static',
        keyboard: false
    })
        .modal('show');

    $("#login-button").click(function () {

        if ($(".password-input").val() === "test" && $(".username-input").val() === "test") {
            console.log("modal closed");
            $("#password-modal").modal("hide");
        }
    });
}

function showFolderModal() {
    $(".folder").dblclick(function () {
        $currentFolder = $(this);
        $(".folder-modal").modal('show');
        startingName = $currentFolder.clone().children().remove().end().text();
        $(".folder-name").html(startingName);
        $(".folder-name").on("dblclick", function () {
            startingName = $currentFolder.clone().children().remove().end().text();
            $(this).addClass("hidden");
            $(".folder-input")
                .val("")
                .val(startingName)
                .removeClass("hidden")
                .keyup(function (event) {
                    if (event.keyCode == 13) {
                        inputVal = $(".folder-input").val();
                        $(".folder-input")
                            .addClass("hidden");
                        $(".folder-name")
                            .removeClass("hidden")
                            .empty()
                            .append(inputVal);
                        console.log(inputVal);
                        newName = inputVal;

                        $currentFolder.contents().filter(function () {
                            return (this.nodeType == 3);
                        }).remove();
                        $currentFolder.append(newName);
                        // resetVariables();
                    }
                });
        });
    });
}

function appTrayAddCells() {
    console.log("Adding cells to app tray");
    var temp =
        "<div class='brick {class}' style='width:{width}px; height:{height}px;'>{text}<img src={src} /></div>";
    //          var w = 1, h = 1, html = '', limitItem = 10;

    var w = 1, h = 1, html = '', limitItem = appTrayJSON.length;

    for (var i = 0; i < limitItem; ++i) {
        html += temp
            .replace(/\{width\}/, appTrayJSON[i].width)
            .replace("{height}", appTrayJSON[i].height)
            .replace("{src}", appTrayJSON[i].src)
            .replace("{class}", appTrayJSON[i].class)
            .replace("{text}", appTrayJSON[i].text);
    }

    $("#app-drawer").html(html);
    // appTrayInit();
    $(".folder").children("img").remove();
    // $(".rss").children("img").remove();
    addMenuToIcons();

}

function freewallAddCells() {
    console.log("Adding cells to main grid");
    var temp =
        "<div class='brick {class}' data-position=\"{initialPosition}\" style='width:{width}px; height:{height}px;' oncontextmenu=\"javascript:iconRightClick($(this));return false;\">{text}<img src={src} /></div>";
    //          var w = 1, h = 1, html = '', limitItem = 10;

    var w = 1, h = 1, html = '', limitItem = tempJSON.length;

    for (var i = 0; i < limitItem; ++i) {
        html += temp
            .replace(/\{width\}/, tempJSON[i].width)
            .replace("{height}", tempJSON[i].height)
            .replace("{src}", tempJSON[i].src)
            .replace("{class}", tempJSON[i].class)
            .replace("{initialPosition}", tempJSON[i].initialPosition)
            .replace("{text}", tempJSON[i].text);
    }

    $("#freewall1").html(html);
    // freewallInit();
    $(".folder").children("img").remove();
    $(".rss").children("img").remove();
    addMenuToIcons();
}

function appStoreAddCells() {
    console.log("Adding cells to main grid");
    var temp =
        "<div class='brick {class}' data-position=\"{initialPosition}\" style='width:{width}px; height:{height}px;' oncontextmenu=\"javascript:iconRightClick($(this));return false;\">{text}<img src={src} /></div>";
    //          var w = 1, h = 1, html = '', limitItem = 10;

    var w = 1, h = 1, html = '', limitItem = appStoreJSON.length;

    for (var i = 0; i < limitItem; ++i) {
        html += temp
            .replace(/\{width\}/, 100)
            .replace("{height}", 100)
            .replace("{src}", appStoreJSON[i].src)
            .replace("{class}", appStoreJSON[i].class)
            .replace("{initialPosition}", appStoreJSON[i].initialPosition)
            .replace("{text}", appStoreJSON[i].text);
    }

    $("#apps-container").html(html);
    $("#apps-container .folder").remove();
    $("#apps-container .rss").remove();
}


function addMenuToIcons() {
    console.log("Adding menu to icons");
    var dropdownHtml = "<div class=\"dropdown icon-menu\"><a class=\"fa fa-bars dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-expanded=\"true\"></a><ul class=\"dropdown-menu list-unstyled\" role=\"menu\" aria-labelledby=\"dropdownMenu2\"></ul></div>";
    var dropupHtml = "<div class=\"dropup icon-menu\"><a class=\"fa fa-bars dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-expanded=\"true\"></a><ul class=\"dropdown-menu list-unstyled\" role=\"menu\" aria-labelledby=\"dropdownMenu2\"></ul></div>";
    var deleteItem = "<li role=\"presentation\"><a class=\"delete-icon\" role=\"menuitem\" tabindex=\"-1\"> <span class='fa fa-trash'></span> Delete</a></li>";
    var renameItem = "<li role=\"presentation\"><a class=\"rename-folder-menu-item\" role=\"menuitem\" tabindex=\"-1\"> <span class='fa fa-folder'></span> Rename Folder</a></li>";
    var makeLargerItem = "<li role=\"presentation\"><a class=\"make-larger-menu-item\" role=\"menuitem\" tabindex=\"-1\"><span class='fa fa-plus'></span> Make Icon Large</a></li>";
    var makeWiderItem = "<li role=\"presentation\"><a class=\"make-wider-menu-item\" role=\"menuitem\" tabindex=\"-1\"><span class='fa fa-plus'></span> Make Icon Wider</a></li>";
    var makeSmallerItem = "<li role=\"presentation\"><a class=\"make-smaller-menu-item\" role=\"menuitem\" tabindex=\"-1\"><span class='fa fa-minus'></span>  Make Icon Small</a></li>";
    var makeShorterItem = "<li role=\"presentation\"><a class=\"make-shorter-menu-item\" role=\"menuitem\" tabindex=\"-1\"><span class='fa fa-minus'></span>  Make Icon Shorter</a></li>";
    var addToItemDropdown = "<li class=\" add-dropdown\" role=\"presentation\"><a class=\"add-to-menu-item\"><span class='fa fa-plus-square'></span> Add To</a><ul class=\"add-flyout list-unstyled\"></ul></li>";
    $("#freewall1 .brick").append(dropdownHtml);
    $("#app-tray .brick").append(dropupHtml);

    $(".brick").each(function () {
        if ($(this).attr("data-height") == 100 && $(this).attr("data-width") == 100) {
            $(this).find("ul").append(makeWiderItem);
            $(this).find("ul").append(makeLargerItem);
        }
        if ($(this).attr("data-height") == 100 && $(this).attr("data-width") == 200) {
            $(this).find("ul").append(makeLargerItem);
            $(this).find("ul").append(makeSmallerItem);
        }
        if ($(this).attr("data-height") == 200 && $(this).attr("data-width") == 200) {
            $(this).find("ul").append(makeSmallerItem);
            $(this).find("ul").append(makeShorterItem);
        }
    });

    $(".folder .icon-menu ul").append(renameItem);
    $(".icon-menu ul").append(addToItemDropdown);
    $(".icon-menu ul").append(deleteItem);


    populateAddTo();

}

function populateAddTo() {
    console.log("populating \"add to\" sub-menu");
    $(".add-flyout").empty();
    $("#app-drawer .add-flyout").prepend("<li class=\"add-to-main-grid\">Main Grid</li>");
    $("#freewall1 .folder").each(function () {
        var $this = $(this).clone().children().remove().end().text();
        $(".add-flyout").append("<li class=\"add-flyout-item\">" + $this + "</li>");
    });
    $("#freewall1 .add-flyout").prepend("<li class=\"add-to-app-tray\">App Tray</li>");
    iconMenuListeners();
}


function iconMenuListeners() {
    $('.delete-icon').click(function () {
        console.log("Icon Deleted");
        $(this).parentsUntil($(".free-wall")).remove();
        populateAddTo();
    });

    $('.make-larger-menu-item').click(function () {
        $(this)
            .parents(':eq(3)')
            .attr("data-height", "200")
            .attr("data-width", "200");
        $(".icon-menu")
            .remove();
        addMenuToIcons();
        freewallInit();
    });
    $('.make-wider-menu-item').click(function () {
        $(this)
            .parents(':eq(3)')
            .attr("data-height", "100")
            .attr("data-width", "200");
        freewallInit();
    });
    $('.make-smaller-menu-item').click(function () {
        $(this)
            .parents(':eq(3)')
            .attr("data-height", "100")
            .attr("data-width", "100");
        $(".icon-menu")
            .remove();
        addMenuToIcons();
        freewallInit();
    });
    $('.make-shorter-menu-item').click(function () {
        $(this)
            .parents(':eq(3)')
            .attr("data-height", "100")
            .attr("data-width", "200");
        $(".icon-menu")
            .remove();
        addMenuToIcons();
        freewallInit();
    });

    $('.rename-folder-menu-item').click(function () {
        var folderName = $(this).parents(':eq(3)').clone().children().remove().end().text();
        $(".folder-rename-input").remove();
        $(this).parents(':eq(3)').append("<input class=\"folder-rename-input\" value=\"" + folderName + "\"></input>")
            .contents().filter(function () {
                return (this.nodeType == 3);
            }).remove();
        $(".folder-rename-input").keyup(function (event) {
            if (event.keyCode == 13) {
                $(this).parent().append($(this).val());
                $(this).remove();
            }
        });
        populateAddTo();
    });

    $('.add-to-app-tray').click(function () {
        $(this)
            .parents(':eq(4)')
            .removeAttr("data-delay")
            .removeAttr("data-position")
            .attr("data-height", "85")
            .attr("data-width", "85")
            .appendTo($("#app-drawer"));

        $("#app-tray .icon-menu")
            .removeClass("dropdown")
            .addClass("dropup");

        $("#app-tray .add-dropdown")
            .removeClass("dropdown")
            .addClass("dropup");
        populateAddTo();
        appTrayInit();
    });

    $('.add-to-main-grid').click(function () {
        $(this)
            .parents(':eq(4)')
            // .removeAttr("data-position")
            // .removeAttr("id")
            // .removeAttr("style")
            // .removeAttr("data-delay")
            .appendTo($("#freewall1"));

        populateAddTo();
        freewallInit();
    });

    $('.add-flyout-item').click(function () {
        console.log("Icon added to folder");
        $(this).parentsUntil($(".free-wall")).remove();
        populateAddTo();
    });
    freewallInit();
    appTrayInit();
    console.log("menu listeners added");
};

function appStoreInit() {
    var appStore = new freewall("#apps-container");
    appStore.reset({
        // draggable: true,
        selector: '.brick',
        animate: true,
        fixSize: 0,
        cellW: 100,
        cellH: 100,
        onResize: function () {
            appStore.fitWidth();
        }
    });
    appStore.fitWidth();
    console.log("App Store Grid loaded");
}

function freewallInit() {
    var wall = new freewall("#freewall1");
    wall.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize: 0,
        cellW: 100,
        cellH: 100,
        //        rightToLeft: true,
        onResize: function () {
            wall.fitWidth();
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

function appTrayInit() {
    var appTray = new freewall("#app-drawer");
    appTray.reset({
        draggable: true,
        selector: '.brick',
        animate: true,
        fixSize: 0,
        cellW: 100,
        cellH: 100,
        onResize: function () {
            appTray.fitWidth();
        }
    });

    appTray.fitWidth();
    console.log("app tray loaded");
}

function staticEventListeners() {
    var $gridContainer = $('.grid-container');
    var gridScroll = $('#freewall1').outerWidth() - $gridContainer.width() + 50;
    $("#left-full").click(function () {
        $gridContainer.animate({ scrollLeft: '0' }, 1000, 'easeOutQuad');
    });
    $("#left-slow").click(function () {
        $gridContainer.animate({ scrollLeft: '+=-1200' }, 1000, 'easeOutQuad');
    });
    $("#right-slow").click(function () {
        $gridContainer.animate({ scrollLeft: '+=1200' }, 1000, 'easeOutQuad');
    });
    $("#right-full").click(function () {
        $gridContainer.animate({ scrollLeft: '+=' + gridScroll }, 1000, 'easeOutQuad');
    });
    $(".close-banner").click(function () {
        $(".banner").hide();
    });
    $(".app-store-icon").dblclick(function () {
        $("#app-store-modal").modal("show");
        setTimeout(function(){ appStoreInit(); }, 200);
    });
    $("#apps-container .brick").click(function() {
        var appCopy = $(this)
            .attr("data-position", "")
            .clone();
        $("#freewall1").append(appCopy);
        freewallInit();
        // addMenuToIcons();
    });
    console.log("static listeners added");

}

function iconRightClick($button) {
    $button.find(".dropdown-toggle").dropdown("toggle");//.dropdown("toggle");
    console.log("toggle");
}

$(function () {
    // requestPassword();
    freewallAddCells();
    appTrayAddCells();
    appStoreAddCells();
    iconMenuListeners();
    showFolderModal();
    staticEventListeners();
});



//Archived functions for later stages of development

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