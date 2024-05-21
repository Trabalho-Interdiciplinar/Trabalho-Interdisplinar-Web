const ProductService = require("./productService");
const Database = require("../database/databaseRef");

jest.mock("../database/databaseRef");
let database = new Database()
let productService = new ProductService(database);

describe('firebase product service', () => {

    describe('fetching products', () => {
        it('shoult fetch products', async () => {
            let expectedResult = [
                {
                    photoUrl: 'url',
                    nome: '553',
                    preco: '432',
                    descricao: '3524'
                  },
                  {
                    photoUrl: 'url',
                    nome: '9919191',
                    descricao: '44324',
                    preco: '333'
                  }
            ]
    
            jest.spyOn(Database.prototype, "fetch").mockImplementation((mockArg) => expectedResult)
            expect(await productService.fetchProductsWithFirebase('1')).toStrictEqual(expectedResult);
        });
    
        it('should concat confeitaria id to product path', async () => {
            let arg = ""
            let confeitariaId = 'myConfeitariaId'
            
            jest.spyOn(Database.prototype, "fetch").mockImplementation((mockArg) => { arg = mockArg })
            
            await productService.fetchProductsWithFirebase(confeitariaId)
            expect(arg).toBe(`confeitaria/${confeitariaId}/products/`);
        })
    })
    
    describe('adding products', () => {
        it('should send same product to firebase', async () => {
            let userId = "123"
            let product = {}
            jest.spyOn(Database.prototype, "add").mockImplementation((data, path) => data)
            expect(await productService.createNewProductFirebase(userId, product)).toStrictEqual({})
        })

        it('should concat confeitaria id to product path', async () => {
            let arg = ""
            let confeitariaId = 'myConfeitariaId'
            
            jest.spyOn(Database.prototype, "add").mockImplementation((data, path) => { arg = path })
            
            await productService.createNewProductFirebase(confeitariaId)
            expect(arg).toBe(`confeitaria/${confeitariaId}/products/`);
        })
    })
})
