const socketHandler = (io) => {
    io.on("connection", (socket) => {
        console.log(socket.id)
        socket.on("join_room", (data) => {
            socket.join(data)
        })

        socket.on("send_message", (data) => {
            socket.to(data.room).emit("receive_message", data.input)
        })

        socket.on("disconnect", () => {
            console.log(`User ${socket.id} disconnect`)
        })
    })
}

module.exports = socketHandler