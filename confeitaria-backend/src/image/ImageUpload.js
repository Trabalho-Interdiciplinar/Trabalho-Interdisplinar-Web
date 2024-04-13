const uuid = require('uuid')
const azure = require('azure-storage')
const { getStorage, ref, uploadBytes, getDownloadURL } = require("firebase/storage");
const firebase = require('../config/firebase');

class UploadImage {
    async uploadWithFirebase(image) {
        console.log(image);
        const storage = getStorage();
        let filename = Date.now().toString() + image.originalname
        const storageRef = ref(storage, 'products/' + filename);
        const metadata = { contentType: image.mimetype }

        let remoteFile = ""

        // 'file' comes from the Blob or File API
        await uploadBytes(storageRef, image.buffer, metadata).then( async (snapshot) => {
            console.log('Uploaded a blob or file!');
            await getDownloadURL(storageRef).then((url) => {
                remoteFile = url
            })
        });

        return remoteFile
    }

    async upload(image) {
        const blobService = azure.createBlobService("DefaultEndpointsProtocol=https;AccountName=blobconfeitaria;AccountKey=bJSFtY4gBW/SHcfB8cFdFNo5lG3uwfB0AcSucrlaHzph7+P/7Tvqde0aCvpP22Z4FNPQyT/5Bvj++ASt0Lg6aA==;EndpointSuffix=core.windows.net")
        let filename = Date.now().toString() + '.jpg'

        await blobService.createBlockBlobFromText('produtos', filename, image.buffer, { contentSettings: { contentType: image.mimetype } }, function (error, result, response) {
            if (error)
                filename = 'default.jpg'
        });

        return `https://blobconfeitaria.blob.core.windows.net/produtos/${filename}`
    }
}

module.exports = UploadImage