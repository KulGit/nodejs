const { green, yellow, red } = require("colors/safe");

// just numbers
const isPrime = (number) => {
  if (number < 2) return false;

  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) return false;
  }

  return true;
};

// function to get color
const getColor = (n) => {
  switch (n % 3) {
    case 0:
      return green;
    case 1:
      return yellow;
    case 2:
      return red;
  }
};

const from = process.argv[2];
const to = process.argv[3];

const displayNumber = () => {

    let primeCount = 0;

    for (let i = from; i <= to; i++) {
      if (isPrime(i)) {
        const colorer = getColor(primeCount);
        console.log(colorer(i));
        primeCount++;
      }
    }
    
    if (!primeCount) {
      console.log(yellow(`В диапазоне ${from} - ${to} нет простых чисел!`));
    }
}

const errors = () => {
    if (!(isFinite(from) && isFinite(to))) {
        console.error(red("Входные параметры должны быть числами!!!"));
        process.exit(1);
      }
      if (to < from) {
        console.error(red("Первое число должно быть больше второго"));
        process.exit(1);
      }
}

errors();
displayNumber();
