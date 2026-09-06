// ==========================================
// ANOX Backend Server
// Express + MongoDB
// ==========================================


import dotenv from "dotenv";

dotenv.config();



import dns from "node:dns";


// Better DNS resolution

dns.setServers([
  "1.1.1.1",
  "8.8.8.8",
]);



import app from "./app.js";

import connectDB from "./config/db.js";







const PORT =
process.env.PORT || 5000;





const startServer = async()=>{


try{


/*
========================
DATABASE
========================
*/


await connectDB();



/*
========================
SERVER
========================
*/


const server =
app.listen(
PORT,
()=>{


console.log(
`
🚀 ANOX Backend Running

🌐 Port: ${PORT}

🟢 Environment:
${process.env.NODE_ENV || "development"}

`
);


}

);






/*
========================
GRACEFUL SHUTDOWN
========================
*/


const shutdown = async()=>{


console.log(
"🛑 Shutting down server..."
);



server.close(()=>{


console.log(
"✅ Server closed"
);



process.exit(0);


});


};





process.on(
"SIGTERM",
shutdown
);


process.on(
"SIGINT",
shutdown
);






}catch(error){


console.error(
"❌ SERVER START ERROR:",
error
);


process.exit(1);


}



};






startServer();