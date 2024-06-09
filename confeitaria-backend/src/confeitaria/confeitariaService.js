const DbConnection = require('../database/connection')
const { getFirestore, collectionGroup, setDoc, doc, addDoc, collection, getDocs } = require('firebase/firestore')
const firebaseApp = require("../config/firebase")

class ConfeitariaService {

    async saveConfeitaria(confeitaria, filePath) {
        let result = await new DbConnection().executeAsync(`
            INSERT INTO confeitaria(
                nome, logradouro, numero, bairro, 
                descricao, telefone, celular, nome_diretor, fk_id_usuario, logo_url
            ) 
            VALUES(
                '${confeitaria.nome}', '${confeitaria.logradouro}', '${confeitaria.numero}',
                '${confeitaria.bairro}', '${confeitaria.descricao}', '${confeitaria.telefone}',
                '${confeitaria.celular}', '', '${confeitaria.usuario_id}', '${filePath}'
        )`);

        return result.rows[0];
    }

    async getConfeitariaIdByUserId(userId) {
        let result = await new DbConnection().executeAsync(
            `SELECT id_confeitaria FROM confeitaria WHERE fk_id_usuario = '${userId}'`
        )

        return result.rows[0]
    }

    async getConfeitarias() {
        let result = await new DbConnection().executeAsync(

        )
    }

    async fetchConfeitarias(onLoad, onError) {
        const db = getFirestore(firebaseApp);
        let catalogo = await getDocs(collection(db, "catalogo", "confeitarias", "ids"))
        let profileList = []

        await Promise.all(
            catalogo.docs.map(async (confeitaria) => {
                let profiles = await getDocs(collection(db, "confeitaria", confeitaria.data().confeitariaId, "perfil"))
                profiles.docs.map((profile) => profileList.push(profile.data()))
            })
        );
        onLoad(profileList)
    }

    async fetchConfeitaria(confeitariaId, onLoad, onError){
        const db = getFirestore(firebaseApp);
        let catalogo = await getDocs(collection(db, "confeitaria", confeitariaId, "perfil"))
        catalogo.docs.map((doc) => { 
            //console.log(doc.data())
            onLoad(doc.data())
            return
        })
    }

    async saveProfile(confeitaria, onCreated, onError) {
        const db = getFirestore(firebaseApp);
        addDoc(collection(db, "confeitaria", confeitaria.usuario_id, "perfil"), confeitaria)
            .then((savedProfile) => { onCreated(savedProfile) })
            .catch((error) => { onError(error) });
    }

    async saveCatalog(confeitariaId) {
        const db = getFirestore(firebaseApp);
        console.log(confeitariaId)
        await addDoc(collection(db, "catalogo", "confeitarias", "ids"), { confeitariaId })
    }
}

module.exports = ConfeitariaService