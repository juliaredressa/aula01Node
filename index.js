import express from "express";

const app = express();

const host = '0.0.0.0'; // ip generico que representa todas as interfaces locais do seu computador
const porta = 3000; // porta identifica uma aplicação, dentre inumeras, que podem estar sendo execultadas no seu computador

//a requisição e a resposta são parametros 

function gerarTabuada(requisicao, resposta){
    try{
        const numero = Number(requisicao.query.numero);
        let conteudoResposta = 
        `<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabuada</title>
            </head>
            <body>
               <h1>Tabuada do 1 ao 10 do numero ${numero}</h1>
             <ul>
        `;
            
        for (let i=1; i<11; i++){
            const linha = `<li>${numero} x ${i} = ${numero * i}</li>`;
            conteudoResposta += linha;
        }
        conteudoResposta+= `</ul>
                        </body>
                        <html>`
        resposta.end(conteudoResposta);
    } catch(erro){
        resposta.end(`<!DOCTYPE html>
        <html lang="pt-br">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Erro ao processar</title>
            </head>
            <body>
               <h1>Erro</h1>
               <h3>${erro.message}</h3>
             <ul>
        `);
    }}


app.get('/tabuada', gerarTabuada);
// () => {} é uma função anonima
app.listen(porta, host, () => {
    //string literals ``
    console.log(`Servidor sendo execultado em http://${host}:${porta}.`)
});