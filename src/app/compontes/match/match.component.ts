import { Component, Input, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() match:any
  @Output() idMatch = new EventEmitter<String>()
  constructor() { }
  ngOnInit() {
  }
  callParent(id:any){
  
    this.idMatch.emit(id)
    
  }
  result(a,b){
    if (Number(a) > Number(b)) {
      return  ["Win","green"]
    }
    if (Number(a) < Number(b)) {
      return ["Loss","red"]
      
    }
    else  {
      return ["Drow","yellow"]
    }
  }

}
