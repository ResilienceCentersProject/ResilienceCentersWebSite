/*import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";*/

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
  //NEED TO CHECK IF isAuth IS RIFGTLY PLASED
  
  user: Observable<firebase.User>;
  private isAuth=false;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.isAuth=true;
        this.router.navigate(['/authorized-zone']); 
        console.log('login was successful!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        alert('שם המשתמש או הסיסמא שגויים,  נסה שנית או פנה אל מזכירת המרכז');
      });
    
  }

  logout() {
    this.firebaseAuth.signOut();
    this.isAuth=false;
    this.router.navigate(['/login']); 
  }

  get isLoggedIn(): boolean {
    return this.isAuth;
  }
  

}
