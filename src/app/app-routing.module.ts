import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compontes/home/home.component';
import { ContactComponent } from './compontes/contact/contact.component';
import { LoginComponent } from './compontes/login/login.component';
import { SignUpComponent } from './compontes/sign-up/sign-up.component';
import { AddMatchesComponent } from './compontes/add-matches/add-matches.component';
import { MatchesComponent } from './compontes/matches/matches.component';
import { AdminComponent } from './compontes/admin/admin.component';
import { AddPlayersComponent } from './compontes/add-players/add-players.component';
import { PlayersComponent } from './compontes/players/players.component';


const routes: Routes = [
{ path: "", component: HomeComponent},
{ path: "contact", component: ContactComponent},
{ path: "login", component: LoginComponent},
{path: "sign-up", component: SignUpComponent},
{path: "add-matches", component: AddMatchesComponent},
{path: "add-matches/:id", component: AddMatchesComponent},
{path: "matches", component: MatchesComponent},
{path: "admin", component: AdminComponent},
{path: "add-players", component: AddPlayersComponent},
{path: "add-players/:id", component: AddPlayersComponent},
{path: "players", component: PlayersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
