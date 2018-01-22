import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const libros = [
      	{ id: 1, name: 'Harry Potter 1', author: 'JK Rowling', date: '2014-01-12' },
		{ id: 2, name: 'Harry Potter 2', author: 'jk', date: '2015-01-12' }
    ];
    return {libros};
  }
}