import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FotosService } from './fotos.service';
import { Foto } from './fotos';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit, OnDestroy {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  fotos: Observable<any>;
  dataSource: MatTableDataSource<Foto>;

  constructor(private fotosService: FotosService, private changeDetectorRef: ChangeDetectorRef) { }
  
  ngOnInit(): void {
    this.fotosService.read().subscribe(fotos => {
      this.dataSource = new MatTableDataSource(fotos);
      this.changeDetectorRef.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.fotos = this.dataSource.connect();
      console.log(fotos);
    });
  }

  ngOnDestroy() {
    if (this.dataSource) { 
      this.dataSource.disconnect(); 
    }
  }
}
