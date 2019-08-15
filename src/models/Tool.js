const {Schema,model} = require('mongoose');

const ToolSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: []
});

module.exports = model('Tool',ToolSchema);