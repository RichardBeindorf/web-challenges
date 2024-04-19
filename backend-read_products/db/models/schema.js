// db/models/schema.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const fishShopSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    currency: String
});

const Fish = mongoose.models.Fish || mongoose.model("Fish", fishShopSchema, "fish-shop");

export default Fish;