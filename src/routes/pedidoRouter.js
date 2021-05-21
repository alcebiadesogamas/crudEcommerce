import { Router } from 'express';
import pedidoController from '../controllers/PedidoController';

const router = new Router();

router.post('/', pedidoController.store); // create a purchase
router.get('/', pedidoController.index);// list purchases
router.get('/:id', pedidoController.show);
router.put('/:id', pedidoController.update);
router.delete('/:id', pedidoController.delete);

export default router;
