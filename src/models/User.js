import mongoose from "mongoose"

const opts = {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
};
const schema = mongoose.Schema({
        firstname: {type:String,require:true},
        lastname: {type:String,require:true},
        email:{type:String,required:true },
        password:{type:String,require:true},
    },
    opts
)

export default mongoose.model("User", schema)