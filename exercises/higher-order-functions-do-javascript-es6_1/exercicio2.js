const verify = (num1, num2) => {
    (num1 === num2) ? console.log('Parabéns, você ganhou!!') : console.log('Tente novamete!');
  }
  
  const theSort = (myNumber, check) => {
    const sorted = Math.round(Math.random() * (5 - 1) + 1);
    check(myNumber, sorted);
  }
  
  theSort(2, verify);