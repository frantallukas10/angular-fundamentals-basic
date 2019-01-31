import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExampleDisplayDataComponent } from "./example-display-data.component";

describe("ExampleDisplayDataComponent", () => {
  let component: ExampleDisplayDataComponent;
  let fixture: ComponentFixture<ExampleDisplayDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleDisplayDataComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDisplayDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
