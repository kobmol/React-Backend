import Axios from 'axios';

const url = 'http://localhost:3020'

export function listProduk(){
    return Axios.get(`${url}/produk`);
}

export function listProdukSubKategori(idSubKategori){
    return Axios.get(`${urk}/produk/${idSubKategori}`);
}

