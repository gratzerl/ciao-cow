import * as data from './assets/farewells.json';

const { lines } = data;
export const randomBetween = (min: number, max: number) => Math.ceil(Math.random() * (max - min) + min);

export const getRandomFarewell = (): string => {
    const idx = randomBetween(0, lines.length - 1);
    return lines[idx];
};