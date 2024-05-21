const firebaseApp = require("../config/firebase")
const { getFirestore, setDoc, doc, addDoc, collection, getDocs } = require('firebase/firestore')

const database = getFirestore(firebaseApp)

class Database {
    async add(data, path) {
        return await addDoc(collection(database, path), data)
    }

    async fetch(path) {
        try {
            return (await getDocs(collection(database, path))).docs.map((doc) => doc.data())
        } catch {
            return []
        }
    }
}

module.exports = Database