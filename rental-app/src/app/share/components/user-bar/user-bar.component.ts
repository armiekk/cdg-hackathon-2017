import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'comp-user-bar',
    templateUrl: 'user-bar.component.html'
})

export class UserBarComponent implements OnInit {
    userName;
    constructor(
        private $auth: AuthService,
        private $router: Router,
    ) {
    }

    ngOnInit() {
        this.$auth.user.subscribe(val => this.userName = val.displayName);
    }

    logout() {
        this.$auth.logout();
        this.$router.navigate(['/login']);
    }
}