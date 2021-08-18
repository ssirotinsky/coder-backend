Promise.reject(30)
    .then(x => x + 1)
    .then(x => x * 2)
    .then(x => {if (x==22) throw 'Error' 
               else return 80
    })
    .then(x => x = 30)
    .then(x => x / 2)
    .then(console.log)
    .catch(console.log);

//then(x=>console.log(x));
//catch(x=>console.log(x));