export const shuffle = (arr) => {
  for (let i = arr.length; i > 1; i--) {
    let j = Math.floor(Math.random() * i);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}