'use strict';

//Store hours for all stores
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];
var GrandTotal = 0;

//array to hold all my stores
var allStores = [];
var totalCookiesPerhourAllStores = [];
// accesses the table in the DOM
var storeTable = document.getElementById('washingtonStores');

var salesform = document.getElementById('salesform');
// var storelocation = document.getElementById('location');
// var min = document.getElementById('min');
// var max = document.getElementById('max');
// var avgc = document.getElementById('avgc');


//===================Object Constructor for Store===========================
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
  this.calCookiesPerHr();
  this.calHourlyresults();
  allStores.push(this);
}

Store.prototype.total = function(){
  for (var i = 0; i < this.cookiesPerHour.length; i++){
    this.totalcookiesPerDay += this.cookiesPerHour[i];
    GrandTotal += this.totalcookiesPerDay;
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
//======================Generating different Stores======================
var firstPikeExistence = new Store('Pike Place', 23, 65, 6.3);
var seaTacExistence = new Store('SeaTac', 3, 24, 1.2);
var seattleCenExistence = new Store('Seattle Center', 11, 38, 3.7);
var capHillExistence = new Store('Capitol Hill', 20, 38, 2.8);
var alkiBeachExistence = new Store('Alki Beach', 2, 16, 4.6);
//=======================================================================
// firstPikeExistence.calCookiesPerHr();
// firstPikeExistence.calHourlyresults();
// firstPikeExistence.total();
// seaTacExistence.calCookiesPerHr();
// seaTacExistence.calHourlyresults();
// seaTacExistence.total();
// seattleCenExistence.calCookiesPerHr();
// seattleCenExistence.calHourlyresults();
// seattleCenExistence.total();
// capHillExistence.calCookiesPerHr();
// capHillExistence.calHourlyresults();
// capHillExistence.total();
// alkiBeachExistence.calCookiesPerHr();
// alkiBeachExistence.calHourlyresults();
// alkiBeachExistence.total();



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

function makeFooterRow(){
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = 'Total Each Hour';
  trEl.appendChild(tdEl);
  for (var i = 0; i < hours.length; i++){
    var hourSum = firstPikeExistence.cookiesPerHour[i] + seaTacExistence.cookiesPerHour[i] + seattleCenExistence.cookiesPerHour[i]+ capHillExistence.cookiesPerHour[i] + alkiBeachExistence.cookiesPerHour[i];
    totalCookiesPerhourAllStores.push(hourSum);
    // console.log("Am i working "+totalCookiesPerhourAllStores);
    console.log('hourly sum'+hourSum);   
    tdEl = document.createElement('td');
    tdEl.textContent = totalCookiesPerhourAllStores[i];
    trEl.appendChild(tdEl);
  }
  tdEl = document.createElement('td');
  tdEl.textContent = GrandTotal;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}
function handleStoreSubmit(event) {

  event.preventDefault(); // gotta have it for this purpose. prevents page reload on a 'submit' event

  new Store(event.target.location.value, event.target.min.value, event.target.max.value, event.target.avgc.value);
  
  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();
  // renderAllStores();
}
salesform.addEventListener('submit', handleStoreSubmit);


function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}



//================================Display in the Element================================

makeHeaderRow();
renderAllStores();
makeFooterRow();

//=====================================Functions==========s==============================
// //function for random Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
