import closeWithGrace from 'close-with-grace';
import { createServer } from './app.js';
import { prisma } from './db.js';
const PORT = process.env.PORT || 3000;
const app = createServer();
const server = app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
const cb = ({ err, signal }, done) => {
    if (err) {
        console.error('Closing server with error', err);
    }
    else {
        console.log(`${signal} received, closing server`);
    }
    server.close(async () => {
        await prisma.$disconnect();
        console.log('Server is closed');
        done();
    });
};
closeWithGrace({ delay: 10000 }, cb);
