const ctrlArchivo={};


ctrlArchivo.getArchivos= (req,res)=>{
    res.send('server on success');
}
ctrlArchivo.subirArchivo= (req,res)=>{
    res.json({
        message:'FICHERO SUBIDO',
    });
}

module.exports=ctrlArchivo;