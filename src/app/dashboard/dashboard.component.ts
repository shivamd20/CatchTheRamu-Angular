import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  games:Array<Object> = [{
    url : "this",
    title : 'Catch The Ramu'

  },{

url : "/tic-tac-toe-multiplayer/",
title: "Tic Tac Toe"
  }];

  gotoUrl(url){


    if(url == 'this'){


      this.route.navigateByUrl('/game')

    }else
    window.location = url;


  }

  constructor( private route:Router) { }

  ngOnInit() {
  }

}
