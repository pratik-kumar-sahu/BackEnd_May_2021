const sort_by = require("./module");

const name = "libraryID";
const order_of_sort = "DEC"; // or DESC

var newobj = sort_by(name, order_of_sort);
console.log(newobj);
