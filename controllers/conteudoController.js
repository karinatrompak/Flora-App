import conteudoModel from "../models/conteudoModel.js";
import fs from 'fs';

// adicionar o item de conteudo
const addConteudo = async (req, res) => {
    try {
      if (!req.file) {
        throw new Error('Arquivo não encontrado');
      }
  
      let image_filename = req.file.filename;
  
      const conteudo = new conteudoModel({
        name: req.body.name,
        description: req.body.description,
        category: req.body.category,
        image: image_filename
      });
  
      await conteudo.save();
      res.json({ success: true, message: "Conteúdo Adicionado" });
    } catch (error) {
      console.error(error);
      res.status(400).json({ success: false, message: "Erro ao adicionar conteúdo", error: error.message });
    }
};

// lista de conteudos
const listConteudo = async (req,res) => {

    try {
        const conteudos = await conteudoModel.find({});
        res.json({success:true,data:conteudos})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"});
    }

}

// apagar conteudo
const removeConteudo = async (req,res) => {
  try {
    const conteudo = await conteudoModel.findById(req.body.id);
    fs.unlink(`uploads/${conteudo.image}`,()=>{})

    await conteudoModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"Conteúdo Removido"})
  } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
  }
}

export {addConteudo,listConteudo,removeConteudo}