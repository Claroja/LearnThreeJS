import * as THREE from 'three'

let camera, scene, renderer;
let geometry, material, mesh;

init();

function init() {
    //1.创建镜头,就是我们的视角
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.z = 1;
    //2.创建场景
    scene = new THREE.Scene();
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );//创建一个几何结构,只是一个框架
    material = new THREE.MeshNormalMaterial();//创建材料
    mesh = new THREE.Mesh( geometry, material );//将材料和几何结构融合
    scene.add( mesh );//加入场景中
    //3.创建渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );//设置渲染器的大小
    // renderer.render( scene, camera )
    renderer.setAnimationLoop( animation ); //设置动画
    document.body.appendChild( renderer.domElement ); //添加到前端页面
}

function animation( time ) {//随着时间渲染的每一帧
    mesh.rotation.x = time / 2000;
    mesh.rotation.y = time / 1000;
    renderer.render( scene, camera );
}