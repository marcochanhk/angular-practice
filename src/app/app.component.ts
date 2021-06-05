import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menu = [
    {
      label: 'Accounts', link: '/accounts'
    }, {
      label: 'Create Account', link: '/create-account'
    }, {
      label: 'Contacts', link: '/contacts'
    }, {
      label: 'Create Contact', link: '/create-contact'
    }
  ];

}
