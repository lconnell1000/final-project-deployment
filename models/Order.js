const {Schema, model } = require("mongoose")

const OrderSchema = new Schema(
    {
        userId:{
        type:String, 
        required:true,
        },
        products: [
            {
            productId:{
                type:String,
            },
            quantity: {
                type:Number,
                default:1,
            }
        }
        ],
        amount: {
            type:Number,
            required: true,
        },
        address: {
            type: Object,
            required: true,
        },
        status: {
            type:String,
            default: "pending",
        }
            
     }, {timestamps: true}
);

const Order = model("Order", OrderSchema);

module.exports = Order;