const request = require("request");
const apiAddress = "https://api.thecatapi.com/v1/breeds/search?q=";
const query = process.argv.slice(2);

console.log(query);

request(`${apiAddress}${query}`, (error, response, body) => {
  const data = JSON.parse(body);
  console.log(typeof data);
  console.log(data[0].description);
});
