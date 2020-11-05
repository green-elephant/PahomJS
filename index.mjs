import closestTime from './src/closestTime.mjs';
import epiphany from './src/epiphany.mjs';

export const makeUff = () => setTimeout(epiphany, closestTime());

export default { makeUff };
