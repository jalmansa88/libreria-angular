import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Libro } from './Libro';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class LibroService {

   private librosUrl = 'api/libros';

  constructor(
    private http: HttpClient) { }

 
	getLibros (): Observable<Libro[]> {
	    return this.http.get<Libro[]>(this.librosUrl);
	}

	getLibro(id: number): Observable<Libro> {
	    const url = `${this.librosUrl}/${id}`;
	    return this.http.get<Libro>(url);
	  }

  	searchLibros(term: string): Observable<Libro[]> {
	    if (!term.trim()) {
	      // if not search term, return empty hero array.
	      return of([]);
	    }
    return this.http.get<Libro[]>(`api/libros/?name=${term}`);
  }

}
