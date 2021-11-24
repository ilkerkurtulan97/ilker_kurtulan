import { series } from "./data.js";
import { fancyLogSeriesReport } from "./utils.js";

export function SeriesTracker(series) {
  this.numberOfWatched = 0;
  this.numberOfUnWatched = 0;
  this.series = [];
  this.lastSerie = undefined;
  this.currentSerie = undefined;
  this.nextSerie = undefined;

  this.add = function (serie) {
    this.series.push(serie);
    //(If a serie has been watched) {
    // Update the count of watched series: "numberOfWatched"--D
    // Check for "lastSerie" property, set if we don't.--D
    // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater,
    // set "lastSerie" prop to "serie" object.
    //}
    if (serie.isWatched) {
      this.numberOfWatched++;
      if(!this.lastSerie){
        this.lastSerie = serie;
      }

      let serieFinishedDate = new Date(serie.finishedDate);
      let lastSerieFinishedDate = new Date(this.lastSerie.finishedDate);

      if (serieFinishedDate > lastSerieFinishedDate) {
        this.lastSerie = serie;
      }
      
      
    } else {
      // If a serie hasn't been watched:
      // Check if serie has "isCurrent" prop
      // Check if we have a "currentSerie" property. Set if we don't.--D
      // Check if we have a "nextSerie" property as well - if we didn't--D
      // set the .currentSerie property, set the .nextSerie property.

      if(!serie.currentSerie){
        this.currentSerie = serie;
      } else if(!serie.nextSerie){
        this.nextSerie = serie;
      }
      this.numberOfUnWatched++;
    }

    //it should also update the number of series marked as watched / unwatched:
    //"numberOfWatched" and "numberOfUnWatched"
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    series.forEach((serie)=>{
      this.add(serie);
    })
    //Use the .add function to handle adding series, so we keep counts updated.--D
  }

  this.finishSerie = function () {
    // find and update currently watching serie in "this.series" array
    // update "lastSerie" with the finished one
    // set "currentSerie" with the next one
    // set new nextSerie value with the next one which has not been watched.
    // update "numberOfWatched" and "numberOfUnWatched" props
    series.forEach((serie)=>{
      if(serie.isCurrent){
        serie.isCurrent = false;
        serie.isWatched = true;
        serie.finishedDate = new Date();
      }
    })
    this.lastSerie = this.currentSerie;

    this.currentSerie = this.nextSerie;

    this.nextSerie.isCurrent = true;

    this.nextSerie = null;

    //--------------
    series.forEach((serie)=>{
      if(!serie.isCurrent && !serie.isWatched && this.nextSerie){
        this.nextSerie = serie;
      }
    })

    this.numberOfWatched++;

    this.numberOfUnWatched--;


  };
  this.printSeriesReport = function () {
    fancyLogSeriesReport(this);
  };
}

// Case 1
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.printSeriesReport(); */

// Case 2
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
mySeriesTracker.finishSerie();
mySeriesTracker.printSeriesReport(); */

// Case 3
// -------------------------------------------------

/* const mySeriesTracker = new SeriesTracker(series);
const newSerie = {
  id: "9",
  name: "Lost",
  genre: "Adventure",
  directorId: "4"
};
mySeriesTracker.add(newSerie);
mySeriesTracker.printSeriesReport(); */
