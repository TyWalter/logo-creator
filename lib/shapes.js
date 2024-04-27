// Class for SVG file
class Svg{
  constructor(){
    this.version = 1.1;
    this.width = 250;
    this.height = 250;
    this.xmlns = "http://www.w3.org/2000/svg"
  };
  render(){
    return `<svg version="${this.version}" width="${this.width}" height="${this.height}" xmlns="${this.xmlns}" />`
  };
};

// Class for shapes
class Shape{
  constructor(fill){
    this.fill = fill;
  };
};

class Circle extends Shape{
  constructor(fill){
    super(fill);
    this.cx = 100;
    this.cy = 100;
    this.r = 100
  };
  render(){
    return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`
  };
};

class Square extends Shape{
  constructor(fill){
    super(fill);
    this.width = 200;
    this.height = 200;
    this.x = 0;
    this.y = 0;
    this.rx = 10;
    this.ry = 10
  };
  render(){
    return `<rect x="${this.x}" y="${this.y}" rx="${this.rx}" ry="${this.ry}" fill="${this.fill}" />`
  };
};

class Triangle extends Shape{
  constructor(fill){
    super(fill);
    this.points = "100,0 200,200 0,200"
  };
  render(){
    return `<polygon points="${this.points}" fill="${this.fill}" />`
  };
};

// Class for text
class Text{
  constructor(fill, char){
    this.fill = fill;
    this.char = char;
    this.x = 100;
    this.y = 125;
    this.size = 80;
    this.anchor = "middle"
  };
  render(){
    return `<text x="${this.x}" y="${this.y}" font-size="${this.size}" text-anchor="${this.anchor}" fill="${this.fill}">"${this.char}"</text>`
  };
};

// Exporting all the classes
module.exports = {
  Svg,
  Circle,
  Square,
  Triangle,
  Text
};