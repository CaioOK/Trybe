const gabarito = (answer) => answer.toLowerCase().replace(/\s/g, '') === 'abacate';

const ask = (string) => string; 
console.log(gabarito(ask('Aba  c ate')));
