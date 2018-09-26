import { Commentaire } from "./commentaire";

export class Article {
    id: number;
    title: string;
    content: string
    date: Date;
    author: string;
    commentaires: Array<Commentaire>;
    constructor(){
        this.date = new Date();
        this.id = 0;
        this.title = '';
        this.content = '';
        this.author = '';
        this.commentaires = new Array<Commentaire>();
    }
}
