document.addEventListener("DOMContentLoaded", () => {

  let button = document.querySelector(".get");
  button.addEventListener("click", () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(resp => {
        return resp.json(); //returns a promise, parses the response object.
      }).then(dogImgURL => {
        let img = document.querySelector(".dogImg");
        img.setAttribute("src",dogImgURL.message);
        img.style.height = "300px";
        img.style.width = "auto";
      });
  })

  let selectMenu = document.querySelector("#movies");
  let infoBox = document.querySelector(".movieInfo");
  let moviesArr = [];

  const displayInfo = (id) => {
    infoBox.innerHTML =
      `<p>Title: ${moviesArr[id].title}</p>
       <p>Director: ${moviesArr[id].director}</p>
       <p>Description: ${moviesArr[id].description}</p>
       <p>Release date: ${moviesArr[id].release_date}</p>
       <p>Rotten Tomato Score: ${moviesArr[id].rt_score}</p>
       `
  }

  fetch("https://ghibliapi.herokuapp.com/films/")
              .then(response => {
                return response.json();
              }).then(movies => {
                moviesArr = movies;
                console.log(moviesArr);
                moviesArr.forEach((movie,i) => {
                  let opt = document.createElement('option');
                  opt.innerText = movie.title;
                  opt.setAttribute("id",i);
                  selectMenu.appendChild(opt);
                })
              });

  selectMenu.addEventListener("change", (event) => {
                let idx = parseInt(event.target.selectedOptions[0].id); //gets the id which is the idx
                displayInfo(idx);
              })
});
