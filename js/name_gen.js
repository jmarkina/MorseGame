function generator(){
  // Add your own words to the wordlist. Be carefull to obey the showed syntax
  var adjectives = ["Plastic",
 "Necessary",
 "Orange",
 "Healthy",
 "Kind",
 "Hideous",
 "Thirsty",
 "Tasty",
 "Clammy",
 "Automatic",
 "Whispering",
 "Domineering",
 "Ambitious",
 "Tense",
 "Ordinary",
 "Flashy",
 "Physical",
 "Threatening",
 "Stormy",
 "Complex",
 "Victorious",
 "Many",
 "Ugliest",
 "Humorous",
 "Shivering",
 "Thinkable",
 "Garrulous",
 "Courageous",
 "Wholesale",
 "Lying",
 "Protective",
 "Eight",
 "Soft",
 "Offbeat",
 "Unkempt",
 "Unbecoming",
 "Cloudy",
 "Material",
 "Truthful",
 "Frightening",
 "Dark",
 "Defiant",
 "Debonair",
 "Wandering",
 "Zany",
 "Good",
 "Steep",
 "Open",
 "Lean",
 "Wacky",
 "Tightfisted",
 "Delicate",
 "Funny",
 "Wide",
 "Synonymous",
 "Meek",
 "Jumpy",
 "Unsightly",
 "Substantial",
 "Wary",
 "Dreary",
 "Rampant",
 "Flat",
 "Upset",
 "Wretched",
 "Jaded",
 "Quaint",
 "Outgoing",
 "Stiff",
 "Standing",
 "Black",
 "Magenta",
 "Scattered",
 "New",
 "Near",
 "Adventurous",
 "Giddy",
 "Important",
 "Utopian",
 "Public",
 "Sweltering",
 "Melted",
 "Dead",
 "Abashed",
 "Dashing",
 "Embarrassed",
 "Mighty",
 "Blushing",
 "Wealthy",
 "Mature",
 "Gleaming",
 "Early",
 "Slow",
 "Lackadaisical",
 "Peaceful",
 "Light",
 "Low",
 "Certain",
 "Mundane",
 "Motionless"]
  var animals = ["Hamster","Moose","Lama","Duck", "Stallion",
 "Wildcat",
 "Sheep",
 "Aardvark",
 "Bat",
 "Turtle",
 "Musk-ox",
 "Frog",
 "Dingo",
 "Tapir",
 "Opossum",
 "Hippopotamus",
 "Koala",
 "Whale",
 "Chipmunk",
 "Mustang",
 "Lynx",
 "Jaguar",
 "Burro",
 "Rabbit",
 "Aoudad",
 "Hedgehog",
 "Parrot",
 "Guanaco",
 "Antelope",
 "Panther",
 "Toad",
 "Armadillo",
 "Gemsbok",
 "Wolverine",
 "Anteater",
 "Capybara",
 "Dung beetle",
 "Puma",
 "Ewe",
 "Musk deer",
 "Rat",
 "Lemur",
 "Colt",
 "Horse",
 "Hare",
 "Octopus",
 "Baboon",
 "Marmoset",
 "Cat",
 "Duckbill platypus",
 "Lamb",
 "Ground hog",
 "Hyena",
 "Alpaca"]

  // Random numbers are made
  var randomNumber1 = parseInt(Math.random() * adjectives.length);
  var randomNumber2 = parseInt(Math.random() * animals.length);
  window.agent_name = adjectives[randomNumber1] + " " + animals[randomNumber2];
};
  //alert(name); //Delete this when the below works            

$(document).ready(function () {
  generator();
  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(agent_name));
  document.getElementById("placeholder").appendChild(element);
});

function agent_refresh(){
   generator();
  //If there's already a name it is removed  
  if(document.getElementById("result")){
    document.getElementById("placeholder").removeChild(document.getElementById("result"));
  }
  // A div element is created to show the generated name.
  //The Name is added as a textnode. Textnode is added to the placeholder.
  var element = document.createElement("div");
  element.setAttribute("id", "result");
  element.appendChild(document.createTextNode(agent_name));
  document.getElementById("placeholder").appendChild(element);
};