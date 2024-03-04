const DbConnection = require('../database/connection')

class ConfeitariaService {
    async saveConfeitaria(confeitaria, filePath){
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

    async getConfeitariaIdByUserId(userId){
        let result = await new DbConnection().executeAsync(
            `SELECT id_confeitaria FROM confeitaria WHERE fk_id_usuario = '${userId}'`
        )

        return result.rows[0]
    }
}

module.exports = ConfeitariaService