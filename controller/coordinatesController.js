const randomLocation = require("random-location");
const pipe = require("@ramda/pipe");
const randomId = require("random-id");

// return ramdom coordinates
function getRandomCoordinates() {
  const P = {
    latitude: 40.7768006,
    longitude: -100.4187928
  };

  const R = 600000; // meters

  return randomLocation.randomCirclePoint(P, R);
}

// return the coordinate with the default longitude
function changeLong(coordinate) {
  const defaultPath = -100.4187928;
  return { ...coordinate, longitude: defaultPath };
}

// Add random Id to the coordinate obj
function addId(coordinate) {
  // length of the id (default is 30)
  var len = 10;

  // pattern to determin how the id will be generated
  // default is aA0 it has a chance for lowercased capitals and numbers
  var pattern = "aA0";
  const id = randomId(len, pattern);
  return { ...coordinate, id };
}

exports.getRoutes = (req, res, next) => {
  const routes = [];
  const numberOfRoutes = 50; // Number of Routes

  // Create routes array
  for (let i = 0; i < numberOfRoutes; i++) {
    routes.push(pipe(getRandomCoordinates, changeLong, addId)());
  }

  res.status(200).json({
    routes
  });
};
