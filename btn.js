
function setevents(){
    var p = document.getElementById("para");
    var btn1 = document.getElementById("btn1");

    btn1.onclick = function(){
        if (p.className == "open")
        {
            p.className = "";
            btn1.innerHTML = "Show More";
        }
        else
        {
            p.className = "open";
            btn1.innerHTML = "Show Less";
        }
    };
};

window.onload = function(){
    setevents();
}

var _colors = ["blue", "blueviolet", "brown", "green"]

var div = document.getElementById("tri");

var i = 0;

function anim(){
    if (i === 4)
        i = 0;
    div.style.background = _colors[i];
    i++;
}

setInterval(anim, 3000);