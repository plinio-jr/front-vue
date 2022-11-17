import axios from "axios";

class Produto {
    async create(produto) {
        await axios.post("api/produtos", produto)
    }
    async read() {
        const { data } = await axios.get("api/produtos");
        return data;
    }
    async update(produto, idProduto) {
        await axios.patch(`api/produtos/${idProduto}/`, produto);
    }
async delete(idProduto) {
    await axios.delete(`api/produtos/${idProduto}/`);
}
}