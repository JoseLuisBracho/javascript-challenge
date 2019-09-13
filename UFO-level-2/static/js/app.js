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

// Filter the data by multiple criteria
// Get the data to fill the select controls
tableData = tableData.concat(addData);  // Join the two array of objects

// Populate the selector for date
var sel_date = [...new Set(tableData.map(item => item.datetime))];
sel_date.sort();
for (let i=0; i<sel_date.length; i++) {
  d3.select("#selDate")
    .append('option')
    .text(sel_date[i])
    .attr("value", sel_date[i])
};

// Populate the selector for city
var sel_city = [...new Set(tableData.map(item => item.city))];
sel_city.sort();
for (let i=0; i<sel_city.length; i++) {
  d3.select("#selCity")
    .append('option')
    .text(sel_city[i])
    .attr("value", sel_city[i])
};

// Populate the selector for state
var sel_state = [...new Set(tableData.map(item => item.state))];
sel_state.sort();
for (let i=0; i<sel_state.length; i++) {
  d3.select("#selState")
    .append('option')
    .text(sel_state[i])
    .attr("value", sel_state[i])
};

// Populate the selector for country
var sel_country = [...new Set(tableData.map(item => item.country))];
sel_country.sort();
for (let i=0; i<sel_country.length; i++) {
  d3.select("#selCountry")
    .append('option')
    .text(sel_country[i])
    .attr("value", sel_country[i])
};

// Populate the selector for shape
var sel_shape = [...new Set(tableData.map(item => item.shape))];
sel_shape.sort();
for (let i=0; i<sel_shape.length; i++) {
  d3.select("#selShape")
    .append('option')
    .text(sel_shape[i])
    .attr("value", sel_shape[i])
};

// *********************************************************************************
d3.select("#selDate").on("change", () => {
  let timeSelector = d3.select("#selDate").property("value");

  let dateData = tableData.filter(srh => srh.datetime === timeSelector);

  tbody.html("");

  dateData.forEach((srh) => {
    let row = tbody.append("tr");
    Object.entries(srh).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

// *********************************************************************************
d3.select("#selCity").on("change", () => {
  let citySelector = d3.select("#selCity").property("value");

  let cityData = tableData.filter(srh => srh.city === citySelector);

  tbody.html("");

  cityData.forEach((srh) => {
    let row = tbody.append("tr");
    Object.entries(srh).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

// *********************************************************************************
d3.select("#selState").on("change", () => {
  let stateSelector = d3.select("#selState").property("value");

  let stateData = tableData.filter(srh => srh.state === stateSelector);

  tbody.html("");

  stateData.forEach((srh) => {
    let row = tbody.append("tr");
    Object.entries(srh).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

// *********************************************************************************
d3.select("#selCountry").on("change", () => {
  let countrySelector = d3.select("#selCountry").property("value");

  let countryData = tableData.filter(srh => srh.country === countrySelector);

  tbody.html("");

  countryData.forEach((srh) => {
    let row = tbody.append("tr");
    Object.entries(srh).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

// *********************************************************************************
d3.select("#selShape").on("change", () => {
  let shapeSelector = d3.select("#selShape").property("value");

  let shapeData = tableData.filter(srh => srh.shape === shapeSelector);

  tbody.html("");

  shapeData.forEach((srh) => {
    let row = tbody.append("tr");
    Object.entries(srh).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });
});

// Get the Button
var clearFilterBtn = d3.select("#clearFilter-btn");

// Handle function (Event: click)
clearFilterBtn.on("click", function() {
  // Reset the previous table
  tbody.html("");

  // Put the new data into the table space
  tableData.forEach((ufo) => {
    let row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      let cell = row.append("td");
      cell.text(value);
    });
  });

});