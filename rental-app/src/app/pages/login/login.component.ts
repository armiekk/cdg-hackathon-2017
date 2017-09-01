import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit, AfterViewInit {

    isLanding = false;

    constructor(
        private $auth: AuthService,
        private $router: Router,
    ) { }

    ngOnInit() {
        
    }

    ngAfterViewInit(){
        this.$auth.user
        .subscribe(val => val && val.uid ? this.redirectToSearch() : null);
    }

    loginGoogle() {
        this.$auth.loginWithGoogle();
    }

    loginFacebook() {
        this.$auth.loginWithFacebook();
    }

    redirectToSearch = () => {
        this.isLanding = true;
        this.$router.navigate(['search']);
    };


}