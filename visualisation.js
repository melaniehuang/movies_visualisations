var ratings = [86, 90, 89, 86, 94, 95, 78, 85, 81, 86, 92, 86, 84, 94, 90, 74, 89, 91, 80, 82, 83, 89, 82];
var critics = [82, 98, 88, 93, 91, 97, 96, 96, 92, 72, 98, 92, 90, 99, 80, 94, 96, 93, 93, 94, 97, 94, 91];

var dataset = [];

for (var i = 0; i < ratings.length; i++) {
  var r = ratings[i];
  var c = critics[i];
  dataset.push(r);
  dataset.push(c);
}

//mapping values to a px width
var x = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, 1000]);

//Select the chart container using class selector
d3.select(".chart")
//Initiate the data join by defining the selection to wich we will join data - in this case the divs
  .selectAll("div")
//Joining the data to the selection
    .data(dataset)
  .enter().append("div")
//Set the width of each new bar as a multiple of the set ratio
    .style("width", function(d) { return x(d) + "px"; })
 //Add text labels
    .text(function(d) { return d; });
