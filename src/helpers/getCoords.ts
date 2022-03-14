export const getCoords = (coords: string): Array<number> =>
  coords
    .split(' ')
    .map(item => Number(item))
    .reverse();
