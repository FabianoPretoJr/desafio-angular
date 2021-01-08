import { Component, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from './usuarios-service.service';
import { Usuario } from './usuarios';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent {

  displayedColumns = ['id', 'name', 'username', 'email', 'action'];
  dataSource: MatTableDataSource<Usuario>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private usuariosService: UsuariosService, public dialog: MatDialog) {
    this.usuariosService.read().subscribe(usuarios => {
      this.dataSource = new MatTableDataSource(usuarios);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(usuarios);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(id: number) {
    console.log(id);
    var dadosUser = this.dataSource.data.slice((id - 1), id);
    this.dialog.open(DialogDataUsuario, { data: dadosUser });
  }
}

@Component({
  selector: 'app-dialog-data-usuario',
  templateUrl: 'dialog-data-usuario.html',
})
export class DialogDataUsuario {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Usuario) {
    console.log(data);
  }
  
}
