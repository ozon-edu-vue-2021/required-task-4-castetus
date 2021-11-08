// export const debounce = function (cb, delay) {
//   let lastCall;
//   let previousCall = lastCall;
//   lastCall = Date.now();
//   console.log()
//   if (previousCall && this.lastCall - previousCall <= delay) {
//     clearTimeout(lastCallTimer);
//   }
//   let lastCallTimer = setTimeout(() => cb.call());
// };
export function debounce(f, t) {
  return function (args) {
    let previousCall = this.lastCall;
    this.lastCall = Date.now();
    if (previousCall && this.lastCall - previousCall <= t) {
      clearTimeout(this.lastCallTimer);
    }
    this.lastCallTimer = setTimeout(() => f(args), t);
  };
}
