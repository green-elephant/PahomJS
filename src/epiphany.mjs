import quote from './pahom.mjs';

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const epiphany = () => {
  const index = random(0, quote.length);
  if ('alert' in globalThis) {
    alert(quote[index]);
  } else {
    console.log(quote[index]);
  }
};

export default epiphany;
