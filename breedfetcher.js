const request = require("request");
const apiAddress = "https://api.thecatapi.com/v1/breeds/search?q=";
const query = process.argv.slice(2);

request(`${apiAddress}${query}`, (error, response, body) => {
  if (error) {
    console.error(error);
  }
  if (body.length < 3) {
    console.log("search returned no results");
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
