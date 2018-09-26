import { Component, OnInit } from '@angular/core';
import { Commentaire } from '../commentaire';
import { CommentaireService } from '../commentaire.service';
import { Article } from '../article';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-commentaire',
  templateUrl: './add-commentaire.component.html',
  styleUrls: ['./add-commentaire.component.css']
})
export class AddCommentaireComponent implements OnInit {
newCommentaire: Commentaire;
moddAdd: boolean;
  constructor(private service : CommentaireService, private router:Router, private route: ActivatedRoute) {
    this.newCommentaire = new Commentaire();
   }

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.params.id, 0);
    
    if (isNaN(id)){
      console.log('nan');
      this.moddAdd =true;
      this.newCommentaire = new Article();
    }
    else{
      console.log('id ' + id);
       this.moddAdd = false;
       this.newCommentaire = this.service.find(id);
    }
  }
  onSubmit(): void{
    let commentaires = new Array<Commentaire>();
    this.service.getALL().subscribe(a => commentaires = a);
    this.newCommentaire.id = commentaires.length +1;

    this.service.add(this.newCommentaire);
    this.newCommentaire = this.newCommentaire;
    this.router.navigate(['/Commentaires']);
  }
}
