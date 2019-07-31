import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatSnackBar} from '@angular/material';
import {Constant} from '../Model/constant';
import {Router} from '@angular/router';
import {ResponseModel} from '../Model/response.model';
import {UserService} from '../service/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private http: HttpClient, private _snackBar: MatSnackBar, private router: Router, private userService: UserService) {

    }

    ngOnInit() {
    }

    login(username, password) {
        if (!username || !password) {
            this._snackBar.open('Please Enter Valid Data', 'Ok', {
                duration: 2000
            });
            return;
        }
        const form = new FormData();
        form.set('username', username);
        form.set('password', password);
        this.http.post(Constant.HOST + '/api/login', form).subscribe((data: ResponseModel) => {
            if (data.code === -1) {
                this._snackBar.open('Invalid Username Or Password', 'Ok', {
                    duration: 2000
                });
            } else if (data.code === 247) {
                this._snackBar.open(data.message, 'Ok', {
                    duration: 2000
                });
            } else {
                this.userService.setUser(data.data);
                this.router.navigate(['/attendance']);
            }
        }, err => {
            console.log(err);
            this._snackBar.open('Unknown Error Occur Please Try Again !', 'Ok', {
                duration: 4000
            });
        });
    }

}
