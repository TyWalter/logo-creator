const {makeLogo} = require("./lib/log");
const {questions} = require("./lib/questions");
const {Svg, Circle, Square, Triangle, Text} = require("./lib/shapes");

const handleResponses = (resp) => {
  const svg = new Svg();
  const text = new Text(resp.txtColor, resp.txt);
  if(resp.shape === "Circle"){
    const shape = new Circle(resp.shapeColor);
    const contents = 
`${svg.render()}
  ${shape.render()}
  ${text.render()}
</svg>`;
    generateLogo(resp.shape, contents);
  } else if(resp.shape === "Square"){
    const shape = new Square(resp.shapeColor);
    const contents = 
`${svg.render()}
  ${shape.render()}
  ${text.render()}
</svg>`;
    generateLogo(resp.shape, contents);
  } else if(resp.shape === "Triangle"){
    const shape = new Triangle(resp.shapeColor);
    const contents = 
`${svg.render()}
  ${shape.render()}
  ${text.render()}
</svg>`;
    generateLogo(resp.shape, contents);
  }
}

function generateLogo(svgFile, data){
makeLogo(`${svgFile}.svg`, data);
};


questions(handleResponses);