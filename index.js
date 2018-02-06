const args = process.argv.slice(2);

switch (args[0]) {
  case `--version`:
    console.log('v0.0.1');
    break;

  case `--help`:
    console.log(`Доступные команды:
    --help    — печатает этот текст;
    --version — печатает версию приложения;`);
    break;

  default:
    console.log(`Привет пользователь!
      Эта программа будет запускать сервер «keksobooking».
      Автор: Кекс.`);

    if (args.length > 0) {
      args.forEach(arg =>
        console.error(`Неизвестная команда ${arg}.
          Чтобы прочитать правила использования приложения, наберите "--help"`),
      );
      process.exit(1);
    };
}
