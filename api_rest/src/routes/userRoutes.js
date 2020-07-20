import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store); // o parametro '/' não é referente ao index, pois está sendo definido no app.js como /users/

export default router;

/* Métodos que normalmente são utilizados no controller
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
uptade -> atualiza um usuario -> PATCH (altera somente um valor) ou PUT (substitui um objeto inteiro por outro objeto inteiro)
*/
