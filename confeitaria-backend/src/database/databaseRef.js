const firebaseApp = require("../config/firebase")
const { getFirestore, setDoc, doc, addDoc, collection, getDocs } = require('firebase/firestore')

const database = getFirestore(firebaseApp)

class Database {
    async add(data, path) {
        return await addDoc(collection(database, path), data)
    }

    async fetch(path) {
        try {
            console.log(path)
            return (await getDocs(collection(database, path))).docs.map((doc) => {
                let jsonResponse = doc.data()
                jsonResponse["id"] = doc.id
                return jsonResponse
            })
        } catch (e){
            console.log(e)
            return []
        }
    }
}

module.exports = Database