'use strict';

//Store hours for all stores
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

//--------------------------------------------Store Objects---------------------------------------------
//First and Pike Object
var firstPike = {
  minCus: 23,
  maxCus: 65,
  avgCookieSale: 6.3,
  
  //get a random number for customers per hour
  randomNumber: function () {
    return getRandomNumber(this.minCus,this.maxCus)
  },
  //calculate how many cookies per hour
  cookieArray: [],
  cookiesPerHr: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(this.randomNumber());
      this.cookieArray.push(Math.floor(this.randomNumber() * this.avgCookieSale));
    };
    console.log(this.cookieArray);
  },
  //show how the results for each hour
  results: [],
  hourlyresults: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
      this.results.push(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
    }
    console.log(this.results);
  },
  //cookie total for the day
  cookieTotal: 0,
  total: function(){
    for (var i = 0; i < this.cookieArray.length; i++){
      this.cookieTotal += this.cookieArray[i];
      
    }
    
    console.log(this.cookieTotal);
  }
}
firstPike.cookiesPerHr();
firstPike.hourlyresults();
firstPike.total();

//Seatac Airport Store Object
var seaTac = {
  minCus: 3,
  maxCus: 24,
  avgCookieSale: 1.2,
  //get a random number for customers per hour
  randomNumber: function () {
    return getRandomNumber(this.minCus,this.maxCus)
  },
  //calculate how many cookies per hour
  cookieArray: [],
  cookiesPerHr: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(this.randomNumber());
      this.cookieArray.push(Math.floor(this.randomNumber() * this.avgCookieSale));
    };
    console.log(this.cookieArray);
  },
  //show how the results for each hour
  results: [],
  hourlyresults: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
      this.results.push(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
    }
    console.log(this.results);
  },
  //cookie total for the day
  cookieTotal: 0,
  total: function(){
    for (var i = 0; i < this.cookieArray.length; i++){
      this.cookieTotal += this.cookieArray[i];
      
    }
    
    console.log(this.cookieTotal);
  }
}
seaTac.cookiesPerHr();
seaTac.hourlyresults();
seaTac.total();

//Seattle Store Object
var seattleCen = {
  minCus: 11,
  maxCus: 38,
  avgCookieSale: 3.7,
  //get a random number for customers per hour
  randomNumber: function () {
    return getRandomNumber(this.minCus,this.maxCus)
  },
  //calculate how many cookies per hour
  cookieArray: [],
  cookiesPerHr: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(this.randomNumber());
      this.cookieArray.push(Math.floor(this.randomNumber() * this.avgCookieSale));
    };
    console.log(this.cookieArray);
  },
  //show how the results for each hour
  results: [],
  hourlyresults: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
      this.results.push(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
    }
    console.log(this.results);
  },
  //cookie total for the day
  cookieTotal: 0,
  total: function(){
    for (var i = 0; i < this.cookieArray.length; i++){
      this.cookieTotal += this.cookieArray[i];
      
    }
    
    console.log(this.cookieTotal);
  }
}
seattleCen.cookiesPerHr();
seattleCen.hourlyresults();
seattleCen.total();

//Capitol Hill Store Object
var capHill = {
  minCus: 20,
  maxCus: 38,
  avgCookieSale: 2.8,
  //get a random number for customers per hour
  randomNumber: function () {
    return getRandomNumber(this.minCus,this.maxCus)
  },
  //calculate how many cookies per hour
  cookieArray: [],
  cookiesPerHr: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(this.randomNumber());
      this.cookieArray.push(Math.floor(this.randomNumber() * this.avgCookieSale));
    };
    console.log(this.cookieArray);
  },
  //show how the results for each hour
  results: [],
  hourlyresults: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
      this.results.push(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
    }
    console.log(this.results);
  },
  //cookie total for the day
  cookieTotal: 0,
  total: function(){
    for (var i = 0; i < this.cookieArray.length; i++){
      this.cookieTotal += this.cookieArray[i];
      
    }
    
    console.log(this.cookieTotal);
  }
}
capHill.cookiesPerHr();
capHill.hourlyresults();
capHill.total();

//Object for Alki Beach Store
var alkiBeach = {
  minCus: 2,
  maxCus: 16,
  avgCookieSale: 4.6,
  //get a random number for customers per hour
  randomNumber: function () {
    return getRandomNumber(this.minCus,this.maxCus)
  },
  //calculate how many cookies per hour
  cookieArray: [],
  cookiesPerHr: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(this.randomNumber());
      this.cookieArray.push(Math.floor(this.randomNumber() * this.avgCookieSale));
    };
    console.log(this.cookieArray);
  },
  //show how the results for each hour
  results: [],
  hourlyresults: function(){
    for (var i = 0; i < hours.length; i++){
      console.log(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
      this.results.push(hours[i] + ': ' + this.cookieArray[i] + ' cookies');
    }
    console.log(this.results);
  },
  //cookie total for the day
  cookieTotal: 0,
  total: function(){
    for (var i = 0; i < this.cookieArray.length; i++){
      this.cookieTotal += this.cookieArray[i];
      
    }
    
    console.log(this.cookieTotal);
  }
}
alkiBeach.cookiesPerHr();
alkiBeach.hourlyresults();
alkiBeach.total();

//---------------------------------------Display in the Element-------------------------------------------
//first and Pike 
var ulEl1 = document.getElementById('pike');
console.log(ulEl1);
for (var i = 0; i < firstPike.results.length; i++){
  console.log(i);
  var liEl1 = document.createElement('li');
  liEl1.textContent = firstPike.results[i];
  ulEl1.appendChild(liEl1);
}
var liTotal1 = document.createElement('li');
liTotal1.textContent = 'Total: ' + firstPike.cookieTotal + ' Cookies';
ulEl1.appendChild(liTotal1);

// Seatac airport
var ulEl2 = document.getElementById('seatac');
console.log(ulEl2);
for (var i = 0; i < seaTac.results.length; i++){
  var liEl2 = document.createElement('li');
  liEl2.textContent = seaTac.results[i];
  ulEl2.appendChild(liEl2);
}
var liTotal2 = document.createElement('li');
liTotal2.textContent = 'Total: ' + seaTac.cookieTotal + ' Cookies';
ulEl2.appendChild(liTotal2);

//Seattle Center
var ulEl3 = document.getElementById('seattle');
console.log(ulEl3);
for (var i = 0; i < seattleCen.results.length; i++){
  var liEl3 = document.createElement('li');
  liEl3.textContent = seattleCen.results[i];
  ulEl3.appendChild(liEl3);
}
var liTotal3 = document.createElement('li');
liTotal3.textContent = 'Total: ' + seattleCen.cookieTotal + ' Cookies';
ulEl3.appendChild(liTotal3);

//Capitol Hill
var ulEl4 = document.getElementById('capitol');
console.log(ulEl1);
for (var i = 0; i < capHill.results.length; i++){
  var liEl4 = document.createElement('li');
  liEl4.textContent = capHill.results[i];
  ulEl4.appendChild(liEl4);
}
var liTotal4 = document.createElement('li');
liTotal4.textContent = 'Total: ' + capHill.cookieTotal + ' Cookies';
ulEl4.appendChild(liTotal4);

//Alki
var ulEl5 = document.getElementById('alki');
console.log(ulEl5);
for (var i = 0; i < alkiBeach.results.length; i++){
  var liEl5 = document.createElement('li');
  liEl5.textContent = alkiBeach.results[i];
  ulEl5.appendChild(liEl5);
}
var liTotal5 = document.createElement('li');
liTotal5.textContent = 'Total: ' + alkiBeach.cookieTotal + ' Cookies';
ulEl5.appendChild(liTotal5);

//-------------------------------------------Functions---------------------------------------------------
// //function for random Number
 function getRandomNumber(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
 }
