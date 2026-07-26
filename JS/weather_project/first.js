const quotes = [
  "If you wish to make an apple pie from scratch, you must first invent the universe. — Carl Sagan",
  "Not all those who wander are lost. — J.R.R. Tolkien",
  "Reality is that which, when you stop believing in it, doesn't go away. — Philip K. Dick",
  "Never memorize something that you can look up. — Albert Einstein",
  "If you think you are too small to make a difference, try sleeping with a mosquito. — Dalai Lama",
  "The truth is rarely pure and never simple. — Oscar Wilde",
  "I am so clever that sometimes I don't understand a single word of what I am saying. — Oscar Wilde",
  "No business like show business. — Irving Berlin",
  "There are two ways of spreading light: to be the candle or the mirror that reflects it. — Edith Wharton",
  "Everything is a remix. — Kirby Ferguson",
  "A person who never made a mistake never tried anything new. — Albert Einstein",
  "There is no comfort in the truth, only pain. What you do with it is up to you. — Margaret Weis",
  "I have standard code, but my life has no standard. — Anonymous",
  "The static, the noise, it's all part of the signal. — Unknown",
  "The internal machinery of life, the chemistry of the parts, is something beautiful. — Richard Feynman",
  "Whatever you are, be a good one. — Abraham Lincoln",
  "Do or do not. There is no try. — Yoda",
  "People say nothing is impossible, but I do nothing every day. — A.A. Milne",
  "An unexamined life is not worth living. — Socrates",
  "The scariest moment is always just before you start. — Stephen King"
];

function generateQuote(){
const text = document.getElementById("quote");
const index = Math.floor(Math.random()*quotes.length);
text.textContent = quotes[index];
}

setInterval(generateQuote,3000);

const colors = [
  "#1A365D", "#2B6CB0", "#4299E1", "#667EEA", "#7F9CF5",
  "#2D3748", "#4A5568", "#718096", "#CBD5E0", "#E2E8F0",
  "#E53E3E", "#F56565", "#ED8936", "#ECC94B", "#48BB78",
  "#38B2AC", "#9F7AEA", "#ED64A6", "#F687B3", "#00B5D8",
  "#F7FAFC", "#EDF2F7", "#E6FFFA", "#EBF8FF", "#FEFCBF",
  "#FEEBC8", "#FED7D7", "#E9D8FD", "#D9C3B0", "#8C7864"
];

function generatebgcolor(){
  const element = document.getElementById("root");
  const index = Math.floor(Math.random()*colors.length);
  element.setAttribute("style",`background-color:${colors[index]};`);
}

setInterval(generatebgcolor,3000);