// console.log("we don't need this anymore")

// var thing = "this is "

// var thatThing = thing + "99999"

// console.log(thatThing)

// document.write(thatThing)

// var people = ["nalin", "elizabeth", "owen", "alice", "rebecca", "rebecca", "tanvi", "seth", "will"];
// //			0			1			2		3			4		5			6         7       8

// var fragment = "One of the people here today is ";

// var randomPerson = Math.floor(Math.random() * people.length);

// var sentence = fragment + people[randomPerson]

// document.write(sentence)


var adj = ["smelly", "pink", "old", "crazy", "ugly", "minimalist", "digital", "angry"];

var randomAdj = Math.floor(Math.random() * adj.length);

var noun1 = ["cow", "grandma", "designer", "shoemaker", "doorman", "chef", "monkey"];

var randomNoun1 = Math.floor(Math.random() * noun1.length);

var noun2 = ["mall!!!!!!!", "pool!!!", "beach!!", "coffeeshop!", "disco!!!", "bar!", "junkyard!!"];

var randomNoun2 = Math.floor(Math.random() * noun2.length);

var sentence = "The " + adj[randomAdj] + " " + noun1[randomNoun1] + " will go to the " + noun2[randomNoun2];

// document.write(sentence);

var sentenceElement = document.getElementById("sentence");

sentenceElement.innerText = sentence;





































