import * as THREE from "three";
// 创建一个立方体
const createCube=(color:number=0x0000ff):THREE.Mesh=>{
  let cube:THREE.Mesh
  let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
  let material = new THREE.MeshLambertMaterial({
     color:color ,
  }); 
  cube = new THREE.Mesh(geometry, material); //网格模型对象Mesh
  return cube
}
/**
 * @name 几何体本质 网格模型Mesh是由立方体几何体geometry和材质material两部分构成
 * @param sting  什么类型的几何体
 * @param boolean 是否以顶点颜色计算 出现渐变是因为Threejs通过底层WebGL进行渲染的时候会对顶点的颜色数据进行插值计算
 * @param boolean 是否设置顶点法向量 默认不设置
 * @returns THREE.Mesh|THREE.Points|THREE.Line
 */
const CustomGeometry=(type:string="material",Gradients:boolean=false,Normal:boolean=false):THREE.Mesh|THREE.Points|THREE.Line=>{
  let geometry = new THREE.BufferGeometry(); //创建一个Buffer类型几何体对象
  //类型数组创建顶点数据
  let vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
  
    0, 0, 0, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 0, //顶点6坐标
  ]);
  // 设置渐变色
  var colors = new Float32Array([
      1, 0, 0, //顶点1颜色
      0, 1, 0, //顶点2颜色
      0, 0, 1, //顶点3颜色
      1, 1, 0, //顶点4颜色
      0, 1, 1, //顶点5颜色
      1, 0, 1, //顶点6颜色
  ]);
  var normals = new Float32Array([
    0, 0, 1, //顶点1法向量
    0, 0, 1, //顶点2法向量
    0, 0, 1, //顶点3法向量
  
    0, 1, 0, //顶点4法向量
    0, 1, 0, //顶点5法向量
    0, 1, 0, //顶点6法向量
  ]);
  // 设置几何体attributes属性的位置normal属性 法向量
   //3个为一组,表示一个顶点的法向量数据
   if(Normal){
     geometry.attributes.normal = new THREE.BufferAttribute(normals, 3)
   }
  
  // 设置几何体attributes属性的颜色color属性 渐变
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
  // 创建属性缓冲区对象
  let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
  // 设置几何体attributes属性的位置属性 
  geometry.attributes.position = attribue;
  // 三角面(网格)渲染模式
 
  let material = new THREE.MeshBasicMaterial({
    color: 0x0000ff, //三角面颜色
   //以顶点颜色为准
    side: THREE.DoubleSide //两面可见
  }); //材质对象
  if(Gradients){
      material = new THREE.MeshBasicMaterial({
      vertexColors: Gradients,
     //以顶点颜色为准
      side: THREE.DoubleSide //两面可见
    }); //材质对象
  }
  let materialMesh = new THREE.Mesh(geometry, material);
  let mesh:THREE.Mesh|THREE.Points|THREE.Line

  switch(type){
      case "material":
          mesh=materialMesh
          break;
      case "Points":
        //材质对象
        var material1 = new THREE.PointsMaterial({
          // 使用顶点颜色数据渲染模型，不需要再定义color属性
          //color: 0xff0000,
          vertexColors: Gradients, //以顶点颜色为准
          size: 10.0 //点对象像素尺寸
        });
        // 点渲染模式  点模型对象Points
        var points = new THREE.Points(geometry, material1); //点模型对象
          mesh=points
          break;
      case "Line":
         var material2=new THREE.LineBasicMaterial({
          //color:0xff0000 ,//线条颜色
          vertexColors: Gradients, //以顶点颜色为准
          });//材质对象
          let line=new THREE.Line(geometry,material2);//线条模型对象
          mesh=line
          break;
      default:
      mesh=materialMesh
  } 
  return mesh
}

export {createCube,CustomGeometry}