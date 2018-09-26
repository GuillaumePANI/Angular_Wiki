import { Injectable } from '@angular/core';
import { Article } from './article';
import { ARTICLES } from './mock-article';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articles : Array<Article>;
  constructor() { 
    this.articles = ARTICLES;
  }

  getALL(): Observable<Array<Article>>{
    return of(this.articles);
  }

  add(article : Article): void{
    this.articles.push(article);
  }
find(id: number): Article{
return this.articles.find(a => a.id === id);
  }
}



