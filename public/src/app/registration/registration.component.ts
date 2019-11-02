import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  errors = null
  user = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }

  constructor(private _httpService: HttpService, private _router: Router) { }

  ngOnInit() {
  }

  newUser() {
    console.log(this.user);
    // Code to pass new User data to backend & navigate to homepage
    // else there were errors - refresh and display them
    let observable = this._httpService.addUser(this.user);
    // Reset this.newTask to a new, clean object.
    observable.subscribe((data: any) => {
      if (data.hasOwnProperty('errors')) {
        this.errors = data.errors;
        console.log("we have errors")
      } else {
        console.log(data);
        console.log(data.firstName);
        this._router.navigate([`/home/`,`${data._id}`])
      }
    })

  }

}
