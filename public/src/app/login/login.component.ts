import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errors = null
  user = 
  {
    email : '',
    password: ''
  }

  constructor(
    private _httpService: HttpService,
    private _router: Router,
  ) { }

  ngOnInit() {
    
  }

  goHome(){
    console.log(this.user);
    // Code to pass new User data to backend & navigate to homepage
    // else there were errors - refresh and display them
    let observable = this._httpService.getUserByEmail(this.user.email);
    // Reset this.newTask to a new, clean object.
    observable.subscribe((data: any) => {
      console.log(data);
      if (data.hasOwnProperty('errors')) {
        this.errors = data.errors;
      } else if (this.user.password != data[0].password){
        this.errors = ["Incorrect Credentials. Please try again."]
      }
      else {
        this._router.navigate([`/home/`,`${data[0]._id}`])
      }
    })

  }
  }
