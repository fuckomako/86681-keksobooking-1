const getRandomFromRange = (min, max) => Math.floor(Math.random() * (max + 1 - min) + min);

const getRandomFromArr = (arr) => arr[Math.floor(arr.length * Math.random())];

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const getRandomUniqueArr = (arr) => shuffleArray([...arr]).splice(0, Math.floor(arr.length * Math.random()));

const titles = [
  `Большая уютная квартира`,
  `Маленькая неуютная квартира`,
  `Огромный прекрасный дворец`,
  `Маленький ужасный дворец`,
  `Красивый гостевой домик`,
  `Некрасивый негостеприимный домик`,
  `Уютное бунгало далеко от моря`,
  `Неуютное бунгало по колено в воде`
];

const getLocation = () => ({
  x: getRandomFromRange(300, 900),
  y: getRandomFromRange(150, 500),
});


const types = [
  `flat`,
  `palace`,
  `house`,
  `bungalo`
];

const times = [
  `12:00`,
  `13:00`,
  `14:00`
];

const features = [
  `wifi`,
  `dishwasher`,
  `parking`,
  `washer`,
  `elevator`,
  `conditioner`
];

const photos = [
  `http://o0.github.io/assets/images/tokyo/hotel1.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel2.jpg`,
  `http://o0.github.io/assets/images/tokyo/hotel3.jpg`
];

const generateEntity = () => {
  const location = getLocation();

  return {
    'author': {
      'avatar': `https://robohash.org/${Math.random().toString(10)}`,
    },
    'offer': {
      'title': getRandomFromArr(titles),
      'address': `${location.x}, ${location.y}`,
      'price': getRandomFromRange(1000, 1000000),
      'type': getRandomFromArr(types),
      'rooms': getRandomFromRange(1, 5),
      'guests': getRandomFromRange(1, 10),
      'checkin': getRandomFromArr(times),
      'checkout': getRandomFromArr(times),
      'features': getRandomUniqueArr(features),
      'description': ``,
      'photos': shuffleArray([...photos]),
    },
    'location': {
      'x': location.x,
      'y': location.y,
    }
  };
};

module.exports = {
  generateEntity
};
