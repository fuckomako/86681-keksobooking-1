const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(`Привет пользователь!
Эта программа будет запускать сервер «keksobooking».
Автор: Кекс.`);
  process.exit(0);
}

switch (args[0]) {
  case `--version`:
    console.log(`v0.0.1`);
    break;

  case `--help`:
    console.log(`Доступные команды:
--help    — печатает этот текст;
--version — печатает версию приложения;`);
    break;

  default:
    console.error(`Неизвестная команда ${args[0]}.`);
    console.error(`Чтобы прочитать правила использования приложения, наберите "--help"`);
    process.exit(1);
}
