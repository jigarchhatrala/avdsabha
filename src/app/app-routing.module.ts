import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AttendanceComponent} from './attendance/attendance.component';
import {AuthGuardService} from './service/auth-guard.service';


const routes: Routes = [
    {path: 'attendance', component: AttendanceComponent, canActivate: [AuthGuardService]},
    {path: 'login', component: LoginComponent},
    {path: '**', redirectTo: 'attendance'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
