// prodcuts
var products = [{
  name: "Dream",
  price: 45,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-01-01.jpg',
  thumbTwo: 'images/products/product-01-02.png',
  thumbThree: 'images/products/product-01-03.png'
}, {
  name: "EpicStep Women's Casual Slip On Loafers Metal Chain Flats Thick Sole Shoes Sneakers",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-02-01.jpg',
  thumbTwo: 'images/products/product-02-02.png',
  thumbThree: 'images/products/product-02-03.png'
}, {
  name: "EpicStep Women's Casual Slip On Loafers Metal Chain Flats Thick Sole Shoes Sneakers",
  price: 30,
  description: "You'll love this lightweight runner! It features a mesh upper, padded collar, laces for good fit, soft lining, cushiony memory foam insole for comfort and support, and a non-marking outsole. Manmade materials.",
  condition: 'New',
  thumbOne: 'images/products/product-03.jpg'
}, {
  name: "dream", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-04.jpg'
}, {
  name: "eeeee One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-05.jpg'
}, {
  name: "fffff One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-06.jpg'
}, {
  name: "ggggg One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-07.jpg'
}, {
  name: "hhhhh One", price: 35, description: "something", condition: 'New',
  thumbOne: 'images/products/product-08.jpg'
}];

// Product View with Boostrap Default Media
var searchResult = document.getElementById('search-result');

function showResult(target){
  // structure
  var box = document.createElement('div');
  box.className = "media well";
  var boxImg = document.createElement('div');
  boxImg.className = "media-left";
  var boxBody = document.createElement('div');
  boxBody.className = "media-body";
  var title = document.createElement('h4');
  title.className = "media-heading";
  var link = document.createElement('a');
  link.href="#";
  var image = document.createElement('img');
  image.src=target.thumbOne;
  image.alt=target.name;
  image.className="media-object";
  image.setAttribute('width', '300px');

  // result value
  var titleText = document.createTextNode(target.name);
  var content = document.createElement('p');
  content.innerHTML = "price: " + target.price + "<br>" + "condition: " + target.condition + "<br>" + target.description;

  // node tree
  searchResult.appendChild(box);
  box.appendChild(boxImg);
  box.appendChild(boxBody);
  boxImg.appendChild(link);
  link.appendChild(image);
  boxBody.appendChild(title);
  title.appendChild(titleText);
  boxBody.appendChild(content);
}

// Search Input 
var search = document.getElementsByTagName('form')[0];

search.addEventListener('submit', function(evt){
  searchResult.innerHTML ='';
  evt.preventDefault()
  var results = [];
  var searchInput = document.getElementById('search-input').value;
  for (var i=0; i < products.length; i +=1){
    if (searchInput.toLowerCase() === products[i].name.toLowerCase()){
      results.push(products[i]);
    }
  }
  if (results.length <= 0){
    var noResult = document.createElement('h4');
    noResult.innerText = "sorry, no match."
    searchResult.appendChild(noResult);
  } else {
    for (var i=0; i < results.length; i+=1){
      showResult(results[i]);
    }
  }
});
