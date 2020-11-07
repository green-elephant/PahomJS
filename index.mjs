import closestTime from './src/closestTime.mjs';
import epiphany from './src/epiphany.mjs';

/**
 * @description Запускает таймер на вывод цитаты в ближайшие 7 часов 7 минут 7 секунд
 */
export const makeUff = () => setTimeout(epiphany, closestTime());

export default { makeUff };
