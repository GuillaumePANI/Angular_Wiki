export class Commentaire {
    id: number;
    content: string
    date: Date;
    author: string;
    constructor(){
        this.date = new Date();
        this.id = 0;
        this.content = '';
        this.author = '';
    }
}
