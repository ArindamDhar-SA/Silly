/**
 * Created by arindamd on 2015/11/10.
 */
var doItBtn;
var counter = 0;
var txt ="Arindam"
window.onload = function () {
    doItBtn = document.getElementById("do it");

    doItBtn.onclick = onDoitClick
}

function onDoitClick()
{
    counter++;
    document.getElementById("result").innerHTML = txt + "-"+counter
}