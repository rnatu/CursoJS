// # conexão dos models com o banco de dados
import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

/* verificando se existe associate em algum model, e se true executa a função associate(connection.models)
 utilizando avaliação de curto circuito com &&, retornando o primeiro valor falso, ou o ultimo */
models.forEach((model) => model.associate && model.associate(connection.models));
