// Code your solutions in this file
const names = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(names, event) {
  let birthday =[];
  event = "surprise";
  for (let i= 0; i < names.length; i++) {
  birthday[i] = 'Thank you, '+ names[i] +', for the wonderful ' +event+' gift!';
  }
  return birthday;
}

function countdown( countdown ) {
  while ( countdown > 0 ) {
    console.log( countdown );
    countdown -= 1;
  }
  console.log( countdown );
}
