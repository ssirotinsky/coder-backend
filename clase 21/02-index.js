var admin = require("firebase-admin");

var serviceAccount = require("./db/prueba-2eae1-firebase-adminsdk-hjmq9-c5747ae8fb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://prueba-2eae1-firebaseio.com"
});

console.log('Base de datos conectada!');

CRUD();

async function CRUD(){

    const db = admin.firestore();
    const query = db.collection('usuarios');

    // try {

    //     console.log('Creando datos...')
    //     let id = 15;
    //     let doc = query.doc(`${id}`);
    //     await doc.create({nombre: 'José', dni: 12345678});
    //     id++;
    //     doc = query.doc(`${id}`);
    //     await doc.create({nombre: 'Romina', dni: 98765432});
    //     id++;
    //     doc = query.doc(`${id}`);
    //     await doc.create({nombre: 'Pedro', dni: 11223344});
    //     console.log('Datos creados...')

    // } catch(error){
    //     console.log('Error!', error);
    // }

    // try {

    //     console.log('Seleccionando todos los documentos...');
    //     const querySnapshot = await query.get();
    //     let docs = querySnapshot.docs;        
    //     const response = docs.map(doc=>({
    //         id: doc.id,
    //         nombre: doc.data().nombre,
    //         dni: doc.data().dni 
    //     }));
    //     console.log(response);

    // } catch(error){
    //     console.log('Error!', error);
    // }

    // try {

    //     console.log('Seleccionando un único documento...');
    //     let id = 16;
    //     const doc = query.doc(`${id}`);        
    //     const item = await doc.get();
    //     const response = item.data();
    //     console.log(response);

    // } catch(error){
    //     console.log('Error!', error);
    // }

    // try {

    //     console.log('Actualizando un documento...');
    //     let id = 16;
    //     const doc = query.doc(`${id}`);        
    //     const item = await doc.update({dni: 44556677});
    //     console.log('Usuario actualizado...', item);

    // } catch(error){
    //     console.log('Error!', error);
    // }

    try {

        console.log('Borrando un documento...');
        let id = 17;
        const doc = query.doc(`${id}`);        
        const item = await doc.delete();
        console.log('Usuario borrado...', item);

    } catch(error){
        console.log('Error!', error);
    }


}