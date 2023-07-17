const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    env: {
      allureReuseAfterSpec: true,
    },
    //esta es una configuracion de la pantalla de cypress
          viewportWidth:1500, //x
          viewportHeight:900, //y
          /*Cuando queremos que un test no tengamos que siempre poner en cada caso de prueba (it) la url,
          entonces ponemos en 'testIsolation' el valor de 'false' de lo contrario si lo que queremos es que la url 
          sea independiente para caso de prueba entonces lo dejamos en 'true'*/
          testIsolation:true,
          /*para la navagacion de url seguras es decir https se debe agregar la siguiente linea
          */
  },
});