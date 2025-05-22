// Escreva seu código aqui!

let professora: string = "Lana";
const cadeira: number = 40;
let temAlunos: boolean = true;
const cabos: undefined = undefined;

interface Computador {
    monitor: string;
    teclado: string;
    quantidade: number;
}

let computadores: Computador = {
    monitor: "DELL",
    teclado: "MYMAX",
    quantidade: 30,
};

let resultadoFinal = professora + '\n' + cadeira + '\n' + temAlunos + '\n' + cabos + '\n' + computadores.monitor + '\n' + computadores.teclado + '\n' + computadores.quantidade;

console.log(resultadoFinal)