import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExerciseFavoriteComponent } from "./exercise-favorite.component";

describe("ExerciseFavoriteComponent", () => {
  let component: ExerciseFavoriteComponent;
  let fixture: ComponentFixture<ExerciseFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseFavoriteComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
