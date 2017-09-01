import Express from 'express';
import { conn, db } from '../config/config';

const DownloadRouter = Express.Router();

DownloadRouter.get('/images/:rentalId', async (req, res, next) => {
    const { rentalId } = req.params;
    res.jsonp(await findImageByRentalId(rentalId));
});

const findImageByRentalId = async (rentalId) => {
    const dbConn = await conn;
    return await findImgPromise(rentalId, dbConn);
}

const findImgPromise = (rentalId, dbConn) => {
    return new Promise((resolve, reject) => {
        db
            .table('rentalImage')
            .filter({
                rentalId,
            })
            .run(dbConn, (err, result) => err ? reject(err) : resolve(result.toArray()));
    })
}

export default DownloadRouter;