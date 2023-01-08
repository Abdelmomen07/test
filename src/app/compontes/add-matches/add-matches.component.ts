import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchesService } from 'src/app/service/matches.service';

@Component({
  selector: 'app-add-matches',
  templateUrl: './add-matches.component.html',
  styleUrls: ['./add-matches.component.css']
})
export class AddMatchesComponent implements OnInit {
  
  addMatchForm : FormGroup
  match: any = {}
  id: any
  titre: any
  constructor(private Router:Router, private AR: ActivatedRoute , private mService:MatchesService) { }

  ngOnInit(): void {
    // this.id=window.location.pathname.substring(11)
    this.id = this.AR.snapshot.paramMap.get("id")

    if (this.id) {
      this.titre = "Edit Match"
      this.getMatchById()
    } else {
      this.titre = "ADD Match"

    }
  

  }


 addEditMatch() {
    let matches = JSON.parse(localStorage.getItem("matches") || "[]")

if (this.id) {
//Editttt
for (let i = 0; i < matches.length; i++) {
  if (matches[i].id === Number(this.id)) {
    matches[i]=this.match
  }
  
}
localStorage.setItem("matches",JSON.stringify(matches))
this.Router.navigate(["admin"])


} else {
  //Adddd
  //let matchId = JSON.parse(localStorage.getItem("matchId") || "1")
 // this.match.id = matchId
 // matches.push(this.match)
  //localStorage.setItem("matches", JSON.stringify(matches))
  //localStorage.setItem("matchId", JSON.stringify(matchId + 1))

  this.mService.addMatch(this.match).subscribe((res)=>{
    console.log("here into addMatch");
    
  })


 
}


  }
  getMatchById() {
   /* let matches = JSON.parse(localStorage.getItem('matches') || '[]')
    console.log('herererere',typeof this.id);

    for (let i = 0; i < matches.length; i++) {

      if (matches[i].id === Number(this.id)) {

        this.match=matches[i]
      }
    }*/
    this.mService.getMatchById(this.id).subscribe((res)=>{
      this.match = res.match
    })
    
  }

}


 



