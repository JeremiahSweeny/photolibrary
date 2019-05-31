
function getCatInfo() {
    fetch("https://aws.random.cat/meow")
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        const catContainer = document.getElementById("catContainer");
        const catInfoBox = document.createElement("section");
        const catImg = document.createElement("img");
        catImg.src = result.file;
        catInfoBox.append(catImg);
        catContainer.prepend(catInfoBox);
      });
  }
  
  document.getElementById("getCatInfo").onclick = getCatInfo;