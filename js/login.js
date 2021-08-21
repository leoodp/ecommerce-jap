//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    if(location.pathname.endsWith('login.html')){
        let datos = document.getElementById('login');
        datos.addEventListener('submit', function(evento) {
            evento.preventDefault();
            var email = document.getElementById('id-email').value;
            localStorage.setItem('id-email',email);
            var pass  = document.getElementById('id-const').value;
            localStorage.setItem('id-const', pass);
           if((email != '') && (pass != '')){
               alert('Usario Registrado')
               window.location.href = 'index.html';
            }else{
                alert('Error Email o Contraseña incorrectos');
            }
            
        });
    }
});

