function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks; // declare variables

    // get all elements withe the class "tabcontent" and hide them 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i <tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }
    // get all elements with the class "tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // show the current tab.
    document.getElementById(categoryName).style.display = "block";
    evt.currentTarget.className += " active";
}