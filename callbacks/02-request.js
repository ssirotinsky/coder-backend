const request = require("request");

const llamadaAPI = (callback) => {
    let numero = Math.floor(Math.random()*10 + 1);
    const url = `https://jsonplaceholder.typicode.com/posts/${numero}`;
    request.get(url, (error, response, body) => {
        // console.log(error);
        // console.log(response.body);
        // console.log(body);
        let json = JSON.parse(body);
        callback(error, json);
      });
}

console.log('Inicio del Progama');

llamadaAPI((err,resp) => {
    if (err) {
        console.log('lamentablemente hubo un error en el llamado a la API!! Intente nuevamente...', err);
    } else {
        console.log('Recibi esta info: ', resp);
        console.log('y ahora me voy a grabarla a la base de datos...');
    }
});

console.log('Final del Progama');

