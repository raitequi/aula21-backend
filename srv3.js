const Koa = require("koa");
const server = new Koa();

server.use(async (ctx) => {

  let numero1 = 8
  let numero2 = 2
  let divisao = numero1/numero2

  if (ctx.originalUrl === '/divisao') {
    ctx.body = "Você precisa passar um número na requisição!";
  } 

  if (ctx.originalUrl === `/divisao/${numero1}/${numero2}`) {
    ctx.body = `A divisão de ${numero1} por ${numero2} é ${divisao}`;
}


});

server.listen(8082, () => {
  console.log("Servidor está rodando!");
});