const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyNotes = (gabarito, respostas, metodo) => metodo(gabarito, respostas);

const checkCorrect = (gab, resps) => {
  let points = 0;
  for (let i = 0; i < gab.length; i +=1) {
    if (gab[i] === resps[i]) {
      points += 1;
    } else if (resps[i] === 'N.A') {
        points = points;
    } else {
        points -= 0.5;
    }
  }
  return points;
}

console.log(checkCorrect(rightAnswers, studentAnswers));