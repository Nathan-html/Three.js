function blue2D(){
	// relier avec le DOM et definir une size
	const canvas = document.querySelector('#cube-2D');
	const renderer = new THREE.WebGLRenderer({canvas});
	renderer.setSize( 1000, 500);

	// param de la camera
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;
  
	//
	const scene = new THREE.Scene();
	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
	const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
  
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
  
	renderer.render(scene, camera);
}
blue2D()

function cube3D() {
	const canvas = document.querySelector('#cube-3D');
	const renderer = new THREE.WebGLRenderer({canvas});
	renderer.setSize( 1000, 500);
  
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;
  
	const scene = new THREE.Scene();
  
	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
	const material = new THREE.MeshBasicMaterial({color: 0x44aa88});  // greenish blue
  
	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
  
	function render(time) {
	  time *= 0.001;  // convert time to seconds
  
	  cube.rotation.x = time;
	  cube.rotation.y = time;
  
	  renderer.render(scene, camera);
  
	  requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
  
}
cube3D();

function cube3DSha() {
	const canvas = document.querySelector('#cube-3D-shadow');
	const renderer = new THREE.WebGLRenderer({canvas});
	renderer.setSize( 1000, 500);
  
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;
  
	const scene = new THREE.Scene();
  
	{
	  const color = 0xFFFFFF;
	  const intensity = 1;
	  const light = new THREE.DirectionalLight(color, intensity);
	  light.position.set(-1, 2, 4);
	  scene.add(light);
	}

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

	const material = new THREE.MeshPhongMaterial({color: 0x44aa88});  // greenish blue

	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
  
	function render(time) {
	  time *= 0.001;  // convert time to seconds
  
	  cube.rotation.x = time;
	  cube.rotation.y = time;
  
	  renderer.render(scene, camera);
  
	  requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
  
}
cube3DSha();

function cubeMC(){
	// relier avec le DOM
	const canvas = document.querySelector('#cube-mc');
	const renderer = new THREE.WebGLRenderer({canvas});
	renderer.setSize( 1000, 500);
  
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;
  
	const scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xE0FFFF );

	{
	  const color = 0xFFFFFF;
	  const intensity = 1;
	  const light = new THREE.DirectionalLight(color, intensity);
	  light.position.set(-1, 2, 4);
	  scene.add(light);
	}

	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
	const texture = new THREE.TextureLoader().load( 'assets/img/Minecraft-Diamond-Ore.jpg' );

	const material = new THREE.MeshPhongMaterial({map: texture});  // greenish blue

	const cube = new THREE.Mesh(geometry, material);
	scene.add(cube);
  
	function render(time) {
	  time *= 0.001;  // convert time to seconds
	  
	  cube.rotation.y = time;
  
	  renderer.render(scene, camera);
  
	  requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
  
}
cubeMC();