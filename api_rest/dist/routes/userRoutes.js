"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

// # o parametro '/' não é referente ao index, pois está sendo definido no app.js como /users/

// ! Não deveriam existir
// router.get('/', userController.index);// Lista usuários
// router.get('/:id', userController.show); // Lista um usuário pelo id no req.params

router.post('/', _loginRequired2.default, _UserController2.default.store);
router.put('/', _loginRequired2.default, _UserController2.default.update);
router.delete('/', _loginRequired2.default, _UserController2.default.delete);

exports. default = router;

/* Métodos que normalmente são utilizados no controller
index -> lista todos os usuários -> GET
store/create -> cria um novo usuário -> POST
delete -> apaga um usuário -> DELETE
show -> mostra um usuário -> GET
uptade -> atualiza um usuario -> PATCH (altera somente um valor) ou PUT (substitui um objeto inteiro por outro objeto inteiro)
*/
