import { Component, OnInit } from '@angular/core';
import { AppUser } from '../apollo/model/graphql';
import { Apollo } from 'apollo-angular';
import { ALL_APPLICATION_USERS, ApplicationUsersQueryResponse } from './dashboard.graphql';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  appUsers: AppUser[];

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.loadAppUsers();
  }


  public loadAppUsers(): void {

    this.apollo.watchQuery({
      query: ALL_APPLICATION_USERS
    }).valueChanges.subscribe((response) => {
      this.appUsers = (<ApplicationUsersQueryResponse>(response.data)).appUsers;
    });

  }

}
