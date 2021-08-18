'use strict';

const hours = ['7am', '8am', '9am'];

// const helperObj = require('./helpers.js');
const helpers = require('./helpers.js')

const Store = function(location, min, max, avg) {
  this.location = location;
  this.minCustomersPerHour = min;
  this.maxCustomersPerHour = max;
  this.avgCookiesPerCustomer = avg;
  this.projections = {};
  this.projectSales();
  Store.stores.push(this);
};

Store.stores = [];

Store.prototype.projectSales = function() {
  hours.forEach( (hour) => {
    this.projections[hour] = helpers.randomNumberBetween(this.minCustomersPerHour, this.maxCustomersPerHour) * this.avgCookiesPerCustomer;
  });
  helpers.renderName();
};

module.exports = Store;