import { Router } from 'express';
import pedidoController from '../controllers/PedidoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, pedidoController.store); // create a purchase
router.get('/', loginRequired, pedidoController.index);// list purchases
router.get('/:id', loginRequired, pedidoController.show);
router.put('/:id', loginRequired, pedidoController.update);
router.delete('/:id', loginRequired, pedidoController.delete);

export default router;
