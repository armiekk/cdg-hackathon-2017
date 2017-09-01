import Express from 'express';
import multer from 'multer';
import cuid from 'cuid';
import { db, conn, r, upload } from '../config/config';
const UploadRouter = Express.Router();

UploadRouter.post('/images', upload.array('img'), (req, res, next) => {
    if (!req.files.length) {
        res.status(500).jsonp({ message: 'No file selected.' });
    }
    insertImageToDB(req.files, req.body.rentalId);
    res.status(200).jsonp({ message: 'upload files successful.' });
});

const insertImageToDB = async (files, rentalId) => {
    const dbConn = await conn;
    for (let file of files) {
        await insertPromise(file, dbConn, rentalId);
    }
}

const insertPromise = (file, dbConn, rentalId) => {
    return new Promise((resolve, reject) => {
        db
            .table('rentalImage')
            .insert({
                id: cuid(),
                fileName: file.originalname,
                file: file,
                rentalId,
            })
            .run(dbConn, (err, result) => err ? reject(err) : resolve(result));
    })
}

export default UploadRouter;