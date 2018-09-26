import { Injectable } from '@angular/core';
import { Commentaire } from './commentaire';
import { COMMENTAIRES } from './mock-commentaires';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
commentaires :Array<Commentaire>
  constructor() {
    this.commentaires = COMMENTAIRES;
   }

  getALL(): Observable<Array<Commentaire>>{
return of(this.commentaires);
  }

  add(commentaire:Commentaire): void{
    this.commentaires.push(commentaire);
  }
  find(id: number): Commentaire{
    return this.commentaires.find(a => a.id === id);
      }
}
