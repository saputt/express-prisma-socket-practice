const express = require("express")
const {Server} = require("socket.io")
const {createServer} = require("http")
const cors = require("cors")
const socketHandler = require("./src/socket/socketHandler")
const cookieParser = require("cookie-parser")
const router = require("./src/routes")
const socketMiddleware = require("./src/middlewares/socketMiddleware")

const app = express()

app.use(cors())

const server = createServer(app)
const io = new Server(server, {
    cors : {
        origin : "http://localhost:5173",
        method : ["POST", "GET"]
    }
})

app.use(cors({
    origin : "http://localhost:5173",
    credentials : true,
    methods : ["POST", "GET", "DELETE", "PUT", "PATCH"],
    allowedHeaders : ['Content-Type', 'Authorization']
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET))
socketHandler(io)
app.use(socketMiddleware(io))
app.use(router)


const PORT = process.env.PORT || 3000
process.env.PORT || 3000



server.listen(PORT, () => {
    console.log("server run on port", PORT)
})