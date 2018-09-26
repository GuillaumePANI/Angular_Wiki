import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommentaireComponent } from './commentaire/commentaire.component';
import { CommentairesComponent } from './commentaires/commentaires.component';
import { AddComponent } from './add/add.component';
import { AddCommentaireComponent } from './add-commentaire/add-commentaire.component';
import { ArticleWithCommentsComponent } from './article-with-comments/article-with-comments.component';

const appRoute: Routes= [
  {path: 'Articles', component: ArticlesComponent },
  {path: 'add', component: AddComponent},
  {path: 'Commentaires', component: CommentairesComponent},
  {path: 'addCom', component: AddCommentaireComponent},
  {path: 'addCom/:id', component: AddCommentaireComponent},
  {path: 'add/:id', component: AddComponent},
  {path: 'detail/:id', component: ArticleWithCommentsComponent},


];
@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ArticlesComponent,
    CommentaireComponent,
    CommentairesComponent,
    AddComponent,
    AddCommentaireComponent,
    ArticleWithCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
