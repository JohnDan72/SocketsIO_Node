
const socketController = (socket) => {
    console.log(`Cliente conectado con id: ${socket.id}`);
    
    socket.on('disconnect', () => {
        console.log(`Cliente desconectado con id: ${socket.id}`);
        
    });

    socket.on('enviar-mensaje', ( payload , callback ) => {
        // console.log(payload);
        callback(4324);
        // this.io.emit( 'regresar-mensaje' , payload );
        socket.broadcast.emit( 'regresar-mensaje' , payload ); // manda a todos menos a uno mismo
    })
}

module.exports = {
    socketController
}