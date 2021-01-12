import { Component, OnInit } from '@angular/core';
import { ListarUsuariosService } from '../listarUsuarios/listar-usuarios.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;

  constructor(public listarUsers: ListarUsuariosService) { }

  ngOnInit(): void {
    this.listarUsers.createUser({
      name: "morpheus",
      job: "leader"
    });
    this.listarUsers.editUser({
      name: "morpheus",
      job: "zion resident"
    });
  }

}
