import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Feed, MainFeed } from './model/feed';
import { promise } from '../../node_modules/protractor';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private rssurl:string="http://rss.walla.co.il/feed/22";

  private rssToJsonServiceBaseUrl: string;
  result:MainFeed;
  feedsarray:Array<Feed>;

  constructor(private http:HttpClient) {
    this.rssToJsonServiceBaseUrl= `https://api.rss2json.com/v1/api.json?rss_url=${this.rssurl}`;



      this.http.get(this.rssToJsonServiceBaseUrl).subscribe((x:MainFeed)=>{
        this.result=x;
        this.feedsarray=this.result.items;
            })


  
          }

    



  
   async getAsyncData() :Promise<MainFeed> {
  
      return await this.http.get<MainFeed>(this.rssToJsonServiceBaseUrl).toPromise();   

}

    



  }


  
   
  

  


