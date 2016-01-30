angular.module("na_ireland.views", []).run(["$templateCache", function($templateCache) {$templateCache.put("views/app/cleantime.html","<ion-view class=\"calc-view\">\n  <ion-nav-title>\n    <span>Cleantime Calculator</span>\n  </ion-nav-title>\n  <ion-content padding=\"5\">\n    <h1>Cleantime calculator</h1>\n\n    <ionic-datepicker input-obj=\"datepickerObject\">\n      <button class=\"button button-block button-positive\"> {{datepickerObject.inputDate | date:datepickerObject.dateFormat}}</button>\n    </ionic-datepicker>\n        <div ng-bind-html=\"results\"></div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/contact.html","<ion-view class=\"jft-view\">\n  <ion-nav-title>\n    <span>Contact Us</span>\n  </ion-nav-title>\n  <ion-content padding=\"5\">\n    <div>\n      <div class=\"card\">\n        <div class=\"item item-positive item-divider\">\n          Irish Region Contact Details\n        </div>\n        <div class=\"text text-wrap\">\n          <ion-list>\n            <ion-item>\n              <i class=\"icon ion-ios-world\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'http://www.na-ireland.org\', \'_system\', \'location=yes\');return false;\">http://www.na-ireland.org\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-email\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'mailto:info@na-ireland.org\', \'_system\', \'location=yes\');return false;\">info@na-ireland.org\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+35316728000\', \'_system\', \'location=yes\');return false;\">Tel: 01-6728 000\n              </a>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"item item-positive item-divider\">\n          Southern Area Contact Details\n        </div>\n        <div class=\"text text-wrap\" >\n          <ion-list>\n            <ion-item>\n              <i class=\"icon ion-ios-world\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'http://www.nasouth.ie\', \'_system\', \'location=yes\');return false;\">http://www.nasouth.ie\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-email\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'mailto:info@nasouth.ie\', \'_system\', \'location=yes\');return false;\">mailto:info@nasouth.ie\n              </a>\n            </ion-item>\n            <ion-item>\n              Phoneline open every evening from 6-9pm<br>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+353871386120\', \'_system\', \'location=yes\');return false;\">Tel: 087-1386 120\n              </a>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"item item-positive item-divider\">\n          Eastern Area Contact Details\n        </div>\n        <div class=\"text text-wrap\">\n          <ion-list>\n            <ion-item>\n              <i class=\"icon ion-ios-world\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'http://www.naeasternarea.org\', \'_system\', \'location=yes\');return false;\">http://www.naeasternarea.org\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-email\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'mailto:info@naeasternarea.org\', \'_system\', \'location=yes\');return false;\">info@naeasternarea.org\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+353868629308\', \'_system\', \'location=yes\');return false;\">Tel: 086-8629 308\n              </a>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"item item-positive item-divider\">\n          Northern Area Contact Details\n        </div>\n        <div class=\"text text-wrap\">\n          <ion-list>\n            <ion-item>\n              <i class=\"icon ion-ios-world\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'http://www.nanorthernireland.com\', \'_system\', \'location=yes\');return false;\">http://www.nanorthernireland.com\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-email\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'mailto:contact@nanorthernireland.com\', \'_system\', \'location=yes\');return false;\">contact@nanorthernireland.com\n              </a>\n            </ion-item>\n            <ion-item>\n              Phoneline open every evening from 7-10pm<br>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+447810172991\', \'_system\', \'location=yes\');return false;\">Tel: +44 781-0172991\n              </a>\n            </ion-item>\n            <ion-item>\n              In Donegal, you can call<br>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+353860668377\', \'_system\', \'location=yes\');return false;\">Tel: 086-066 8377\n              </a>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"item item-positive item-divider\">\n          Western Area Contact Details\n        </div>\n        <div class=\"text text-wrap\">\n          <ion-list>\n            <ion-item>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+353868149004\', \'_system\', \'location=yes\');return false;\">Tel: 086-8149 004\n              </a>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n      <div class=\"card\">\n        <div class=\"item item-positive item-divider\">\n          Irish Service Office\n        </div>\n        <div class=\"text text-wrap\">\n          <ion-list>\n            <ion-item>\n              <i class=\"icon ion-home\"></i>\n                Narcotics Anonymous Ireland,<br>\n                Service Office,<br>\n                29 Bride Street,<br>\n                Dublin 8<br>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-email\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'mailto:irishserviceoffice@gmail.com\', \'_system\', \'location=yes\');return false;\">irishserviceoffice@gmail.com\n              </a>\n            </ion-item>\n            <ion-item>\n              <i class=\"icon ion-ios-telephone\"></i>\n              <a  href=\"#\"\n                  onclick=\"window.open(\'tel:+35316728000\', \'_system\', \'location=yes\');return false;\">Tel: 01 - 672 8000\n              </a>\n            </ion-item>\n          </ion-list>\n        </div>\n      </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/events.html","<ion-view class=\"wordpress-view\">\n  <ion-nav-buttons side=\"left\">\n    <button menu-toggle=\"left\" class=\"button button-icon icon ion-navicon\"></button>\n  </ion-nav-buttons>\n  <ion-nav-title>\n    <span>Events & Conventions</span>\n  </ion-nav-title>\n  <ion-content>\n    <!-- Refresh to get the new posts -->\n    <ion-refresher pulling-text=\"Pull to refresh...\" on-refresh=\"doRefresh()\">\n    </ion-refresher>\n\n    <div class=\"posts-list\">\n      <div ng-repeat=\"post in posts\" class=\"list card post-item\">\n        <div class=\"post-heading item item-text-wrap\">\n          <h2 class=\"post-title\" ng-bind-html=\"post.title | rawHtml\"></h2>\n\n        </div>\n        <div class=\"post-content item item-text-wrap\" post-content>\n          <p class=\"post-excerpt\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n          <div class=\"post-actions row\">\n            <div class=\"actions col col-center col-66\">\n\n            </div>\n            <div class=\"read-more col col-center col-33\">\n              <a ui-sref=\"app.post({postId: post.id})\" class=\"button button-small button-block button-assertive\">\n                Read more\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/events_post.html","<ion-view class=\"post-view\">\n  <ion-content>\n    <div class=\"post-heading item item-text-wrap\">\n      <h1 class=\"post-title\">{{post.title}}</h1>\n\n    </div>\n    <div class=\"post-content item item-text-wrap\" post-content>\n      <p class=\"post-text\" dynamic-anchor-fix ng-bind-html=\"post.content | rawHtml\"></p>\n    </div>\n\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("views/app/jft.html","<ion-view class=\"jft-view\">\n  <ion-nav-title>\n    <span>Just For Today</span>\n  </ion-nav-title>\n  <ion-content padding=\"5\">\n    <div ng-bind-html=\"contents\"></div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/meetinglist.html","<ion-view view-title=\"Meeting Lists\">\n<ion-view hide-back-button=\"true\">\n  <ion-nav-buttons side=\"left\">\n     <button class=\"button button-assertive\" menu-toggle=\"left\">\n          <i class=\"menu-icon icon ion-navicon\"></i>\n     </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    <span>Meeting Lists</span>\n  </ion-nav-title>\n  \n  <ion-content>\n    <ion-list>\n      <ion-item  class=\"item-icon-right\" menu-close ui-sref=\"app.northern\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Northern Area</h2>\n      </ion-item>\n      <ion-item class=\"item-icon-right\" menu-close ui-sref=\"app.southern\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Southern Area</h2>\n      </ion-item>\n      <ion-item class=\"item-icon-right\" menu-close ui-sref=\"app.eastern\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Eastern Area</h2>\n      </ion-item>\n      <ion-item  class=\"item-icon-right\" menu-close ui-sref=\"app.western\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Western Area</h2>\n      </ion-item>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/meetingsmap.html","<ion-view>\n  <ion-nav-title>\n    <span>Meetings Map</span>\n  </ion-nav-title>\n    <ion-content>\n        <div id=\"map\" data-tap-disabled=\"true\"></div>\n    </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/side-menu.html","<ion-side-menus enable-menu-with-back-views=\"false\">\n  <ion-side-menu-content class=\"post-size-14px\">\n    <ion-nav-bar class=\"bar app-top-bar\">\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <ion-nav-buttons side=\"left\">\n        <button class=\"button button-icon button-clear ion-navicon\" menu-toggle=\"left\">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n    <ion-nav-view name=\"menuContent\"></ion-nav-view>\n  </ion-side-menu-content>\n\n  <ion-side-menu side=\"left\" class=\"main-menu\" expose-aside-when=\"large\">\n    <ion-content>\n      <ion-list>\n        <ion-item class=\"heading-item item item-avatar\" nav-clear menu-close ui-sref=\"app.welcome\">\n          <div class=\"user-image-container\">\n            <pre-img ratio=\"_1_1\" helper-class=\"rounded-image\">\n              <img class=\"user-image\" ng-src=\"img/web_hi_res_512.png\" spinner-on-load>\n          	</pre-img>\n          </div>\n          <h2 class=\"greeting\">NA Ireland</h2>\n          <p class=\"message\">Welcome!</p>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.meetinglist\">\n          <i class=\"icon ion-calendar\"></i>\n          <h2 class=\"menu-text\">Meetings List</h2>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.maps\">\n          <i class=\"icon ion-map\"></i>\n          <h2 class=\"menu-text\">Meetings Map</h2>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.jft\">\n          <i class=\"icon ion-radio-waves\"></i>\n          <h2 class=\"menu-text\">Just For Today</h2>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.events\">\n          <i class=\"icon ion-android-star-outline\"></i>\n          <h2 class=\"menu-text\">Events and Conventions</h2>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.speakers\">\n          <i class=\"icon ion-ios-mic-outline\"></i>\n          <h2 class=\"menu-text\">NA Speakers</h2>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.clean-calc\">\n          <i class=\"icon ion-ios-calculator\"></i>\n          <h2 class=\"menu-text\">Cleantime Calc</h2>\n        </ion-item>\n        <ion-item class=\"item-icon-left\" nav-clear menu-close ui-sref=\"app.contact\">\n          <i class=\"icon ion-social-whatsapp-outline\"></i>\n          <h2 class=\"menu-text\">Contact Us</h2>\n        </ion-item>\n      </ion-list>\n    </ion-content>\n  </ion-side-menu>\n</ion-side-menus>\n");
$templateCache.put("views/app/speaker.html","<ion-view view-title=\"{{conventionName}}\">\n  <ion-view hide-back-button=\"true\">\n  <ion-nav-buttons side=\"left\">\n     <button class=\"button button-assertive\" ui-sref=\"app.speakers\">\n          <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n     </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    <span>{{heading}}</span>\n  </ion-nav-title>\n\n  <ion-content>\n    <ion-audio-track track=\"track\">\n      <div class=\"list card\">\n        <div class=\"item item-thumbnail-left\">\n          <h2>{{track.artist}}</h2>\n          <p>{{track.title}}</p>\n          <ion-audio-controls>\n            <a class=\"button button-icon icon\" ion-audio-play></a>\n            <ion-spinner icon=\"ios\" style=\"position: relative; top: 8px; left: 4px\"></ion-spinner>\n          </ion-audio-controls>\n        </div>\n        <div class=\"item item-divider\">\n          <ion-audio-progress-bar display-time></ion-audio-progress-bar>\n        </div>\n      </div>\n    </ion-audio-track>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/speakers.html","<ion-view>\n\n  <ion-nav-title>\n    <span>NA Speakers</span>\n  </ion-nav-title>\n\n  <ion-content>\n\n    <div class=\"list card\" ng-repeat=\"convention in conventionList\">\n      <div class=\"item item-thumbnail-left\">\n        <img src=\"img/conference.png\">\n        <ion-list>\n        <h1>{{convention.convention_name}}</h1>\n      </div>\n      <div>\n        <ion-item ng-repeat=\"speaker in convention.speakers\">\n          <a class=\"item item-icon-right\" href={{speaker.fileName}}>\n            <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.speaker({convention: speaker.fileName})\">\n              <i class=\"menu-icon icon ion-mic-a\"></i>\n              <h2 class=\"menu-text\">{{speaker.Title}}</h2>\n            </ion-item>\n        </ion-item>\n      </ion-list>\n      </div>\n    </div>\n\n  </ion-content>\n\n</ion-view>\n");
$templateCache.put("views/app/welcome.html","<ion-view class=\"profile-view\" view-title=\"Welcome\">\n  <ion-content>\n    <div class=\"top-content row\">\n      <div class=\"profile-container\">\n        <div class=\"user-image-container\">\n          <pre-img  helper-class=\"rounded-image\">\n            <img class=\"user-image\" ng-src=\"img/web_hi_res_512.png\" spinner-on-load menu-toggle=\"left\">\n          </pre-img>\n        </div>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/common/multi-bg.html","<div class=\"multi-bg-outer\" ng-class=\"{ \'finish-loading\': loaded }\">\n	<img bg class=\"multi-bg {{ helperClass }}\" ng-src=\"{{ bg_img }}\"/>\n	<span class=\"bg-overlay\"></span>\n	<ion-spinner ng-show=\"!loaded\" class=\"spinner-on-load\"></ion-spinner>\n	<!-- <span ng-show=\"!loaded\" class=\"spinner-on-load ion-load-c\"></span> -->\n	<ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("views/common/pre-img.html","<div class=\"pre-img {{ratio}} {{ helperClass }}\" ng-class=\"{ \'finish-loading\': loaded }\">\n	<ion-spinner ng-show=\"!loaded\" class=\"spinner-on-load\"></ion-spinner>\n	<!-- <span ng-show=\"!loaded\" class=\"spinner-on-load ion-load-c\"></span> -->\n	<ng-transclude></ng-transclude>\n</div>\n");
$templateCache.put("views/app/meetings/eastern-meetings.html","<div ng-controller=\"MeetingsCtrl\">\n  <ion-view view-title=\"{{heading}}\">\n    <ion-view hide-back-button=\"true\">\n    <ion-nav-buttons side=\"left\">\n       <button class=\"button button-assertive\" ui-sref=\"app.eastern\">\n            <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n       </button>\n    </ion-nav-buttons>\n\n    <ion-header-bar align-title=\"left\" class=\"bar-subheader item-input-inset \">\n      <label class=\"item-input-wrapper\">\n        <i class=\"icon ion-search placeholder-icon\"></i>\n        <input type=\"search\" placeholder=\"Search Address\" ng-model=\"searchText\" ng-change=\"\" ng-model-options=\"{debounce: 350}\">\n      </label>\n    </ion-header-bar>\n\n    <ion-nav-title>\n      <span>{{heading}}</span>\n    </ion-nav-title>\n\n    <ion-content>\n      <div class=\"card\" ng-repeat=\"x in contents | filter:searchText\">\n        <div class=\"item item-positive item-divider\">\n          <i class=\"icon ion-ios-calendar\"></i>\n          <b>\n            {{dayOfWeekAsString(x.weekday_tinyint)}}\n            {{ x.start_time | limitTo: 5}}\n          </b><br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col text-left\">\n            <div class=\"text text-wrap\" >\n              <b>\n              <ng-switch on=\"x.meeting_name\">\n                <span ng-switch-when=\"NA Meeting\"> </span>\n                <span ng-switch-default>{{ x.meeting_name }}</span>\n              </ng-switch>\n              </b><br>\n              {{ x.location_text }}<br>\n              {{x.location_street}}<br>\n              <i>{{ x.location_info }}</i>\n              <br>\n              <ng-switch on=\"x.formats || null\">\n                <span ng-switch-when=\"null\"> </span>\n                <span ng-switch-default><i><b>Formats: </b>{{ x.formats }}</i></span>\n              </ng-switch>\n              <br>\n            </div>\n          </div>\n          <div class=\"col text-right\">\n            <br>\n            <a href=\"#\" ng-click=\"openMapsLink(x.latitude, x.longitude)\">\n              <button class=\"button button-small button-positive\">Directions&nbsp;&nbsp;<i class=\"icon ion-ios-location\"></i>\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ion-view>\n</div>\n");
$templateCache.put("views/app/meetings/eastern.html","<ion-view view-title=\"Eastern Area\">\n<ion-view hide-back-button=\"true\">\n  <ion-nav-buttons side=\"left\">\n     <button class=\"button button-assertive\" ui-sref=\"app.meetinglist\">\n          <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n     </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    <span>Eastern Area</span>\n  </ion-nav-title>\n\n  <ion-content>\n    <ion-list>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Dublin\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Dublin</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Carlow\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Carlow</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Cavan\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Cavan</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Kildare\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Kildare</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Kilkenny\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Kilkenny</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Laois\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Laois</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Louth\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Louth</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Monaghan\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Monaghan</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Meath\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Meath</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Westmeath\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Westmeath</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.eastern-meetings({countyName: \'Wicklow\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Wicklow</h2>\n      </ion-item>\n\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/meetings/meetings.html","<div ng-controller=\"MeetingsCtrl\">\n  <ion-view view-title=\"{{heading}}\">\n    <ion-nav-buttons side=\"left\">\n       <button class=\"button button-assertive\" ui-sref=\"app.meetinglist\">\n            <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n       </button>\n    </ion-nav-buttons>\n\n    <ion-header-bar align-title=\"left\" class=\"bar-subheader item-input-inset \">\n      <label class=\"item-input-wrapper\">\n        <i class=\"icon ion-search placeholder-icon\"></i>\n        <input type=\"search\" placeholder=\"Search Address\" ng-model=\"searchText\" ng-change=\"\" ng-model-options=\"{debounce: 350}\">\n      </label>\n    </ion-header-bar>\n\n    <ion-nav-title>\n      <span>{{heading}}</span>\n    </ion-nav-title>\n\n    <ion-content>\n      <div class=\"card\" ng-repeat=\"x in contents | filter:searchText\">\n        <div class=\"item item-positive item-divider\">\n          <i class=\"icon ion-ios-calendar\"></i>\n          <b>\n            {{dayOfWeekAsString(x.weekday_tinyint)}}\n            {{ x.start_time | limitTo: 5}}\n          </b><br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col text-left\">\n            <div class=\"text text-wrap\" >\n              <b>\n              <ng-switch on=\"x.meeting_name\">\n                <span ng-switch-when=\"NA Meeting\"> </span>\n                <span ng-switch-default>{{ x.meeting_name }}</span>\n              </ng-switch>\n              </b><br>\n              {{ x.location_text }}<br>\n              {{x.location_street}}<br>\n              <i>{{ x.location_info }}</i>\n              <br>\n              <ng-switch on=\"x.formats || null\">\n                <span ng-switch-when=\"null\"> </span>\n                <span ng-switch-default><i><b>Formats: </b>{{ x.formats }}</i></span>\n              </ng-switch>\n              <br>\n            </div>\n          </div>\n          <div class=\"col text-right\">\n            <br>\n            <a href=\"#\" ng-click=\"openMapsLink(x.latitude, x.longitude)\">\n              <button class=\"button button-small button-positive\">Directions&nbsp;&nbsp;<i class=\"icon ion-ios-location\"></i>\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ion-view>\n</div>\n");
$templateCache.put("views/app/meetings/northern-meetings.html","<div ng-controller=\"MeetingsCtrl\">\n  <ion-view view-title=\"{{heading}}\">\n    <ion-view hide-back-button=\"true\">\n    <ion-nav-buttons side=\"left\">\n       <button class=\"button button-assertive\" ui-sref=\"app.northern\">\n            <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n       </button>\n    </ion-nav-buttons>\n\n    <ion-header-bar align-title=\"left\" class=\"bar-subheader item-input-inset \">\n      <label class=\"item-input-wrapper\">\n        <i class=\"icon ion-search placeholder-icon\"></i>\n        <input type=\"search\" placeholder=\"Search Address\" ng-model=\"searchText\" ng-change=\"\" ng-model-options=\"{debounce: 350}\">\n      </label>\n    </ion-header-bar>\n    \n    <ion-nav-title>\n      <span>{{heading}}</span>\n    </ion-nav-title>\n\n    <ion-content>\n      <div class=\"card\" ng-repeat=\"x in contents | filter:searchText\">\n        <div class=\"item item-positive item-divider\">\n          <i class=\"icon ion-ios-calendar\"></i>\n          <b>\n            {{dayOfWeekAsString(x.weekday_tinyint)}}\n            {{ x.start_time | limitTo: 5}}\n          </b><br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col text-left\">\n            <div class=\"text text-wrap\" >\n              <b>\n              <ng-switch on=\"x.meeting_name\">\n                <span ng-switch-when=\"NA Meeting\"> </span>\n                <span ng-switch-default>{{ x.meeting_name }}</span>\n              </ng-switch>\n              </b><br>\n              {{ x.location_text }}<br>\n              {{x.location_street}}<br>\n              <i>{{ x.location_info }}</i>\n              <br>\n              <ng-switch on=\"x.formats || null\">\n                <span ng-switch-when=\"null\"> </span>\n                <span ng-switch-default><i><b>Formats: </b>{{ x.formats }}</i></span>\n              </ng-switch>\n              <br>\n            </div>\n          </div>\n          <div class=\"col text-right\">\n            <br>\n            <a href=\"#\" ng-click=\"openMapsLink(x.latitude, x.longitude)\">\n              <button class=\"button button-small button-positive\">Directions&nbsp;&nbsp;<i class=\"icon ion-ios-location\"></i>\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ion-view>\n</div>\n");
$templateCache.put("views/app/meetings/northern.html","<ion-view view-title=\"Northern Area\">\n<ion-view hide-back-button=\"true\">\n  <ion-nav-buttons side=\"left\">\n     <button class=\"button button-assertive\" ui-sref=\"app.meetinglist\">\n          <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n     </button>\n  </ion-nav-buttons>\n  \n  <ion-nav-title>\n    <span>Northern Area</span>\n  </ion-nav-title>\n\n  <ion-content>\n    <ion-list>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Antrim\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Antrim</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Armagh\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Armagh</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Cavan\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Cavan</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Down\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Down</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Derry\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Derry</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Donegal\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Donegal</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Fermanagh\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Fermanagh</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Monaghan\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Monaghan</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.northern-meetings({countyName: \'Tyrone\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Tyrone</h2>\n      </ion-item>\n\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/meetings/southern-meetings.html","<div ng-controller=\"MeetingsCtrl\">\n  <ion-view view-title=\"{{heading}}\">\n    <ion-view hide-back-button=\"true\">\n    <ion-nav-buttons side=\"left\">\n       <button class=\"button button-assertive\" ui-sref=\"app.southern\">\n            <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n       </button>\n    </ion-nav-buttons>\n\n    <ion-header-bar align-title=\"left\" class=\"bar-subheader item-input-inset \">\n      <label class=\"item-input-wrapper\">\n        <i class=\"icon ion-search placeholder-icon\"></i>\n        <input type=\"search\" placeholder=\"Search Address\" ng-model=\"searchText\" ng-change=\"\" ng-model-options=\"{debounce: 350}\">\n      </label>\n    </ion-header-bar>\n\n    <ion-nav-title>\n      <span>{{heading}}</span>\n    </ion-nav-title>\n\n    <ion-content>\n      <div class=\"card\" ng-repeat=\"x in contents | filter:searchText\">\n        <div class=\"item item-positive item-divider\">\n          <i class=\"icon ion-ios-calendar\"></i>\n          <b>\n            {{dayOfWeekAsString(x.weekday_tinyint)}}\n            {{ x.start_time | limitTo: 5}}\n          </b><br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col text-left\">\n            <div class=\"text text-wrap\" >\n              <b>\n              <ng-switch on=\"x.meeting_name\">\n                <span ng-switch-when=\"NA Meeting\"> </span>\n                <span ng-switch-default>{{ x.meeting_name }}</span>\n              </ng-switch>\n              </b><br>\n              {{ x.location_text }}<br>\n              {{x.location_street}}<br>\n              <i>{{ x.location_info }}</i>\n              <br>\n              <ng-switch on=\"x.formats || null\">\n                <span ng-switch-when=\"null\"> </span>\n                <span ng-switch-default><i><b>Formats: </b>{{ x.formats }}</i></span>\n              </ng-switch>\n              <br>\n            </div>\n          </div>\n          <div class=\"col text-right\">\n            <br>\n            <a href=\"#\" ng-click=\"openMapsLink(x.latitude, x.longitude)\">\n              <button class=\"button button-small button-positive\">Directions&nbsp;&nbsp;<i class=\"icon ion-ios-location\"></i>\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ion-view>\n</div>\n");
$templateCache.put("views/app/meetings/southern.html","<ion-view view-title=\"Southern Area\">\n<ion-view hide-back-button=\"true\">\n  <ion-nav-buttons side=\"left\">\n     <button class=\"button button-assertive\" ui-sref=\"app.meetinglist\">\n          <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n     </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    <span>Southern Area</span>\n  </ion-nav-title>\n\n  <ion-content>\n\n    <ion-list>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.southern-meetings({countyName: \'Cork\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Cork</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.southern-meetings({countyName: \'Kerry\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Kerry</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.southern-meetings({countyName: \'Limerick\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Limerick</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.southern-meetings({countyName: \'Clare\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Clare</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.southern-meetings({countyName: \'Waterford\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Waterford</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.southern-meetings({countyName: \'Tipperary\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Tipperary</h2>\n      </ion-item>\n\n  </ion-content>\n</ion-view>\n");
$templateCache.put("views/app/meetings/western-meetings.html","<div ng-controller=\"MeetingsCtrl\">\n  <ion-view view-title=\"{{heading}}\">\n    <ion-view hide-back-button=\"true\">\n    <ion-nav-buttons side=\"left\">\n       <button class=\"button button-assertive\" ui-sref=\"app.western\">\n            <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n       </button>\n    </ion-nav-buttons>\n\n    <ion-header-bar align-title=\"left\" class=\"bar-subheader item-input-inset \">\n      <label class=\"item-input-wrapper\">\n        <i class=\"icon ion-search placeholder-icon\"></i>\n        <input type=\"search\" placeholder=\"Search Address\" ng-model=\"searchText\" ng-change=\"\" ng-model-options=\"{debounce: 350}\">\n      </label>\n    </ion-header-bar>\n\n    <ion-nav-title>\n      <span>{{heading}}</span>\n    </ion-nav-title>\n\n    <ion-content>\n      <div class=\"card\" ng-repeat=\"x in contents | filter:searchText\">\n        <div class=\"item item-positive item-divider\">\n          <i class=\"icon ion-ios-calendar\"></i>\n          <b>\n            {{dayOfWeekAsString(x.weekday_tinyint)}}\n            {{ x.start_time | limitTo: 5}}\n          </b><br>\n        </div>\n        <div class=\"row\">\n          <div class=\"col text-left\">\n            <div class=\"text text-wrap\" >\n              <b>\n              <ng-switch on=\"x.meeting_name\">\n                <span ng-switch-when=\"NA Meeting\"> </span>\n                <span ng-switch-default>{{ x.meeting_name }}</span>\n              </ng-switch>\n              </b><br>\n              {{ x.location_text }}<br>\n              {{x.location_street}}<br>\n              <i>{{ x.location_info }}</i>\n              <br>\n              <ng-switch on=\"x.formats || null\">\n                <span ng-switch-when=\"null\"> </span>\n                <span ng-switch-default><i><b>Formats: </b>{{ x.formats }}</i></span>\n              </ng-switch>\n              <br>\n            </div>\n          </div>\n          <div class=\"col text-right\">\n            <br>\n            <a href=\"#\" ng-click=\"openMapsLink(x.latitude, x.longitude)\">\n              <button class=\"button button-small button-positive\">Directions&nbsp;&nbsp;<i class=\"icon ion-ios-location\"></i>\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </ion-content>\n  </ion-view>\n</div>\n");
$templateCache.put("views/app/meetings/western.html","<ion-view view-title=\"Western Area\">\n<ion-view hide-back-button=\"true\">\n  <ion-nav-buttons side=\"left\">\n     <button class=\"button button-assertive\" ui-sref=\"app.meetinglist\">\n          <i class=\"menu-icon icon ion-ios-arrow-left\"></i>\n     </button>\n  </ion-nav-buttons>\n\n  <ion-nav-title>\n    <span>Western Area</span>\n  </ion-nav-title>\n\n  <ion-content>\n    <ion-list>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.western-meetings({countyName: \'Galway\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Galway</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.western-meetings({countyName: \'Leitrim\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Leitrim</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.western-meetings({countyName: \'Longford\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Longford</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.western-meetings({countyName: \'Mayo\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Mayo</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.western-meetings({countyName: \'Roscommon\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Roscommon</h2>\n      </ion-item>\n\n      <ion-item ui-sref-active=\"active\" class=\"item-icon-right\" menu-close ui-sref=\"app.western-meetings({countyName: \'Sligo\'})\">\n        <i class=\"menu-icon icon ion-chevron-right\"></i>\n        <h2 class=\"menu-text\">Sligo</h2>\n      </ion-item>\n\n  </ion-content>\n</ion-view>\n");}]);