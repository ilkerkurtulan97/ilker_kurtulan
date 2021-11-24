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

    //If serie has been watched
    if (serie.isWatched) {
      // Update the count of watched series: "numberOfWatched"
      this.numberOfWatched += 1;
      // Check for "lastSerie" property, set if we don't.
      if(!this.lastSerie){
        this.lastSerie = serie;
      } else {

        // Check for "lastSerie"'s finishedDate, if the serie's "finishedDate" prop is greater
        let serieFinishedDate = new Date(serie.finishedDate);
        let lastSerieFinishedDate = new Date(this.lastSerie.finishedDate);
        // set "lastSerie" prop to "serie" object.
        if (serieFinishedDate > lastSerieFinishedDate) {
          this.lastSerie = serie;
        }
      }

      
      // If a serie hasn't been watched:
    } else {
      
      // Check if serie has "isCurrent" prop
      // Check if we have a "currentSerie" property. Set if we don't
      if(serie.isCurrent){
        if (!this.currentSerie) {
          this.currentSerie = serie;
        }
        // Check if we have a "nextSerie" property as well - if we didn't
      }
      // set the .currentSerie property, set the .nextSerie property.
      else if(!this.nextSerie){
        this.nextSerie = serie;
      }
    }
    //it should also update the number of series marked as watched / unwatched:
    //"numberOfWatched" and "numberOfUnWatched"
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;
  };

  //check to see if we have series to process
  if (series.length > 0) {
    //Loop through all of the series in the "series" argument
    series.forEach((serie)=>{
      this.add(serie);
    });
    //Use the .add function to handle adding series, so we keep counts updated.
  }

  this.finishSerie = function () {
    // find and update currently watching serie in "this.series" array
    this.series.forEach((serie) => {
      // update "lastSerie" with the finished one
      if (serie === this.currentSerie) {
        serie.isCurrent = false;
        serie.isWatched = true;
        serie.finishedDate = new Date();
        this.lastSerie = serie;
      }
      // set "currentSerie" with the next one
      if (serie === this.nextSerie) {
        this.currentSerie = serie;
        serie.isCurrent = true;
      }
      // set new nextSerie value with the next one which has not been watched.
      if (this.nextSerie === this.currentSerie) {
        if (!serie.isWatched && !serie.isCurrent) {
          this.nextSerie = serie;
        }
      }
    });
    // update "numberOfWatched" and "numberOfUnWatched" props
    this.numberOfWatched += 1;
    this.numberOfUnWatched = this.series.length - this.numberOfWatched;
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
