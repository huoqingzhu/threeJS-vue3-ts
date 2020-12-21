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
  // 设置顶点颜色
  let colors = new Float32Array([
      1, 0, 0, //顶点1颜色
      0, 1, 0, //顶点2颜色
      0, 0, 1, //顶点3颜色
      1, 1, 0, //顶点4颜色
      0, 1, 1, //顶点5颜色
      1, 0, 1, //顶点6颜色
  ]);
  // 设置发向量
  let normals = new Float32Array([
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

  //设置材质 
  let material = new THREE.MeshBasicMaterial({
    color: 0x0000ff, //三角面颜色
   //以顶点颜色为准
    side: THREE.DoubleSide //两面可见
  }); //材质对象
  material.visible=true
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
        let material1 = new THREE.PointsMaterial({
          // 使用顶点颜色数据渲染模型，不需要再定义color属性
          //color: 0xff0000,
          vertexColors: Gradients, //以顶点颜色为准
          size: 10.0 //点对象像素尺寸
        });
        // 点渲染模式  点模型对象Points
        let points = new THREE.Points(geometry, material1); //点模型对象
          mesh=points
          break;
      case "Line":
         let material2=new THREE.LineBasicMaterial({
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
/**
 * 不使用顶点数据创建矩形
 */
const noIndex=():THREE.Mesh=>{
  let geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
  //类型数组创建顶点位置position数据
  let vertices = new Float32Array([
    0,
    0,
    0, //顶点1坐标
    80,
    0,
    0, //顶点2坐标
    80,
    80,
    0, //顶点3坐标

    0,
    0,
    0, //顶点4坐标   和顶点1位置相同
    80,
    80,
    0, //顶点5坐标  和顶点3位置相同
    0,
    80,
    0, //顶点6坐标
  ]);
  // 创建属性缓冲区对象
  let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
  // 设置几何体attributes属性的位置position属性
  geometry.attributes.position = attribue;
  let normals = new Float32Array([
    0,
    0,
    1, //顶点1法向量
    0,
    0,
    1, //顶点2法向量
    0,
    0,
    1, //顶点3法向量

    0,
    0,
    1, //顶点4法向量
    0,
    0,
    1, //顶点5法向量
    0,
    0,
    1, //顶点6法向量
  ]);
  let colors = new Float32Array([
    1,
    0,
    0, //顶点1颜色
    0,
    1,
    0, //顶点2颜色
    0,
    0,
    1, //顶点3颜色

    1,
    1,
    0, //顶点4颜色
    0,
    1,
    1, //顶点5颜色
    1,
    0,
    1, //顶点6颜色
  ]);
  // 设置几何体attributes属性的位置normal属性
  geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
  //设置材质
  let material = new THREE.MeshBasicMaterial({
    vertexColors: true, //三角面颜色
    side: THREE.DoubleSide, //两面可见
    //以顶点颜色为准
  }); //材质对象
  let materialMesh = new THREE.Mesh(geometry, material);
  return materialMesh
}
/**
 * 使用顶点数据创建矩形
 */
const index=():THREE.Mesh=>{
  let geometry = new THREE.BufferGeometry(); //声明一个空几何体对象
  //类型数组创建顶点位置position数据
  let vertices = new Float32Array([
    0,
    0,
    0, //顶点1坐标
    80,
    0,
    0, //顶点2坐标
    80,
    80,
    0, //顶点3坐标
    0,
    80,
    0, //顶点4坐标
  ]);
  // 创建属性缓冲区对象
  let attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组
  // 设置几何体attributes属性的位置position属性
  geometry.attributes.position = attribue;
  let normals = new Float32Array([
    0,
    0,
    1, //顶点1法向量
    0,
    0,
    1, //顶点2法向量
    0,
    0,
    1, //顶点3法向量
    0,
    0,
    1, //顶点4法向量
  ]);
  let colors = new Float32Array([
    1,
    0,
    0, //顶点1颜色
    0,
    1,
    0, //顶点2颜色
    0,
    0,
    1, //顶点3颜色
    1,
    1,
    0, //顶点4颜色
    0,
    1,
    1, //顶点5颜色
    1,
    0,
    1, //顶点6颜色
  ]);
  // 设置几何体attributes属性的位置normal属性
  geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的xyz坐标
  geometry.attributes.color = new THREE.BufferAttribute(colors, 3); //3个为一组,表示一个顶点的颜色数据RGB
  // Uint16Array类型数组创建顶点索引数据
  let indexes = new Uint16Array([
    // 0对应第1个顶点位置数据、第1个顶点法向量数据
    // 1对应第2个顶点位置数据、第2个顶点法向量数据
    // 索引值3个为一组，表示一个三角形的3个顶点
    0,
    1,
    2,
    0,
    2,
    3,
  ]);
  // 索引数据赋值给几何体的index属性
  geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
  //设置材质
  let material = new THREE.MeshBasicMaterial({
    vertexColors: true, //三角面颜色
    side: THREE.DoubleSide, //两面可见
    //以顶点颜色为准
  }); //材质对象
  let materialMesh = new THREE.Mesh(geometry, material);
  return materialMesh
}
/**
 * Vector3定义顶点位置坐标数据
 */
const VectorLine=():THREE.Line=>{
  let geometry = new THREE.Geometry(); //声明一个几何体对象Geometry
  let p1 = new THREE.Vector3(50, 0, 0); //顶点1坐标
  let p2 = new THREE.Vector3(0, 70, 0); //顶点2坐标
  let p3 = new THREE.Vector3(80, 70, 0); //顶点3坐标
  //顶点坐标添加到geometry对象
  geometry.vertices.push(p1, p2, p3);
  // Color对象表示顶点颜色数据
  let color1 = new THREE.Color(0x00ff00); //顶点1颜色——绿色
  let color2 = new THREE.Color(0xff0000); //顶点2颜色——红色
  let color3 = new THREE.Color(0x0000ff); //顶点3颜色——蓝色
  //顶点颜色数据添加到geometry对象
  geometry.colors.push(color1, color2, color3);
  let material=new THREE.LineBasicMaterial({
    //color:0xff0000 ,//线条颜色
    vertexColors:true, //以顶点颜色为准
    });//材质对象
    let line=new THREE.Line(geometry,material);//线条模型对象
    return line
 
}
/**
 * Face3定义Geometry三角面
 */
const Face3=():THREE.Mesh=>{
  let geometry=new THREE.Geometry()
  let p1 = new THREE.Vector3(0, 0, 0); //顶点1坐标
  let p2 = new THREE.Vector3(0, 100, 0); //顶点2坐标
  let p3 = new THREE.Vector3(50, 0, 0); //顶点3坐标
  let p4 = new THREE.Vector3(0, 0, 100); //顶点4坐标
//顶点坐标添加到geometry对象
  geometry.vertices.push(p1, p2, p3,p4);

// Face3构造函数创建一个三角面
  let face1 = new THREE.Face3(0, 1, 2);
  //三角面每个顶点的法向量
  let n1 = new THREE.Vector3(0, 0, -1); //三角面Face1顶点1的法向量
  let n2 = new THREE.Vector3(0, 0, -1); //三角面2Face2顶点2的法向量
  let n3 = new THREE.Vector3(0, 0, -1); //三角面3Face3顶点3的法向量
  // 设置三角面Face3三个顶点的法向量
  face1.vertexNormals.push(n1,n2,n3);
  // 设置三角面渐变（三个顶点颜色不同三角形面渲染的时候会进行颜色插值计算，测到一个颜色渐变效果）
  face1.vertexColors = [
    new THREE.Color(0xffff00),
    new THREE.Color(0xff00ff),
    new THREE.Color(0x00ffff),
  ]
  // 三角面2
  let face2 = new THREE.Face3(0, 2, 3);
   // 设置三角面法向量
  face2.normal=new THREE.Vector3(0, -1, 0);
  face2.color = new THREE.Color(0xff00ff);

  //三角面face1、face2添加到几何体中
  geometry.faces.push(face1,face2);
  // 设置材质
   //设置材质 
   let material = new THREE.MeshBasicMaterial({
    //color: 0x0000ff, //三角面颜色
   //以顶点颜色为准
   vertexColors: true,
    side: THREE.DoubleSide //两面可见
  }); //材质对象
  let materialMesh = new THREE.Mesh(geometry, material);
  return materialMesh
}
/**
 * 创建一个goup对象
 */
const creatGrou=():THREE.Group=>{
    //创建两个网格模型mesh1、mesh2
    let geometry = new THREE.BoxGeometry(20, 20, 20);
    let material = new THREE.MeshLambertMaterial({color: 0x0000ff});
    let group = new THREE.Group();
    let mesh1 = new THREE.Mesh(geometry, material);
    let mesh2 = new THREE.Mesh(geometry, material);
    mesh2.translateX(25);
    //把mesh1型插入到组group中，mesh1作为group的子对象
    group.add(mesh1);
    //把mesh2型插入到组group中，mesh2作为group的子对象
    group.add(mesh2);
    return group
}
/**
 * 创建一个小人模型
 */
const creatPersonModel=()=>{
  // 头部网格模型和组
let headMesh = sphereMesh(10, 0, 0, 0);
headMesh.name = "脑壳"
let leftEyeMesh = sphereMesh(1, 8, 5, 4);
leftEyeMesh.name = "左眼"
let rightEyeMesh = sphereMesh(1, 8, 5, -4);
rightEyeMesh.name = "右眼"
let headGroup = new THREE.Group();
headGroup.name = "头部"
headGroup.add(headMesh, leftEyeMesh, rightEyeMesh);
// 身体网格模型和组
let neckMesh = cylinderMesh(3, 10, 0, -15, 0);
neckMesh.name = "脖子"
let bodyMesh = cylinderMesh(14, 30, 0, -35, 0);
bodyMesh.name = "腹部"
let leftLegMesh = cylinderMesh(4, 60, 0, -80, -7);
leftLegMesh.name = "左腿"
let rightLegMesh = cylinderMesh(4, 60, 0, -80, 7);
rightLegMesh.name = "右腿"
let legGroup = new THREE.Group();
legGroup.name = "腿"
legGroup.add(leftLegMesh, rightLegMesh);
let bodyGroup = new THREE.Group();
bodyGroup.name = "身体"
bodyGroup.add(neckMesh, bodyMesh, legGroup);
// 人Group
let personGroup = new THREE.Group();
personGroup.name = "人"
personGroup.add(headGroup, bodyGroup)
personGroup.translateY(50)


// 球体网格模型创建函数
function sphereMesh(R: number | undefined, x: number, y: number, z: number) {
  let geometry = new THREE.SphereGeometry(R, 25, 25); //球体几何体
  let material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  }); //材质对象Material
  let mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
  mesh.position.set(x, y, z);
  return mesh;
}
// 圆柱体网格模型创建函数
function cylinderMesh(R: number | undefined, h: number | undefined, x: number, y: number, z: number) {
  let geometry = new THREE.CylinderGeometry(R, R, h, 25, 25); //球体几何体
  let material = new THREE.MeshPhongMaterial({
    color: 0x0000ff
  }); //材质对象Material
  let mesh = new THREE.Mesh(geometry, material); // 创建网格模型对象
  mesh.position.set(x, y, z);
  return mesh;
}
return personGroup

}

export {createCube,CustomGeometry,noIndex,index,VectorLine,Face3,creatGrou,creatPersonModel}