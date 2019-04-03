'use strict';

//Store hours for all stores
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

//array to hold all my stores
var allStores = [];

// accesses the table in the DOM
var storeTable = document.getElementById('washingtonStores');

//--------------------------Object Constructor for Store----------------
function Store (location, minCus, maxCus, avgCookieSale){
  this.location = location;
  this.minCus = minCus;
  this.maxCus = maxCus;
  this.avgCookieSale = avgCookieSale;
  this.cookiesPerHour = [];
  this.cookiesEachHour = [];
  this.totalcookiesPerDay = 0;
  this.customerPerHour = function () {
    return getRandomNumber(this.minCus,this.maxCus);
  };
  allStores.push(this);

}

Store.prototype.total = function(){
  for (var i = 0; i < this.cookiesPerHour.length; i++){
    this.totalcookiesPerDay += this.cookiesPerHour[i];
  }
  console.log(this.totalcookiesPerDay);
};
Store.prototype.calCookiesPerHr = function(){
  for (var i = 0; i < hours.length; i++){
    console.log(this.customerPerHour());
    this.cookiesPerHour.push(Math.floor(this.customerPerHour() * this.avgCookieSale));
  }
  console.log(this.cookiesPerHour);
};
Store.prototype.calHourlyresults = function(){
  for (var i = 0; i < hours.length; i++){
    console.log(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
    this.cookiesEachHour.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
  }
  console.log(this.cookiesEachHour);
};
//----------------------Generating different Stores---------------------
var firstPikeExistence = new Store('Pike Place', 23, 65, 6.3);
var seaTacExistence = new Store('SeaTac', 3, 24, 1.2);
var seattleCenExistence = new Store('Seattle Center', 11, 38, 3.7);
var capHillExistence = new Store('Capitol Hill', 20, 38, 2.8);
var alkiBeachExistence = new Store('Alki Beach', 2, 16, 4.6);



firstPikeExistence.calCookiesPerHr();
firstPikeExistence.calHourlyresults();
firstPikeExistence.total();
seaTacExistence.calCookiesPerHr();
seaTacExistence.calHourlyresults();
seaTacExistence.total();
seattleCenExistence.calCookiesPerHr();
seattleCenExistence.calHourlyresults();
seattleCenExistence.total();
capHillExistence.calCookiesPerHr();
capHillExistence.calHourlyresults();
capHillExistence.total();
alkiBeachExistence.calCookiesPerHr();
alkiBeachExistence.calHourlyresults();
alkiBeachExistence.total();

function makeHeaderRow(){
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = '';
  trEl.appendChild(thEl);  
  for(var i = 0; i < hours.length; i++){
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);  
  }
  storeTable.appendChild(trEl);
  console.log(storeTable);
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Location Total';
  trEl.appendChild(thEl);
  storeTable.appendChild(trEl);
  storeTable.setAttribute('border','2');
}

Store.prototype.render = function(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.location;
  trEl.appendChild(tdEl);
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    tdEl = document.createElement('td');
    tdEl.textContent = this.cookiesPerHour[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = this.totalcookiesPerDay;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
};

var totalCookiesPerhourAllStores = [];

// eachHourAllCookies = function(){
//   var trEl = document.createElement('tr');
//   var tdEl = document.createElement('td');
//   tdEl.textContent = 'Totals';
//   trEl.appendChild(tdEl);
//   for (var i = 0; i < totalCookiesPerhourAllStores.length; i++){
//     tdEl = document.createElement('td');
//     tdEl.textContent = this.totalCookiesPerhourAllStores[i];
//     trEl.appendChild(tdEl);
//   }
//   storeTable.appendChild(trEl);
// };

//five for loops for eachhourallcookies
//put rendering of the table footer in the render function


// Store.prototype.eachHourAllCookies = function(){
//   console.log("This is what i need"+this.cookiesPerHour);
//   for(var i = 0; i < this.cookiesPerHour.lenght; i++){
//     this.totalCookiesPerhourAllStores.push() += this.cookiesPerHour[i];
//   }
// }
function findhourlyTotals(){
  for (var i = 0; i < hours.length; i++){
    var hourSum = parseInt(firstPikeExistence.cookiesPerHour[i]) + seaTacExistence.cookiesPerHour[i] + seattleCenExistence.cookiesPerHour[i]+ capHillExistence.cookiesPerHour[i] + alkiBeachExistence.cookiesPerHour[i];
    totalCookiesPerhourAllStores.push(hourSum);
    console.log("Am i working "+totalCookiesPerhourAllStores);
    
}
console.log( "!!!!!!!!!!!"+ParseInt().(firstPikeExistence.cookiesPerHour[0] + seaTacExistence.cookiesPerHour[0] + seattleCenExistence.cookiesPerHour[0]+ capHillExistence.cookiesPerHour[0] + alkiBeachExistence.cookiesPerHour[0]);

  console.log("yayyy" +alkiBeachExistence.cookiesPerHour);
}

findhourlyTotals();
console.log("Am i working "+totalCookiesPerhourAllStores);
//eachHourAllCookies();
console.log(totalCookiesPerhourAllStores);


function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

makeHeaderRow();
renderAllStores();

//---------------------------------------Display in the Element-------------------------------------------

//-------------------------------------------Functions---------------------------------------------------
// //function for random Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
