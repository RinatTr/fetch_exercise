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
  let moviesArr = [];
  let fetchObj = fetch("https://ghibliapi.herokuapp.com/films/")
              .then(response => {
                return response.json();
              }).then(movies => {
                moviesArr = movies;
                moviesArr.forEach(movie,i => {
                  let opt = document.createElement('option');
                  opt.innerText = movie.title;
                  selectMenu.appendChild(opt);
                })
              }).then(()=> {

              })


});
