
const Namealunos = [
    "ANA CAROLINA PONTAROLOCARVALHO", 
    "ANA HELOISE MONTEIRODASILVA", 
    "ANA LUIZA DA SILVANOGUEIRA", 
    "ANDRE CARDINSOARES",
    "BEATRIZ BRANDTVIANA",
    "BHIANCA MULDENBERGERPINTO",
    "CAUÃ JUN KESHINO",
    "ELIÃ GABRIEL VIEIRA",
    "ENZO SAMUEL LISBOAZORDENUNES",
    "GIOVANNA CALDEIRA",
    "HENRIQUE DUARTEDOSSANTOS",
    "HENRIQUE EMILIOSILVAKRUGER",
    "IAGO DANIELCALIXTO",
    "IASMIN APARECIDA DA SILVA PEREIRA",
    "ISADORA CRISTINA SILVEIRA",
    "JHENYFER GUIMARÃES DE LARA",
    "JOAO FRANCISCO KUJIV",
    "JOÃO HENRIQUE MORAIS DE ASSIS",
    "LORENZO HENRIQUE BENIN",
    "LUIZ FELIPE DOROSARIO DE PAULA",
    "LUIZ GUSTAVO BRASIL",
    "MARIA JULIA AMORIM DA SILVA",
    "MARIA LUYZA MENDES DA SILVA LEAL",
    "PAOLA RAFAELA DOS SANTOS AMARAL",
    "PEDRO HENRIQUE LOPES DE LARA",
    "RENATO GABRIEL VIANA STRAUBE",
    "Samuel Cavalheiro",
    "VICTOR DEPAULA",
    "VINICIUS BORTOLI",
    "WILLIAN NOVAESBITTENCOURT"
];
const Numberoalunos = [
    1, 2, 3, 4,
    5, 6, 7, 8,
    9, 10, 11, 12,
    13, 14, 15, 16,
    17, 18, 19,  21,
    22, 23, 24, 26,
    27, 28, 29, 30,  
    31, 32, 33
];


const nameIndex = Namealunos.indexOf("Samuel Cavalheiro");
const numberIndex = Numberoalunos.indexOf(20.5);


if (nameIndex !== -1) {
    Namealunos.splice(nameIndex, 1); 
}
if (numberIndex !== -1) {
    Numberoalunos.splice(numberIndex, 1); 
}

if (nameIndex !== -1) {
    Namealunos.splice(nameIndex, 0, "RICHARD CARRARO");
}
if (numberIndex !== -1) {
    Numberoalunos.splice(numberIndex, 0, 20);
}


const novaListaDeChamada = [];

for (let i = 0; i < Namealunos.length; i++) {
    novaListaDeChamada.push({
        numero: Numberoalunos[i],
        nome: Namealunos[i].split(' ').slice(0, 2).join(' ')
    });
}


novaListaDeChamada.forEach(aluno => console.log(`${aluno.numero}: ${aluno.nome}`));
