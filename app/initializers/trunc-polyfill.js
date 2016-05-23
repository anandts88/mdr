export function initialize() {
  Math.trunc = Math.trunc || ((x) => x < 0 ? Math.ceil(x) : Math.floor(x));
}

export default {
  name: 'trunc-polyfill',
  initialize
};
