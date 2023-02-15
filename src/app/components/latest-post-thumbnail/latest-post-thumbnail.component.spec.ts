import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestPostThumbnailComponent } from './latest-post-thumbnail.component';

describe('LatestPostThumbnailComponent', () => {
  let component: LatestPostThumbnailComponent;
  let fixture: ComponentFixture<LatestPostThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestPostThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestPostThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
