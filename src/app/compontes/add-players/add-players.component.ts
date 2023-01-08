import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
  addPlayerForm : FormGroup
  player:any = {}
  id:any
  titre :any
  constructor(private Router:Router, private AR: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.AR.snapshot.paramMap.get("id")

    if (this.id) {
      this.titre = "Edit Player"
      this.getPlayerById()
    } else {
      this.titre = "ADD Player"

    }
  }

  getPlayerById() {
    let players = JSON.parse(localStorage.getItem('players') || '[]')
    console.log('herererere',typeof this.id);

    for (let i = 0; i < players.length; i++) {

      if (players[i].id === Number(this.id)) {

        this.player=players[i]
      }
    }

    
  }


  
addEditPlayer() {
  let players = JSON.parse(localStorage.getItem("players") || "[]")

if (this.id) {
//Editttt
for (let i = 0; i < players.length; i++) {
if (players[i].id === Number(this.id)) {
  players[i]=this.player
}

}
localStorage.setItem("players",JSON.stringify(players))
this.Router.navigate(["admin"])


} else {
//Adddd
let playerId = JSON.parse(localStorage.getItem("playerId") || "1")
this.player.id = playerId
players.push(this.player)


localStorage.setItem("players", JSON.stringify(players))
localStorage.setItem("playerId", JSON.stringify(playerId + 1))


this.Router.navigate(["admin"])
}


}


}
