import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExampleInterpolationComponent } from "./example-interpolation.component";

describe("ExampleInterpolationComponent", () => {
  let component: ExampleInterpolationComponent;
  let fixture: ComponentFixture<ExampleInterpolationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleInterpolationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
