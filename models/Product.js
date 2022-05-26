const {Schema, model } = require("mongoose")

const ProductSchema = new Schema(
    {
        title:{
            type:String, 
            required:true,
            unique:true
        },
        description: {
            type:String,
            required:true,
        },
        img: {
            type:String,
            required:true
        },
        categories: {
            type:Array
        }, 
        size: {
            type:Array,
            required:true
        },
        colour: {
            type:Array,
            required:true
        },
        price: {
            type:Number,
            required:true
        },
        inStock: {
            type:Boolean,
            default: true
        },

    }, {timestamps: true}
);

const Product = model("Product", ProductSchema);

module.exports = Product;