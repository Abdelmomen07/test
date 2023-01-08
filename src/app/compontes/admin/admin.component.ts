import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchesService } from 'src/app/service/matches.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches: any = []
  players: any = []

  
  constructor( private router:Router ,private matchService:MatchesService) { }

  ngOnInit(): void {



    this.getAllMatches()
    this.getAllPlayers()
  }


  getAllMatches() {
    this.matchService.
    //this.matches = JSON.parse(localStorage.getItem('matches') || '[]')
  }

  getAllPlayers() {
    this.players = JSON.parse(localStorage.getItem("players") || "[]")
  }
  deleteMatch(id: any) {
    let pos
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        pos = i
      }
    }
    this.matches.splice(pos, 1)

localStorage.setItem("matches",JSON.stringify(this.matches))


  }


  deletePlayer(id: any) {
    let pos
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id === id) {
        pos = i
      }
    }
    this.players.splice(pos, 1)

localStorage.setItem("players",JSON.stringify(this.players))


  }







  editMatch(id:any){
    this.router.navigate(["add-matches/"+id])
  }
  editPlayer(id:any){
    this.router.navigate(["add-players/"+id])
  }

}

