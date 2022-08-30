import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './components/views/members/members.component';
import { RegisterComponent } from './components/views/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: MembersComponent,
  },
  {
    path: 'home',
    component: RegisterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
