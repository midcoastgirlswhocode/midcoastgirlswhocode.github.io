function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  var elemToDisplay = document.getElementById(tabName);

  if (null == elemToDisplay) {
    alert("Element: " + tabName + " is not a valid ID");
    return;
  }
  elemToDisplay.style.display = "block";
  evt.currentTarget.className += " active";
}

function openCat(id) {
  window.location.href = id + ".html";
}
