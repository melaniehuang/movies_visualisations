var oCSV;
var barWidth = 400;
var barHeight = 40;

var oscarsGold = "#b7a261"

function preload() {
  oCSV = loadTable("data/oscars.csv", "csv", "header");
  print("Loaded CSV!");  
}

function setup() {
  // x = createGraphics(500,500);
  var totalHeight = barHeight * oCSV.getRowCount();
  createCanvas(windowWidth, totalHeight);

  background(241, 246, 25);
  fill(0);
  noStroke();
  
  for (var i = 0; i < oCSV.getRowCount(); i++) {   
    strokeWeight(1);
    var movie = oCSV.getRow(i);
    
    stroke(0);
    line(0, (barHeight*i), windowWidth, (barHeight*i));
    noStroke();
    
    writeTitles(movie, i);
    renderRatings(movie, i);

    fill(0);
  }
}

function writeTitles(m, i){
  textSize(12);
  textAlign(LEFT); 
    
  var budget = m.getString(7)/1000000;
  budget = Math.round(budget*10)/10;

  var won = "";

  if (m.getString(2) == "W"){
    textStyle(BOLD);
    won = "Winner";
  } else if (m.getString(2) == "NA") {
    textStyle(NORMAL);
    won = "Pending result...";
  } else {
    textStyle(NORMAL);
    won = "Nominee";
  }

  text(m.getString(1) + "  |  " + m.getString(0) + " " + won + "  |  Won " + m.getString(3) + " / " + m.getString(4) + " oscars  |  $" + budget + "m budget  |  " + m.getString(9) + "% return" , 20, (barHeight*i)+(barHeight/2+5));
}

function renderRatings(m, i){
  fill(0);
  var critic = m.getNum(5)*100;
  var user = m.getNum(6)*100;
  var startingPoint = (windowWidth/100)*user;
  var ratingDiff =  critic - user;
  var circle = false;

  if (ratingDiff < -4 || ratingDiff > 4){
    fill(0);
    var circle = true;
  } else {
    fill(0, 40);
  }

  if (ratingDiff == 0){
    stroke(0, 40);
    strokeWeight(2);
    line(startingPoint, barHeight*i, startingPoint, (barHeight*i)+barHeight);
  } else {
    rect(startingPoint, barHeight*i, (windowWidth/100)*ratingDiff, barHeight);
  }

  if (circle == true) {
    strokeWeight(3);
    stroke(0);
    fill(241, 246, 25);
    ellipse(startingPoint,(barHeight*i)+(barHeight/2),12,12);
  }
    


}

function draw(){
  
}
