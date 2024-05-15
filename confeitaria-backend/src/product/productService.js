class ProductService {

    constructor(database){
        this.database = database
    }
    async createNewProductFirebase(idUser, product) {
        return (await this.database.add(product, `confeitaria/${idUser}/products/`))
    }

    async fetchProductsWithFirebase(idUser) {
        return await this.database.fetch(`confeitaria/${idUser}/products/`)
    }
}

module.exports = ProductService