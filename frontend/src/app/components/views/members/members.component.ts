import { Component, OnInit } from '@angular/core';
import { MemberDto } from 'src/app/swagger-api/models';
import { UsersService } from 'src/app/swagger-api/services';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.getMembers()
  }

  getMembers(): any {
    this.userService.apiUsersGet$Json$Response().subscribe(memb => console.log(memb));
  }
}
