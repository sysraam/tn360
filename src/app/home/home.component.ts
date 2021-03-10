import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewdata:any;

  constructor( private http:HttpClient) { }

  ngOnInit() {
    this.http.get<any>('http://localhost/').subscribe(data=>{
      this.viewdata = data;
      console.log(this.viewdata);
    })

  }

}
