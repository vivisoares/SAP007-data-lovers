//import { example, anotherExample } from '../src/data.js';
import { describe } from 'eslint/lib/rule-tester/rule-tester';
import { filter, ordination } from '../src/data.js';

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


const nomesPersonagens = [
  {"name": "Abadango Cluster Princess"},
  {"name": "Mechanical Morty"},
  {"name": "Kyle"},
  {"name": "Beth Smith"},
]


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

describe('function ordination()', () => {
  it('is a function', () => {
    expect(typeof ordination).toBe('function');
  });

    it('ordenação de A-Z', () => {
    expect(ordination(nomesPersonagens, "AZ")).toStrictEqual([nomesPersonagens[0], nomesPersonagens[3], nomesPersonagens[2], nomesPersonagens[1]]);
  });

    it('ordenação de Z-A', () => {
      expect(ordination(nomesPersonagens, "ZA")).toStrictEqual([nomesPersonagens[1], nomesPersonagens[2], nomesPersonagens[3], nomesPersonagens[0]]);
    });
  });
