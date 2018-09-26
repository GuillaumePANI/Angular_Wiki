import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-with-comments',
  templateUrl: './article-with-comments.component.html',
  styleUrls: ['./article-with-comments.component.css']
})
export class ArticleWithCommentsComponent implements OnInit {
 article: Article;
  constructor(private service: ArticleService, private route: ActivatedRoute ) {
   const id: number = parseInt(this.route.snapshot.params.id, 0);
   this.article = this.service.find(id); 
  } 
  

  ngOnInit() {
  }

}
