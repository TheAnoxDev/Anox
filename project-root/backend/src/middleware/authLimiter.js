import jwt from "jsonwebtoken";


export const protect = (
  req,
  res,
  next
) => {


  try {


    if (!process.env.JWT_SECRET) {

      throw new Error(
        "JWT_SECRET missing"
      );

    }



    let token = null;



    // Cookie Token

    if (req.cookies?.anox_token) {

      token = req.cookies.anox_token;

    }



    // Authorization Header

    if (
      !token &&
      req.headers.authorization?.startsWith("Bearer")
    ) {

      token =
        req.headers.authorization.split(" ")[1];

    }



    if (!token) {

      return res.status(401).json({

        success:false,

        message:"Authentication required",

      });

    }





    const decoded =
      jwt.verify(
        token,
        process.env.JWT_SECRET
      );




    req.user = {

      id: decoded.id,

      role: decoded.role,

    };




    next();



  } catch(error) {


    console.error(
      "AUTH ERROR:",
      error
    );



    return res.status(401).json({

      success:false,

      message:"Invalid or expired token",

    });


  }


};