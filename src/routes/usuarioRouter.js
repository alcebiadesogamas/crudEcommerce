import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', usuarioController.store); // create a user
router.get('/', loginRequired, usuarioController.index);// list users
router.get('/:id', loginRequired, usuarioController.show);
router.put('/', loginRequired, usuarioController.update);
router.delete('/', loginRequired, usuarioController.delete);

export default router;
