import multer from 'multer';
import db from 'rethinkdb';

let host;
if (process.env.NODE_ENV.trim().toUpperCase() === 'PRODUCTION') {
    host = 'db-service';
} else {
    host = '192.168.99.101';
}
let port = process.env.DB_PORT || 28015;
let dbName = process.env.DB_NAME || 'rental_db';

const conn = db.connect({ db: dbName, host, port, });

const upload = multer({ storage: multer.memoryStorage() });

export {
    upload,
    conn,
    db,
}