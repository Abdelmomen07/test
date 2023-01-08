import { Component, OnInit } from '@angular/core';
import { MatchesService } from "src/app/service/matches.service";

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any=[]
  
  constructor(private matchService:MatchesService) { }
  trem:any
  

  ngOnInit():void  {
    this.getAllMatches()
  }

  getAllMatches() {
    //this.matches = JSON.parse(localStorage.getItem("matches") || "[]")
    this.matchService.getAllMatches().subscribe((result)=>{
      console.log("here",result.matches);
      this.matches = result.matches
      
    })
  }
  
  deleteMatch(id:any){
    this.matchService.deleteMatch(id).subscribe((res)=>{
      console.log(res.message);
      this.getAllMatches()

    })
    /*console.log("parenttttttt",id);
    
    let pos
    for (let i = 0; i < this.matches.length; i++) {
      if (this.matches[i].id === id) {
        pos = i
      }
    }
    this.matches.splice(pos, 1)

localStorage.setItem("matches",JSON.stringify(this.matches))
    */
  }
    
 
}
