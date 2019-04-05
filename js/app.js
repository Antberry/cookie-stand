'use strict';

//Store hours for all stores
var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];


//array to hold all my stores
var allStores = [];

// accesses the table in the DOM
var storeTable = document.getElementById('washingtonStores');

var salesform = document.getElementById('salesform');

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
  this.total();
  allStores.push(this);
}
//===========Constructor Prototype============================

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
    this.cookiesEachHour.push(hours[i] + ': ' + this.cookiesPerHour[i] + ' cookies');
  }
  console.log(this.cookiesEachHour);
};
//======================Generating different Stores======================

new Store('Pike Place', 23, 65, 6.3);
new Store('SeaTac', 3, 24, 1.2);
new Store('Seattle Center', 11, 38, 3.7);
new Store('Capitol Hill', 20, 38, 2.8);
new Store('Alki Beach', 2, 16, 4.6);

//=======================================================================

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
  var hourSum = 0;
  var totalSum = 0;
  console.log('ssssss' +allStores);
  for (var i = 0; i < hours.length; i++){
    for(var j = 0; j < allStores.length; j++){
      hourSum += allStores[j].cookiesPerHour[i];
    }
    totalSum += hourSum;
    tdEl = document.createElement('td');
    tdEl.textContent = hourSum;
    trEl.appendChild(tdEl);
    hourSum=0;
  }
  tdEl = document.createElement('td');
  tdEl.textContent = totalSum;
  trEl.appendChild(tdEl);
  storeTable.appendChild(trEl);
}

function handleStoreSubmit(event) {

  event.preventDefault(); 

  new Store(event.target.location.value, event.target.min.value, event.target.max.value, event.target.avgc.value);
  
  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
  makeFooterRow();

}
salesform.addEventListener('submit', handleStoreSubmit);

function renderAllStores() {
  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
}

//===============================Display in the Element================================

makeHeaderRow();
renderAllStores();
makeFooterRow();

//=====================================Functions==========s==============================
// //function for random Number
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
