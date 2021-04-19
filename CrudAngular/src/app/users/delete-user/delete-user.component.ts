import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  id: string | any;
  user: User | undefined;

  // tslint:disable-next-line: variable-name
  constructor(private userService: UserService, private route: ActivatedRoute, private _route: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.user = res.data;
    });
  }

  // tslint:disable-next-line: typedef
  del(){
    this.userService.deleteUser(this.id).subscribe( res => {
      alert('Usuario Removido');
      this._route.navigate(['/users']);
    });
  }

  // tslint:disable-next-line: typedef
  cancel() {
    this._route.navigate(['/users']);
  }
}
