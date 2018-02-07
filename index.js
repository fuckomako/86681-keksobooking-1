const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('Привет пользователь!\n\r' +
    'Эта программа будет запускать сервер «keksobooking».\n\r'+
    'Автор: Кекс.');
    process.exit(0);
};

switch (args[0]) {
  case '--version':
    console.log('v0.0.1');
    process.exit(0);
    break;

  case '--help':
    console.log('Доступные команды:\n\r' +
    '--help    — печатает этот текст;\n\r' +
    '--version — печатает версию приложения;');
    process.exit(0);
    break;

  default:
    console.error(`Неизвестная команда ${args[0]}.`);
    console.error('Чтобы прочитать правила использования приложения, наберите "--help"');
    process.exit(1);
};
