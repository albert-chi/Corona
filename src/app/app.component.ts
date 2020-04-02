import {Component, OnInit} from '@angular/core';
import{CoronaService} from "./corona.service";
import {Corona} from "./corona";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private coronaService : CoronaService){}
  lstCorona:Corona[];
  ngOnInit(){
    this.coronaService.getCorona().subscribe(
      data =>{
        this.lstCorona = data;
      }
    );
  }
}
