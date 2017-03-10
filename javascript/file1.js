var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
$scope.file=function(){
      $scope.myData = [
  
  {
  "title":"Loaded Boneless Wings",
  
  "description":"Boneless wings smothered in white queso, 3-cheese blend, applewood smoked bacon & chopped green onions. Served with a side of house-made ranch."
  },
  
    {
  "title":"Signature Boneless Wings",
  
  "description":"Hand tossed in your choice of sauce. Served with fresh celery & dipping sauce."
  },
  {
  "title":"Loaded Boneless Wings",
  
  "description":"Boneless wings smothered in white queso, 3-cheese blend, applewood smoked bacon & chopped green onions. Served with a side of house-made ranch."
  },
  
    {
  "title":"Signature Boneless Wings",
  
  "description":"Hand tossed in your choice of sauce. Served with fresh celery & dipping sauce."
  }
    ];
  };
$scope.fil=function(){
      $scope.myData=[
  
  {
  "title":"Chipotle Chicken Fresh Mex Bowl",
  
  "description":"Marinated grilled chicken, house-made corn & black bean salsa, citrus-chile rice & chipotle pesto. Topped with 3-cheese blend, house-made pico de gallo, fresh field greens, chopped cilantro, crispy tortilla strips, fresh sliced avocado & a drizzle of cumin-lime sour cream."
  },
  
    {
  "title":"Lunch Combo - Ranchero Chicken Tacos (2)",
  
  "description":"2 tacos with ranchero Chicken over Jack cheese & topped with chimichurri sauce, house-made pico de gallo, sliced avocado, chopped cilantro & queso fresco wrapped in flour tortillas."
  },
    {
  "title":"Lunch Combo - California Grilled Chicken Flatbread",
  
  "description":"Topped with grilled chicken, applewood smoked bacon, tomato sauce, Monterey Jack, mozzarella, chopped cilantro, house-made pico de gallo, fresh sliced avocado & a drizzle of roasted garlic-aioli."
  },
    {
  "title":"Mix & Match Fajitas",
  
  "description":"We reinvented a classic! Our signature sizzling fajitas served with sliced bell peppers & carmelized onions, topped with chipotle-garlic butter & chopped cilantro."
  },  
  ];
  };
});