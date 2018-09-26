import { Component, OnInit } from '@angular/core';
import { Article,  } from '../article';
import { ArticleService,  } from '../article.service';
import{Router, ActivatedRoute} from '@angular/router'
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newArticle: Article;
  moddAdd: boolean;
  datemodel: NgbDateStruct;
  constructor(private service : ArticleService, private router: Router, private route: ActivatedRoute ) {
    
   }

  

  ngOnInit() {
    const id: number = parseInt(this.route.snapshot.params.id, 0);
    
    if (isNaN(id)){
      console.log('nan');
      this.moddAdd =true;
      this.newArticle = new Article();
    }
    else{
      console.log('id ' + id);
       this.moddAdd = false;
       this.newArticle = this.service.find(id);
    }
 console.log(this.newArticle);
 console.log(this.moddAdd);
  }

  onSubmit(): void {
    let articles = new Array<Article>();
    this.service.getALL().subscribe(a => articles = a);
    this.newArticle.id = articles.length +1;
   // console.log(this.datemodel)
    this.newArticle.date = new Date(this.datemodel.year, this.datemodel.month, this.datemodel.day);
    this.service.add(this.newArticle);
    this.newArticle = new Article();
    this.router.navigate(['/Articles']);

  }
}
