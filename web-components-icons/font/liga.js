/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'arrow-45-up-right': '&#xe000;',
            'collapse-ne': '&#xe000;',
            'resize-ne': '&#xe000;',
            'arrow-45-down-right': '&#xe001;',
            'collapse-se': '&#xe001;',
            'resize-se': '&#xe001;',
            'arrow-45-down-left': '&#xe002;',
            'collapse-sw': '&#xe002;',
            'resize-sw': '&#xe002;',
            'arrow-45-up-left': '&#xe003;',
            'collapse-nw': '&#xe003;',
            'resize-new': '&#xe003;',
            'arrow-60-up': '&#xe004;',
            'arrow-n': '&#xe004;',
            'kpi-trend-increase': '&#xe004;',
            'arrow-60-right': '&#xe005;',
            'arrow-e': '&#xe005;',
            'kpi-trend-decrease': '&#xe005;',
            'arrow-60-down': '&#xe006;',
            'arorw-s': '&#xe006;',
            'arrow-60-left': '&#xe007;',
            'arrow-w': '&#xe007;',
            'arrow-end-up': '&#xe008;',
            'arrow-end-right': '&#xe009;',
            'arrow-end-down': '&#xe00a;',
            'arrow-end-left': '&#xe00b;',
            'arrow-double-60-up': '&#xe00c;',
            'arrow-seek-up': '&#xe00c;',
            'arrow-double-60-right': '&#xe00d;',
            'arrow-seek-right': '&#xe00d;',
            'forward-sm': '&#xe00d;',
            'arrow-double-60-down': '&#xe00e;',
            'arrow-seek-down': '&#xe00e;',
            'arrow-double-60-left': '&#xe00f;',
            'arrow-seek-left': '&#xe00f;',
            'rewind-sm': '&#xe00f;',
            'arrows-kpi': '&#xe010;',
            'kpi': '&#xe010;',
            'arrows-no-change': '&#xe011;',
            'arrow-overflow-down': '&#xe012;',
            'arrow-chevron-up': '&#xe013;',
            'arrow-chevron-right': '&#xe014;',
            'arrow-chevron-down': '&#xe015;',
            'arrow-chevron-left': '&#xe016;',
            'arrow-up': '&#xe017;',
            'arrow-right': '&#xe018;',
            'arrow-down': '&#xe019;',
            'arrow-left': '&#xe01a;',
            'arrow-drill': '&#xe01b;',
            'arrow-parent': '&#xe01c;',
            'arrow-root': '&#xe01d;',
            'arrows-resizing': '&#xe01e;',
            'arrows-dimensions': '&#xe01f;',
            'arrows-swap': '&#xe020;',
            'drag-and-drop': '&#xe021;',
            'categorize': '&#xe022;',
            'grid': '&#xe023;',
            'grid-layout': '&#xe024;',
            'group': '&#xe025;',
            'ungroup': '&#xe026;',
            'handler-drag': '&#xe027;',
            'layout': '&#xe028;',
            'layout-1-by-4': '&#xe029;',
            'layout-2-by-2': '&#xe02a;',
            'layout-side-by-side': '&#xe02b;',
            'layout-stacked': '&#xe02c;',
            'columns': '&#xe02d;',
            'rows': '&#xe02e;',
            'reorder': '&#xe02f;',
            'menu': '&#xe030;',
            'more-vertical': '&#xe031;',
            'more-horizontal': '&#xe032;',
            'undo': '&#xe100;',
            'redo': '&#xe101;',
            'reset': '&#xe102;',
            'reload': '&#xe103;',
            'refresh': '&#xe103;',
            'recurrence': '&#xe103;',
            'non-recurrence': '&#xe104;',
            'reset-sm': '&#xe105;',
            'reload-sm': '&#xe106;',
            'refresh-sm': '&#xe106;',
            'recurrence-sm': '&#xe106;',
            'clock': '&#xe107;',
            'calendar': '&#xe108;',
            'save': '&#xe109;',
            'floppy': '&#xe109;',
            'print': '&#xe10a;',
            'printer': '&#xe10a;',
            'edit': '&#xe10b;',
            'pencil': '&#xe10b;',
            'delete': '&#xe10c;',
            'trash': '&#xe10c;',
            'attachment': '&#xe10d;',
            'clip': '&#xe10d;',
            'attachment-45': '&#xe10e;',
            'clip-45': '&#xe10e;',
            'link-horizontal': '&#xe10f;',
            'hyperlink': '&#xe10f;',
            'unlink-horizontal': '&#xe110;',
            'hyperlink-remove': '&#xe110;',
            'link-vertical': '&#xe111;',
            'unlink-vertical': '&#xe112;',
            'lock': '&#xe113;',
            'unlock': '&#xe114;',
            'cancel': '&#xe115;',
            'cancel-outline': '&#xe116;',
            'cancel-circle': '&#xe117;',
            'check': '&#xe118;',
            'checkmark': '&#xe118;',
            'check-outline': '&#xe119;',
            'checkmark-outline': '&#xe119;',
            'success': '&#xe119;',
            'check-circle': '&#xe11a;',
            'checkmark-circle': '&#xe11a;',
            'close': '&#xe11b;',
            'x': '&#xe11b;',
            'close-outline': '&#xe11c;',
            'x-outline': '&#xe11c;',
            'error': '&#xe11c;',
            'close-circle': '&#xe11d;',
            'x-circle': '&#xe11d;',
            'plus': '&#xe11e;',
            'plus-outline': '&#xe11f;',
            'plus-circle': '&#xe120;',
            'minus': '&#xe121;',
            'kpi-trend-equal': '&#xe121;',
            'minus-outline': '&#xe122;',
            'minus-circle': '&#xe123;',
            'sort-asc': '&#xe124;',
            'sort-desc': '&#xe125;',
            'unsort': '&#xe126;',
            'sort-clear': '&#xe126;',
            'sort-asc-sm': '&#xe127;',
            'sort-desc-sm': '&#xe128;',
            'filter': '&#xe129;',
            'filter-clear': '&#xe12a;',
            'filter-sm': '&#xe12b;',
            'filter-sort-asc-sm': '&#xe12c;',
            'filter-sort-desc-sm': '&#xe12d;',
            'filter-add-expression': '&#xe12e;',
            'filter-add-group': '&#xe12f;',
            'login': '&#xe130;',
            'logout': '&#xe131;',
            'download': '&#xe132;',
            'upload': '&#xe133;',
            'hyperlink-open': '&#xe134;',
            'hyperlink-open-sm': '&#xe135;',
            'launch': '&#xe136;',
            'window': '&#xe137;',
            'window-maximize': '&#xe137;',
            'windows': '&#xe138;',
            'window-restore': '&#xe138;',
            'tiles': '&#xe138;',
            'window-minimize': '&#xe139;',
            'gear': '&#xe13a;',
            'cog': '&#xe13a;',
            'custom': '&#xe13a;',
            'gears': '&#xe13b;',
            'cogs': '&#xe13b;',
            'wrench': '&#xe13c;',
            'settings': '&#xe13c;',
            'preview': '&#xe13d;',
            'eye': '&#xe13d;',
            'zoom': '&#xe13e;',
            'search': '&#xe13e;',
            'zoom-in': '&#xe13f;',
            'zoom-out': '&#xe140;',
            'pan': '&#xe141;',
            'move': '&#xe141;',
            'calculator': '&#xe142;',
            'cart': '&#xe143;',
            'shopping-cart': '&#xe143;',
            'connector': '&#xe144;',
            'plus-sm': '&#xe145;',
            'minus-sm': '&#xe146;',
            'kpi-status-deny': '&#xe147;',
            'kpi-status-hold': '&#xe148;',
            'kpi-status-open': '&#xe149;',
            'play': '&#xe200;',
            'pause': '&#xe201;',
            'stop': '&#xe202;',
            'rewind': '&#xe203;',
            'forward': '&#xe204;',
            'volume-down': '&#xe205;',
            'volume-up': '&#xe206;',
            'volume-off': '&#xe207;',
            'hd': '&#xe208;',
            'subtitles': '&#xe209;',
            'playlist': '&#xe20a;',
            'audio': '&#xe20b;',
            'play-sm': '&#xe20c;',
            'pause-sm': '&#xe20d;',
            'stop-sm': '&#xe20e;',
            'heart-outline': '&#xe300;',
            'fav-outline': '&#xe300;',
            'favorite-outline': '&#xe300;',
            'heart': '&#xe301;',
            'fav': '&#xe301;',
            'favorite': '&#xe301;',
            'star-outline': '&#xe302;',
            'bookmark-outline': '&#xe302;',
            'star': '&#xe303;',
            'bookmark': '&#xe303;',
            'checkbox': '&#xe304;',
            'shape-rect': '&#xe304;',
            'checkbox-checked': '&#xe305;',
            'tri-state-indeterminate': '&#xe306;',
            'tri-state-null': '&#xe307;',
            'circle': '&#xe308;',
            'radiobutton': '&#xe309;',
            'shape-circle': '&#xe309;',
            'radiobutton-checked': '&#xe30a;',
            'notification': '&#xe400;',
            'bell': '&#xe400;',
            'information': '&#xe401;',
            'info': '&#xe401;',
            'question': '&#xe402;',
            'help': '&#xe402;',
            'warning': '&#xe403;',
            'exception': '&#xe403;',
            'photo-camera': '&#xe500;',
            'image': '&#xe501;',
            'photo': '&#xe501;',
            'image-export': '&#xe502;',
            'photo-export': '&#xe502;',
            'zoom-actual-size': '&#xe503;',
            'zoom-best-fit': '&#xe504;',
            'image-resize': '&#xe505;',
            'crop': '&#xe506;',
            'mirror': '&#xe507;',
            'flip-horizontal': '&#xe508;',
            'flip-vertical': '&#xe509;',
            'rotate': '&#xe50a;',
            'rotate-right': '&#xe50b;',
            'rotate-left': '&#xe50c;',
            'brush': '&#xe50d;',
            'palette': '&#xe50e;',
            'paint': '&#xe50f;',
            'droplet': '&#xe50f;',
            'background': '&#xe50f;',
            'line': '&#xe510;',
            'shape-line': '&#xe510;',
            'brightness-contrast': '&#xe511;',
            'saturation': '&#xe512;',
            'invert-colors': '&#xe513;',
            'transperancy': '&#xe514;',
            'opacity': '&#xe514;',
            'greyscale': '&#xe515;',
            'blur': '&#xe516;',
            'sharpen': '&#xe517;',
            'shape': '&#xe518;',
            'round-corners': '&#xe519;',
            'front-element': '&#xe51a;',
            'back-element': '&#xe51b;',
            'forward-element': '&#xe51c;',
            'backward-element': '&#xe51d;',
            'align-left-element': '&#xe51e;',
            'align-center-element': '&#xe51f;',
            'align-right-element': '&#xe520;',
            'align-top-element': '&#xe521;',
            'align-middle-element': '&#xe522;',
            'align-bottom-element': '&#xe523;',
            'thumbnails-up': '&#xe524;',
            'thumbnails-right': '&#xe525;',
            'thumbnails-down': '&#xe526;',
            'thumbnails-left': '&#xe527;',
            'full-screen': '&#xe528;',
            'fullscreen': '&#xe528;',
            'full-screen-exit': '&#xe529;',
            'fullscreen-exit': '&#xe529;',
            'reset-color': '&#xe52a;',
            'paint-remove': '&#xe52a;',
            'background-remove': '&#xe52a;',
            'page-properties': '&#xe600;',
            'bold': '&#xe601;',
            'italic': '&#xe602;',
            'underline': '&#xe603;',
            'font-family': '&#xe604;',
            'foreground-color': '&#xe605;',
            'convert-lowercase': '&#xe606;',
            'convert-uppercase': '&#xe607;',
            'strikethrough': '&#xe608;',
            'sub-script': '&#xe609;',
            'sup-script': '&#xe60a;',
            'div': '&#xe60b;',
            'all': '&#xe60c;',
            'h1': '&#xe60d;',
            'h2': '&#xe60e;',
            'h3': '&#xe60f;',
            'h4': '&#xe610;',
            'h5': '&#xe611;',
            'h6': '&#xe612;',
            'list-ordered': '&#xe613;',
            'list-numbered': '&#xe613;',
            'list-unordered': '&#xe614;',
            'list-bulleted': '&#xe614;',
            'indent-increase': '&#xe615;',
            'indent': '&#xe615;',
            'indent-decrease': '&#xe616;',
            'outdent': '&#xe616;',
            'insert-up': '&#xe617;',
            'insert-top': '&#xe617;',
            'insert-middle': '&#xe618;',
            'insert-down': '&#xe619;',
            'insert-bottom': '&#xe619;',
            'align-top': '&#xe61a;',
            'align-middle': '&#xe61b;',
            'align-bottom': '&#xe61c;',
            'align-left': '&#xe61d;',
            'align-center': '&#xe61e;',
            'align-right': '&#xe61f;',
            'align-justify': '&#xe620;',
            'align-remove': '&#xe621;',
            'text-wrap': '&#xe622;',
            'rule-horizontal': '&#xe623;',
            'table-align-top-left': '&#xe624;',
            'table-align-top-center': '&#xe625;',
            'table-align-top-right': '&#xe626;',
            'table-align-middle-left': '&#xe627;',
            'table-align-middle-center': '&#xe628;',
            'table-align-middle-right': '&#xe629;',
            'table-align-bottom-left': '&#xe62a;',
            'table-align-bottom-center': '&#xe62b;',
            'table-align-bottom-right': '&#xe62c;',
            'table-align-remove': '&#xe62d;',
            'borders-all': '&#xe62e;',
            'borders-outside': '&#xe62f;',
            'borders-inside': '&#xe630;',
            'borders-inside-horizontal': '&#xe631;',
            'borders-inside-vertical': '&#xe632;',
            'border-top': '&#xe633;',
            'border-bottom': '&#xe634;',
            'border-left': '&#xe635;',
            'border-right': '&#xe636;',
            'border-no': '&#xe637;',
            'borders-show-hide': '&#xe638;',
            'form': '&#xe639;',
            'border': '&#xe639;',
            'form-element': '&#xe63a;',
            'code-snippet': '&#xe63b;',
            'select-all': '&#xe63c;',
            'button': '&#xe63d;',
            'select-box': '&#xe63e;',
            'calendar-date': '&#xe63f;',
            'group-box': '&#xe640;',
            'textarea': '&#xe641;',
            'textbox': '&#xe642;',
            'textbox-hidden': '&#xe643;',
            'password': '&#xe644;',
            'paragraph-add': '&#xe645;',
            'edit-tools': '&#xe646;',
            'template-manager': '&#xe647;',
            'change-manually': '&#xe648;',
            'track-changes': '&#xe649;',
            'track-changes-enable': '&#xe64a;',
            'track-changes-accept': '&#xe64b;',
            'track-changes-accept-all': '&#xe64c;',
            'track-changes-reject': '&#xe64d;',
            'track-changes-reject-all': '&#xe64e;',
            'document-manager': '&#xe64f;',
            'custom-icon': '&#xe650;',
            'dictionary-add': '&#xe651;',
            'image-light-dialog': '&#xe652;',
            'image-insert': '&#xe652;',
            'image-edit': '&#xe653;',
            'image-map-editor': '&#xe654;',
            'comment': '&#xe655;',
            'comment-remove': '&#xe656;',
            'comments-remove-all': '&#xe657;',
            'silverlight': '&#xe658;',
            'media-manager': '&#xe659;',
            'video-external': '&#xe65a;',
            'flash-manager': '&#xe65b;',
            'find-and-replace': '&#xe65c;',
            'find': '&#xe65c;',
            'copy': '&#xe65d;',
            'files': '&#xe65d;',
            'cut': '&#xe65e;',
            'paste': '&#xe65f;',
            'paste-as-html': '&#xe660;',
            'paste-from-word': '&#xe661;',
            'paste-from-word-strip-file': '&#xe662;',
            'paste-html': '&#xe663;',
            'paste-markdown': '&#xe664;',
            'paste-plain-text': '&#xe665;',
            'apply-format': '&#xe666;',
            'clear-css': '&#xe667;',
            'copy-format': '&#xe668;',
            'strip-all-formating': '&#xe669;',
            'strip-css-format': '&#xe66a;',
            'strip-font-elements': '&#xe66b;',
            'strip-span-elements': '&#xe66c;',
            'strip-word-formatting': '&#xe66d;',
            'format-code-block': '&#xe66e;',
            'style-builder': '&#xe66f;',
            'module-manager': '&#xe670;',
            'hyperlink-light-dialog': '&#xe671;',
            'hyperlink-insert': '&#xe671;',
            'hyperlink-globe': '&#xe672;',
            'hyperlink-globe-remove': '&#xe673;',
            'hyperlink-email': '&#xe674;',
            'anchor': '&#xe675;',
            'table-light-dialog': '&#xe676;',
            'table-insert': '&#xe676;',
            'table': '&#xe677;',
            'table-properties': '&#xe678;',
            'table-wizard': '&#xe678;',
            'table-cell': '&#xe679;',
            'table-cell-properties': '&#xe67a;',
            'table-column-insert-left': '&#xe67b;',
            'table-column-insert-right': '&#xe67c;',
            'table-row-insert-above': '&#xe67d;',
            'table-row-insert-below': '&#xe67e;',
            'table-column-delete': '&#xe67f;',
            'table-row-delete': '&#xe680;',
            'table-cell-delete': '&#xe681;',
            'table-delete': '&#xe682;',
            'cells-merge': '&#xe683;',
            'cells-merge-horizontally': '&#xe684;',
            'cells-merge-vertically': '&#xe685;',
            'cell-split-horizontally': '&#xe686;',
            'cell-split-vertically': '&#xe687;',
            'table-unmerge': '&#xe688;',
            'pane-freeze': '&#xe689;',
            'row-freeze': '&#xe68a;',
            'column-freeze': '&#xe68b;',
            'toolbar-float': '&#xe68c;',
            'spell-checker': '&#xe68d;',
            'validation-xhtml': '&#xe68e;',
            'validation-data': '&#xe68f;',
            'toggle-full-screen-mode': '&#xe690;',
            'formula-fx': '&#xe691;',
            'sum': '&#xe692;',
            'symbol': '&#xe693;',
            'dollar': '&#xe694;',
            'currency': '&#xe694;',
            'percent': '&#xe695;',
            'custom-format': '&#xe696;',
            'decimal-increase': '&#xe697;',
            'decimal-decrease': '&#xe698;',
            'font-size': '&#xe699;',
            'image-absolute-position': '&#xe69a;',
            'globe-outline': '&#xe700;',
            'globe': '&#xe701;',
            'marker-pin': '&#xe702;',
            'marker-pin-target': '&#xe703;',
            'pin': '&#xe704;',
            'unpin': '&#xe705;',
            'share': '&#xe800;',
            'user': '&#xe801;',
            'inbox': '&#xe802;',
            'blogger': '&#xe803;',
            'blogger-box': '&#xe804;',
            'delicious': '&#xe805;',
            'delicious-box': '&#xe806;',
            'digg': '&#xe807;',
            'digg-box': '&#xe808;',
            'email': '&#xe809;',
            'envelop': '&#xe809;',
            'letter': '&#xe809;',
            'email-box': '&#xe80a;',
            'envelop-box': '&#xe80a;',
            'letter-box': '&#xe80a;',
            'facebook': '&#xe80b;',
            'facebook-box': '&#xe80c;',
            'google': '&#xe80d;',
            'google-box': '&#xe80e;',
            'google-plus': '&#xe80f;',
            'google-plus-box': '&#xe810;',
            'linkedin': '&#xe811;',
            'linkedin-box': '&#xe812;',
            'myspace': '&#xe813;',
            'myspace-box': '&#xe814;',
            'pinterest': '&#xe815;',
            'pinterest-box': '&#xe816;',
            'reddit': '&#xe817;',
            'reddit-box': '&#xe818;',
            'stumble-upon': '&#xe819;',
            'stumble-upon-box': '&#xe81a;',
            'tell-a-friend': '&#xe81b;',
            'tell-a-friend-box': '&#xe81c;',
            'tumblr': '&#xe81d;',
            'tumblr-box': '&#xe81e;',
            'twitter': '&#xe81f;',
            'twitter-box': '&#xe820;',
            'yammer': '&#xe821;',
            'yammer-box': '&#xe822;',
            'behance': '&#xe823;',
            'behance-box': '&#xe824;',
            'dribbble': '&#xe825;',
            'dribbble-box': '&#xe826;',
            'rss': '&#xe827;',
            'rss-box': '&#xe828;',
            'vimeo': '&#xe829;',
            'vimeo-box': '&#xe82a;',
            'youtube': '&#xe82b;',
            'youtube-box': '&#xe82c;',
            'folder': '&#xe900;',
            'folder-open': '&#xe901;',
            'folder-add': '&#xe902;',
            'folder-up': '&#xe903;',
            'folder-more': '&#xe904;',
            'fields-more': '&#xe904;',
            'aggregate-fields': '&#xe905;',
            'file': '&#xe906;',
            'file-vertical': '&#xe906;',
            'file-add': '&#xe907;',
            'file-txt': '&#xe908;',
            'txt': '&#xe908;',
            'file-csv': '&#xe909;',
            'csv': '&#xe909;',
            'file-excel': '&#xe90a;',
            'file-xls': '&#xe90a;',
            'excel': '&#xe90a;',
            'xls': '&#xe90a;',
            'file-word': '&#xe90b;',
            'file-doc': '&#xe90b;',
            'word': '&#xe90b;',
            'doc': '&#xe90b;',
            'file-mdb': '&#xe90c;',
            'mdb': '&#xe90c;',
            'file-ppt': '&#xe90d;',
            'ppt': '&#xe90d;',
            'file-pdf': '&#xe90e;',
            'pdf': '&#xe90e;',
            'file-psd': '&#xe90f;',
            'psd': '&#xe90f;',
            'file-flash': '&#xe910;',
            'flash': '&#xe910;',
            'file-config': '&#xe911;',
            'config': '&#xe911;',
            'file-ascx': '&#xe912;',
            'ascx': '&#xe912;',
            'file-bac': '&#xe913;',
            'bac': '&#xe913;',
            'file-zip': '&#xe914;',
            'zip': '&#xe914;',
            'film': '&#xe915;',
            'css3': '&#xe916;',
            'html5': '&#xe917;',
            'html': '&#xe918;',
            'source-code': '&#xe918;',
            'view-source': '&#xe918;',
            'css': '&#xe919;',
            'js': '&#xe91a;',
            'exe': '&#xe91b;',
            'csproj': '&#xe91c;',
            'vbproj': '&#xe91d;',
            'cs': '&#xe91e;',
            'vb': '&#xe91f;',
            'sln': '&#xe920;',
            'cloud': '&#xe921;',
            'file-horizontal': '&#xe922;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/k-icon/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
