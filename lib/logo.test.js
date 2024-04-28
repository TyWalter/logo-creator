const {Svg, Circle, Square, Triangle, Text} = require("./shapes");

// Test of overall logo creator
describe("Test of Logo Creator", () => {
  // svg tag test
  describe("Test of svg tag generator", () => {
    it("should return the instantiation of the Svg class", () => {
      const svg = new Svg();
      console.log(svg);
    })
    it("should return the svg tag for the Svg class", () => {
      const svg = new Svg();
      console.log(svg.render());
    })
  })
  // circle tag test
  describe("Test of circle tag generator", () => {
    it("should return the instantiation of the Circle class", () => {
      const circle = new Circle("lime");
      console.log(circle);
    })
    it("should return the circle tag for the Circle class", () => {
      const circle = new Circle("red");
      console.log(circle.render());
    })
  })
  //square tag test
  describe("Test of square tag generator", () => {
    it("should return the instantiation of the Square class", () => {
      const square = new Square("lime");
      console.log(square);
    })
    it("should return the square tag for the Square class", () => {
      const square = new Square("red");
      console.log(square.render());
    })
  })
  // triangle tag test
  describe("Test of triangle tag generator", () => {
    it("should return the instantiation of the Triangle class", () => {
      const triangle = new Triangle("lime");
      console.log(triangle);
    })
    it("should return the triangle tag for the Triangle class", () => {
      const triangle = new Triangle("red");
      console.log(triangle.render());
    })
  })
  // text tag test
  describe("Test of text tag generator", () => {
    it("should return the text instantiation of the Text class", () => {
      const text = new Text("lime", "TJW");
      console.log(text);
    })
    it("should return the text tag for the Text class", () => {
      const text = new Text("red", "TJW");
      console.log(text.render());
    })
  })
  // circle logo generator test
  describe("Test of circle logo generator with text", () => {
    it("should return a circle logo with text in the middle", () => {
      const svg = new Svg();
      const circle = new Circle("Navy");
      const text = new Text("white", "TJW");
      const result =`
${svg.render()}
  ${circle.render()}
  ${text.render()}
</svg>`;
      console.log(result);
    })
  })
  // square logo generator test
  describe("Test of square logo generator with text", () => {
    it("should return a square logo with text in the middle", () => {
      const svg = new Svg();
      const square = new Square("Navy");
      const text = new Text("white", "TJW");
      const result =`
${svg.render()}
  ${square.render()}
  ${text.render()}
</svg>`;
      console.log(result);
    })
  })
  // triangle logo generator test
  describe("Test of triangle logo generator with text", () => {
    it("should return a triangle logo with text in the middle", () => {
      const svg = new Svg();
      const triangle = new Triangle("Navy");
      const text = new Text("white", "TJW");
      const result =`
${svg.render()}
  ${triangle.render()}
  ${text.render()}
</svg>`;
      console.log(result);
    })
  })
})