function btnRegistrar(){
    const url = 'http://localhost:8080/register';
    const data = {
        username: document.getElementById('usuario').value,
        password: document.getElementById('password').value,
        direccion: document.getElementById('direccion').value
    };
    const options = {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers:{
            'Content-Type': 'application/json'
        }
    }
    fetch(url, options) 
    .then(res => res.json())        
    .then(response => {
        if (response.error == '') {
            sessionStorage.setItem('token', response.token);
            window.location="http://localhost:8080/datos.html";
        } else {
            console.error('Error:', response.error);
            alert('Error en registro!');    
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error en registro!');
    });
}