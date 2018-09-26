import { Component, OnInit, Input } from '@angular/core';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.component.html',
  styleUrls: ['./commentaires.component.css']
})
export class CommentairesComponent implements OnInit {
@Input() commentaires = Array<Commentaire>();
constructor() {
  }
  ngOnInit() {
  }

}
