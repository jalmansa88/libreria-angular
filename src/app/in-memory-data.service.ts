import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const libros = [
      	{ id: 1, name: 'Harry Potter y la Piedra Filosofal', author: 'JK Rowling', date: '1997-06-30', publisher: 'Salamandra', price: 13.00, language: 'Español' },
      	{ id: 2, name: 'Harry Potter y la Cámara Secreta', author: 'JK Rowling', date: '1998-07-02', publisher: 'Salamandra', price: 13.00, language: 'Español' },
      	{ id: 3, name: 'La catedral del mar', author: 'I. Falcones', date: '2006-04-03', publisher: 'Grijalbo', price: 10.95, language: 'Español' },
      	{ id: 4, name: 'Clean Code', author: 'Robert C. Martin', date: '2008-09-07', publisher: 'Prentice Hall', price: 31.30, language: 'Ingles' },
      	{ id: 5, name: 'Desarrollo de aplicaciones para Android', author: 'Joan Ribas Lequerica', date: '2017-05-10', publisher: 'Anaya', price: 28.00, language: 'Español' },
      	{ id: 6, name: 'Una Columna de Fuego', author: 'Ken Follet', date: '2017-09-12', publisher: 'Plaza & Janes', price: 24.90, language: 'Español' }
    ];
    return {libros};
  }
}