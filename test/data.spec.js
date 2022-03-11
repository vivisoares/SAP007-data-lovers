//import { example, anotherExample } from '../src/data.js';
import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { filter } from '../src/data.js';

// describe('filter', () => {
//   it('is a function', () => {
//     expect(typeof example).toBe('function');
//   });

//   it('returns `example`', () => {
//     expect(example()).toBe('example');
//   });
// });


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });

//TESTES




// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test('atribuição de objeto', () => {
//   const data = {one: 1};
//   data['two'] = 2;
//   expect(data).toEqual({one: 1, two: 2});
// });



//ORDENAÇÃO


const personagens = [
  {
      "id": 1,
      "name": "Abadango Cluster Princess",
      "status": "Alive",
      "species": "Alien",
      "type": "",
      "gender": "Female",
  },
  {
      "id": 2,
      "name": "Mechanical Morty",
      "status": "Dead",
      "species": "Robot",
      "type": "",
      "gender": "Male",
  },
  {
      "id": 3,
      "name": "Kyle",
      "status": "Dead",
      "species": "Humanoid",
      "type": "Miniverse inhabitant",
      "gender": "Male",
  },
  {
      "id": 4,
      "name": "Beth Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
  }]


// const nomesPersonagens = [
//   {"name": "Rick Sanchez"},
//   {"name": "Morty Smith"},
//   {"name": "Summer Smith"},
//   {"name": "Beth Smith"},
// ]


// describe('function ordination()', () => {
//   it('is a function', () => {
//     expect(typeof ordination).toBe('function');
//   });

// //     it('returns `example`', () => {
// //     expect(ordination()).toBe('example');
// //   });
// // });



describe('function filter()', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });

  it('filtrar por especie humana', () => {
    const specieHuman = 'Human'
    const expected = filter(personagens, specieHuman)
    expect (expected.length).toEqual(1)
    expect(expected[0].species).toEqual('Human');
  });
});

  it('filtrar por status Alive', () => {
    const statusAlive = 'Alive'
    const expected = filter(personagens, statusAlive)
    expect (expected.length).toEqual(2)
    expect(expected[0].status).toEqual('Alive');
    expect(expected[1].status).toEqual('Alive');
  });

