import { Schema, models, model } from "mongoose";

const UsageLedgerSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    orgId: { type: Schema.Types.ObjectId, ref: "Organization", default: null, index: true },
    idempotencyKey: { type: String, required: true, unique: true, index: true },
    kind: { type: String, enum: ["ai", "api", "credit", "adjustment"], required: true },
    units: { type: Number, required: true, min: 0 },
    metadata: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

export default models.UsageLedger || model("UsageLedger", UsageLedgerSchema);
