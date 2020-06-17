import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  private submissionForm: AngularFirestoreCollection<any>;
  public emailSent=false;

  public centers=[
    {"id":"ashkelon","hebName":"אשקלון"},
    {"id":"ashkelon-beach","hebName":"חוף אשקלון"},
    {"id":"sderot","hebName":"שדרות"},
    {"id":"shaar-hanegev","hebName":"שער הנגב"},
    {"id":"negev-fields","hebName":"שדות נגב"},
    {"id":"eshkol","hebName":"אשכול"},
    {"id":"bedouin-society","hebName":"החברה הבדואית"},
    {"id":"benjamin","hebName":"בנימין"},
    {"id":"shomron","hebName":"שומרון"},
    {"id":"etzion","hebName":"עציון"},
    {"id":"judea","hebName":"יהודה"}
  ];

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.submissionForm = this.firestore.collection('submissions');
  }

  submitData() {
    let data = {
      name: (<HTMLInputElement>document.getElementById("fullName")).value + "<br>",
      email: (<HTMLInputElement>document.getElementById("email")).value + "<br>",
      phone: (<HTMLInputElement>document.getElementById("phone")).value + "<br>",
      contactIssue: (<HTMLInputElement>document.getElementById("contactIssue")).value + "<br>",
      contactCenter: (<HTMLInputElement>document.getElementById("contactCenter")).value + "<br>",
      livingPlace: (<HTMLInputElement>document.getElementById("livingPlace")).value + "<br>",
      message: (<HTMLInputElement>document.getElementById("message")).value
    };
    if (verifyFields(data) != false) {
      this.submissionForm.add(data).then().catch(err => console.log(err))
        .finally(() => {
          (<HTMLInputElement>document.getElementById("fullName")).value = "";
          (<HTMLInputElement>document.getElementById("email")).value = "";
          (<HTMLInputElement>document.getElementById("phone")).value = "";
          (<HTMLInputElement>document.getElementById("contactIssue")).value = "";
          (<HTMLInputElement>document.getElementById("contactCenter")).value = "";
          (<HTMLInputElement>document.getElementById("livingPlace")).value = "";
          (<HTMLInputElement>document.getElementById("message")).value = "";
          this.emailSent=true;
        });
    }
    else {
      if (validateEmail(data.email) == false)
        alert("האימייל שהוזן אינו תקין");
      else
        alert("ישנם שדות חובה שלא מולאו");
    }
  }
}

function verifyFields(data) {
  if (data.name == "<br>")
    return false;
  if (validateEmail(data.email) == false)
    return false;
  if (data.phone == "<br>")
    return false;
  if (data.contactIssue == "<br>")
    return false;
  if (data.contactCenter == "<br>")
    return false;
  if (data.message == "<br>")
    return false;
}

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(String(email).toLowerCase());
}

