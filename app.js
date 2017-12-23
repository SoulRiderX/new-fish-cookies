'use strict';



var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),
}

var seatac = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),
}


var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),
}

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),
}

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm']



function getRandom (min, max) {
  return Math.random() * (max-min) + min;
}

function calculate (store) {
  for (var i = 0; i < hours.length; i++) {

  }

}



var random = function (min, max) {
  return Math.random() * (max - min) + min;
}


function Store (name, minCustsPerHour, maxCustsPerHour, avgCookiesPerCust) {

  this.name = name;
  this.minCustsPerHour = minCustsPerHour;
  this.maxCustsPerHour = maxCustsPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custsEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;

  allStores.push(this);
}


  allLocations.push(this);
  allStores.push(this);


var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var salesTable = document.getElementById('salestable');

var allLocations = [];


var pikePlaceMarket = {
  name: '1st and Pike',
  minCustsPerHour: 23,
  maxCustsPerHour: 65,
  avgCookiesPerCust: 6.3,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function() {
    for (var i = 0; i < hours.length; i++) {

      var random = getRandom(this.minCustsPerHour, this.maxCustsPerHour)
      this.custsEachHour.push(random);

    var num = random (this.minCustsPerHour, this.maxCustsPerHour)

      this.custsEachHour.push(num);

    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for (var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust)
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function() {
    this.calcCookiesEachHour();
    // access the element in the DOM where our stuff will go

    var ulEl = document.getElementById('seatac');

    var ulEl = document.getElementById('pike');

    //  console.log(ulEl, 'ulEl');
    for (var i = 0; i < hours.length; i++) {
    // create an element
      var liEl = document.createElement('li');
    // give it content
      liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';

    //append it to the parent
      ulEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  },

  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),

  avgCustomers: random(this.minCustomers, this.maxCustomers),

}

var seatacAirport = {

  minCustsPerHour: 3,
  maxCustsPerHour: 24,
  avgCookiesPerCust: 1.2,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function() {
    for (var i = 0; i < hours.length; i++) {

      this.custsEachHour.push(getRandom(this.minCustsPerHour, this.maxCustsPerHour));

      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));

    }
  },
calcCookiesEachHour: function(){
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust)
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
render: function() {
  this.calcCookiesEachHour();
    // access the element in the DOM where our stuff will go

    var ulEl = document.getElementById('alkihill')   //  console.log(ulEl, 'ulEl');
  for (var i = 0; i < hours.length; i++) {


    var ulEl = document.getElementById('seatac')   //  console.log(ulEl, 'ulEl');
  for (var i = 0; i < hours.length; i++) {



      // create an element
    var liEl = document.createElement('li');

      // give it content
    liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';

      //append it to the parent
    ulEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  },

  avgCustomers: getRandom(this.minCustsPerHour, this.maxCustsPerHour),

  avgCustomers: random(this.minCustsPerHour, this.maxCustsPerHour),

}

var seattleCenter = {
  name: 'Seattle Center',
  minCustsPerHour: 11,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 3.7,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function() {

  for (var i =0; i < hours.length; i++) {
    this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCookiesEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust)
    //  console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);

      this.totaldailySales += oneHour;
    //  console.log(this.totalDailySales, 'total');

    //  console.log(this.totalDailySales, 'total');
      this.totaldailySales += oneHour;


    }
  },
  render: function() {
    this.calcCookiesEachHour();
// access the element in the DOM where our stuff will go

    var ulEl = document.getElementById('alkihill');
//  console.log(ulEl, 'ulEl');
for (var i = 0; i < hours.length; i++) {


    var ulEl = document.getElementById('sc');
//  console.log(ulEl, 'ulEl');
for (var i = 0; i < hours.length; i++) {

// create an element
  var liEl = document.createElement('li');

  // give it content
  liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';

  //append it to the parent
  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
ulEl.appendChild(liEl);
}
}


  var capitolHill = {

  name: 'Capitol Hill',
  minCustsPerHour: 20,
  maxCustsPerHour: 38,
  avgCookiesPerCust: 2.3,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function() {
    for (var i = 0; i < hours.length; i++) {

      this.custsEachHour.push(getRandom(this.minCustsPerHour, this.maxCustsPerHour));

      this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));

    }
  },
calcCookiesEachHour: function(){
  this.calcCustsEachHour();
  for(var i = 0; i < hours.length; i++){
    var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust)
      console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
render: function() {
  this.calcCookiesEachHour();
    // access the element in the DOM where our stuff will go

    var ulEl = document.getElementById('alki');

    var ulEl = document.getElementById('cap-hill');

    //  console.log(ulEl, 'ulEl');
  for (var i = 0; i < hours.length; i++) {

      // create an element
    var liEl = document.createElement('li');

      // give it content
    liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';

      //append it to the parent
    ulEl.appendChild(liEl);
    }

    liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
    ulEl.appendChild(liEl);
  },

  avgCustomers: getRandom(this.minCustomers, this.maxCustomers),

  avgCustomers: random(this.minCustomers, this.maxCustomers),

}

var alki = {
  name: 'Alki',
  minCustsPerHour: 2,
  maxCustsPerHour: 16,
  avgCookiesPerCust: 4.6,
  custsEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function() {

  for (var i =0; i < hours.length; i++) {
    this.custsEachHour.push(random(this.minCustsPerHour, this.maxCustsPerHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCookiesEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custsEachHour[i] * this.avgCookiesPerCust)
    //  console.log(oneHour, 'one hour');
      this.cookiesEachHour.push(oneHour);

      this.totaldailySales += oneHour;
    //  console.log(this.totalDailySales, 'total');

    //  console.log(this.totalDailySales, 'total');
      this.totaldailySales += oneHour;

    }
  },
  render: function() {
    this.calcCookiesEachHour();
// access the element in the DOM where our stuff will go

    var ulEl = document.getElementById('seatac');

    var ulEl = document.getElementById('alki');

//  console.log(ulEl, 'ulEl');
for (var i = 0; i < hours.length; i++) {

// create an element
  var liEl = document.createElement('li');

  // give it content
  liEl.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';

  //append it to the parent
  ulEl.appendChild(liEl);
}

liEl = document.createElement('li');
liEl.textContent = 'Total: ' + this.totalDailySales + ' cookies';
ulEl.appendChild(liEl);
}
}

pikePlaceMarket.render();

// comment
