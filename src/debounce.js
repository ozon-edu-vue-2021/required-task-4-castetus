export function debounce(f, t) {
  let lastCall;
  return function (args) {
    let previousCall = lastCall;
    lastCall = Date.now();
    if (previousCall && lastCall - previousCall <= t) {
      clearTimeout(lastCallTimer);
    }
    let lastCallTimer = setTimeout(() => f(args), t);
  };
}
