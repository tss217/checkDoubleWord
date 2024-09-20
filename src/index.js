const fs = require('fs'); //modulo nativo do node   //fs = file system

//receber o conteudo 
//processar o conteudo 
//saida

// capturanto o conteudo do arquivo, usando o terminal
//cmd node src/index.js 3709-nodejs-lib-arquivos-iniciais/arquivos/texto-web.txt 
const pathWay = process.argv;
const link = pathWay[2];

fs.readFile(link,"utf-8",(erro, data) => {
    if (erro) {
        console.error(`Erro ao ler o arquivo: ${erro.pathWay}`);
        return;
    }
    checkDoubleWords(data);

}) 

//criar um array com todas as palavras do texto
//contar a quantidade de palavras
//montar um objeto com resultado

function checkDoubleWords(data) {
    const wordList = data.split(' ');
    const result = {};

    //forEach é um método de array que executa uma função para cada elemento do array.
    
    wordList.forEach(word => {result[word] = (result[word] || 0) + 1;});
    console.log(result);
}

