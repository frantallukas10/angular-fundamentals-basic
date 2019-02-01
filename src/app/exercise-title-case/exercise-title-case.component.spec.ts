import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExerciseTitleCaseComponent } from "./exercise-title-case.component";

describe("ExerciseTitleCaseComponent", () => {
  let component: ExerciseTitleCaseComponent;
  let fixture: ComponentFixture<ExerciseTitleCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseTitleCaseComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseTitleCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
