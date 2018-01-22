import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Libro }         from '../libro';
import { LibroService }  from '../libro.service';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: [ './libro-detail.component.css' ]
})
export class LibroDetailComponent implements OnInit {
  @Input() libro: Libro;

  constructor(
    private route: ActivatedRoute,
    private libroService: LibroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLibro();
  }

  getLibro(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.libroService.getLibro(id)
      .subscribe(libro => this.libro = libro);
  }

  goBack(): void {
    this.location.back();
  }

}