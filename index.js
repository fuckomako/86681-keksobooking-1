const args = process.argv.slice(2);

switch (args[0]) {
  case '--version':
    console.log('v0.0.1');
    break;

  case '--help':
    console.log('Доступные команды:\n\r' +
    '--help    — печатает этот текст;\n\r' +
    '--version — печатает версию приложения;');
    break;

  default:
    if (args.length === 0) {
      console.log('Привет пользователь!\n\r' +
        'Эта программа будет запускать сервер «keksobooking».\n\r'+
        'Автор: Кекс.');
    } else {
      args.forEach(arg =>
        console.error(`Неизвестная команда ${arg}.`)
      );
      console.error('Чтобы прочитать правила использования приложения, наберите "--help"');
      process.exit(1);
    };
}
