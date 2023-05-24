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
      title: '¿Are you sure?',
      text: "Confirm if you want to delete the user?",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'No, Cancel',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true

    }).then((result) => {
      if(result.value){
        this.userService.eliminarUser(idUser).subscribe(dato => {
          console.log(dato);
          this.obtenerUsers();
          swal(
            'User Deleted',
            'The user has been deleted successfully',
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
