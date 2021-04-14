
function changer_style() {
    var x = document.getElementById('parag1');
    x.style.color = "white";
    x.style.padding = "5px";
    x.style.border = "1px";
    x.style.background = "black";
    parag1.className += " active";
}

function getAttributes() {
    var x = document.getElementById("w3r");
    alert("La valeur de href est    " +"\"" +x.href+"\"");
    alert("La valeur de hreflang est    " +"\"" + x.hreflang+ "\"");
    alert("La valeur de rel est    " +"\"" + x.rel+ "\"");
    alert("La valeur de target est    " +"\"" + x.target+ "\"");
    alert("La valeur de type est    " + "\"" +x.type+ "\"");
}

function getFormvalue() {
    var x = document.getElementById("form1");
    for (let ele of x) {
        if (ele.name == "fname") {
            alert("Le prénom est "+ele.value+".");
        }else if(ele.name == "lname"){
            alert("Le nom est "+ele.value+".");
        }
    }
}