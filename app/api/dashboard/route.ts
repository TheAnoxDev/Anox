import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { authOptions } from "@/lib/auth";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";



export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }



    await connectDB();



    const user = await User.findOne({
      email: session.user.email.toLowerCase(),
    }).select(
      "-password -__v"
    );



    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }



    return NextResponse.json({
      success: true,

      user: {
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        provider: user.provider,
        role: user.role,
        isVerified: user.isVerified,
        createdAt: user.createdAt,
        lastLogin: user.lastLogin,
      },

      stats: {
        aiModels: 12,
        apiRequests: 18420,
        securityScore: 99.8,
        cloudNodes: 4,
      },

      activities: [
        {
          id: "1",
          title: "ANOX Core initialized",
          description:
            "Dashboard successfully connected.",
          createdAt: new Date().toISOString(),
          type: "success",
        },

        {
          id: "2",
          title: "Security layer active",
          description:
            "Your account is protected.",
          createdAt: new Date().toISOString(),
          type: "success",
        },

        {
          id: "3",
          title: "Cloud infrastructure ready",
          description:
            "Infrastructure is available.",
          createdAt: new Date().toISOString(),
          type: "info",
        },
      ],
    });
  } catch (error) {
    console.error(
      "Dashboard API Error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}