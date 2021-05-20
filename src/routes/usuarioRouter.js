import { Router } from 'express';
import usuarioController from '../controllers/UsuarioController';

const router = new Router();

router.post('/', usuarioController.store); // create a user
router.get('/', usuarioController.index);// list users
router.get('/:id', usuarioController.show);
router.put('/:id', usuarioController.update);
router.delete('/:id', usuarioController.delete);

export default router;
