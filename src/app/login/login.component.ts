import { Component, OnInit } from '@angular/core';

/*----FIRBASE-AUTH---- */
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
/*----FIRBASE-AUTH---- */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AngularFireAuth) {}
  login() {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.signOut();
  }

  ngOnInit(): void {
  }

}
