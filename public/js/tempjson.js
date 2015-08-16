var menu = `
<table id='foodmenutable'>

  <tr>
    <th class='title'>Meal</th>
    <th class='title'>Sunday</th>
  </tr>
  <tr class='trow'>
    <td class='mealtitle'>Breakfast</td>
    <td class='cell2'>
<p>Eggs of choice</p>
<p>Sausage / Bacon</p>
<p>White / Wheat Toast</p>
<p>Fresh Fruit</p>
<p>Danish</p>
<p>Assorted Hot / Cold Cereal</p>
<p>Drink of Choice</p>
    </td>
  </tr>
  <tr class='trow'>
    <td class='mealtitle'>Snack</td>
    <td class='cell2'></td>
  </tr>
  <tr class='trow'>
    <td class='mealtitle'>Lunch</td>
    <td class='cell2'></td>
  </tr>
  <tr class='trow'>
    <td class='mealtitle'>Snack</td>
    <td class='cell2'></td>
  </tr>
  <tr class='trow'>
    <td class='mealtitle'>Dinner</td>
    <td class='cell2'></td>
  </tr>
  <tr class='trow'>
    <td class='mealtitle'>Snack</td>
    <td class='cell2'></td>
  </tr>
</table>`;

var ideas = `<div id='ideaheader'>Possible Widget Ideas</div>
<div id='ideacontainer' class='iframe-small'>
<ul id='idealist'>
<li>WebMD</li>
<li>Words with Friends</li>
<li>Pandora</li>
<li>Yesterday USA (Oldies radio)</li>
<li>Lumosity</li>
<li>Keystone Care Dashboard</li>
<li>The Weather Channel</li>
<li>Postcards</li>
<li>Custom food menu</li>
<li>Custom cevents calendar</li>
</ul>
</div>`;

var firstWallJSON = [
    { "width": 4, "height": 2, "initialPosition":"0-10", "link":"http://www.google.com", "src": "", "class": "rss", "text": "<div class=\"widget text-center\" id='tester' border='false'><iframe class='iframe-small' scrolling='no' src='http://chat.dev.kit.cm/'></iframe></div>" },
    { "width": 4, "height": 2, "initialPosition":"0-0", "link":"http://www.google.com", "src": "", "class": "rss", "text": "<div class=\"widget text-center\" border='false'><div id='foodmenu' class='iframe-small'>" + menu + "</div><!--<iframe id='food-iframe' class='iframe-small' src='http://foodmenu.dev.kit.cm/' scrolling='no'></iframe>--></div>" },
    { "width": 4, "height": 2, "initialPosition":"2-0", "link":"http://www.google.com", "src": "", "class": "rss", "text": "<div class=\"widget text-center\" border='false'><iframe id='calendar-iframe' class='iframe-small' src='https://www.google.com/calendar/embed?src=p%23weather%40group.v.calendar.google.com&title=Community%20Events&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;ctz=America%2FChicago'></iframe></div>" },
    { "width": 4, "height": 2, "initialPosition":"2-10", "link":"http://www.google.com", "src": "", "class": "rss", "text": "<div class=\"widget text-center\" border='false'><div id='ideawidget' class='iframe-small'>" + ideas + "</div><!--<div id='scroller' class='iframe-small'><div id='scroller-container'><div id='scroller-content' class='rss-widget'></div></div></div> --></div>" },
    { "width": 3, "height": 1, "initialPosition":"0-4", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 0, "text": "My Social Networks" },
    { "width": 3, "height": 1, "initialPosition":"0-7", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 1, "text": "My Health" },
    { "width": 2, "height": 1, "initialPosition":"1-4", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 2, "text": "My Office" },
    { "width": 2, "height": 2, "initialPosition":"1-6", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 3, "text": "My Connect" },
    { "width": 2, "height": 1, "initialPosition":"1-8", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 4, "text": "My Home" },
    { "width": 2, "height": 1, "initialPosition":"2-4", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 5, "text": "My Finances" },
    { "width": 2, "height": 1, "initialPosition":"2-8", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 6, "text": "My Faith" },
    { "width": 3, "height": 1, "initialPosition":"3-4", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 7, "text": "My Photos & Videos" },
    { "width": 3, "height": 1, "initialPosition":"3-7", "link":"http://www.google.com", "src": "", "class": "folder", "folderid": 8, "text": "My News & Entertainment" },
    
    { "width": 1, "height": 1, "initialPosition":"15-0", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "Google Photos" },
    { "width": 1, "height": 1, "initialPosition":"15-3", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "Google Passwords" },
    { "width": 1, "height": 1, "initialPosition":"12-5", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "Google News" },
    { "width": 1, "height": 1, "initialPosition":"11-0", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "Google Hangouts" },
    { "width": 1, "height": 1, "initialPosition":"10-8", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "Google Groups" },
    { "width": 1, "height": 1, "initialPosition":"9-4", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "Google Drive" },
    { "width": 1, "height": 1, "initialPosition":"8-4", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "Google Docs" },
    
    { "width": 1, "height": 1, "initialPosition":"6-8", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "Google Hangouts" },
    { "width": 1, "height": 1, "initialPosition":"7-8", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "Google Groups" },
    { "width": 1, "height": 1, "initialPosition":"7-7", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "Google Drive" },
    { "width": 1, "height": 1, "initialPosition":"6-7", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "Google Docs" },
    
    
    { "width": 1, "height": 1, "initialPosition":"10-7", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "Information" },
    { "width": 1, "height": 1, "initialPosition":"12-8", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "Google Blogs" },
    { "width": 1, "height": 1, "initialPosition":"12-12", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "Flights" },
    { "width": 1, "height": 1, "initialPosition":"14-11", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "Search" },
    { "width": 1, "height": 1, "initialPosition":"8-3", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "Amazon Prime" },
    
    { "width": 1, "height": 1, "initialPosition":"9-12", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "Flights" },
    { "width": 1, "height": 1, "initialPosition":"10-11", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "Search" }
    
];

var tempJSON = [
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Email.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Email.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Email.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Email.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 200, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Email.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 200, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Email.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/YouTubeAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/WebMD_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TwitterAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/TheSecret_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SpotifyAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Skype_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/SettingsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDrive_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleDocs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBooks_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Flickr_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FacebookAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrainGames_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/DailyNotices_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CommunityChat_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ChaseBankAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CareOptions_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/CalendarAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/BankAccounts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AppearIn_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GmailAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleMaps_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Forum_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleEarth_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleFinance_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/RSSAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/PinterestAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Pandora_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Netflix_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Nest_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/MuslimFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Mediprocity_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Lutron_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/ListsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/LinkedInAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JewishFaith_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/JesusCalling_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/Instagram_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/HolyBible_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GreetingCard_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleWallet_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleTranslate_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleShopping_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleSearch_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlus_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePlay_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePhotos_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GooglePasswords_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleNews_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleHangouts_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/InformationAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GoogleBlogs_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/FlightsAppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/AmazonPrime_AppIcon.png", "class": "brick-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "link":"http://www.google.com", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" }
];

// My Social Networks: fb, Twitter, LinkedIn, Pinterst, G+, YouTube, Tumblr, Instagram
var folder0JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "https://www.facebook.com/KeystoneTechnologiesLLC", "src": "img/icons/facebook", "text": "Facebook" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "https://twitter.com/Keystone_Tech", "src": "img/icons/twitter", "text": "Twitter" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "https://www.linkedin.com/company/keystone-technologies", "src": "img/icons/linkedin", "text": "LinkedIn" },
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "https://www.pinterest.com/", "src": "img/icons/pinterest", "text": "Pinterest" },
    { "width": 100, "height": 100, "initialPosition":"0-4", "class": "folder-brick-icon", "link": "http://plus.google.com/", "src": "img/icons/google_", "text": "Google+" },
    { "width": 100, "height": 100, "initialPosition":"1-0", "class": "folder-brick-icon", "link": "https://www.youtube.com/channel/UCXEkqelctvirgX80NYXjuBw", "src": "img/icons/youtube", "text": "YouTube" },
    { "width": 100, "height": 100, "initialPosition":"1-1", "class": "folder-brick-icon", "link": "https://www.tumblr.com/dashboard", "src": "img/icons/tumblr", "text": "Tumblr" },
*/
    { "width": 100, "height": 100, "initialPosition":"1-2", "class": "folder-brick-icon", "link": "http://instagram.com/", "src": "img/icons/instagram", "text": "Instagram" }
    ];
    
// My Health: Secure Messaging, WebMD
var folder1JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "https://secure.mediprocity.com/", "src": "img/icons/mediprocity", "text": "Mediprocity" },
*/
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "http://www.webmd.com/", "src": "img/icons/webmd", "text": "WebMD" }
    ];
    
// My Office: Calendar, Stoarge, Documents, Spreadsheets, Presentations
var folder2JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "https://www.google.com/calendar/embed?showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=600&wkst=1&bgcolor=%2525252523FFFFFF&src=stravis%2525252540keystone-technologies.com&color=%2525252523125A12&ctz=America%252525252FChicago", "src": "img/icons/calendar", "text": "Calendar" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "https://www.google.com/drive/", "src": "img/icons/storage", "text": "Storage" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "https://docs.google.com/", "src": "img/icons/documents", "text": "Documents" },
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "https://docs.google.com/speadsheets", "src": "img/icons/spreadsheets", "text": "Spreadsheets" },
*/
    { "width": 100, "height": 100, "initialPosition":"0-4", "class": "folder-brick-icon", "link": "https://docs.google.com/slides", "src": "img/icons/presentations", "text": "Presentations" }
    ];
    
// My Communications: Video Chat, Email, Chat, Community Cat, Blog, Translations, Secure Chat
var folder3JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "http://appear.in/", "src": "img/icons/video_chat", "text": "Video Chat" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "http://gmail.com/", "src": "img/icons/gmail", "text": "Gmail" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "http://www.google.com/hangouts", "src": "img/icons/google_hangouts", "text": "Google Hangouts" },
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "http://candy-chat.github.io/candy/", "src": "img/icons/community_chat", "text": "Community Chat" },
    { "width": 100, "height": 100, "initialPosition":"0-4", "class": "folder-brick-icon", "link": "http://blogger.com/", "src": "img/icons/blogger", "text": "Blogger" },
    { "width": 100, "height": 100, "initialPosition":"1-0", "class": "folder-brick-icon", "link": "http://translate.google.com/", "src": "img/icons/google_translate", "text": "Google Translate" },
*/
    { "width": 100, "height": 100, "initialPosition":"1-1", "class": "folder-brick-icon", "link": "https://secure.mediprocity.com/", "src": "img/icons/mediprocity", "text": "Mediprocity" }
    ];

// My Home: Nest
var folder4JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "https://home.nest.com/login", "src": "img/icons/nest", "text": "Nest" }
*/
    ];

// My Finances: Bank Account, Investments, Market Watcj, Wallet
var folder5JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "http://www.carrolltonbanking.com/index.php", "src": "img/icons/carrollton_banking", "text": "Carrollton Banking" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "https://trading.scottrade.com/Default.aspx", "src": "img/icons/scottrade", "text": "Scottrade" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "https://www.google.com/finance", "src": "img/icons/market_watch", "text": "Market Watch" },
*/
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "https://www.google.com/wallet/", "src": "img/icons/wallet", "text": "Wallet" }
    ];
    
// My Beliefs: Bible, Encouraement
var folder6JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "http://www.holybible.com/", "src": "img/icons/bible", "text": "Bible" },
*/
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "http://www.biblegateway.com/devotionals/encouragement-for-today/today/", "src": "img/icons/encouragement", "text": "Encouragement" }
    ];
    
// My Photos & Videos: Photos, YouTube, Instagram, Flickr
var folder7JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "https://photos.google.com/", "src": "img/icons/photos", "text": "Photos" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "https://www.youtube.com/channel/UCXEkqelctvirgX80NYXjuBw", "src": "img/icons/youtube", "text": "YouTube" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "http://instagram.com/", "src": "img/icons/instagram", "text": "Instagram" },
*/
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "http://flickr.com/", "src": "img/icons/flickr", "text": "Flickr" }
    ];
    
// My News & Entertainment: News, BBC News, Movies, TV, Music, Music, Books, Games
var folder8JSON = [
/*
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "http://www.start.me/channels/us/popular?_ga=1.125873293.1847362445.1428378479", "src": "img/icons/news", "text": "News" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "http://www.bbc.com/news/world/us_and_canada", "src": "img/icons/bbc_news", "text": "BBC News" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "https://www.netflix.com/Login?locale=en-US", "src": "img/icons/netflix", "text": "Netflix" },
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "http://www.amazon.com/Prime-Instant-Video/b?node=2676882011", "src": "img/icons/amazon_tv", "text": "Amazon TV" },
    { "width": 100, "height": 100, "initialPosition":"0-4", "class": "folder-brick-icon", "link": "https://play.spotify.com/browse", "src": "img/icons/spotify", "text": "Spotify" },
    { "width": 100, "height": 100, "initialPosition":"1-0", "class": "folder-brick-icon", "link": "http://www.pandora.com/", "src": "img/icons/pandora", "text": "Pandora" },
    { "width": 100, "height": 100, "initialPosition":"1-1", "class": "folder-brick-icon", "link": "http://smile.amazon.com/l/283155/ref=smi_www_rco2_go_smi_g2096965702", "src": "img/icons/amazon_books", "text": "Amazon Books" },
*/
    { "width": 100, "height": 100, "initialPosition":"1-2", "class": "folder-brick-icon", "link": "http://games.aarp.org/games", "src": "img/icons/aarp_games", "text": "AARP Games" }
    ];
    
var appTrayJSON = [
    //{ "width": 100, "height": 100, "initialPosition":"0-0", "src": "img/AppStore_Icon.png", "class": "app-store-icon", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"0-0", "class": "folder-brick-icon", "link": "https://mail.google.com/", "src": "img/icons/gmail", "text": "Gmail" },
    { "width": 100, "height": 100, "initialPosition":"0-1", "class": "folder-brick-icon", "link": "http://www.facebook.com", "src": "img/icons/facebook", "text": "Facebook" },
    { "width": 100, "height": 100, "initialPosition":"0-2", "class": "folder-brick-icon", "link": "http://facegrid.dev.kit.cm/index.html", "src": "img/facetimetext.png", "text": "Video Chat" },
    { "width": 100, "height": 100, "initialPosition":"0-3", "class": "folder-brick-icon", "link": "https://www.mediprocity.com/", "src": "img/icons/mediprocity", "text": "Mediprocity" },
    { "width": 100, "height": 100, "initialPosition":"0-4", "class": "folder-brick-icon", "link": "http://contacts.google.com", "src": "img/contacts.png", "text": "Contacts" },
    { "width": 100, "height": 100, "initialPosition":"0-5", "class": "folder-brick-icon", "link": "http://www.weather.com/", "src": "img/weather.png", "text": "Weather" }
];

var appStoreJSON = [
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Email.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/YouTubeAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/WebMD_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/TwitterAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/TheSecret_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/SpotifyAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Skype_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/SettingsAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/RSSAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/PinterestAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Pandora_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/OpenActivitiesCalendar_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Netflix_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Nest_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/MuslimFaith_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Mediprocity_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Lutron_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/ListsAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/LinkedInAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/JewishFaith_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/JesusCalling_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Instagram_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/HolyBible_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GreetingCard_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleWallet_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleTranslate_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleShopping_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleSearch_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePlus_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePlay_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePhotos_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GooglePasswords_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleNews_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleHangouts_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleGroups_AppIcon-copy.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleDrive_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleDocs_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleCalendar_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBooks_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Flickr_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/FacebookAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/BrainGames_AppIcon-copy.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/DailyNotices_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/CommunityChat_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/ChaseBankAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/CareOptions_AppIcon-copy.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/CalendarAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/BrokerageAccount_AppIcon-copy.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/BankAccounts_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/AppearIn_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GmailAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleMaps_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/Forum_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleEarth_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleFinance_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/InformationAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GoogleBlogs_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/FlightsAppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/AdvancedSearch_AppIcon-copy.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/AmazonPrime_AppIcon.png", "class": "", "text": "" },
    { "width": 100, "height": 100, "initialPosition":"", "src": "img/GamesOther_AppIcon.png", "class": "brick-icon", "text": "" }
];