import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent {

  user: User = new User();
  userFound: User;

  constructor(private userService: UserService,
              private router: Router){}

  ngOnInit(): void{
  }

  guardarUser(){
    /*this.userService.registrarUser(this.user)
    .subscribe(
      dato => {
        console.log(dato);
        this.irAListaUser();
      }, error => console.log(error)
      );*/

       this.userService.obtenerUserByEmail(this.user.email).subscribe(
        dato => {
          this.userFound = dato;

          console.log(dato);

          if (this.userFound == null) {
            this.userService.registrarUser(this.user)
            .subscribe(
              dato => {
                console.log(dato);
                this.irAListaUser();
          }, error => console.log(error) );
          } else{
            swal(`Ya existe un usuario con ese email: ${this.user.email}`)
          }
        }, error => console.log(error));


  }

  irAListaUser(){
    this.router.navigate(['/users']);
  }

  onSubmit(){
    this.guardarUser();
  }
}
