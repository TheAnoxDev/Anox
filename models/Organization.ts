import { Schema, models, model } from "mongoose";

const MemberSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    role: { type: String, enum: ["owner", "admin", "member"], default: "member" },
    joinedAt: { type: Date, default: Date.now },
  },
  { _id: false }
);

const OrganizationSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    slug: { type: String, required: true, unique: true, index: true },
    ownerId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    members: { type: [MemberSchema], default: [] },
  },
  { timestamps: true }
);

export default models.Organization || model("Organization", OrganizationSchema);
