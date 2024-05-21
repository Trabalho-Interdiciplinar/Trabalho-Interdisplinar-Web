const { addDoc, collection, getDocs } = require("firebase/firestore");
const Database = require("../database/databaseRef");

jest.mock("../config/firebase", () => {
    addDoc: jest.fn()
    doc: jest.fn()
    collection: jest.fn()
    getDocs: jest.fn()
})
jest.mock("firebase/firestore")

let database = new Database();

describe('firebase database', () => {

    describe('adding data', () => {
        it('should call add function from firebase', () => {
            database.add({}, "")
            expect(collection).toBeCalled()
            expect(addDoc).toBeCalled()
        })
    })

    describe('fetching data', () => {
        it('should call getDocs function from firebase', () => {
            database.fetch({}, "")
            expect(getDocs).toBeCalled()
        })
    })
})