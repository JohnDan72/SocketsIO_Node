let alertServer = document.getElementById('id_edo_web_socket_server')
const mensaje = document.querySelector('#id_mensaje');
const button = document.querySelector('#id_btn_enviar');

console.log(`hola mundo`);

const socket = io();

socket.on('connect', () => {
    // console.log(`conectado`);
    alertServer.innerHTML = 'Servior en línea';
    alertServer.classList.remove('alert-danger');
    alertServer.classList.add('alert-success');
    
})
socket.on('disconnect', () => {
    // console.log(`desconectado`);
    alertServer.innerHTML = 'Servior fuera de línea';
    alertServer.classList.add('alert-danger');
    alertServer.classList.remove('alert-success');
})
socket.on('regresar-mensaje', (payload) => {
    console.log(payload);
})


button.addEventListener('click', (e) => {
    // console.log(mensaje.value);

    const payload = {
        mensaje: mensaje.value,
        id: '123asd',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id) => {
        console.log("id retornado del servidor "+ id);
        
    });
})