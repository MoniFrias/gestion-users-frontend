import { UserService } from './../user.service';
import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent {

  users : User[] =[];

  constructor(private userService: UserService,
              private router: Router){}

  ngOnInit(): void{
    this.obtenerUsers();
  }

  actualizarUser(idUser: number){
    this.router.navigate(['actualizar-user', idUser]);
  }

  eliminarUser(idUser: number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar el user",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true

    }).then((result) => {
      if(result.value){
        this.userService.eliminarUser(idUser).subscribe(dato => {
          console.log(dato);
          this.obtenerUsers();
          swal(
            'User eliminado',
            'el User a sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetallesUser(idUser: number){
    this.router.navigate(['user-detalles', idUser])
  }

  private obtenerUsers(){
    this.userService.obtenerListaUser()
    .subscribe(
      dato =>{
        this.users = dato;
      });
  }
}
