let quotes = [
  {
    quote: "The Force Will Be With You.\n Always.",
    author: "Obi-Wan Kenobi"
    //  image: "url('https://i.ibb.co/3sk6L07/Obi-Wan-Kenobi.jpg')"
  },
  {
    quote: "Do Or Do Not.\nThere Is No Try.",
    author: "Yoda"
    // image:"url('https://i.ibb.co/vJzxSxG/yoda-the-empire-strikes-back-1536x864-349144518002.jpg')"
  },
  {
    quote: "Power! \nUnlimited Power!",
    author: "Darth Sidious"
    // image: "url('https://i.ibb.co/rdv449b/sith.jpg')"
  },
  {
    quote: "Stay On Target.",
    author: "Gold Five"
    // image: "url('https://i.ibb.co/DMmZGXN/gold-five.jpg')"
  },
  {
    quote: "Your Focus Determines Your Reality.",
    author: "Qui-Gon Jinn"
    // image: "url('https://i.ibb.co/txJp8xx/qui-gon-jinn.jpg')"
  },
  {
    quote: "It’s Not My Fault.",
    author: "Han Solo"
    // image: "url('https://i.ibb.co/w4rx8NF/han-solo.jpg')"
  }
];

const btn = document.getElementById("new-quote");
const quote = document.getElementById("text");
const author = document.getElementById("author");

//Event Listener

btn.addEventListener(`click`, getQuote);

function getQuote() {
  let number = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = '<span>"</span>' + quotes[number].quote + '<span>"</span>';
  author.innerHTML = "<span>--</span>" + quotes[number].author;
  // document.body.style.backgroundImage = quotes[number].image;
}
