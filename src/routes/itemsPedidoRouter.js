import { Router } from 'express';
import itemsPedidoController from '../controllers/ItemsPedidoController';

const router = new Router();

router.post('/', itemsPedidoController.store); // create a purchase
router.get('/', itemsPedidoController.index);// list purchases
router.get('/:id', itemsPedidoController.show);
router.put('/:id', itemsPedidoController.update);
router.delete('/:id', itemsPedidoController.delete);

export default router;
