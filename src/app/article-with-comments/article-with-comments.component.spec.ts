import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleWithCommentsComponent } from './article-with-comments.component';

describe('ArticleWithCommentsComponent', () => {
  let component: ArticleWithCommentsComponent;
  let fixture: ComponentFixture<ArticleWithCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleWithCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleWithCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
