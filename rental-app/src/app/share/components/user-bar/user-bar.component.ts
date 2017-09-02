import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'comp-user-bar',
    templateUrl: 'user-bar.component.html',
    host: {
      '(window:resize)': 'onResize'
    }
})

export class UserBarComponent implements OnInit {
    userName;
    isSmall;

    constructor(
        private $auth: AuthService,
        private $router: Router,

    ) {
      this.isSmall = document.documentElement.clientWidth < 450
    }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.isSmall = document.documentElement.clientWidth < 450;
  }

    ngOnInit() {
        this.$auth.user.subscribe(val => this.userName = val.displayName);
    }

    logout() {
        this.$auth.logout();
        this.$router.navigate(['/login']);
    }
}
