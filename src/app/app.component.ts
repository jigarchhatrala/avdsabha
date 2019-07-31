import {Component, DoCheck, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
    title = 'avdsabha';
    navVisibility = true;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit(): void {

    }

    ngDoCheck(): void {
        this.navVisibility = this.router.url !== '/login';
    }
}
