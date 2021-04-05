// const repeat = (count, action) => {
//   for (let i = 0; i <= count; i +=1) {
//     action(i);
//   }
// }

// repeat(15, (num) => {
//   if (num % 2 !== 0) {
//     console.log(num, 'Is odd');
//   }
// });



// const students = [
//   { name: 'Maria', grade: 70, approved: '' },
//   { name: 'José', grade: 56, approved: '' },
//   { name: 'Roberto', grade: 90, approved: '' },
//   { name: 'Ana', grade: 81, approved: '' },
// ];

// console.log(students);

// const verifyGrades = () => { // Primeira forma
//   for (let i = 0; i < students.length; i +=1) {
//     const student = students[i];
//     if (student.grade >= 60) {
//       student.approved = 'Aprovado';
//     } else {
//       student.approved = 'Recuperação';
//     }
//   }
// }

// students.forEach((student) => { // Segunda forma
//   if (student.grade >= 60) {
//     student.approved = 'Aprovado';
//   } else {
//     student.approved = 'Recuperação';
//   }
// });

// students.forEach(student => student.grade >= 60 ? student.approved = 'Aprovado' : student.approved = 'Recuperação'); // Terceira forma

// verifyGrades();
// console.log(students);



// const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];

// let firstMultipleOf5; // Primeira forma
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 5 === 0) {
//     firstMultipleOf5 = numbers[index];
//     break;
//   }
// }

// console.log(firstMultipleOf5);

// console.log(numbers.find(num => num %5 === 0)); // Segunda forma



// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// const data = mail => console.log(`Sucesso! O email ${mail} foi cadastrado no sistema!`);
// emailListInData.forEach(data);



// const persons = [
//   { firstName: 'Maria', lastName: 'Ferreira' },
//   { firstName: 'João', lastName: 'Silva' },
//   { firstName: 'Antonio', lastName: 'Cabral' },
// ];

// const personsFull = persons.map(person => {
//   person.fullName = `${person.firstName} ${person.lastName}`;
//   return person;
// });
// console.table(personsFull);



// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const Supermarket = products.map((product, index) => {
//   return {
//     product,
//     price: prices[index],
//   }
// });

// console.log(Supermarket);



const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// const morningTurn = estudantes.filter(estudante => 
//   estudante.turno === 'Manhã').map(estudante => 
//     `${estudante.nome} ${estudante.sobrenome}`);

// console.table(morningTurn);

// let std = {
//   nome: 'Wilson',
//   sobrenome: 'Martins',
//   idade: 14,
//   turno: 'Manhã',
//   materias: [
//     { name: 'Matemática', nota: '80' },
//     { name: 'Português', nota: '82' },
//     { name: 'Química', nota: '79' },
//     { name: 'Biologia', nota: '75' },
//   ],
// }

const studentStat = (students, name) =>
students.find(student =>
  student.nome === name).materias.map((materia) =>
    `${materia.name}: ${materia.nota >= 60 ? 'Aprovado' : 'Reprovado'}`);

console.log(studentStat(estudantes, 'Maria'));
// console.log(estudantes.find(student => student.nome === 'Maria').materias);


// 'c1, d2, e3, f4, g5, h6'
// '31, 42, 53, 64, 75, 86'
// 'xy'