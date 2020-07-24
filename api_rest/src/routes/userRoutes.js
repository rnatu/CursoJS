import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// # o parametro '/' não é referente ao index, pois está sendo definido no app.js como /users/

// ! Não deveriam existir
// router.get('/', userController.index);// Lista usuários
// router.get('/:id', userController.show); // Lista um usuário pelo id no req.params

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/* Métodos que normalmente são utilizados no controller
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
uptade -> atualiza um usuario -> PATCH (altera somente um valor) ou PUT (substitui um objeto inteiro por outro objeto inteiro)
*/
