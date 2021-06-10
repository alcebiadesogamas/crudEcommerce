import { Router } from 'express';
import itemsPedidoController from '../controllers/ItemsPedidoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, itemsPedidoController.store); // create a purchase
router.get('/', loginRequired, itemsPedidoController.index);// list purchases
router.get('/:id', loginRequired, itemsPedidoController.show);
router.put('/:id', loginRequired, itemsPedidoController.update);
router.delete('/:id', loginRequired, itemsPedidoController.delete);

export default router;
