import log from '../middlewares/log';
import _response from '../middlewares/_response';

export default (app: any) => {
  app.use(log);

  //Initial route
  app.get('/', (req: any, res: any) => {
    return _response(res, 200, 'API Service running.', '', '');
  });
};
