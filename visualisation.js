var oCSV;
var barWidth = 400;
var barHeight = 40;

var canvas;
var showButton;
var hideButton;

var oscarsGold = "#b7a261"

function preload() {
  oCSV = loadTable("data/oscars.csv", "csv", "header");
  print("Loaded CSV!");  
}

function setup() {
  var totalHeight = barHeight * oCSV.getRowCount();
  canvas = createCanvas(windowWidth, totalHeight);
  canvas.parent('myCanvas');
  //noCanvas();
  
  background(241, 246, 25);
  fill(0);
  noStroke();

  showButton = createButton('Show all');
  showButton.position(windowWidth-70,10);
  showButton.mousePressed(revealAll);

  hideButton = createButton('Hide all');
  hideButton.position(windowWidth-130,10);
  hideButton.mousePressed(hideAll);
  
  revealAll();
  var titles = selectAll('p');
  titles.hide();

  for (var i = 0; i < oCSV.getRowCount(); i++) {   
    strokeWeight(1);
    var movie = oCSV.getRow(i);
      
    stroke(0);
    line(0, (barHeight*i), windowWidth, (barHeight*i));
    noStroke();
    renderRatings(movie, i);
  }
}

function revealAll() {
    //selectAll('p').show();
    
    for (var i = 0; i < oCSV.getRowCount(); i++) {   
      
      var movie = oCSV.getRow(i);

      fill(0);
      noStroke();

      var budget = movie.getString(7)/1000000;
      budget = Math.round(budget*10)/10;

      var won = "";

      if (movie.getString(2) == "W"){
        won = "Winner";
      } else if (movie.getString(2) == "NA") {
        won = "Pending result...";
      } else {
        won = "Nominee";
      }

      var titleP = createP(movie.getString(1) + '  |  ' + movie.getString(0) + ' ' + won + '  |  Won ' + movie.getString(3) + ' / ' + movie.getString(4) + ' oscars  |  $' + budget + 'm budget  |  ' + movie.getString(9) + '% return' , 20, (barHeight*i)+(barHeight/2+5));
      titleP.id("title" + i);
      titleP.parent('myList');


      if (movie.getString(2) == "W"){
        titleP.addClass('bold');
      }

      //text(movie.getString(1) + "  |  " + movie.getString(0) + " " + won + "  |  Won " + movie.getString(3) + " / " + movie.getString(4) + " oscars  |  $" + budget + "m budget  |  " + movie.getString(9) + "% return" , 20, (barHeight*i)+(barHeight/2+5));     
    }
}

function hideAll() {
  //selectAll('p').hide();
}

function renderRatings(m, i){
  var critic = m.getNum(5)*100;
  var user = m.getNum(6)*100;
  var startingPoint = (windowWidth/100)*user;
  var ratingDiff =  critic - user;
  var circle = false;

  if (ratingDiff < -9 || ratingDiff > 9){
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

  if ((circle == true) && (ratingDiff < 0)) {
    strokeWeight(3);
    stroke(0);
    fill(255,0,0);
    ellipse(startingPoint,(barHeight*i)+(barHeight/2),12,12);
  } else if ((circle == true) && (ratingDiff > 0)) {
    strokeWeight(3);
    stroke(0);
    fill(0,255,0);
    ellipse(startingPoint,(barHeight*i)+(barHeight/2),12,12);
  }

  strokeWeight(1);
}

function mouseMoved() {
  var i = Math.round(mouseY/barHeight); 
  
  console.log(i);
}


