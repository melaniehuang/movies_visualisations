// var x;
var oCSV;
var barWidth = 1000;
var barHeight = 32;
var gap = 4;
//colors
var oscarsGold = "#b7a261"

function preload() {
  oCSV = loadTable("data/oscars.csv", "csv", "header");
  print("Loaded CSV!");
  numRows = oCSV.getRowCount();
}

function setup() {
  // x = createGraphics(500,500);
  var totalHeight = (barHeight * oCSV.getRowCount()) + (gap * oCSV.getRowCount());
  createCanvas(windowWidth, totalHeight);
  noLoop();
}

function draw(){
  background("#eee");
  fill(oscarsGold);
  noStroke();
  for (var i = 0; i < oCSV.getRowCount(); i++) {
  	var movie = oCSV.getRow(i);
    var title = movie.getString(1);
    var user = movie.getNum(6);

    rect((windowWidth/2)-(barWidth/2),(barHeight*i)+(gap*i), user*barWidth, barHeight);
    
    fill(255);
    textSize(14);
    textAlign(LEFT);
    text(title, 20 + (windowWidth/2)-((barWidth/2)), (barHeight*i)+(gap*i)+22);
    fill(oscarsGold);
  };

}