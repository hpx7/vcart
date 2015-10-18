Items = new Mongo.Collection('items');

ItemSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        max: 200
    },
    price: {
        type: Number,
        label: "Price",
        min: 0
    },
    quantity: {
        type: Number,
        label: "Quantity",
        min: 0
    },
});

Items.attachSchema(ItemSchema);