
let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)

http.listen(8080)


io.sockets.on('connection', (socket) => {
    console.log("Nouvelle connexion\n" + socket.id)

    socket.on('disconnect', () => {
        console.log("Déconnexion de :\n" + socket.id)
    })
})