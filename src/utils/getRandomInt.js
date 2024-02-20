const getRandomInteger = (min = 1, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));
export default getRandomInteger;