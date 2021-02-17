'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {truncate: true, cascade: true, restartIdentity: true});

    const authors = await queryInterface.bulkInsert('authors', [
      { firstName: 'Keith',
        lastName: 'Fuller',
        bio: 'Key contributor to various newspapers in the Greater Puget Sound area. Father. Bike enthusiast.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { firstName: 'Bobby',
        lastName: 'Bobbington',
        bio: 'Adventurer, biking and hiking enthusiast.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { firstName: 'Misty',
        lastName: 'Owens',
        bio: 'Blogger in favor of public transit and community building in First Hill and Capitol Hill.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {returning: true})
    console.log('author bulk insert: ', authors);

    await queryInterface.bulkDelete('articles', null, {truncate: true, cascade: true, restartIdentity: true});
    const articles = await queryInterface.bulkInsert('articles', [
      { title: 'Bike usage in Seattle grows as city plans new lanes.',
          content: 'Bike lanes in the downtown area, as well as the surrounding areas, are being installed.',
          authorId: authors[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { title: 'Local Events: Capitol Hill Art Walk',
          content: 'Celebrate community and expression at the next Capitol Hill Art Walk.',
          authorId: authors[0].id,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        { title: 'Things To Do: Hike Rattlesnake Ridge',
          content: 'This 2 mile hike is difficult enough to feel like an accomplishment, easy enough for most people to handle, and has a great view at the top.',
          authorId: authors[1].id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
    ], {returning: true})
    console.log('articles bulk insert: ', articles);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
