// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (act = "go to the office") {
  return `This Monday, I will ${act}.`;
};

let wrapAdjective = function (wrap = "9") {
  return function (adjective) {
    console.log(`You are ${wrap}${adjective}${wrap}!`);
  };
};
wrapAdjective("^^")("the best");

//  //  //  / //  / // / // / // /  / / // / // / //  / // / /// // //Other unrelated

function printName(book) {
  console.log(book);
}
printName("Rodri");

const printBookarrow = (book) => {
  console.log(book);
};
printBookarrow("Hey");

const makePieArrow = (pie) => {
  console.log(pie);
};
makePieArrow("Blueberrry");

const makeJuicearrow = (juiceflavor) => {
  console.log(
    `I love the taste of an ${juiceflavor}, therefore I will make some ${juiceflavor} juice!`
  );
};
makeJuicearrow("apple");

const weddingday = (dress) => {
  console.log(dress);
};
weddingday("Drape");

const rapArtists = (artist, emotion, emotion2) => {
  console.log(
    `${artist} always seems ${emotion}. Yet he is never ${emotion2},`
  );
};
rapArtists("Kanye", "funny", "light");
rapArtists("Kim", "serious", "kind");

const soccer = (player) => {
  console.log(player);
};
soccer("ronnie");
