import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-user',
  templateUrl: './actualizar-user.component.html',
  styleUrls: ['./actualizar-user.component.css']
})
export class ActualizarUserComponent {

  idUser: number;
  userfound: User;
  user: User;
  userFoundByEmail: User;

  constructor(private userService: UserService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void{
    this.idUser = this.route.snapshot.params['id']; //obtener ID de la ruta
    this.user = new User();
    this.userService.obtenerUserById(this.idUser)
    .subscribe(
      dato => {
        this.user = dato;
      });
  }

  actualizarUser(){
    /*this.idUser = this.route.snapshot.params['id']; //obtener ID de la ruta
    this.userService.actualizarUser(this.idUser,this.user)
    .subscribe(
      dato => {
        this.irAListaUser();
      }, error => console.log(error)
    );*/

    this.userService.obtenerUserById(this.user.idUser).subscribe(
      dato => {
        this.userfound = dato;
        console.log(dato);

        if (this.userfound != null) {
          this.userService.obtenerUserByEmail(this.user.email).subscribe(
            dato => {
              this.userFoundByEmail = dato;

              if(this.userFoundByEmail != null){
                if (this.userfound.email == this.user.email && this.userFoundByEmail.idUser == this.userfound.idUser
                  || this.userfound.email != this.user.email && this.userFoundByEmail.idUser == this.userfound.idUser) {

                    this.userService.actualizarUser(this.idUser,this.user)
                    .subscribe(
                      dato => {
                        this.irAListaUser();
                      }, error => console.log(error)
                    );

                }else{
                  swal(` no actualiza porque ya existe user con ese email: ${this.user.email}`)
                }

              }else if(this.userfound.email != this.user.email){
                swal(`va actualizar: ${this.user.email}`)
                this.userService.actualizarUser(this.idUser,this.user)
                .subscribe(
                  dato => {
                    this.irAListaUser();
                  }, error => console.log(error)
                );
              }

            }
          );

        } else{
          swal(`No existe un usuario con ese id: ${this.user.email}`)
        }

      });

  }

  irAListaUser(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    this.actualizarUser();
  }
}
