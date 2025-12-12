import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { DashboardComponent } from './business/dashboard/dashboard.component';

export const routes: Routes = [
    {
        // al ingresar una URL base en '/' y si no esta logeado redirigir a login 
        // de lo contrario dirigirlo a Dashboard
        path:'', component: LoginComponent,
    },
    {
        //cuando este logeado y la url coincida con "/main" redirigir al componente hijo Dashboard
        path:'main', component: LayoutComponent,
        children:[
            {path:'', redirectTo: 'Dashboard', pathMatch: 'full'},
            {path:'Dashboard', component: DashboardComponent},
        ]
    }

];
