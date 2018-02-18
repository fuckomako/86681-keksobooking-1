const {generateEntity} = require(`../src/generate-entity`);
const assert = require(`assert`);


describe(`Generate random entity`, () => {
  it(`should return right data`, () => {
    const entity = generateEntity();

    console.log(JSON.stringify(generateEntity()));
    console.log(JSON.stringify(generateEntity()));
    console.log(JSON.stringify(generateEntity()));
    console.log(JSON.stringify(generateEntity()));

    assert.equal(typeof entity.author.avatar, `string`, `avatar error`);
    assert.equal(entity.author.avatar.substr(0, 21), `https://robohash.org/`, `invalid avatar link`);
    assert.ok([
      `Большая уютная квартира`,
      `Маленькая неуютная квартира`,
      `Огромный прекрасный дворец`,
      `Маленький ужасный дворец`,
      `Красивый гостевой домик`,
      `Некрасивый негостеприимный домик`,
      `Уютное бунгало далеко от моря`,
      `Неуютное бунгало по колено в воде`
    ].includes(entity.offer.title), `offer error`);
    assert.equal(typeof entity.offer.address, `string`, `address error`);
    assert.equal(typeof entity.offer.price, `number`, `price error`);
    assert.ok(entity.offer.price >= 1000 && entity.offer.price <= 1000000,
        `price is out of range`);
    assert.equal(typeof entity.offer.type, `string`, `type error`);
    assert.ok([
      `flat`,
      `palace`,
      `house`,
      `bungalo`
    ].includes(entity.offer.type), `invalid type`);
    assert.equal(typeof entity.offer.rooms, `number`, `rooms error`);
    assert.ok(entity.offer.rooms >= 1 && entity.offer.rooms <= 5, `rooms count is out of range`);
    assert.equal(typeof entity.offer.guests, `number`, `guests error`);
    assert.ok(entity.offer.guests >= 1 && entity.offer.guests <= 10, `guests count is out of range`);
    assert.equal(typeof entity.offer.checkin, `string`, `chekin error`);
    assert.ok([
      `12:00`,
      `13:00`,
      `14:00`
    ].includes(entity.offer.checkin), `chekin type error`);
    assert.equal(typeof entity.offer.checkout, `string`, `checkout error`);
    assert.ok([
      `12:00`,
      `13:00`,
      `14:00`
    ].includes(entity.offer.checkout), `chekout type error`);
    assert.equal(typeof entity.offer.features, `object`, `features error`);
    assert.ok(Array.isArray(entity.offer.features), `features isArray error`);
    assert.equal(typeof entity.offer.description, `string`, `description error`);
    assert.equal(typeof entity.offer.photos, `object`, `photos error`);
    assert.ok(Array.isArray(entity.offer.photos), `photos isArray error`);
    assert.ok(entity.offer.photos.length === 3, `photos length error`);
    assert.equal(typeof entity.location.x, `number`, `location x error`);
    assert.ok(entity.location.x >= 300 && entity.location.x <= 900, `location x is out of range`);
    assert.equal(typeof entity.location.y, `number`, `location y error`);
    assert.ok(entity.location.y >= 150 && entity.location.y <= 500, `location y is out of range`);
  });
});
