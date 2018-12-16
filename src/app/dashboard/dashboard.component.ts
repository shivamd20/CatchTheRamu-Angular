import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  games:Array<Object> = [{
    url : "/CatchTheRamu-Angular/",
    title : 'Catch The Ramu'

  },{

url : "/tic-tac-toe-multiplayer/",
title: "Tic Tac Toe"
  }];

  gotoUrl(url){


    window.location = url;


  }

  constructor() { }

  ngOnInit() {
  }

}
