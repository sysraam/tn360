import { Component, OnInit  } from '@angular/core';
import { HttpService } from '../service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'tn360';
  
  counter(i: number) {
    return new Array(i);
}

constructor(public httpcall:HttpService);

}
