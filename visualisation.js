// var x;
var oCSV;
var barWidth = 600;
var barHeight = 120;
var gap = 2;
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
  rectMode(CENTER);
}

function draw(){
  background("#eee");
  
  fill(200);
  noStroke();
  for (var i = 0; i < oCSV.getRowCount(); i++) {
  	var movie = oCSV.getRow(i);
    var title = movie.getString(1);
    var critic = movie.getNum(5);

    var winners = movie.getString(2);
         
    var ratingDiff =  critic - movie.getNum(6);
    print(ratingDiff);

    if (winners == "W"){
    	fill(255,237,0);
    }

    rect((windowWidth/2),60+(barHeight*i)+(gap*i), critic*barWidth, barHeight);
    
    if (ratingDiff < -0.05){
    	fill("#1abc9c");
    } else if (ratingDiff > 0.05){
    	fill("#e74c3c");
    } else {
    	fill(150);
    }

    rect((windowWidth/2),60+(barHeight*i)+(gap*i), ratingDiff*barWidth, barHeight);

    fill(255);
    textSize(22);
    textAlign(CENTER);
    text(title, windowWidth/2, (barHeight*i)+(gap*i)+(barHeight/2+6));
    fill(200);
  };
}
