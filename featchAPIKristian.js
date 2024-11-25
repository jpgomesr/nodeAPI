const { response } = require("express");

fetch("https://jsonplaceholder.typicode.com/posts")
   .then((response) => response.json())
   .then((json) => {
      json.forEach((p) => {
         console.log(p.title);
      });
   })
   .catch((error) => console.log(error));

fetch("https://jsonplaceholder.typicode.com/posts")
   .then((response) => response.json())
   .then((json) => {
      const regex = /\bdolor\b/i;
      json.forEach((p) => {
         if ((regex.test(p.body) || regex.test(p.title)) && p.userId == 2) {
            console.log(p);
         }
      });
   })
   .catch((error) => console.log(error));

const apiKey = "0c2f327de70dcbdc274fc728afdc43e8";
const city = "London";

fetch(
   `http://api.weatherapi.com/v1/?key=${apiKey}/`
)
   .then((response) => response.json())
   .then((json) => console.log(json))
   .catch((error) => console.log(error));
