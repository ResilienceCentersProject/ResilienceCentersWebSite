import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private submissionForm: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
      this.submissionForm = this.firestore.collection('submissions');
  }

  submitData() {
    let data = {
      name:(<HTMLInputElement>document.getElementById("fullName")).value + "<br>",
      email:(<HTMLInputElement>document.getElementById("email")).value + "<br>",
      phone:(<HTMLInputElement>document.getElementById("phone")).value + "<br>",
      contactIssue:(<HTMLInputElement>document.getElementById("contactIssue")).value + "<br>",
      contactCenter:(<HTMLInputElement>document.getElementById("contactCenter")).value + "<br>",
      message:(<HTMLInputElement>document.getElementById("message")).value
    };

  this.submissionForm.add(data).then().catch(err => console.log(err))
  .finally(() => {
    (<HTMLInputElement>document.getElementById("fullName")).value = "";
    (<HTMLInputElement>document.getElementById("email")).value = "";
    (<HTMLInputElement>document.getElementById("phone")).value = "";
    (<HTMLInputElement>document.getElementById("contactIssue")).value = "";
    (<HTMLInputElement>document.getElementById("contactCenter")).value = "";
    (<HTMLInputElement>document.getElementById("message")).value = "";
    alert("בקשתך התקבלה ותענה בהקדם.");
  });
  }
}
