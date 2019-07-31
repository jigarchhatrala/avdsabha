import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(private userService: UserService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const user = this.userService.getUser();
        if (user) {
            if (user.expire > Math.trunc(new Date().getTime() / 1000)) {
                return true;
            }
        }
        if (this.router.url !== '/login') {
            this.router.navigate(['/login']);
        }
        return false;
    }
}
