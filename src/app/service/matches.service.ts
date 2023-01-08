import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  matchUrl="http://localhost:3000/matches"
  constructor(private bostagi: HttpClient) { }
  getAllMatches(){
    return this.bostagi.get<{matches:any}>(this.matchUrl)

  }
  addMatch(match:any){
    return this.bostagi.post<{message:any}>(this.matchUrl,match)

  }
  deleteMatch(id:any){
    return this.bostagi.delete<{message:any}>(this.matchUrl + '/'+id)

  }
  getMatchById(id:any){
    
  }
  updateMatch(id:any){
    return this.bostagi.delete<{message:any}>(this.matchUrl + '/'+id)

  }

}
