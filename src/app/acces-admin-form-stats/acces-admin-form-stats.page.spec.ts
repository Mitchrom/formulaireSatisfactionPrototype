import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesAdminFormStatsPage } from './acces-admin-form-stats.page';

describe('AccesAdminFormStatsPage', () => {
  let component: AccesAdminFormStatsPage;
  let fixture: ComponentFixture<AccesAdminFormStatsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesAdminFormStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesAdminFormStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
