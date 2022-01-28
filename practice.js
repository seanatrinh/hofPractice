// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function(numbers) {
  var numMultiples = 0;

  _.each(numbers, function(item) {
    if (item % 5 === 0) {
      numMultiples++;
    }
  });

  return numMultiples;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  var isTargetFruit = function(item) {
    return item === targetFruit;
  };

  return _.filter(fruits, isTargetFruit);
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  var hasP = function(item) {
    return item[0] === letter;
  };

  return _.filter(fruits, hasP);

};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  var cookieType = function(item, key) {
    return item[key] === 'cookie';
  };

  return _.filter(desserts, cookieType);
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {

  return _.reduce(products, function(accum, item) {
    var priceSlice = Number(item['price'].slice(1));
    return accum + priceSlice;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  // look at each object in the array
  // create a key f.o.r the type
  // value will be # of times the type is in the array of objs

  return _.reduce(desserts, function(accum, item) {
    // console.log(accum[item['type']]);
    if (accum[item['type']] === undefined) {
      accum[item['type']] = 1;
    } else {
      accum[item['type']] += 1;
    }
    return accum;
  }, {});



};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function(movies) {

  return _.reduce(movies, function(accum, item) {
    if (item['releaseYear'] >= 1990 && item['releaseYear'] <= 2000) {
      accum.push(item['title']);
    }

    return accum;
  }, []);

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(accum, movie) {
    if (accum === true) {
      return accum;
    }

    if (movie['runtime'] < timeLimit) {
      accum = true;
    }

    return accum;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function(dessert) {
    if (dessert['ingredients'].indexOf('flour') === -1) {
      dessert['glutenFree'] = true;
    } else {
      dessert['glutenFree'] = false;
    }
    return dessert;
  });

};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {

};
