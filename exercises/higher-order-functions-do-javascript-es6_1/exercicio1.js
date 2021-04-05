const newEmpData = (nomeCompleto) => {
  return{
    nomeCompleto,
    email: `${nomeCompleto.replace(/\s/g, '').toLowerCase()}@trybe.com`,
  };
};

const newEmployees = (data) => {
  const employees = {
    id1: data('Pedro Guerra'),
    id2: data('Luiza Drummond'),
    id3: data('Carla Paiva'),
  }
  return employees;
}

console.log(newEmployees(newEmpData));
