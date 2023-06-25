const server = require("./build/app.js");
const PORT = "3000";

server.listen(PORT, ()=> console.log(`listening on port ${PORT}`))