"use strict";
window.onload = function () {
    var parent = document.getElementById("color-box-parent");
    var dom = "";
    for (var i = 1; i < 1000000; ++i) {
        var color = "#" + ("000000" + i).slice(-6);
        dom += '<div class="color-box" style="background-color:' + color + '"></div>';
    }
    parent.innerHTML = dom;
};
