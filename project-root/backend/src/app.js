// ==========================================
// ANOX Backend Application
// Express + Security + API
// ==========================================


import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";


import authRoutes from "./routes/authRoutes.js";



const app = express();





/*
================================
SECURITY
================================
*/


app.use(
  helmet({
    crossOriginResourcePolicy:false,
  })
);





/*
================================
CORS
================================
*/


const allowedOrigins = [

  "http://localhost:3000",

  process.env.CLIENT_URL,

].filter(Boolean);




app.use(

  cors({

    origin:(origin,callback)=>{


      if(!origin){

        return callback(null,true);

      }


      if(
        allowedOrigins.includes(origin)
      ){

        return callback(null,true);

      }



      return callback(
        new Error("CORS blocked")
      );


    },


    credentials:true,


  })

);







/*
================================
BODY PARSER
================================
*/


app.use(
  express.json({
    limit:"10kb",
  })
);



app.use(
  express.urlencoded({
    extended:true,
    limit:"10kb",
  })
);





app.use(
  cookieParser()
);





/*
================================
LOGGER
================================
*/


if(process.env.NODE_ENV !== "production"){

  app.use(
    morgan("dev")
  );

}








/*
================================
GLOBAL RATE LIMIT
================================
*/


const apiLimiter =
rateLimit({

  windowMs:
    15 * 60 * 1000,


  max:
    300,


  message:{

    success:false,

    message:
      "Too many requests",

  },


});



app.use(
  "/api",
  apiLimiter
);







/*
================================
HEALTH CHECK
================================
*/


app.get(
  "/",
  (req,res)=>{


    res.status(200).json({

      success:true,

      service:
        "ANOX Backend",

      status:
        "running",

      version:
        "1.0.0",

    });


  }
);







/*
================================
API ROUTES
================================
*/


app.use(
  "/api/v1/auth",
  authRoutes
);







/*
================================
404 HANDLER
================================
*/


app.use(
(req,res)=>{


  res.status(404).json({

    success:false,

    message:
      "Route not found",

  });


}

);







/*
================================
ERROR HANDLER
================================
*/


app.use(
(err,req,res,next)=>{


void next;


console.error(
  "SERVER ERROR:",
  err
);



res.status(
  err.status || 500
)
.json({

  success:false,

  message:
    process.env.NODE_ENV==="production"
    ?
    "Internal server error"
    :
    err.message,

});


}

);





export default app;