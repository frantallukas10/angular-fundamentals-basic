import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ExampleDirectiveComponent } from "./example-directive.component";

describe("AuthorsComponent", () => {
  let component: ExampleDirectiveComponent;
  let fixture: ComponentFixture<ExampleDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleDirectiveComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
