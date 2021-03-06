import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AuthService } from "../../services/AuthService";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'register-modal',
  templateUrl: 'register.html'
})

export class RegisterModal {
    private username: string;
    private email: string;
    private password1: string;
    private password2: string;
    private errors: any = {};
    protected complete: boolean;

    constructor(private authService: AuthService, private translate: TranslateService, public viewCtrl: ViewController) {
        this.complete = false;
    }

    register = () => {
        this.errors = {
            email: [],
            username: [],
            password1: [],
            password2: []
        };
        if (this.validate()) {
            this.authService.register(this.username, this.password1, this.password2, this.email).subscribe((result) => {
                if (result === true) {
                    this.complete = true;
                } else if (result === false) {
                    this.errors.push("");    
                } else {
                    this.errors = result;
                }
            }, err => {
                if (err.error) {
                    if (err.error.email) {
                        this.errors.email.push(err.error.email);
                    }
                    if (err.error.username) {
                        this.errors.username.push("An account with this username already exists.");
                    }
                    if (err.error.password1) {
                        this.errors.password1.push(err.error.password1)
                    }
                    if (err.error.password2) {
                        this.errors.password2.push(err.error.password2)
                    }
                }
            });
        } else {
            this.complete = false;
        }    
    }

    validate = () => {
        let isValid = true;

        if (this.username === undefined) {
            this.errors.username = [this.translate.instant("REGISTER.REQUIRED")];
            isValid = false;
        }
        if (this.email === undefined) {
            this.errors.email = [this.translate.instant("REGISTER.REQUIRED")];
            isValid = false;
        }
        if (this.password1 === undefined) {
            this.errors.password1 = [this.translate.instant("REGISTER.REQUIRED")];
            isValid = false;
        }
        if (this.password2 === undefined) {
            this.errors.password2 = [this.translate.instant("REGISTER.REQUIRED")];
            isValid = false;
        }
        if (this.password1 !== this.password2) {
            this.errors.password2 = [this.translate.instant("REGISTER.MATCH")];
            isValid = false;
        }

        return isValid;
    }

    dismiss = () => {
        this.viewCtrl.dismiss();
    }
}
