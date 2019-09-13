// from data.js
var tableData = data;


// YOUR CODE HERE!

// Select table body
var tbody = d3.select("tbody");

// Loop over each object, get a pair (key, value), insert a row and append the value
tableData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Additional data append to a previous one
addData = [{
  datetime: "9/11/2019",
  city: "nashville",
  state: "tn",
  country: "us",
  shape: "like humans",
  durationMinutes: "180 mins.",
  comments: "many alliens doing a kind of data science in the vecinity of Vandy University (Tue, Thu, Sat)."
}];
addData.forEach((ufo) => {
  var row = tbody.append("tr");
  Object.entries(ufo).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

// Filter the data by date
// Get the Button
var filterBtn = d3.select("#filter-btn");

// Handle function (Event: click)
filterBtn.on("click", function() {
  // Get the desire date
  var dateUfo = d3.select("#datetime").property("value");

  console.log(dateUfo);

  // Filter the data
  var dateData = tableData.filter(ufo => ufo.datetime === dateUfo);

  console.log(dateData);

  // Reset the previous table
  tbody.html("");

  // Put the new data into the table space
  dateData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

})








// remove any children from the list to
// tbody.html("");


