import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Libro } from '../libro';
import { LibroService } from '../libro.service';

@Component({
  selector: 'app-libro-search',
  templateUrl: './libro-search.component.html',
  styleUrls: [ './libro-search.component.css' ]
})
export class LibroSearchComponent implements OnInit {
  
  libros$: Observable<Libro[]>;
  private searchTerms = new Subject<string>();

  constructor(private libroService: LibroService) {}

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.libros$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.libroService.searchLibros(term)),
    );
  }
}
