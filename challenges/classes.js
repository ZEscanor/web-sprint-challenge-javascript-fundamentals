// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

   class CuboidMakerClass{
       constructor(length,width,height){
        this.length = length;
        this.width = width;
        this.height = height;
       }
       volume(){
        return this.length * this.width * this.height;
       }
       surfaceArea(){
        return 2*(this.length * this.width+this.length * this.height +this.width * this.height)
       }
   }

   
const cuboidClass = new CuboidMakerClass(4,5,5);
console.log(cuboidClass);
console.log(cuboidClass.volume()); // 100
console.log(cuboidClass.surfaceArea()); // 130


class CubeMaker extends CuboidMakerClass{
    constructor(length,width,height){
        super(length,width,height);

    }
    vol(){
        return super.volume()
    }
    itsSur(){
        return super.surfaceArea()
    }
}
console.log("HI IM THE STRETCH")
const cuboidClassOne = new CubeMaker(4,5,5);
console.log(cuboidClassOne);
console.log(cuboidClassOne.vol()); // 100
console.log(cuboidClassOne.surfaceArea()); // 130
