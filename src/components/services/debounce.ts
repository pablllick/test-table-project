/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce(func: (...args: any[]) => any, timeout = 1000) {
  let timer: ReturnType<typeof setTimeout> | undefined;

  return function (this: any, ...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
