import mongoose from "mongoose";

const conteudoSchema = new mongoose.Schema({
    name: {type:String,required:true},
    description: {type:String,required:true},
    category: {type:String,required:true},
    image: {type:String,required:true},
})

const conteudoModel = mongoose.models.conteudo || mongoose.model("conteudo",conteudoSchema)

export default conteudoModel;