// var x;
var oCSV;

function preload() {
  oCSV = loadTable("data/oscars.csv", "csv", "header");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  // x = createGraphics(500,500);

  print(oCSV.getRowCount() + " total rows in table");
  print(oCSV.getColumnCount() + " total columns in table");
  print(oCSV.getColumn("Movie"));
}

function draw(){
  background(100);
  

}