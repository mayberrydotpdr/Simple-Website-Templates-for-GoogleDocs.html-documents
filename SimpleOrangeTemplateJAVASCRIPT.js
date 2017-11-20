(function() {
    aList = [];
    headingList = [];
    headingListToString = [];
    fixLink = [];
    shortLink = [];
    var a = document.body.querySelectorAll('A'); 
    var index = 0; 
    for( index=0; index < a.length; index++ ) {
        aList.push(a[index]);
    }

    for(var i=0; i<aList.length; i++){
        if (aList[i].textContent === 'Facebook') {
            var find = aList[i].textContent;
            creatImageLink('Facebook')
        }
        if (aList[i].textContent === 'Twitter') {
            var find = aList[i].textContent;
            creatImageLink('Twitter')
        }
        if (aList[i].textContent === 'YouTube') {
            var find = aList[i].textContent;
            creatImageLink('YouTube')
        }
        if (aList[i].textContent === 'Google+') {
            var find = aList[i].textContent;
            creatImageLink('Google+')
        }
        if (aList[i].textContent === 'Linkedin') {
            var find = aList[i].textContent;
            creatImageLink('Linkedin')
        }
        if (aList[i].textContent === 'Pinterest') {
            var find = aList[i].textContent;
            creatImageLink('Pinterest')
        }
        if (aList[i].textContent === 'Blogger') {
            var find = aList[i].textContent;
            creatImageLink('Blogger')
        }
        if (aList[i].textContent === 'WordPress') {
            var find = aList[i].textContent;
            creatImageLink('WordPress')
        }
        if (aList[i].textContent === 'Tumblr') {
            var find = aList[i].textContent;
            creatImageLink('Tumblr')
        }
        if (aList[i].textContent === 'Skype') {
            var find = aList[i].textContent;
            creatImageLink('Skype')
        }
        if (aList[i].textContent === 'Instagram') {
            var find = aList[i].textContent;
            creatImageLink('Instagram')
        }

    }

    for(var i=0; i<aList.length; i++){
        if (aList[i].href.includes('#h.')) {
            headingList.push(aList[i])
        }
        if (aList[i].href.includes('https://www.google.com/url?q=')) {
            fixLink.push(aList[i]);
        }
    }

    for(var i=0; i<fixLink.length; i++){
        var fixLinkA = fixLink[i].href.indexOf("&sa="),
            fixLinkB = fixLink[i].href.substring(29, fixLinkA)
        shortLink.push(fixLinkB);
    }

    for(var i=0; i<fixLink.length; i++){
        var textForLink = fixLink[i].textContent;
        fixLink[i].setAttribute("class", "outLinks");
        fixLink[i].setAttribute("href", shortLink[i]);
        fixLink[i].setAttribute("target", "_blank");
        fixLink[i].innerHTML = textForLink; //This may not be needed
    }
   
    for(var i=0; i<headingList.length; i++){
        headingList[i].style.display = 'none';
    }

}());

(function(){
    var newStyle = document.createElement('link'),
        newMenu = document.createElement('div'),
        newHeader = document.createElement('header'),
        newTitle = document.createElement('title'),
        newMeta = document.createElement('meta'),
        newFavicon = document.createElement('link');
    newStyle.id = 'styleSheet';
    newMenu.id = 'leftSideMenuId';
    newHeader.id = 'titleHeader';
    newMeta.id = 'newMetaTag';
    newFavicon.id = 'theNewFavicon';
    newMenu.innerHTML = '<div id="wrapper"><center><img src="SimpleOrangeTemplate/templateImages/menuTopImage.png" onclick="goToBottom()" id="goToBottom"></center><ul id="menuUl" class="menuListULtag"></ul><div><div id="menuBurgerIcon"><img src="SimpleOrangeTemplate/templateImages/menuBurger.png" alt="Menu"></div>';
        document.getElementsByTagName("HEAD")[0].appendChild(newStyle);
        document.getElementsByTagName("HEAD")[0].appendChild(newTitle);
        document.getElementsByTagName("HEAD")[0].appendChild(newMeta);
        document.getElementsByTagName("HEAD")[0].appendChild(newFavicon);
        document.getElementsByTagName("BODY")[0].appendChild(newMenu);
        document.getElementsByTagName("h1")[0].appendChild(newHeader);
        var source = document.getElementById("styleSheet"),
            metaDescription = document.getElementById("newMetaTag"),
            favicon = document.getElementById("theNewFavicon"),
            slideInAndOut = document.getElementById("leftSideMenuId"),
            setOnload = document.getElementsByTagName("BODY")[0],
                thisSpan = document.querySelectorAll('SPAN');
                plainTextList = [];
                    for(var i=0; i<thisSpan.length; i++){
                        plainText = thisSpan[i].textContent;
                        plainTextList.push(plainText);
                    }
                    var afJoin = plainTextList.join(" "),
                        rMindent = afJoin.replace("        ", ""),
                        getFirstP = rMindent.substring(0, 554);
        var theTitle = document.getElementsByTagName("h1")[0].textContent;
        newTitle.innerHTML = theTitle;
        newHeader.innerHTML = '<center><div id="titleFont">' + theTitle + '</div></center><span id="logo"><img src="SimpleOrangeTemplate/templateImages/logo.png"></span>';
        setOnload.setAttribute('onload', 'makeMenuList()');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', getFirstP);
        favicon.setAttribute('href', 'SimpleOrangeTemplate/templateImages/favicon.png');
        favicon.setAttribute('rel', 'icon');
        favicon.setAttribute('type', 'image/x-icon');
        source.setAttribute('rel', 'stylesheet');
        source.setAttribute('type', 'text/css');
        source.setAttribute('href', 'SimpleOrangeTemplate/stylesheets/style.css');
        slideInAndOut.setAttribute('class', 'leftSideMenu');
        slideInAndOut.setAttribute('onclick', 'viewMenu()');
}());

function viewMenu() {
    var slideInAndOut = document.getElementById("leftSideMenuId");

    if (slideInAndOut.classList) { 
        slideInAndOut.classList.toggle("slideIn");
    } else {
        var classes = slideInAndOut.className.split(" ");
        var i = classes.indexOf("slideIn");

        if (i >= 0) 
            classes.splice(i, 1);
        else 
            classes.push("slideIn");
            slideInAndOut.className = classes.join(" "); 
    }
}

function makeMenuList(){
    for(var i=0; i<headingList.length; i++){
        var headingHref = headingList[i].toString(),
            theLink = headingList[i].textContent,
            newMenuLi = document.createElement('li');
        newMenuLi.innerHTML = '<a href="' + headingHref + '" class="menuAtags">' + theLink + '</a>';
        document.getElementById("menuUl").appendChild(newMenuLi);
        newMenuLi.setAttribute('class', 'menuLiTags');
    }
}

function creatImageLink(socialMediaName){
    var socialIcon = socialMediaName;
    for(var i=0; i<aList.length; i++){
        if (aList[i].textContent === socialIcon) {
            var fixLinkA = aList[i].href.indexOf("&sa="),
                fixLinkB = aList[i].href.substring(29, fixLinkA);
    }   }
        this['img'+socialIcon+'link'] = document.getElementById(['img'+socialIcon+'link']);
        var socialIconId = document.getElementById(socialIcon);
    if (socialIconId === null){
        this['anew'+socialIcon+'link'] = document.createElement('A'),
        ['anew'+socialIcon+'link'].id = "img"+[socialIcon]+"Link";
        document.getElementsByTagName("BODY")[0].appendChild(this['anew'+socialIcon+'link']);
        this['anew'+socialIcon+'link'].setAttribute("class", "socialIcons");
        this['anew'+socialIcon+'link'].innerHTML = '<img src="SimpleOrangeTemplate/templateImages/' + socialIcon + 'Icon.png" class="socialIcons"></img>';
        this['anew'+socialIcon+'link'].setAttribute("href", fixLinkB);
        this['anew'+socialIcon+'link'].setAttribute("target", "_blank");
        this['anew'+socialIcon+'link'].setAttribute("id", socialIcon);
    }
}

function goToBottom() {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
}
