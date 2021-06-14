import { Router } from 'express';
import calcadoController from '../controllers/CalcadoController';
import adminRequired from '../middlewares/adminRequired';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, adminRequired, calcadoController.store); // create a shoe
router.get('/', calcadoController.index);// list shoes
router.get('/:id', calcadoController.show);
router.put('/:id', loginRequired, adminRequired, calcadoController.update);
router.delete('/:id', loginRequired, adminRequired, calcadoController.delete);

export default router;
