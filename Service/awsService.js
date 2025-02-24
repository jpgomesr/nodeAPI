const repository = require("../repository/s3Repository");

const uploadImage = async (filePath, bucketName, keyName) => {
   try {
      const data = await repository.uploadFile(filePath, bucketName, keyName);
      return { success: true, location: data.Location };
   } catch (err) {
      console.log(err.message);
   }
};

const downloadImage = async (filePath, bucketName, keyName) => {
   try {
      const path = await repository.downloadFile(filePath, bucketName, keyName);
      return { success: true, path };
   } catch (err) {
      throw new Error("Erro ao fazer download: " + err.message);
   }
};

module.exports = {
   uploadImage,
   downloadImage,
};
