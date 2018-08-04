import { Component, OnInit } from '@angular/core';
import { MainFeed, Feed } from '../model/feed';
import { DataService } from '../data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {


  private feeds:MainFeed;

  private  MainFeed:Promise<MainFeed>;

   NewsFeeds:Array<Feed>;

  constructor(private data:DataService) {
  this.MainFeed= this.data.getAsyncData();
  this.MainFeed.then(x=>this.NewsFeeds=x.items.slice(0,6)
    
    /*.filter(x=>x.title.indexOf("של")>-1)*/);

  }


  ngOnInit() {
  }

}
