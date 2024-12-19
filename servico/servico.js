import colecaoUf from '../dados/dados.js';

const todasUfs = () => {

    return colecaoUf;

};

const buscarUfs = (buscarNome) => {

    return colecaoUf.filter(chave => chave.nome.toLowerCase().includes(buscarNome));

};

const buscarId = (id) => {

    const idUF = parseInt(id);

    return colecaoUf.find(u => u.id === idUF);

};

export {todasUfs, buscarUfs, buscarId}