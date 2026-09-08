import { Schema, models, model } from "mongoose";

const ApiKeySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    name: { type: String, required: true, trim: true, maxlength: 60 },
    prefix: { type: String, required: true, index: true },
    keyHash: { type: String, required: true, unique: true },
    scopes: { type: [String], default: ["ai:read"] },
    lastUsedAt: { type: Date, default: null },
    revokedAt: { type: Date, default: null },
  },
  { timestamps: true }
);

export default models.ApiKey || model("ApiKey", ApiKeySchema);
