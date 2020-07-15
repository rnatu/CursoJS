import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Renato',
      sobrenome: 'Xavier',
      email: 'renato@email.com',
      idade: 29,
      peso: 80,
      altura: 1.80,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
