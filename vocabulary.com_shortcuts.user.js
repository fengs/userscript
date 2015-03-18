// ==UserScript==
// @name        Vocabulary.com List Shortcuts
// @namespace   sfeng
// @description Add shortcuts to Vocabulary.com
// @include     http://www.vocabulary.com/*
// @version     1
// @grant       none
// @require     http://cdn.craig.is/js/mousetrap/mousetrap.min.js?9d308
// ==/UserScript==


/*
 Using MouseTrap (http://craig.is/killing/mice) to capture keyboard events
 In a list view http://www.vocabulary.com/lists/*
 '[' to prev word in list
 '\' to next word in list
 ']' to pronounce, also works in non-list view
 Can be changed to any key or key combination as you want
*/

Mousetrap.bind('[', click_prev);
Mousetrap.bind('\\', click_next); // bind to single \, the extra one is escape character
Mousetrap.bind(']', click_pronounciation);

function click_next(){
    // if not in list view
    if(document.URL.indexOf("list") < 0){
        return;
    }
    curr_number = get_curr_number();
    click_entry(curr_number + 1);
}

function click_prev(){
    if(document.URL.indexOf("list") < 0){
        return;
    }
    curr_number = get_curr_number();
    click_entry(curr_number - 1);
}

function get_curr_number(){
    var curr_element = document.getElementsByClassName("entry selected");
    // if no word is selected, return -1, then next is entry0
    if( curr_element.length <= 0){
        return -1;
    }else{
        var entry = curr_element[0].getAttribute('id');
        var number = entry.split("entry")[1];
        return parseInt(number);
    }
}

function click_entry(num){
    if(num < 0){
        num = 0; // cannot go before first word
    }else if(num >= document.getElementsByClassName("entry").length){
        // cannot go after last word
        num = document.getElementsByClassName("entry").length - 1;
    }
    var entry_no = "entry" + num;
    var element = document.getElementById(entry_no);
    element.click();
}

function click_pronounciation(){
    var word = document.getElementsByTagName("h1")[1];
    var audio = word.getElementsByTagName('a')[0];
    audio.click();
}