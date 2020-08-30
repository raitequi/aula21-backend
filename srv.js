const Koa = require("koa");
const server = new Koa();

server.use(async (ctx) => {

  if (ctx.originalUrl === '/cara_ou_coroa') {
      const caraCoroa = () => {
          const valor = Math.random() * 100
          if (valor <= 50) {
            ctx.body = "Cara";
          } else {
            ctx.body = "Coroa";
          }
      }
      caraCoroa()
  } 
});

server.listen(8082, () => {
  console.log("Servidor está rodando!");
});