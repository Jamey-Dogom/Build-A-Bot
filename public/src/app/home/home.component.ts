import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUser = {};

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) { }

  ngOnInit() {
    this._route.params
    .subscribe((params: Params) => {
      console.log("Params: ", params);
      let self = this
      this._httpService.getUser(params.id)
        .subscribe((data:any) => {
          console.log("data", data);
          this.loggedInUser = data[0];
        })
    })
  }

}
