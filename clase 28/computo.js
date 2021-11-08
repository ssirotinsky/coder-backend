const calculo = () => {
    let sum = 0;
    for (let i=0; i<6e9; i++){
        sum+=i;
    }
    return sum;
}

process.on("message", (mensaje)=>{
    if (mensaje=='start'){
        process.send(calculo());
    }
});