import { Component, OnInit } from '@angular/core';
import { TokenStorageService} from 'src/app/token-storage.service';
import { ServiceService} from 'src/app/service.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users:any;

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getAllUser().subscribe(response =>{
      console.log(response);
      this.users = response;
    });
  }

}
