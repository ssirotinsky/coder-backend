const {exec} = require('child_process');

exec('dir', (error, stdout, stderr)=>{
    if (error) {
        console.error('Error', error.message);
        return;
    }
    if (stderr) {
        console.error('Stderr', stderr);
        return;
    }
    console.log('Stdout', stdout);
});

console.log('El exec es no bloqueante...');