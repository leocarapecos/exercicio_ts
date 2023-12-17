function multiplicacao(a: number , b: number): number{
    const resultado:number = a * b;
    return resultado
}

function saudacao(nome: string): string{
    const resposta:string = `Olá ${nome}`;
    return resposta;
}

console.log(multiplicacao(2,5));
console.log(saudacao('Leonardo'));

