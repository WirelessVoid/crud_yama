import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YamaComponent } from './yama.component';

describe('LlamaComponent', () => {
  let component: YamaComponent;
  let fixture: ComponentFixture<YamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YamaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
