import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student-graphql-angular';
  getAllStudents: any[] = [];
  isLoading = true;
  isError: any;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo
      .watchQuery({
        query: gql` query{getAllStudents {
          sid
          name
          dept
          favSport
          classTeacher
    }} `,
      })
      .valueChanges.subscribe((result: any) => {
        this.getAllStudents = result?.data?.getAllStudents;
        this.isLoading = result.loading;
        this.isError = result.error;
      });

  }
}
