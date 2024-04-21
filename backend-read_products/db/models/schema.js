// db/models/schema.js
import mongoose from "mongoose";
import "./review";

const { Schema } = mongoose;

const fishShopSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    currency: { type: String, required: true },
    reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
  });

const Fish = mongoose.models.Fish || mongoose.model("Fish", fishShopSchema, "fish-shop");

export default Fish;