
    //Navbar
    function hideIconBar(){
        var iconBar = document.getElementById("iconBar");
        var navigation = document.getElementById("navigation");
        iconBar.setAttribute("style", "display:none;");
        navigation.classList.remove("hide");
    }


function showIconbar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}