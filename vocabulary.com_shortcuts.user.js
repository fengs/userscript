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
 '-' to first word in list
 '=' to last word in list
 Alternatively for left hand keys:
 'a' to prev word in list
 'd' to next word in list
 's' to pronounce, also works in non-list view
 'q' to first word in list
 'w' to last word in list

 In a practice/challenge screen:
 '1' to choose answer 1
 '2' to choose answer 2
 '3' to choose answer 3
 '4' to choose answer 4

 Can be changed to any key or key combination as you want
 */

// right hand keys
Mousetrap.bind('[', click_prev);
Mousetrap.bind('\\', click_next); // bind to single \, the extra one is escape character
Mousetrap.bind(']', click_pronunciation);
Mousetrap.bind('-', function() { click_entry(0) });
Mousetrap.bind('=', function() { click_entry(document.getElementsByClassName("entry").length - 1) });

// left hand keys
Mousetrap.bind('a', click_prev);
Mousetrap.bind('d', click_next);
Mousetrap.bind('s', click_pronunciation);
Mousetrap.bind('q', function() { click_entry(0) });
Mousetrap.bind('w', function() { click_entry(document.getElementsByClassName("entry").length - 1) });

// answering questions in challenge/practice
Mousetrap.bind('1', function() { click_answer(0) });
Mousetrap.bind('2', function() { click_answer(1) });
Mousetrap.bind('3', function() { click_answer(2) });
Mousetrap.bind('4', function() { click_answer(3) });



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
        return;
    }
    var entry_no = "entry" + num;
    var element = document.getElementById(entry_no);
    element.click();
}

function click_pronunciation(){
    var word = document.getElementsByTagName("h1")[1];
    var audio = word.getElementsByTagName('a')[0];
    audio.click();
}

function click_answer(num){
    if(num < 0 || num > 3){
        return;
    }
    var choices = document.getElementsByClassName("choices")[0];
    var answer = choices.getElementsByTagName('a')[num];
    answer.click();
}