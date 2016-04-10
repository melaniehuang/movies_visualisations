var rCSV;
var barWidth = 400;
var barHeight = 40;

function preload() {
  rCSV = loadTable("data/dmreviews.csv", "csv", "header");
  print("Loaded CSV!");  
}

function setup() {

  //canvas = createCanvas(windowWidth, rCSV.getRowCount()*50);
  noCanvas();

  for (var i = 0; i < rCSV.getRowCount(); i++) {   
      
    var movieReview = rCSV.getRow(i);
    //"title","url","reviewDate","releaseDate","classification","duration","genre","lead","director","language","distributor","scoreMargaret","scoreDavid"
    
    var movieTitle = movieReview.getString(0);
    var scoreDavid = movieReview.getString(12);
    var scoreMarg = movieReview.getString(11);
    var finalRating = movieReview.getString(13);

    var ratingBar = (barWidth/10)*finalRating;
    'http://p5js.org/', 'this is a link'

    var moviesList = createA(movieReview.getString(1), movieTitle + "  " + finalRating);
    moviesList.parent('myList');

    //TODO: 1925 movies over 27 years
    //TODO: Visualise better
    //"$9.99","http://www.abc.net.au/atthemovies/txt/s2658175.htm","9 September 2009","17/09/2009","","74","Animation","","Tatia Rosenthal","English","Icon","4","3.5"
  }
}

function draw(){
  
}

