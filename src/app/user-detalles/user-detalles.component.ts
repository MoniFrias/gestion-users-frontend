import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-user-detalles',
  templateUrl: './user-detalles.component.html',
  styleUrls: ['./user-detalles.component.css']
})
export class UserDetallesComponent {

  idUser: number;
  user: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService){}

  ngOnInit(): void{
    this.idUser = this.route.snapshot.params['id']; //obtener ID de la ruta
    this.user = new User();
    this.userService.obtenerUserById(this.idUser)
    .subscribe(
      dato => {
        this.user = dato;
        swal(`Detalles del User ${this.user.name}`)
      });

  }

}
