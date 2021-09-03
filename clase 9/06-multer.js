const express = require('express');
const multer = require('multer');

const app = express();
const PORT = 8080;

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb)=>{
        cb(null,file.fieldname + '-' + Date.now())
    }
});

const upload = multer({storage});

app.use(express.urlencoded({extended: true}));
app.use(express.static('public2'));

const server = app.listen(PORT, ()=>{
    console.log('Servidor HTTP escuchando en el puerto', server.address().port);
});
server.on('error', error=>console.log('Error en servidor', error));

app.post('/uploadfile',upload.single('myFile'),(req,res)=>{
    console.log('no les miento');
    const file = req.file;
    if (!file){
        res.status(400).send('No envío ningún archivo');
    } else {
        res.send(file);
    }
});

app.post('/uploadmultiple',upload.array('myFiles', 12),(req,res)=>{
    const files = req.files;
    if (!files){
        res.status(400).send('No envío ningún archivo');
    } else {
        res.send(files);
    }
});

