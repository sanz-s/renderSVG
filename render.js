 function saveAsImage(canvas,code){
  if (type == "png") {ext = ".png"; type = "image/png"}
    if (type == "jpeg") {ext = ".jpeg"; type = "image/jpeg"}
     if (type == "jpg") {ext = ".jpg"; type = "image/jpeg"}
      if (type == undefined) {ext = ".jpg";}
var svg = null;
var width = document.getElementById('w');
var height = document.getElementById('h'); 
  var div = document.createElement("div");
  div.innerHTML = code;
  svg = div.querySelector('svg');
  wid = svg.getAttribute("width") || parseFloat(window.getComputedStyle(svg).width) || parseFloat(svg.style.width);
  hei =  svg.getAttribute("height") || parseFloat(window.getComputedStyle(svg).height) || parseFloat(svg.style.height);
  canvas.width = wid;
  canvas.height = hei;
  var data = new XMLSerializer().serializeToString(svg);
  var win = window.URL || window.webkitURL || window;
  var img = new Image();
  var blob = new Blob([data], { type: 'image/svg+xml' });
  var url = win.createObjectURL(blob);
  img.onload = function () {
    canvas.getContext('2d').drawImage(img, 0, 0);
    win.revokeObjectURL(url);
    // var uri = canvas.toDataURL(type);
    // var a = document.createElement('a');
    // document.body.appendChild(a);
    // a.style = 'display: none';
    // a.href = uri
    // a.download = fileName+ext;
    // a.click();
    // window.URL.revokeObjectURL(uri);
    // document.body.removeChild(a);
  };
  img.src = url;
};