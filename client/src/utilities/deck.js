
const values = ['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];
const suits = ['heart','club','spade','diamond'];

export const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const fresh = () => {
  let freshDeck = [];
  for (let s of suits) for (let v of values) {
    freshDeck.push({suit: s, value: v});
  }
  return freshDeck;
}