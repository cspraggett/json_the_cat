const request = require("request");
const apiAddress = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = (breedName, callback) => {
  request(`${apiAddress}${breedName}`, (error, response, body) => {
    if (error) {
      callback(error.message);
    } else if (body.length < 3) {
      callback("Breed not found");
    } else {
      const data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
// if (error) {
//   return error;
