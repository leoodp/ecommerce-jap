//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    if(location.pathname.endsWith('login.html')){
        let datos = document.getElementById('boton');
        datos.addEventListener('click', function(evento) {
            evento.preventDefault;
        const email = document.getElementById('id-email');
        localStorage.setItem('id-email',email.value);
        const cons = document.getElementById('id-const');
        localStorage.setItem('id-const', cons.value); ()=>
        email.value == localStorage.getItem('id-email') && cons.value == localStorage.getItem('id-const') 
        alert('Usario Registrado');
        window.location.href = 'index.html';
        })
       } else if(email,cons){
           email.value != localStorage.getItem('id-email') || cons.value != localStorage.getItem('id-const')
           return alert('Error Email o Contraseña incorrectos')
       }
});
