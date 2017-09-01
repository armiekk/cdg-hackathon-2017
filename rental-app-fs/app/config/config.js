import multer from 'multer';
import db from 'rethinkdb';

const host = process.env.DB_HOST || 'db-service';
const port = process.env.DB_PORT || 28015;
const dbName = process.env.DB_NAME || 'rental_db';

const conn = db.connect({ db: dbName, host, port, });

const upload = multer({ storage: multer.memoryStorage() });

export {
    upload,
    conn,
    db,
}