import { Component, OnInit } from '@angular/core';
import { Parser } from '../../node_modules/@angular/compiler/src/ml_parser/parser';
import { DataService } from './data.service';
import { MainFeed, Feed } from './model/feed';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  private feeds:MainFeed;

  private  feedspromist:Promise<MainFeed>;

 appfeedsarray:Array<Feed>;

  ngOnInit(): void {
  
  }
  title = 'app';


  

  constructor(private data:DataService) {
  this.feedspromist= this.data.getAsyncData();
  this.feedspromist.then(x=>this.appfeedsarray=x.items.filter(x=>x.title.indexOf("של")>-1));


  }

}



