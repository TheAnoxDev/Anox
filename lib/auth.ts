import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import connectDB from "@/lib/mongodb";
import User from "@/models/User";

import type {
  NextAuthOptions,
} from "next-auth";


export const authOptions: NextAuthOptions = {

  providers: [


    CredentialsProvider({

      name: "credentials",

      credentials: {

        email:{
          label:"Email",
          type:"email",
        },

        password:{
          label:"Password",
          type:"password",
        },

      },


      async authorize(credentials){
        const email = String(credentials?.email || "").trim().toLowerCase();
        const password = String(credentials?.password || "");

        if (!email || !password) return null;

        await connectDB();

        const user = await User.findOne({
          email,
          provider: "credentials",
        });

        if (!user?.password) return null;

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return null;

        user.lastLogin = new Date();
        await user.save();

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.avatar || undefined,
        };
      },

    }),




    GoogleProvider({

      clientId:
      process.env.GOOGLE_CLIENT_ID!,

      clientSecret:
      process.env.GOOGLE_CLIENT_SECRET!,

    }),




    GitHubProvider({

      clientId:
      process.env.GITHUB_ID!,

      clientSecret:
      process.env.GITHUB_SECRET!,

    }),


  ],



  session:{

    strategy:"jwt",

  },



  pages:{

    signIn:"/login",

  },



  callbacks:{

    async signIn({ user, account }) {
      if (account && account.provider !== "credentials" && user.email) {
        await connectDB();
        await User.findOneAndUpdate(
          { email: user.email.toLowerCase() },
          {
            $set: {
              name: user.name || "ANOX User",
              avatar: user.image || "",
              provider: account.provider,
              providerId: account.providerAccountId,
              lastLogin: new Date(),
              isVerified: true,
            },
            $setOnInsert: { role: "user" },
          },
          { upsert: true, setDefaultsOnInsert: true }
        );
      }

      return true;
    },

    async jwt({
      token,
      user,
    }){


      if(user){

        token.id = user.id;

      }


      return token;

    },



    async session({
      session,
      token,
    }){


      if(session.user){

        session.user.id =
          token.id as string;

      }


      return session;

    },


  },


};