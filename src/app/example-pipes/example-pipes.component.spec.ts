import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExamplePipesComponent } from "./example-pipes.component";

describe("ExamplePipesComponent", () => {
  let component: ExamplePipesComponent;
  let fixture: ComponentFixture<ExamplePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamplePipesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
