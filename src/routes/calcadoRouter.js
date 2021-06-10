import { Router } from 'express';
import calcadoController from '../controllers/CalcadoController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, calcadoController.store); // create a shoe
router.get('/', calcadoController.index);// list shoes
router.get('/:id', calcadoController.show);
router.put('/:id', loginRequired, calcadoController.update);
router.delete('/:id', loginRequired, calcadoController.delete);

export default router;
