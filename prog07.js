/*
let filme = {};
filme.nome = 'Como treinar seu dragão';
filme.tempo = 95;
filme.ano = 2010;
console.log(filme);

for(let h in filme){
    console.log(`O ${h} é ${filme[h]}`);
}

let masc = {
    nome : 'Antonio',
    idade : 52
};
fem = {};
for( h in masc){
    fem[h] = masc[h];
}
fem.nome = 'ana';
console.log(masc);
console.log(fem);
*/
function criaUsuario(nome, i){
    return{
        nome : nome,
        idade : i,
    };
}
let joao = criaUsuario('joao', 35);
console.log(joao);
