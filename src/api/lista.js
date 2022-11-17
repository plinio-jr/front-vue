import axios from "axios";

class Listas {
    async create(lista) {
        await axios.post("api/listas", lista)
    }
    async read() {
        const { data } = await axios.get("api/listas");
        return data;
    }
    async update(idLista, lista) {
        await axios.patch(`api/listas/${idLista}/`, lista);
    }
    async delete(idLista) {
        await axios.delete(`api/listas/${idLista}`);
    }
}

export default new Listas();