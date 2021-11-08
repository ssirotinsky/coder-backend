const {execFile} = require('child_process');

execFile('C:\\robo3t-1.4.4-windows-x86_64-e6ac9ec5\\robo3t', (error, stdout, stderr)=>{
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

console.log('El execFile es no bloqueante...');