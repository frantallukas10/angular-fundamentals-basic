import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExampleCustomPipesComponent } from "./example-custom-pipes.component";

describe("ExampleCustomPipesComponent", () => {
  let component: ExampleCustomPipesComponent;
  let fixture: ComponentFixture<ExampleCustomPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCustomPipesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleCustomPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
