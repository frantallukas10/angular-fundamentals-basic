import { TitleCasePipe } from "./exercise-title-case/title-case.pipe";

describe("TitleCasePipe", () => {
  it("create an instance", () => {
    const pipe = new TitleCasePipe();
    expect(pipe).toBeTruthy();
  });
});
