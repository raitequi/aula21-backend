const Koa = require("koa");
const server = new Koa();

server.use(async (ctx) => {

  let numero = 4

  if (ctx.originalUrl === '/raiz_quadrada') {
    ctx.body = "Você precisa passar um número na requisição!";
  } 

  if (ctx.originalUrl === `/raiz_quadrada/${numero}`) {
    ctx.body = `A raiz quadrada de ${numero} é ${Math.sqrt(numero)}`;
}


});

server.listen(8082, () => {
  console.log("Servidor está rodando!");
});