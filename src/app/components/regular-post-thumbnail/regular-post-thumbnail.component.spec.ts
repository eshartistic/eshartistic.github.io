import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPostThumbnailComponent } from './regular-post-thumbnail.component';

describe('RegularPostThumbnailComponent', () => {
  let component: RegularPostThumbnailComponent;
  let fixture: ComponentFixture<RegularPostThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularPostThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularPostThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
