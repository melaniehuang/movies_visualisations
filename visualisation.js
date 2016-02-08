var ratings = [86, 90, 89, 86, 94, 95, 78, 85, 81, 86, 92, 86, 84, 94, 90, 74, 89, 91, 80, 82, 83, 89, 82];
var critics = [82, 98, 88, 93, 91, 97, 96, 96, 92, 72, 98, 92, 90, 99, 80, 94, 96, 93, 93, 94, 97, 94, 91];

var dataset = [];

var width = 1000,
    barHeight = 20;

for (var i = 0; i < ratings.length; i++) {
  var r = ratings[i];
  var c = critics[i];
  dataset.push(r);
  dataset.push(c);
}

//mapping values to a px width
var x = d3.scale.linear()
    .domain([0, d3.max(dataset)])
    .range([0, width]);

var chart = d3.select(".chart")
    .attr("width", width)
    .attr("height", barHeight * dataset.length);

var bar = chart.selectAll("g")
    .data(dataset)
  .enter().append("g")
    .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });

bar.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);

bar.append("text")
    .attr("x", function(d) { return x(d) - 3; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function(d) { return d; });