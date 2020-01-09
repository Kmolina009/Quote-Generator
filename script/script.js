//Elements
const body = document.querySelector('body')
const header = document.createElement('h1');
const quoteCtn = document.createElement('div');
const quoteBtn = document.createElement('button');
//Text Elements
header.innerText = "T.S. Eliot Quotes"
quoteBtn.innerText = "Click Me"
body.style.cssText = "background-image: url('https://i.imgur.com/ug4UXJQ.jpg'); display:flex; flex-direction:column; align-items:center;justify-content:center";
// div.style.cssText = "";

// alternate for adding multiple style elements
//body.setAttribute("style","bunch of elements for styling")
body.append(header, quoteCtn, quoteBtn)

//Data
const quotes = [
    "April is the cruelest month, breeding lilacs out of the dead land, mixing memory and desire, stirring dull roots with spring rain.",
    "Do I dare disturb the universe?",
    "I have measured out my life with coffee spoons.",
    "We shall not cease from exploration. And the end of all our exploring will be to arrive where we started and know the place for the first time.",
   "I grow old … I grow old … I shall wear the bottoms of my trousers rolled.",
   "I have heard the key Turn in the door once and turn once only We think of the key, each in his prison Thinking of the key, each confirms a prison",
   "I will show you fear in a handful of dust.",
   "This is the way the world ends, not with a bang, but a whimper.",
   "Only those who will risk going too far can possibly find out how far one can go.",
   "In my beginning is my end."
]

//Run a test that checks the outputs of both random functions
//Look for the amount of times a number is repeated in a row

const randomnum = () =>{
   return  Math.floor(Math.random() * Math.floor(quotes.length))
}

const randomQuote = (e) =>{
    let ranNum =  Math.floor(Math.random() * quotes.length);
    quoteCtn.innerText = quotes[ranNum];
}

//eventListner
quoteBtn.addEventListener('click', randomQuote)

function repeatChecker(){
    //have random numbers logged in an array(or have a HO create one(Map))
    //iterate through array
    //if a number matches the number in the array
    //
    //take two arrays
    //have both random number generators push numbers into arrays
}
window.onload =  quoteCtn.textContent = "Click the button "