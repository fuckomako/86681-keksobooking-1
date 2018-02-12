require(`colors`);

module.exports = {
  name: `default`,
  description: `Shows default and errors`,
  execute(arg) {
    if (arg) {
      console.error(`Неизвестная команда ${arg}.
Чтобы прочитать правила использования приложения, наберите "--help"`.cyan);
      process.exit(1);
    }
    console.log(`Привет пользователь!
Эта программа будет запускать сервер «Keksobooking».
Автор: Кекс.`.cyan);
  }
};
