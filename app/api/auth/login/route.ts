import { NextResponse } from "next/server";

import bcrypt from "bcrypt";
import validator from "validator";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";





export async function POST(
req: Request
) {


try {


const {
email,
password

} = await req.json();





const cleanEmail =
String(email || "")
.toLowerCase()
.trim();



const cleanPassword =
String(password || "");







/*
========================
VALIDATION
========================
*/


if(
!cleanEmail ||
!cleanPassword
){


return NextResponse.json(

{
success:false,
message:
"Email and password are required"
},

{
status:400
}

);

}




if(
!validator.isEmail(cleanEmail)
){


return NextResponse.json(

{
success:false,
message:
"Invalid email address"
},

{
status:400
}

);

}







/*
========================
FIND USER
========================
*/

await connectDB();

const user =
await User.findOne({

email:
cleanEmail

});





if(!user){


return NextResponse.json(

{
success:false,
message:
"Invalid email or password"
},

{
status:401
}

);


}







/*
========================
CHECK PROVIDER
========================
*/


if(
user.provider !== "credentials"
){


return NextResponse.json(

{
success:false,
message:
"This account uses social login"
},

{
status:400
}

);


}







/*
========================
PASSWORD CHECK
========================
*/


const passwordMatch =
await bcrypt.compare(

cleanPassword,

user.password

);





if(!passwordMatch){


return NextResponse.json(

{
success:false,
message:
"Invalid email or password"
},

{
status:401
}

);


}









/*
========================
SAFE USER
========================
*/


const safeUser = {


id:user._id,


name:user.name,


email:user.email,


role:user.role,


provider:user.provider,


};








return NextResponse.json(

{

success:true,

message:
"Login successful",


user:
safeUser,


},

{
status:200
}

);







}

catch(error){


console.error(
"LOGIN ERROR:",
error
);




return NextResponse.json(

{

success:false,

message:
"Internal server error"

},

{
status:500
}

);


}


}