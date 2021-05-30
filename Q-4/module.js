const library = require("./data");

const updatedLibrary = [];

const sort_by = (name, order) => {
  const arr = library.map((func) => func[name]);
  if (order === "ASC") {
    arr.sort();
    for (var i = 0; i < arr.length; i++) {
      updatedLibrary.push(library.filter((e) => e[name] === arr[i]));
    }
    return updatedLibrary;
  } else if (order === "DESC") {
    arr.sort().reverse();
    for (var i = 0; i < arr.length; i++) {
      updatedLibrary.push(library.filter((e) => e[name] === arr[i])[0]);
    }
    return updatedLibrary;
  } else {
    return "Please check the spellings";
  }
};

module.exports = sort_by;
