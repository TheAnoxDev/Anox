import { Schema, models, model } from "mongoose";

const CreditAccountSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, unique: true, index: true },
    plan: { type: String, enum: ["free", "pro", "business", "enterprise"], default: "free" },
    monthlyLimit: { type: Number, default: 1000, min: 0 },
    used: { type: Number, default: 0, min: 0 },
    cycleStart: { type: Date, default: Date.now },
    cycleEnd: { type: Date, default: () => new Date(Date.now() + 30 * 86400000) },
  },
  { timestamps: true }
);

export default models.CreditAccount || model("CreditAccount", CreditAccountSchema);
