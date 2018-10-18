/*
Setup - NEED 3 THINGS:
	(1) a scene
	(2) a camera
	(3) a renderer
*/

//Create a scene
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xff0000);
//Create a camera
var camera = new THREE.PerspectiveCamera(500, window.innerWidth/window.innerHeight, 0.1, 1000);
//Create a renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
//Add the renderer to the DOM
document.body.appendChild(renderer.domElement);

/*
Add items to the scene.
For each item, NEED AT LEAST 3 THINGS:
	(1) the geomtery (the shape)
	(2) the material (the skin/appearance of the shape)
	(3) the mesh (the object that pairs the geometry and the material)

Let's make a cube...
*/

// (1) Initialize the geometry
var geometry = new THREE.BoxGeometry(2,2,2);

// (2) Initialize the material
//Let's set the material to be an image
//To do this we need to assign the image as a texture
var imageLink = 'einstein.jpg';
var imageLoader =  new THREE.TextureLoader();
var imageTexture =  imageLoader.load(imageLink);

//Now we can pass the texture onto the material
var material = new THREE.MeshBasicMaterial( { map: imageTexture} );


//Alt - Set the material to be a color
//var material = new THREE.MeshBasicMaterial({color: 'white', wireframe: true});

// (3) Initialize the mesh
var cube = new THREE.Mesh(geometry, material);
//Put the mesh into the scene
scene.add(cube);

// Add OrbitControls so that we can pan around with the mouse.
var controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 3;

var rotate = true;
var rotateX = 0.01;
var rotateY = 0.01;
//Define a render/animate funnction to be called repeatedy
function animate() {

	requestAnimationFrame(animate);

	if (rotate){
		cube.rotation.x += rotateX;
		cube.rotation.y += rotateY;
	}

	controls.update();
	renderer.render(scene, camera);


}
//Call the render function
animate();

function updateImage(){
	if (imageLink === 'einstein.jpg'){
		imageLink = 'einstein_02.jpg';
	}
	else{
		imageLink = 'einstein.jpg';
	}

	var imageLoaderUpdate =  new THREE.TextureLoader();
	var imageTextureUpdate =  imageLoaderUpdate.load(imageLink);

	cube.material.map = imageTextureUpdate;
	cube.material.needsUpdate = true;
}

$('#image-toggle').click(function(){
	updateImage();
});

$('#rotation-toggle').click(function(){
	rotate = !rotate;
});