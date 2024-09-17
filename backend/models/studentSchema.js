const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    rollNum: {
        type: Number,
        required: true
    },
    // email: {
    //     type: String,
    //     unique: true,
    //     required: true
    // },
    // phoneNo: {
    //     type: Number,
    //     required: true
    // },
    // gender: {
    //     type: String,
    //     required: true
    // },
    // dob: {
    //     type: Date,
    //     required: true
    // },
    password: {
        type: String,
        required: true
    },
    // cAddress: {
    //     type:String,
    //     required: true
    // },
    // pAddress: {
    //     type:String,
    //     required: true
    // },

    sclassName: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'sclass',
        required: true,
    },
    school: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'admin',
        required: true,
    },
    role: {
        type: String,
        default: "Student"
    },
    examResult: [
        {
            subName: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'subject',
            },
            examName: {
                type: String,
                enum: ['Test','M.S.E.','E.S.E.'],
                required: true
            },
            marksObtained: {
                type: Number,
                default: 0
            }
        }
    ],
    attendance: [{
        date: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            enum: ['Present', 'Absent'],
            required: true
        },
        subName: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subject',
            required: true
        }
    }]
});

module.exports = mongoose.model("student", studentSchema);