import express from 'express';
import { todasUfs, buscarUfs, buscarId } from './servico/servico.js';

const app = express();

app.get('/ufs', (req, res) => {

    let buscar = req.query.buscar;
    let resultado = buscar ? buscarUfs(buscar) : todasUfs() ;

    if(resultado.length > 0){

        res.json(resultado);

    }else{

        res.status(404).json({erro: 'UF não encotrado'});

    };

});

app.get('/ufs/:iduf', (req, res) => {

    const uf = buscarId(req.params.iduf);

    if(uf){
        
        res.json(uf);
    }else if(isNaN(parseInt(req.params.iduf))){

        res.status(400).json({erro: 'Parâmetor inválido'});

    }else{

        res.status(404).json({erro: 'UF não encontrada'});

    };

});

app.listen(8080, () => {

    console.log("\nServidor Atualizado Na Porta 8080\n");

})