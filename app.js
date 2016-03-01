//create an array to store the objects
var fruitsArray = [];
// set the initial fruitPrice
var fruitPrice;
// set the total cash
var totalCash = 100;


//build object via constructor Fruit
function Fruit (name, price) {
  this.name = name;
  this.price = price;
  fruitsArray.push(this);
}

//create new fruit objects
var apple = new Fruit ("Apple", 5.00);
var orange = new Fruit ("Orange", 5.00);
var banana = new Fruit ("Banana", 5.00);
//var grape = new Fruit ("Grapes", 5.00);
var pear = new Fruit ("Pear", 5.00);
//var watermelon = new Fruit ("Watermelon", 5.00);

//jquery document ready
$(document).ready(function(){
  $('.fruits').append('<div class="cash">Total Cash: $' + totalCash + '</div>');
  for(var i = 0; i < fruitsArray.length; i++) {
    //set the fruit price and append to the DOM
    //setInitial(fruitsArray[i]);
    appendDOM(fruitsArray[i]);
  }
 $('.button').on('click', spendMoney);
});

function spendMoney () {
  var price = $(this).data('price');
  totalCash -= price;
  console.log(totalCash);

}

//set the initial price for each fruit
function setInitial(object){
  object.price += randomNumber(-0.5, 0.5);

}
//initial append to the DOM
function appendDOM(object){
  $('.fruits').append('<div class="eachfruit"></div>');
  var $el = $('.fruits').children().last();

  $el.append('<p class="' + object.name + '">Fruit Name: ' + object.name + '</p>');
  $el.append('<p class="' + object.name + '-price">Fruit Price: $' + object.price + '</p>');
  $el.append('<button class="button"> Buy </button>');
  //$('.button').data('price', object.price);
  //console.log(object);
  // store the data to the button

}
// set up the function to generate random numbers for each fruit price
function setPrice() {
  for(var i = 0; i < fruitsArray.length; i++){
    fruitPrice = fruitsArray[i].price;
    fruitPrice = randomNumber(0.5, 9.99);
    fruitPrice += randomNumber(-0.5, 0.5);
    if(fruitPrice < 0.5){
      fruitPrice += randomNumber(0, 0.5);
    } else if(fruitPrice > 9.99){
      fruitPrice -= randomNumber(0, 0.5);
    } else {
      fruitPrice += randomNumber(-0.5, 0.5);
    }
    var $el = $('.fruits').children().last();
    var $button = $el.parent().find('button');
    //var price = parseFloat(object.price);
    $button.data('fruit-price', fruitPrice);
    //fruitPrice = fruitPrice.toFixed(2);//to fix the number into two decimal places

//append the new price for the fruit
    $('.eachfruit').find('.' + fruitsArray[i].name + '-price').text("Fruit Price: $" + fruitPrice);
    fruitsArray[i].price = fruitPrice;
    //console.log(fruitsArray);
  }

}
//random number generator
function randomNumber(min, max) {
  return Math.floor((Math.random() * (1 + max - min) + min) * 100) / 100;
 }
//built in function to change the price every 15 seconds
setInterval(setPrice, 3000);
