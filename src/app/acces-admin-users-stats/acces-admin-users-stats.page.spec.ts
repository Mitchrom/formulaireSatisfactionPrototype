import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AccesAdminUsersStatsPage } from './acces-admin-users-stats.page';

describe('AccesAdminUsersStatsPage', () => {
  let component: AccesAdminUsersStatsPage;
  let fixture: ComponentFixture<AccesAdminUsersStatsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccesAdminUsersStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AccesAdminUsersStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
