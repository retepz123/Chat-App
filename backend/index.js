import express from 'express';
import process from 'node:process';
import mongoose from 'mongoose';
import registerROutes from '../backend/src/modules/routes/registrationRoutes.js';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

async function connect() {
  try{
  await mongoose.connect ('mongodb+srv://pedrojuana08_db_user:k5D2DtugxMDQ4AIU@cluster1.pvtxe6n.mongodb.net/chat');
  console.log('✅ Connected Successfully');
} catch (err) {
  console.error('👎Unable to connect:', err);
}
}

connect();

app.set('port', PORT);
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Hello World!',
  });
});

app.use('/api/auth', registerROutes );

app.listen(PORT, () => {
  console.log(`App is listening to port ${PORT}`);
});
