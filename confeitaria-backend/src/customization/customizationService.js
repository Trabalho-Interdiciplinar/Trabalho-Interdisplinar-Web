const DbConnection = require('../database/connection')

class CustomizationService {
    async saveCustomization(customization, onSuccess, onError){
        new DbConnection().execute(
            `INSERT INTO site_customization (
                cor_primaria, cor_secundaria, cor_header_footer, url_imagem, fk_confeitaria_id
            ) VALUES (
                '${customization.corPrimaria}',
                '${customization.corSecundaria}',
                '${customization.header}',
                '${customization.url}',
                '${customization.confeitariaId}'
            )`, 
            (result) => { 
                console.log(result) 
                onSuccess()
            }, 
            (err) => {
                console.log(err)
                onError()
            }
        )
    }

    updateCustomization(customization, onSuccess, onError){
        console.log(customization)
        new DbConnection().execute(
            `UPDATE site_customization SET 
                cor_primaria = '${customization.corPrimaria}',
                cor_secundaria = '${customization.corSecundaria}',
                cor_header_footer = '${customization.header}' 
            WHERE fk_confeitaria_id = ${customization.confeitariaId}`, 
            (result) => { 
                console.log(result)
                onSuccess() 
            },
            (err) => { 
                console.log(err + "sauihsauihsauihsaiuh")
                onError() 
            }
        )
    }

    hasCustomization(confeitariaId, onSuccess, onError){
        new DbConnection().execute(
            `SELECT COUNT(*) FROM site_customization WHERE fk_confeitaria_id = ${confeitariaId}`, 
            (result) => { 
                console.log(result.rows[0].count)
                onSuccess(result.rows[0].count == 1) 
            },
            (err) => { onError() }
        )
    }

    fetchCustomization(confeitariaId, onSuccess, onError){
        new DbConnection().execute(
            `SELECT * FROM site_customization WHERE fk_confeitaria_id = ${confeitariaId}`,
            (result) => { 
                console.log(result.rows[0])
                onSuccess(result.rows[0]) 
            },
            (err) => { onError(err) }
        )
    }
}

module.exports = CustomizationService