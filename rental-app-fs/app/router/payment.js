import Express from 'express';
import multer from 'multer';
import cuid from 'cuid';
import { db, conn, r, upload } from '../config/config';
const paymentRouter = Express.Router();

paymentRouter.post('/slip', upload.single('slip'), async (req, res, next) => {
    if (!req.file) {
        res.status(500).jsonp({ message: 'No file selected.' });
    }
    const resFile = await insertSlipToDB(req.file, req.body);
    if (resFile) {
        await updateReserveStatus(req.body);
        res.status(200).jsonp({ message: 'upload files successful.' });
    }
    res.status(500).jsonp({ message: 'Unabled to upload slip.' });
});

const updateReserveStatus = async (detail) => {
    const dbConn = await conn;
    return new Promise((resolve, reject) => {
        db.table('rental')
            .get(detail.rentalId)
            .update({ isReserved: true })
            .run(dbConn, (err, result) => err ? reject(null) : resolve(result));
    });
}

const insertSlipToDB = async (file, detail) => {
    const dbConn = await conn;
    return new Promise((resolve, reject) => {
        db
            .table('rentalPayment')
            .insert({
                id: cuid(),
                fileName: file.originalname,
                file: file,
                amount: detail.amount,
                rentalId: detail.rentalId,
            })
            .run(dbConn, (err, result) => err ? reject(null) : resolve(result));
    })
}

export default paymentRouter;