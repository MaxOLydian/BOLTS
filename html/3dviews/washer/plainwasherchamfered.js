var camera, controls, scene, renderer;
function attach_renderer(target) {

	var SCREEN_WIDTH = 900, SCREEN_HEIGHT = 400;
	var VIEW_ANGLE = 35, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;

	renderer = new THREE.WebGLRenderer();
	renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
	target.appendChild( renderer.domElement );

	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		VIEW_ANGLE, // Field of view
		ASPECT, // Aspect ratio
		NEAR, // Near plane
		FAR // Far plane
	);
	camera.position.set(7.57674540205,7.57674540205,1.0);
                camera.lookAt( scene.position );
                 // placeholder for the FreeCAD camera
	controls = new THREE.TrackballControls( camera );

	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.keys = [ 65, 83, 68 ];

	var geom = new THREE.Geometry();
                var v0 = new THREE.Vector3(0.219766818353,-3.4930935495,0.35);
                var v1 = new THREE.Vector3(-0.65583460105,-3.43800537755,0.0);
                var v2 = new THREE.Vector3(0.219766818353,-3.4930935495,0.0);
                var v3 = new THREE.Vector3(1.08155948031,-3.32869780703,0.35);
                var v4 = new THREE.Vector3(1.08155948031,-3.32869780703,0.0);
                var v5 = new THREE.Vector3(1.87539378243,-2.95514773926,0.0);
                var v6 = new THREE.Vector3(1.87539378243,-2.95514773926,0.35);
                var v7 = new THREE.Vector3(3.39004106395,0.870414605077,0.35);
                var v8 = new THREE.Vector3(3.5,-8.57252759403e-16,0.0);
                var v9 = new THREE.Vector3(3.39004106395,0.870414605077,0.0);
                var v10 = new THREE.Vector3(3.5,0.0,0.35);
                var v11 = new THREE.Vector3(2.55139019597,-2.39591487075,0.35);
                var v12 = new THREE.Vector3(2.55139019597,-2.39591487075,0.0);
                var v13 = new THREE.Vector3(3.06707338015,1.68613785936,0.35);
                var v14 = new THREE.Vector3(3.06707338015,1.68613785936,0.0);
                var v15 = new THREE.Vector3(3.06707338015,-1.68613785936,0.35);
                var v16 = new THREE.Vector3(3.06707338015,-1.68613785936,0.0);
                var v17 = new THREE.Vector3(2.55139019597,2.39591487075,0.35);
                var v18 = new THREE.Vector3(2.55139019597,2.39591487075,0.0);
                var v19 = new THREE.Vector3(3.39004106395,-0.870414605077,0.35);
                var v20 = new THREE.Vector3(3.39004106395,-0.870414605077,0.0);
                var v21 = new THREE.Vector3(1.87539378243,2.95514773926,0.35);
                var v22 = new THREE.Vector3(1.87539378243,2.95514773926,0.0);
                var v23 = new THREE.Vector3(1.08155948031,3.32869780703,0.35);
                var v24 = new THREE.Vector3(1.08155948031,3.32869780703,0.0);
                var v25 = new THREE.Vector3(0.219766818353,3.4930935495,0.0);
                var v26 = new THREE.Vector3(0.219766818353,3.4930935495,0.35);
                var v27 = new THREE.Vector3(-0.65583460105,3.43800537755,0.35);
                var v28 = new THREE.Vector3(-0.65583460105,3.43800537755,0.0);
                var v29 = new THREE.Vector3(-1.49022752048,3.16689468363,0.35);
                var v30 = new THREE.Vector3(-1.49022752048,3.16689468363,0.0);
                var v31 = new THREE.Vector3(-2.23098396412,2.69679634972,0.35);
                var v32 = new THREE.Vector3(-2.23098396412,2.69679634972,0.0);
                var v33 = new THREE.Vector3(-2.83155948031,2.05724838302,0.35);
                var v34 = new THREE.Vector3(-2.83155948031,2.05724838302,0.0);
                var v35 = new THREE.Vector3(-3.25421770061,1.2884359344,0.0);
                var v36 = new THREE.Vector3(-3.25421770061,1.2884359344,0.35);
                var v37 = new THREE.Vector3(-3.4724014546,0.438666317475,0.35);
                var v38 = new THREE.Vector3(-3.4724014546,0.438666317475,0.0);
                var v39 = new THREE.Vector3(-3.4724014546,-0.438666317475,0.35);
                var v40 = new THREE.Vector3(-3.4724014546,-0.438666317475,0.0);
                var v41 = new THREE.Vector3(-3.25421770061,-1.2884359344,0.35);
                var v42 = new THREE.Vector3(-3.25421770061,-1.2884359344,0.0);
                var v43 = new THREE.Vector3(-2.83155948031,-2.05724838302,0.35);
                var v44 = new THREE.Vector3(-2.83155948031,-2.05724838302,0.0);
                var v45 = new THREE.Vector3(-2.23098396412,-2.69679634972,0.35);
                var v46 = new THREE.Vector3(-2.23098396412,-2.69679634972,0.0);
                var v47 = new THREE.Vector3(-1.49022752048,-3.16689468363,0.35);
                var v48 = new THREE.Vector3(-1.49022752048,-3.16689468363,0.0);
                var v49 = new THREE.Vector3(-0.65583460105,-3.43800537755,0.35);
                var v50 = new THREE.Vector3(1.79501976318,-2.82849855043,0.5);
                var v51 = new THREE.Vector3(1.03520693116,-3.18603932959,0.5);
                var v52 = new THREE.Vector3(2.44204490186,-2.29323280486,0.5);
                var v53 = new THREE.Vector3(3.24475358978,0.833111122002,0.5);
                var v54 = new THREE.Vector3(3.35,0.0,0.5);
                var v55 = new THREE.Vector3(2.93562737815,-1.61387480824,0.5);
                var v56 = new THREE.Vector3(2.93562737815,1.61387480824,0.5);
                var v57 = new THREE.Vector3(3.24475358978,-0.833111122002,0.5);
                var v58 = new THREE.Vector3(2.44204490186,2.29323280486,0.5);
                var v59 = new THREE.Vector3(1.79501976318,2.82849855043,0.5);
                var v60 = new THREE.Vector3(1.03520693116,3.18603932959,0.5);
                var v61 = new THREE.Vector3(0.210348240423,3.34338954023,0.5);
                var v62 = new THREE.Vector3(-0.627727403862,3.29066228994,0.5);
                var v63 = new THREE.Vector3(-1.42636062674,3.03117062576,0.5);
                var v64 = new THREE.Vector3(-2.13537036566,2.5812193633,0.5);
                var v65 = new THREE.Vector3(-2.71020693116,1.96908059518,0.5);
                var v66 = new THREE.Vector3(-3.11475122773,1.23321725149,0.5);
                var v67 = new THREE.Vector3(-3.3235842494,0.41986633244,0.5);
                var v68 = new THREE.Vector3(-3.3235842494,-0.41986633244,0.5);
                var v69 = new THREE.Vector3(-3.11475122773,-1.23321725149,0.5);
                var v70 = new THREE.Vector3(-2.71020693116,-1.96908059518,0.5);
                var v71 = new THREE.Vector3(-2.13537036566,-2.5812193633,0.5);
                var v72 = new THREE.Vector3(-1.42636062674,-3.03117062576,0.5);
                var v73 = new THREE.Vector3(-0.627727403862,-3.29066228994,0.5);
                var v74 = new THREE.Vector3(0.210348240423,-3.34338954023,0.5);
                var v75 = new THREE.Vector3(-0.681246866504,1.44772328395,0.0);
                var v76 = new THREE.Vector3(-0.299810103337,1.57165960117,0.0);
                var v77 = new THREE.Vector3(1.40209068807,-0.770805878563,0.0);
                var v78 = new THREE.Vector3(-1.0198783836,-1.23282118844,0.0);
                var v79 = new THREE.Vector3(1.54973305781,-0.397903819464,0.0);
                var v80 = new THREE.Vector3(0.100464831247,1.59684276549,0.0);
                var v81 = new THREE.Vector3(-1.294427191,-0.940456403668,0.0);
                var v82 = new THREE.Vector3(-0.681246866504,-1.44772328395,0.0);
                var v83 = new THREE.Vector3(1.6,-3.91886975727e-16,0.0);
                var v84 = new THREE.Vector3(-1.48764237742,-0.588999284295,0.0);
                var v85 = new THREE.Vector3(1.54973305781,0.397903819464,0.0);
                var v86 = new THREE.Vector3(-0.299810103337,-1.57165960117,0.0);
                var v87 = new THREE.Vector3(0.857322871966,1.3509246808,0.0);
                var v88 = new THREE.Vector3(0.494427191,1.52169042607,0.0);
                var v89 = new THREE.Vector3(1.40209068807,0.770805878563,0.0);
                var v90 = new THREE.Vector3(-1.5873835221,-0.200533173703,0.0);
                var v91 = new THREE.Vector3(0.100464831247,-1.59684276549,0.0);
                var v92 = new THREE.Vector3(1.16634980387,1.09527536949,0.0);
                var v93 = new THREE.Vector3(-1.5873835221,0.200533173703,0.0);
                var v94 = new THREE.Vector3(0.494427191,-1.52169042607,0.0);
                var v95 = new THREE.Vector3(-1.48764237742,0.588999284295,0.0);
                var v96 = new THREE.Vector3(0.857322871966,-1.3509246808,0.0);
                var v97 = new THREE.Vector3(-1.294427191,0.940456403668,0.0);
                var v98 = new THREE.Vector3(1.16634980387,-1.09527536949,0.0);
                var v99 = new THREE.Vector3(-1.0198783836,1.23282118844,0.0);
                var v100 = new THREE.Vector3(-0.681246866504,1.44772328395,0.5);
                var v101 = new THREE.Vector3(-0.299810103337,1.57165960117,0.5);
                var v102 = new THREE.Vector3(1.40209068807,-0.770805878563,0.5);
                var v103 = new THREE.Vector3(1.54973305781,-0.397903819464,0.5);
                var v104 = new THREE.Vector3(-1.0198783836,-1.23282118844,0.5);
                var v105 = new THREE.Vector3(0.100464831247,1.59684276549,0.5);
                var v106 = new THREE.Vector3(-1.294427191,-0.940456403668,0.5);
                var v107 = new THREE.Vector3(1.6,-3.91886975727e-16,0.5);
                var v108 = new THREE.Vector3(0.494427191,1.52169042607,0.5);
                var v109 = new THREE.Vector3(-0.681246866504,-1.44772328395,0.5);
                var v110 = new THREE.Vector3(1.54973305781,0.397903819464,0.5);
                var v111 = new THREE.Vector3(1.40209068807,0.770805878563,0.5);
                var v112 = new THREE.Vector3(-1.48764237742,-0.588999284295,0.5);
                var v113 = new THREE.Vector3(1.16634980387,1.09527536949,0.5);
                var v114 = new THREE.Vector3(-0.299810103337,-1.57165960117,0.5);
                var v115 = new THREE.Vector3(0.857322871966,1.3509246808,0.5);
                var v116 = new THREE.Vector3(-1.5873835221,-0.200533173703,0.5);
                var v117 = new THREE.Vector3(0.100464831247,-1.59684276549,0.5);
                var v118 = new THREE.Vector3(-1.5873835221,0.200533173703,0.5);
                var v119 = new THREE.Vector3(0.494427191,-1.52169042607,0.5);
                var v120 = new THREE.Vector3(-1.48764237742,0.588999284295,0.5);
                var v121 = new THREE.Vector3(0.857322871966,-1.3509246808,0.5);
                var v122 = new THREE.Vector3(-1.294427191,0.940456403668,0.5);
                var v123 = new THREE.Vector3(1.16634980387,-1.09527536949,0.5);
                var v124 = new THREE.Vector3(-1.0198783836,1.23282118844,0.5);
                console.log(geom.vertices)
                geom.vertices.push(v0);
                geom.vertices.push(v1);
                geom.vertices.push(v2);
                geom.vertices.push(v3);
                geom.vertices.push(v4);
                geom.vertices.push(v5);
                geom.vertices.push(v6);
                geom.vertices.push(v7);
                geom.vertices.push(v8);
                geom.vertices.push(v9);
                geom.vertices.push(v10);
                geom.vertices.push(v11);
                geom.vertices.push(v12);
                geom.vertices.push(v13);
                geom.vertices.push(v14);
                geom.vertices.push(v15);
                geom.vertices.push(v16);
                geom.vertices.push(v17);
                geom.vertices.push(v18);
                geom.vertices.push(v19);
                geom.vertices.push(v20);
                geom.vertices.push(v21);
                geom.vertices.push(v22);
                geom.vertices.push(v23);
                geom.vertices.push(v24);
                geom.vertices.push(v25);
                geom.vertices.push(v26);
                geom.vertices.push(v27);
                geom.vertices.push(v28);
                geom.vertices.push(v29);
                geom.vertices.push(v30);
                geom.vertices.push(v31);
                geom.vertices.push(v32);
                geom.vertices.push(v33);
                geom.vertices.push(v34);
                geom.vertices.push(v35);
                geom.vertices.push(v36);
                geom.vertices.push(v37);
                geom.vertices.push(v38);
                geom.vertices.push(v39);
                geom.vertices.push(v40);
                geom.vertices.push(v41);
                geom.vertices.push(v42);
                geom.vertices.push(v43);
                geom.vertices.push(v44);
                geom.vertices.push(v45);
                geom.vertices.push(v46);
                geom.vertices.push(v47);
                geom.vertices.push(v48);
                geom.vertices.push(v49);
                geom.vertices.push(v50);
                geom.vertices.push(v51);
                geom.vertices.push(v52);
                geom.vertices.push(v53);
                geom.vertices.push(v54);
                geom.vertices.push(v55);
                geom.vertices.push(v56);
                geom.vertices.push(v57);
                geom.vertices.push(v58);
                geom.vertices.push(v59);
                geom.vertices.push(v60);
                geom.vertices.push(v61);
                geom.vertices.push(v62);
                geom.vertices.push(v63);
                geom.vertices.push(v64);
                geom.vertices.push(v65);
                geom.vertices.push(v66);
                geom.vertices.push(v67);
                geom.vertices.push(v68);
                geom.vertices.push(v69);
                geom.vertices.push(v70);
                geom.vertices.push(v71);
                geom.vertices.push(v72);
                geom.vertices.push(v73);
                geom.vertices.push(v74);
                geom.vertices.push(v75);
                geom.vertices.push(v76);
                geom.vertices.push(v77);
                geom.vertices.push(v78);
                geom.vertices.push(v79);
                geom.vertices.push(v80);
                geom.vertices.push(v81);
                geom.vertices.push(v82);
                geom.vertices.push(v83);
                geom.vertices.push(v84);
                geom.vertices.push(v85);
                geom.vertices.push(v86);
                geom.vertices.push(v87);
                geom.vertices.push(v88);
                geom.vertices.push(v89);
                geom.vertices.push(v90);
                geom.vertices.push(v91);
                geom.vertices.push(v92);
                geom.vertices.push(v93);
                geom.vertices.push(v94);
                geom.vertices.push(v95);
                geom.vertices.push(v96);
                geom.vertices.push(v97);
                geom.vertices.push(v98);
                geom.vertices.push(v99);
                geom.vertices.push(v100);
                geom.vertices.push(v101);
                geom.vertices.push(v102);
                geom.vertices.push(v103);
                geom.vertices.push(v104);
                geom.vertices.push(v105);
                geom.vertices.push(v106);
                geom.vertices.push(v107);
                geom.vertices.push(v108);
                geom.vertices.push(v109);
                geom.vertices.push(v110);
                geom.vertices.push(v111);
                geom.vertices.push(v112);
                geom.vertices.push(v113);
                geom.vertices.push(v114);
                geom.vertices.push(v115);
                geom.vertices.push(v116);
                geom.vertices.push(v117);
                geom.vertices.push(v118);
                geom.vertices.push(v119);
                geom.vertices.push(v120);
                geom.vertices.push(v121);
                geom.vertices.push(v122);
                geom.vertices.push(v123);
                geom.vertices.push(v124);
                geom.faces.push( new THREE.Face3(0, 1, 2) );
                geom.faces.push( new THREE.Face3(3, 0, 2) );
                geom.faces.push( new THREE.Face3(3, 2, 4) );
                geom.faces.push( new THREE.Face3(3, 4, 5) );
                geom.faces.push( new THREE.Face3(6, 3, 5) );
                geom.faces.push( new THREE.Face3(7, 8, 9) );
                geom.faces.push( new THREE.Face3(7, 10, 8) );
                geom.faces.push( new THREE.Face3(11, 6, 5) );
                geom.faces.push( new THREE.Face3(11, 5, 12) );
                geom.faces.push( new THREE.Face3(13, 9, 14) );
                geom.faces.push( new THREE.Face3(13, 7, 9) );
                geom.faces.push( new THREE.Face3(15, 12, 16) );
                geom.faces.push( new THREE.Face3(15, 11, 12) );
                geom.faces.push( new THREE.Face3(17, 14, 18) );
                geom.faces.push( new THREE.Face3(17, 13, 14) );
                geom.faces.push( new THREE.Face3(19, 15, 16) );
                geom.faces.push( new THREE.Face3(19, 16, 20) );
                geom.faces.push( new THREE.Face3(10, 20, 8) );
                geom.faces.push( new THREE.Face3(10, 19, 20) );
                geom.faces.push( new THREE.Face3(21, 18, 22) );
                geom.faces.push( new THREE.Face3(21, 17, 18) );
                geom.faces.push( new THREE.Face3(23, 22, 24) );
                geom.faces.push( new THREE.Face3(23, 24, 25) );
                geom.faces.push( new THREE.Face3(23, 21, 22) );
                geom.faces.push( new THREE.Face3(26, 23, 25) );
                geom.faces.push( new THREE.Face3(27, 25, 28) );
                geom.faces.push( new THREE.Face3(27, 26, 25) );
                geom.faces.push( new THREE.Face3(29, 28, 30) );
                geom.faces.push( new THREE.Face3(29, 27, 28) );
                geom.faces.push( new THREE.Face3(31, 30, 32) );
                geom.faces.push( new THREE.Face3(31, 29, 30) );
                geom.faces.push( new THREE.Face3(33, 32, 34) );
                geom.faces.push( new THREE.Face3(33, 34, 35) );
                geom.faces.push( new THREE.Face3(33, 31, 32) );
                geom.faces.push( new THREE.Face3(36, 33, 35) );
                geom.faces.push( new THREE.Face3(37, 36, 35) );
                geom.faces.push( new THREE.Face3(37, 35, 38) );
                geom.faces.push( new THREE.Face3(39, 37, 38) );
                geom.faces.push( new THREE.Face3(39, 38, 40) );
                geom.faces.push( new THREE.Face3(41, 39, 40) );
                geom.faces.push( new THREE.Face3(41, 40, 42) );
                geom.faces.push( new THREE.Face3(43, 41, 42) );
                geom.faces.push( new THREE.Face3(43, 42, 44) );
                geom.faces.push( new THREE.Face3(45, 43, 44) );
                geom.faces.push( new THREE.Face3(45, 44, 46) );
                geom.faces.push( new THREE.Face3(47, 45, 46) );
                geom.faces.push( new THREE.Face3(47, 46, 48) );
                geom.faces.push( new THREE.Face3(47, 48, 1) );
                geom.faces.push( new THREE.Face3(49, 47, 1) );
                geom.faces.push( new THREE.Face3(0, 49, 1) );
                geom.faces.push( new THREE.Face3(50, 3, 6) );
                geom.faces.push( new THREE.Face3(50, 51, 3) );
                geom.faces.push( new THREE.Face3(52, 6, 11) );
                geom.faces.push( new THREE.Face3(52, 50, 6) );
                geom.faces.push( new THREE.Face3(53, 54, 10) );
                geom.faces.push( new THREE.Face3(53, 10, 7) );
                geom.faces.push( new THREE.Face3(55, 11, 15) );
                geom.faces.push( new THREE.Face3(55, 52, 11) );
                geom.faces.push( new THREE.Face3(13, 53, 7) );
                geom.faces.push( new THREE.Face3(19, 55, 15) );
                geom.faces.push( new THREE.Face3(56, 53, 13) );
                geom.faces.push( new THREE.Face3(57, 55, 19) );
                geom.faces.push( new THREE.Face3(58, 13, 17) );
                geom.faces.push( new THREE.Face3(10, 57, 19) );
                geom.faces.push( new THREE.Face3(58, 56, 13) );
                geom.faces.push( new THREE.Face3(54, 57, 10) );
                geom.faces.push( new THREE.Face3(59, 17, 21) );
                geom.faces.push( new THREE.Face3(59, 58, 17) );
                geom.faces.push( new THREE.Face3(60, 21, 23) );
                geom.faces.push( new THREE.Face3(60, 59, 21) );
                geom.faces.push( new THREE.Face3(61, 23, 26) );
                geom.faces.push( new THREE.Face3(61, 60, 23) );
                geom.faces.push( new THREE.Face3(62, 26, 27) );
                geom.faces.push( new THREE.Face3(62, 61, 26) );
                geom.faces.push( new THREE.Face3(63, 27, 29) );
                geom.faces.push( new THREE.Face3(63, 62, 27) );
                geom.faces.push( new THREE.Face3(31, 63, 29) );
                geom.faces.push( new THREE.Face3(64, 63, 31) );
                geom.faces.push( new THREE.Face3(65, 31, 33) );
                geom.faces.push( new THREE.Face3(65, 64, 31) );
                geom.faces.push( new THREE.Face3(66, 33, 36) );
                geom.faces.push( new THREE.Face3(66, 65, 33) );
                geom.faces.push( new THREE.Face3(67, 66, 36) );
                geom.faces.push( new THREE.Face3(67, 36, 37) );
                geom.faces.push( new THREE.Face3(68, 67, 37) );
                geom.faces.push( new THREE.Face3(68, 37, 39) );
                geom.faces.push( new THREE.Face3(69, 68, 39) );
                geom.faces.push( new THREE.Face3(69, 39, 41) );
                geom.faces.push( new THREE.Face3(70, 69, 41) );
                geom.faces.push( new THREE.Face3(70, 41, 43) );
                geom.faces.push( new THREE.Face3(45, 70, 43) );
                geom.faces.push( new THREE.Face3(71, 70, 45) );
                geom.faces.push( new THREE.Face3(72, 45, 47) );
                geom.faces.push( new THREE.Face3(72, 71, 45) );
                geom.faces.push( new THREE.Face3(73, 47, 49) );
                geom.faces.push( new THREE.Face3(73, 72, 47) );
                geom.faces.push( new THREE.Face3(0, 73, 49) );
                geom.faces.push( new THREE.Face3(74, 73, 0) );
                geom.faces.push( new THREE.Face3(3, 74, 0) );
                geom.faces.push( new THREE.Face3(51, 74, 3) );
                geom.faces.push( new THREE.Face3(75, 32, 30) );
                geom.faces.push( new THREE.Face3(76, 75, 30) );
                geom.faces.push( new THREE.Face3(16, 77, 20) );
                geom.faces.push( new THREE.Face3(46, 44, 78) );
                geom.faces.push( new THREE.Face3(77, 79, 20) );
                geom.faces.push( new THREE.Face3(76, 30, 28) );
                geom.faces.push( new THREE.Face3(80, 76, 28) );
                geom.faces.push( new THREE.Face3(78, 44, 81) );
                geom.faces.push( new THREE.Face3(48, 46, 82) );
                geom.faces.push( new THREE.Face3(20, 79, 8) );
                geom.faces.push( new THREE.Face3(79, 83, 8) );
                geom.faces.push( new THREE.Face3(46, 78, 82) );
                geom.faces.push( new THREE.Face3(44, 42, 84) );
                geom.faces.push( new THREE.Face3(80, 28, 25) );
                geom.faces.push( new THREE.Face3(8, 83, 9) );
                geom.faces.push( new THREE.Face3(83, 85, 9) );
                geom.faces.push( new THREE.Face3(81, 44, 84) );
                geom.faces.push( new THREE.Face3(1, 48, 86) );
                geom.faces.push( new THREE.Face3(87, 88, 24) );
                geom.faces.push( new THREE.Face3(88, 80, 24) );
                geom.faces.push( new THREE.Face3(80, 25, 24) );
                geom.faces.push( new THREE.Face3(48, 82, 86) );
                geom.faces.push( new THREE.Face3(85, 89, 14) );
                geom.faces.push( new THREE.Face3(40, 38, 90) );
                geom.faces.push( new THREE.Face3(9, 85, 14) );
                geom.faces.push( new THREE.Face3(42, 40, 90) );
                geom.faces.push( new THREE.Face3(84, 42, 90) );
                geom.faces.push( new THREE.Face3(87, 24, 22) );
                geom.faces.push( new THREE.Face3(2, 1, 91) );
                geom.faces.push( new THREE.Face3(4, 2, 91) );
                geom.faces.push( new THREE.Face3(89, 92, 18) );
                geom.faces.push( new THREE.Face3(92, 87, 18) );
                geom.faces.push( new THREE.Face3(14, 89, 18) );
                geom.faces.push( new THREE.Face3(87, 22, 18) );
                geom.faces.push( new THREE.Face3(1, 86, 91) );
                geom.faces.push( new THREE.Face3(38, 35, 93) );
                geom.faces.push( new THREE.Face3(90, 38, 93) );
                geom.faces.push( new THREE.Face3(4, 91, 94) );
                geom.faces.push( new THREE.Face3(93, 35, 95) );
                geom.faces.push( new THREE.Face3(5, 4, 96) );
                geom.faces.push( new THREE.Face3(4, 94, 96) );
                geom.faces.push( new THREE.Face3(35, 34, 97) );
                geom.faces.push( new THREE.Face3(95, 35, 97) );
                geom.faces.push( new THREE.Face3(96, 98, 12) );
                geom.faces.push( new THREE.Face3(5, 96, 12) );
                geom.faces.push( new THREE.Face3(97, 34, 99) );
                geom.faces.push( new THREE.Face3(99, 34, 32) );
                geom.faces.push( new THREE.Face3(99, 32, 75) );
                geom.faces.push( new THREE.Face3(12, 98, 16) );
                geom.faces.push( new THREE.Face3(98, 77, 16) );
                geom.faces.push( new THREE.Face3(63, 100, 101) );
                geom.faces.push( new THREE.Face3(63, 64, 100) );
                geom.faces.push( new THREE.Face3(57, 102, 55) );
                geom.faces.push( new THREE.Face3(57, 103, 102) );
                geom.faces.push( new THREE.Face3(62, 63, 101) );
                geom.faces.push( new THREE.Face3(104, 70, 71) );
                geom.faces.push( new THREE.Face3(62, 101, 105) );
                geom.faces.push( new THREE.Face3(54, 103, 57) );
                geom.faces.push( new THREE.Face3(106, 69, 70) );
                geom.faces.push( new THREE.Face3(54, 107, 103) );
                geom.faces.push( new THREE.Face3(106, 70, 104) );
                geom.faces.push( new THREE.Face3(61, 105, 108) );
                geom.faces.push( new THREE.Face3(109, 71, 72) );
                geom.faces.push( new THREE.Face3(61, 62, 105) );
                geom.faces.push( new THREE.Face3(53, 110, 107) );
                geom.faces.push( new THREE.Face3(53, 111, 110) );
                geom.faces.push( new THREE.Face3(109, 104, 71) );
                geom.faces.push( new THREE.Face3(53, 107, 54) );
                geom.faces.push( new THREE.Face3(112, 68, 69) );
                geom.faces.push( new THREE.Face3(112, 69, 106) );
                geom.faces.push( new THREE.Face3(60, 61, 108) );
                geom.faces.push( new THREE.Face3(56, 113, 111) );
                geom.faces.push( new THREE.Face3(114, 72, 73) );
                geom.faces.push( new THREE.Face3(56, 111, 53) );
                geom.faces.push( new THREE.Face3(59, 115, 113) );
                geom.faces.push( new THREE.Face3(114, 109, 72) );
                geom.faces.push( new THREE.Face3(59, 108, 115) );
                geom.faces.push( new THREE.Face3(59, 60, 108) );
                geom.faces.push( new THREE.Face3(116, 67, 68) );
                geom.faces.push( new THREE.Face3(58, 113, 56) );
                geom.faces.push( new THREE.Face3(58, 59, 113) );
                geom.faces.push( new THREE.Face3(116, 68, 112) );
                geom.faces.push( new THREE.Face3(117, 73, 74) );
                geom.faces.push( new THREE.Face3(117, 74, 51) );
                geom.faces.push( new THREE.Face3(117, 114, 73) );
                geom.faces.push( new THREE.Face3(118, 67, 116) );
                geom.faces.push( new THREE.Face3(119, 51, 50) );
                geom.faces.push( new THREE.Face3(119, 117, 51) );
                geom.faces.push( new THREE.Face3(120, 66, 67) );
                geom.faces.push( new THREE.Face3(120, 67, 118) );
                geom.faces.push( new THREE.Face3(121, 119, 50) );
                geom.faces.push( new THREE.Face3(122, 65, 66) );
                geom.faces.push( new THREE.Face3(122, 66, 120) );
                geom.faces.push( new THREE.Face3(52, 123, 121) );
                geom.faces.push( new THREE.Face3(52, 121, 50) );
                geom.faces.push( new THREE.Face3(124, 65, 122) );
                geom.faces.push( new THREE.Face3(64, 65, 124) );
                geom.faces.push( new THREE.Face3(102, 123, 52) );
                geom.faces.push( new THREE.Face3(100, 64, 124) );
                geom.faces.push( new THREE.Face3(55, 102, 52) );
                geom.faces.push( new THREE.Face3(94, 117, 119) );
                geom.faces.push( new THREE.Face3(96, 94, 121) );
                geom.faces.push( new THREE.Face3(94, 119, 121) );
                geom.faces.push( new THREE.Face3(85, 83, 110) );
                geom.faces.push( new THREE.Face3(83, 107, 110) );
                geom.faces.push( new THREE.Face3(98, 96, 123) );
                geom.faces.push( new THREE.Face3(96, 121, 123) );
                geom.faces.push( new THREE.Face3(89, 85, 111) );
                geom.faces.push( new THREE.Face3(85, 110, 111) );
                geom.faces.push( new THREE.Face3(77, 98, 102) );
                geom.faces.push( new THREE.Face3(98, 123, 102) );
                geom.faces.push( new THREE.Face3(92, 89, 113) );
                geom.faces.push( new THREE.Face3(79, 77, 103) );
                geom.faces.push( new THREE.Face3(89, 111, 113) );
                geom.faces.push( new THREE.Face3(77, 102, 103) );
                geom.faces.push( new THREE.Face3(83, 79, 107) );
                geom.faces.push( new THREE.Face3(79, 103, 107) );
                geom.faces.push( new THREE.Face3(87, 92, 115) );
                geom.faces.push( new THREE.Face3(92, 113, 115) );
                geom.faces.push( new THREE.Face3(88, 87, 108) );
                geom.faces.push( new THREE.Face3(87, 115, 108) );
                geom.faces.push( new THREE.Face3(80, 88, 105) );
                geom.faces.push( new THREE.Face3(76, 80, 105) );
                geom.faces.push( new THREE.Face3(88, 108, 105) );
                geom.faces.push( new THREE.Face3(76, 105, 101) );
                geom.faces.push( new THREE.Face3(75, 76, 100) );
                geom.faces.push( new THREE.Face3(99, 75, 100) );
                geom.faces.push( new THREE.Face3(76, 101, 100) );
                geom.faces.push( new THREE.Face3(99, 100, 124) );
                geom.faces.push( new THREE.Face3(97, 99, 122) );
                geom.faces.push( new THREE.Face3(99, 124, 122) );
                geom.faces.push( new THREE.Face3(95, 97, 120) );
                geom.faces.push( new THREE.Face3(93, 95, 120) );
                geom.faces.push( new THREE.Face3(97, 122, 120) );
                geom.faces.push( new THREE.Face3(93, 120, 118) );
                geom.faces.push( new THREE.Face3(93, 118, 116) );
                geom.faces.push( new THREE.Face3(90, 93, 116) );
                geom.faces.push( new THREE.Face3(90, 116, 112) );
                geom.faces.push( new THREE.Face3(84, 90, 112) );
                geom.faces.push( new THREE.Face3(81, 84, 112) );
                geom.faces.push( new THREE.Face3(81, 112, 106) );
                geom.faces.push( new THREE.Face3(78, 81, 104) );
                geom.faces.push( new THREE.Face3(81, 106, 104) );
                geom.faces.push( new THREE.Face3(82, 78, 109) );
                geom.faces.push( new THREE.Face3(78, 104, 109) );
                geom.faces.push( new THREE.Face3(86, 82, 114) );
                geom.faces.push( new THREE.Face3(82, 109, 114) );
                geom.faces.push( new THREE.Face3(91, 86, 117) );
                geom.faces.push( new THREE.Face3(94, 91, 117) );
                geom.faces.push( new THREE.Face3(86, 114, 117) );
                var basematerial = new THREE.MeshBasicMaterial( { color: 0x888888 } );
                var mesh = new THREE.Mesh( geom, basematerial );
                scene.add( mesh );
                var linematerial = new THREE.LineBasicMaterial({linewidth: 1, color: 0x000000,});
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.5, 0.0, 0.35));
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(3.5, 0.0, 0.35));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.5, 0.0, 0.35));
                wire.vertices.push(new THREE.Vector3(3.35, 0.0, 0.5));
                wire.vertices.push(new THREE.Vector3(3.5, 0.0, 0.35));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(3.5, -8.57252759403e-16, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(3.35, 0.0, 0.5));
                wire.vertices.push(new THREE.Vector3(3.35, 0.0, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
                var wire = new THREE.Geometry();
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.0));
                wire.vertices.push(new THREE.Vector3(1.6, -3.91886975727e-16, 0.5));
                var line = new THREE.Line(wire, linematerial);
                scene.add(line);
 // placeholder for the FreeCAD objects

	var light = new THREE.PointLight( 0xFFFF00 );
	light.position.set( -10000, -10000, 10000 );
	scene.add( light );
	renderer.render( scene, camera );
	animate();
};

function animate(){
	requestAnimationFrame( animate );
	render();
};

function render(){
	controls.update();
	renderer.render( scene, camera );
};
