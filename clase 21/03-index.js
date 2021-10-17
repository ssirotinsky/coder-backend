import admin from "firebase-admin";
import serviceAccount  from "./db/prueba-2eae1-firebase-adminsdk-hjmq9-c5747ae8fb.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://prueba-2eae1-firebaseio.com"
});      

console.log('Base de datos conectada!');

CRUD();

async function CRUD(){

    const db = admin.firestore();
    const query = db.collection('colores');

    try {

        // console.log('Creando colores...')
        // let id = 1;
        // let doc = query.doc(`${id}`);
        // await doc.create({nombre: 'red'});
        // id++;
        // doc = query.doc(`${id}`);
        // await doc.create({nombre: 'green'});
        // id++;
        // doc = query.doc(`${id}`);
        // await doc.create({nombre: 'blue'});
        // console.log('Colores creados...')

    } catch(error){
        console.log('Error!', error);
    }

    try {

        console.log('Listando todos los colores...');
        const querySnapshot = await query.get();
        let docs = querySnapshot.docs;        
        const response = docs.map(doc=>({
            id: doc.id,
            nombre: doc.data().nombre
        }));
        console.log(response);

    } catch(error){
        console.log('Error!', error);
    }

    try {

        console.log('Actualizando el color blue...');
        let id = 2;
        const doc = query.doc(`${id}`);
        const item = await doc.update({nombre: 'navy'});        
        console.log('Color actualizado...', item);

    } catch(error){
        console.log('Error!', error);
    }

    try {

        console.log('Borrando el color green...');
        let id = 3;
        const doc = query.doc(`${id}`);        
        const item = await doc.delete();
        console.log('Color borrado...', item);

    } catch(error){
        console.log('Error!', error);
    }


}