module.exports = {
  async up (queryInterface, Sequelize) {
    const [courses] = await queryInterface.sequelize.query('SELECT id FROM categories;')

    await queryInterface.bulkInsert('courses', [
      { name: 'Programador Full-stack Javascript', synopsis: 'Torne-se um mestre em desenvolvimento web Full-stack com JavaScript neste curso abrangente.', featured: true, category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Dominando a Linguagem Ruby', synopsis: 'Explore e conquiste o mundo da programação Ruby, dominando sua sintaxe única e aplicações versáteis neste curso abrangente.', category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Micro-serviços com Node.js', synopsis: 'Navegue pelo universo dos micro-serviços com Node.js neste curso especializado, aprendendo a criar e implementar arquiteturas escaláveis e eficientes.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Criando APIs Profissionais com Ruby on Rails', synopsis: 'Aprenda a construir APIs profissionais de alta qualidade utilizando Ruby on Rails neste curso especializado.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'TDD na Prática: Testando APIs Node.js', synopsis: 'Aplique Test-Driven Development (TDD) de forma prática e eficiente em APIs Node.js neste curso direcionado.', featured: true, category_id: categories[0].id, created_at: new Date(), updated_at: new Date() },
      { name: 'TDD na Prática: Testando Aplicações React', synopsis: 'Coloque o Test-Driven Development (TDD) em ação com aplicações React neste curso prático, focado em testar de forma eficaz suas criações.', featured: true, category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Especialista Front-end: Vue.js', synopsis: 'Torne-se um especialista Front-end dominando o Vue.js em profundidade, por meio deste curso especializado e prático.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Criando Sites e Apps 3D com Three.js', synopsis: 'Desenvolva seu conhecimento na criação de sites e aplicativos em 3D com Three.js, por meio deste curso prático e especializado.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Dominando o Bootstrap 5', synopsis: 'Mestre em Bootstrap 5 com este curso especializado, explorando a fundo suas capacidades de criação de interfaces modernas e responsivas.', category_id: categories[1].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Visual Studio Code para Programadores Javascript', synopsis: 'Explorando o Visual Studio Code para programadores JavaScript: Domine a eficiência dessa ferramenta neste curso prático e direcionado.', category_id: categories[2].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Comandos do Terminal Linux: Um Guia Completo', synopsis: 'Navegue pelo Terminal Linux com confiança: Este guia abrangente oferece todos os comandos essenciais em um curso direto e prático.', category_id: categories[2].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Comunicação e Trabalho em Equipe', synopsis: 'Aprimore suas habilidades de comunicação e colaboração em equipe neste curso abrangente, capacitando você para interações eficazes e trabalho conjunto bem-sucedido.', category_id: categories[3].id, created_at: new Date(), updated_at: new Date() },
      { name: 'Programador Nômade', synopsis: 'Explore a vida de programador nômade: Aprenda a criar uma carreira flexível e independente, trabalhando remotamente enquanto viaja, neste curso especializado.', featured: true, category_id: categories[4].id, created_at: new Date(), updated_at: new Date() },
      { name: 'O Guia do Programador Freelancer', synopsis: 'Navegue pelo mundo do trabalho freelancer com confiança: Este guia abrangente oferece insights e estratégias para estabelecer uma carreira bem-sucedida como programador independente.', category_id: categories[4].id, created_at: new Date(), updated_at: new Date() },
    ])
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {})
  }
};
