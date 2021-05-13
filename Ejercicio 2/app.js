
var formulario = document.getElementById('formulario');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
   mensaje = e.target.mensaje.value
    if (mensaje == '') {
        alert('El campo mensaje es requerido');
        return;
    }
    
    alert('El mensaje tiene un largo de ' + mensaje.length + ' caracteres');
});