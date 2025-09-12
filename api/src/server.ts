import express from 'express';
import cors from 'cors'
import { ServerEnvs } from './config/envs';
import routes from './router';

const server = express();

const corsOptions = {
  origin:'http://localhost:3000', 
  credentials: true,
  optionSuccessStatus:200
}

server.use(cors(corsOptions));

server.use(express.json());

server.use('/api', routes);

server.listen(ServerEnvs.PORT, () => console.log('Server online'));
