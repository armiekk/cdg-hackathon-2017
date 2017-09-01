import Express from 'express';
import UploadRouter from './router/upload';
import DownloadRouter from './router/download';

const app = Express();

app.use('/api/upload', UploadRouter);
app.use('/api/download', DownloadRouter);

app.listen(5000, () => console.log('App listen on port 5000'));