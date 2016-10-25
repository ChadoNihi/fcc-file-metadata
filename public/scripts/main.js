document.addEventListener("DOMContentLoaded", function(event) {
  var form = document.forms.namedItem("fileform");

  form.addEventListener('submit', function (ev) {
    var req = new XMLHttpRequest();
    req.open("POST", "???", true);
    req.onload = function(oEvent) {
      if (req.status == 200) {
        //oOutput.innerHTML = "Uploaded!";
      } else {
        //oOutput.innerHTML = "Error " + req.status + " occurred when trying to upload your file.<br \/>";
      }
    };

    req.send(new FormData(form));
    ev.preventDefault();
  });
});
