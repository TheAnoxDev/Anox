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
name,
email,
password

} = await req.json();





const cleanName =
String(name || "")
.trim();


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
!cleanName ||
!cleanEmail ||
!cleanPassword
){


return NextResponse.json(

{
success:false,
message:
"All fields are required"
},

{
status:400
}

);

}




if(
cleanName.length < 2 ||
cleanName.length > 50
){


return NextResponse.json(

{
success:false,
message:
"Name must be between 2 and 50 characters"
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






if(
cleanPassword.length < 8
){


return NextResponse.json(

{
success:false,
message:
"Password must contain at least 8 characters"
},

{
status:400
}

);


}







/*
========================
CHECK ACCOUNT
========================
*/

await connectDB();

const existingUser =
await User.findOne({

email:
cleanEmail

});




if(existingUser){


return NextResponse.json(

{
success:false,
message:
"Account already exists"
},

{
status:409
}

);


}







/*
========================
PASSWORD HASH
========================
*/


const hashedPassword =
await bcrypt.hash(
cleanPassword,
12
);








/*
========================
CREATE USER
========================
*/


const user =
await User.create({

name:
cleanName,


email:
cleanEmail,


password:
hashedPassword,


provider:
"credentials",


role:
"user",


isVerified:
false,


});









/*
========================
SAFE RESPONSE
========================
*/


return NextResponse.json(

{

success:true,

message:
"Account created successfully",


user:{

id:user._id,

name:user.name,

email:user.email,

provider:user.provider,

role:user.role,


}

},

{
status:201
}

);






}

catch(error){



console.error(
"REGISTER ERROR:",
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