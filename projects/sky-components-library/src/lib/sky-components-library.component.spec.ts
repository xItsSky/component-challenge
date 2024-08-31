import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyComponentsLibraryComponent } from './sky-components-library.component';

describe('SkyComponentsLibraryComponent', () => {
  let component: SkyComponentsLibraryComponent;
  let fixture: ComponentFixture<SkyComponentsLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkyComponentsLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyComponentsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
