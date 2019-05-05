import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService, ACCESS_BASE } from '../services/config';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config: any;
  baseAccess: any;
  accessBool: boolean;

  constructor(private router: Router, private configService: ConfigService, @Inject(ACCESS_BASE) accessBase: string) {
    this.config = configService.loadJSON('./assets/config.json');
    this.accessBool = accessBase === 'true' ? true : false;
  }

  teacherUser() {
    this.router.navigate(['login']);
  }

  studantUser() {
    this.router.navigate(['aluno']);
  }

}
