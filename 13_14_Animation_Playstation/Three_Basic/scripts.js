/*
Setup - NEED 3 THINGS:
	(1) a scene
	(2) a camera
	(3) a renderer
*/

//Create a scene
var scene = new THREE.Scene();
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
var imageTexture = THREE.ImageUtils.loadTexture(imageLink);
//Now we can pass the texture onto the material
var material = new THREE.MeshBasicMaterial( { map: imageTexture} );

/*
//Alt - Set the material to be a color
var material = new THREE.MeshBasicMaterial({color: 'white', wireframe: true});
*/

// (3) Initialize the mesh
var cube = new THREE.Mesh(geometry, material);
//Put the mesh into the scene
scene.add(cube);

// Add OrbitControls so that we can pan around with the mouse.
var controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.z = 10;

//Define a render funnction to be called repeatedy
function render() {
	requestAnimationFrame(render);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	controls.update();
	renderer.render(scene, camera);
}
//Call the render function
render();

function updateMaterial(){
	if (imageLink === 'einstein.jpg'){
		imageLink = 'einstein_02.jpg';
	}
	else{
		imageLink = 'einstein.jpg';
	}
	var imageTextureUpdate = THREE.ImageUtils.loadTexture(imageLink);
	cube.material.map = imageTextureUpdate;
	cube.material.needsUpdate = true;
}

$('#the-button').click(function(){
	updateMaterial();
});