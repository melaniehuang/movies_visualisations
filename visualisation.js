var oCSV;
var barWidth = 400;
var barHeight = 60;

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

  
  for (var i = 0; i < oCSV.getRowCount(); i++) {   
    var movie = oCSV.getRow(i);
    var user = movie.getNum(6)*100;
    var critic = movie.getNum(5)*100;
    var ratingDiff =  critic - user;
    
    drawGrid(totalHeight, i);

    var startingPoint = (windowWidth/100)*user;

    noStroke();
    rect(startingPoint, (barHeight*i), (windowWidth/100)*ratingDiff, barHeight);
    
    writeTitles(movie, i);
    fill(0);
  };
}

function drawGrid(wh, i){
    stroke(0);
    
    //to check
    // for (var w = 0; w < 10; w++){
    //   line((windowWidth/10)*w, 0, (windowWidth/10)*w, wh);
    // }

    line(0, (barHeight*i), windowWidth, (barHeight*i));
}

function writeTitles(m, i){
    textSize(12);
    textAlign(LEFT); 
    
    var budget = m.getString(7)/1000000;
    budget = Math.round(budget*10)/10;


    if (m.getString(2) == "W"){
      text(m.getString(1) + "  |  " + m.getString(0) + " Winner" + "  |  Won " + m.getString(3) + " / " + m.getString(4) + " oscars  |  $" + budget + "m budget  |  ROI " + m.getString(9) + "%" , 20, (barHeight*i)+(barHeight/2+5));
    } else {
      text(m.getString(1) + "  |  " + m.getString(0) + " Nominee" + "  |  Won " + m.getString(3) + " / " + m.getString(4) + " oscars  |  $" + budget + "m budget  |  ROI " + m.getString(9) + "%" , 20, (barHeight*i)+(barHeight/2+5));
    }
}

function draw(){
  
}
