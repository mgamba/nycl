var kittenGenerator = {
  requestKittens: function() {
    rows = document.querySelectorAll(".row");
    for (var r = 0; r < rows.length; r++) {
      
      var s = document.createElement('span');
      s.innerHTML = '▷';
      s.onclick = function() { 
        if (this.innerHTML == '▷') {
          this.innerHTML = '▼';

          var p = document.createElement('p');
          p.className = "thumbs";

          var httpRequest = new XMLHttpRequest()
          httpRequest.onreadystatechange = function (xmlhttp) {
            if (httpRequest.readyState==4 && httpRequest.status==200) {
              var div = document.createElement('div');
              div.innerHTML = httpRequest.responseText;
              imgs = div.querySelectorAll("#thumbs a");
              for (var m = 0; m < imgs.length; m++) {
                p.appendChild(imgs[m]);
              }
            }
          }
          url = this.parentNode.querySelectorAll("a")[0].href;
          httpRequest.open('GET', url);
          httpRequest.send();

          this.parentNode.appendChild(p);
        } else if (this.innerHTML == '►') {
          this.innerHTML = '▼';
          links = this.parentNode.querySelectorAll(".thumbs")[0].style.visibility = "visible";
          links = this.parentNode.querySelectorAll(".thumbs")[0].style.height = '';
        } else {
          this.innerHTML = '►';
          links = this.parentNode.querySelectorAll(".thumbs")[0].style.visibility = "hidden";
          links = this.parentNode.querySelectorAll(".thumbs")[0].style.height = '0px';
        }
      };
      rows[r].insertBefore(s, rows[r].firstChild);
    }
  },
};

kittenGenerator.requestKittens();
