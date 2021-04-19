import { RequestUpdate } from './../user.model';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: string | any;
  request!: RequestUpdate;

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.id =  '';

   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(this.id).subscribe(res => {
      this.request = {
        name: `${res.data.first_name} ${res.data.last_name}`,
        job: ''
      };
    });
  }

  // tslint:disable-next-line: typedef
  update() {
    this.userService.updateUser(this.id, this.request).subscribe(res => {
      alert(`Atualizar: ${res.updatedAt}, Nome: ${res.name},  Job: ${res.job}`);
    });
  }
}
