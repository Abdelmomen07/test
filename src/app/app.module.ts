import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './compontes/home/home.component';
import { ContactComponent } from './compontes/contact/contact.component';
import { HeaderComponent } from './compontes/header/header.component';
import { FooterComponent } from './compontes/footer/footer.component';
import { LoginComponent } from './compontes/login/login.component';
import { SignUpComponent } from './compontes/sign-up/sign-up.component';
import { AddMatchesComponent } from './compontes/add-matches/add-matches.component';
import { MatchesComponent } from './compontes/matches/matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './compontes/banner/banner.component';
import { MatchComponent } from './compontes/match/match.component';
import { AdminComponent } from './compontes/admin/admin.component';
import { AddPlayersComponent } from './compontes/add-players/add-players.component';
import { PlayersComponent } from './compontes/players/players.component';
import { PlayerComponent } from './compontes/player/player.component';
import { ColorDirective } from './compontes/directives/color.directive';
import { FiltrePipe } from './compontes/pipes/filtre.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    AddMatchesComponent,
    MatchesComponent,
    BannerComponent,
    MatchComponent,
    AdminComponent,
    AddPlayersComponent,
    PlayersComponent,
    PlayerComponent,
    ColorDirective,
    FiltrePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
