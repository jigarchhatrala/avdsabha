import {Injectable} from '@angular/core';
import {UserModel} from '../Model/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user: UserModel = null;
    private key = 'kEY';

    constructor() {
        this.user = JSON.parse(sessionStorage.getItem(this.key));
    }

    setUser(user: UserModel) {
        this.user = user;
        sessionStorage.clear();
        sessionStorage.setItem(this.key, JSON.stringify(this.user));
    }

    getUser(): UserModel {
        return this.user;
    }

    isAuthenticated(): boolean {
        if (this.user !== null) {
            if (this.user.expire > Math.trunc(new Date().getTime() / 1000)) {
                return true;
            }
        }
        return false;
    }

    getFormData(): FormData {
        if (this.user) {
            const form = new FormData();
            form.set('username', this.user.phone);
            form.set('token', this.user.token);
            return form;
        }
        return null;
    }
}
