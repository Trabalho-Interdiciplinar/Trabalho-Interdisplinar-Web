class PedidosService {

    constructor(database){
        this.database = database
    }
    async createNewProductFirebase(idUser, product) {
        return (await this.database.add(product, `pedidos/${idUser}/products/`))
    }

    async fetchProductsWithFirebase(idUser) {
        return await this.database.fetch(`pedidos/${idUser}/products/`)
    }

    async getPedidosIdByUserId(userId) {
        let result = await new DbConnection().executeAsync(
            `SELECT id_pedidos FROM pedidos WHERE fk_id_usuario = '${userId}'`
        )
        return result.rows[0]
    }
}

module.exports = PedidosService