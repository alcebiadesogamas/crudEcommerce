import { Router } from 'express';
import calcadoController from '../controllers/CalcadoController';

const router = new Router();

router.post('/', calcadoController.store); // create a shoe
router.get('/', calcadoController.index);// list shoes
router.get('/:id', calcadoController.show);
router.put('/:id', calcadoController.update);
router.delete('/:id', calcadoController.delete);

export default router;
