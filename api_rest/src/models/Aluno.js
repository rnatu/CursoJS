import Sequelize, { Model } from 'sequelize';

// Modelagem de dados para as querys ex: INSERT
export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT,
    },
    {
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      tableName: 'alunos',
      freezeTableName: true,
      sequelize,
    });
    return this;
  }
}
