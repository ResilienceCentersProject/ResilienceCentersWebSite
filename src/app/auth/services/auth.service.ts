import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export interface User {
  email: string;
} 

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //NEED TO SET A LIMIT TO THE NUMBER OF ERRORS AND A TIME OUT
  //NEED TO SET WHAT HAPPENS IN CASE OF ERROR
  //NEED TO CHECK IF isAuth IS PLACED CORCTLY
  
  user: Observable<firebase.User>;
  private isAuth=false;//set to true id user is authenticated

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  //login function
  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.isAuth=true;//user is logged in
        this.router.navigate(['/authorized-zone']);//go to authorized zone 
      })
      .catch(err => {
        alert('שם המשתמש או הסיסמא שגויים,  נסה שנית או פנה אל מזכירות המרכז');
      });
    
  }

  //logout functions
  logout() {
    this.firebaseAuth.signOut();
    this.isAuth=false;////user is logged out
    this.router.navigate(['/login']);//navigate to login page
  }

  //returns true of user is logged in
  get isLoggedIn(): boolean {
    return this.isAuth;
  }
  

}
