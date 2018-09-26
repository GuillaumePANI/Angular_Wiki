import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles : Array<Article>;
  constructor(private service: ArticleService) { 
    this.service.getALL().subscribe(a => this.articles = a);
    
  }

  ngOnInit() {
  }

}
