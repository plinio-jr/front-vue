import axios from "axios";

class Mercado {
    async create(mercado) {
        await axios.post("api/mercados", mercado)
    }
    async read() {
        const { data } = await axios.get("api/mercados");
        return data;
    }
    async update(idMercado, mercado) {
        await axios.patch(`api/listas/${idMercado}/`, mercado);
    }
    async delete(idMercado) {
        await axios.delete(`api/listas/${idMercado}`);
    }
}

export default new Mercado();