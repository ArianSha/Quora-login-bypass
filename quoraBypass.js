// ==UserScript==
// @name         Quora login bypass
// @description  View Quora entries without having to login
// @namespace    https://github.com/ArianSha/Quora-login-bypass
// @version      0.1
// @author       Arian Sharifi (https://github.com/ArianSha)
// @homepageURL  https://github.com/ArianSha/Quora-login-bypass
// @match        https://www.quora.com/*
// @license       MIT
// @grant        none
// ==/UserScript==

function popupBypass(){
    var url = window.location.href;

    if(url.substr(url.length - 8) != '?share=1'){
       var newUrl = url + '?share=1'
       window.location.replace(newUrl)
    }
}
popupBypass()
