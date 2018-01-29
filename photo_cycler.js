  // ==UserScript==
// @name        google photos slower slideshow
// @namespace   piframe
// @include     https://photos.google.com/album/*
// @version     1
// @grant       none
// ==/UserScript==

// CHANGE first_photo TO USE THE URL OF THE FIRST PHOTO IN YOUR ALBUM
var first_photo = 'https://photos.google.com/share/AF1QipObPKrof9b5WEJu5XE0Sg87zju71ibqYemdMPnnmvrWswxdk7MCvBsgMeJIDVT78Q/photo/AF1QipM-Ecdi6MHLL28ckKpbVGy_HTBZyM7UXhwJ2OE5?key=TmdBZVNZZnVyNlBEMmlKMEI2Q0hnX3o4cGR6dlVB';
//window.location.href = first_photo;
function pressKey() {
  var key = 39; // right arrow keycode
  var body = document.getElementsByTagName('body')[0];
  if(document.createEventObject) {
    var eventObj = document.createEventObject();
    eventObj.keyCode = key;
    body.fireEvent("onkeydown", eventObj);
  } else if (document.createEvent) {
    var eventObj = document.createEvent("Events");
    eventObj.initEvent("keydown", true, true);
    eventObj.which = key;
    body.dispatchEvent(eventObj);
  }
}
function next_or_prev() {
  var current_url = window.location.href;
  pressKey();
  if (current_url == window.location.href) {
    // page didnt change, must be at last photo
    // load the first photo
    window.location.href = first_photo;
  }
}
window.setInterval(function(){next_or_prev()}, 6000);