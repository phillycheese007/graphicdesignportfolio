 
// sets variable source to the animalTemplate id in index.html
var source = document.getElementById("animalTemplate").innerHTML;
 
// Handlebars compiles the above source into a template
var template = Handlebars.compile(source);
var template2 = Handlebars.compile($('#t').html())
 
// data
var data = {animals: [
  {type: "Dog", sound: "woof"},
  {type: "Cat", sound: "meow"},
  {type: "Cow", sound: "moo"}
]};

var img1 = "/philipdusel/html/pages/images_flowers.html"

 
// data is passed to above template
var output = template(data);
var output2 = template2(img1);

// HTML element with id "animalList" is set to the output above
document.getElementById("animalList").innerHTML = output;
document.getElementById("animalList2").innerHTML = output2;
