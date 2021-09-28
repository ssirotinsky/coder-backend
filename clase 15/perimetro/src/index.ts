
import express from 'express';
import { Perimetro } from './lib/perimetro';
import { Superficie } from './lib/superficie';

 const app = express();

app.get('/perimetro',(req,res)=>{

    const tipo: string = req.query.tipo as string;
    const lado1: number  = parseInt(req.query.lado1 as string);
    let lado2: number  = parseInt(req.query.lado2 as string);
    let radio: number  = parseInt(req.query.radio as string);
    let perimetro:Perimetro = new Perimetro (lado1, lado2, radio);
    if (tipo == 'cuadrado') {
        res.send({tipo: 'cuadrado', lado: lado1, perimetro: perimetro.cuadrado()});
    } else if (tipo == 'rectangulo') {
        res.send({tipo: 'rectangulo', lado1, lado2, perimetro: perimetro.rectangulo()});
    } else if (tipo == 'circulo') {
        res.send({tipo: 'circulo', radio, perimetro: perimetro.circulo()});
    }
});

app.get('/superficie',(req,res)=>{

    const tipo: string = req.query.tipo as string;
    const lado1: number  = parseInt(req.query.lado1 as string);
    let lado2: number  = parseInt(req.query.lado2 as string);
    let radio: number  = parseInt(req.query.radio as string);
    let superficie:Superficie = new Superficie (lado1, lado2, radio);
    if (tipo == 'cuadrado') {
        res.send({tipo: 'cuadrado', lado: lado1, superficie: superficie.cuadrado()});
    } else if (tipo == 'rectangulo') {
        res.send({tipo: 'rectangulo', lado1, lado2, superficie: superficie.rectangulo()});
    } else if (tipo == 'circulo') {
        res.send({tipo: 'circulo', radio, superficie: superficie.circulo()});
    }
});

const PORT:number = 8080;
app.listen(PORT, () => {
    console.log(`Servidor express TypeScript/WebPack escuchando en el puerto ${PORT}`)
});
