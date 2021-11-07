const url = 'http://localhost:8080/datos';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
myHeaders.append('Authorization', sessionStorage.getItem('token'));

const options = {
    method: 'GET', 
    headers: myHeaders
}

fetch(url, options) 
.then(res => res.json())        
.then(response => {
    if (response.error == '') {
        document.getElementById('datos').innerHTML = `
            <ul>
                <li> Usuario: ${response.username} </li>
                <li> Direccion: ${response.direccion} </li>
                <li> Visitas: ${response.visitas} </li>
            </ul>
        `
    } else {
        console.error('Error:', response.error);
        window.location="http://localhost:8080";    
    }
})
.catch(error => {
    console.error('Error:', error);
    alert('Error en visualización de datos');
});

function btnLogout(){
    sessionStorage.removeItem('token');
    window.location="http://localhost:8080";
}
