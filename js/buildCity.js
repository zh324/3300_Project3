// addHospital();

function addHospital(pz, py) {
    var hospital = createHospital()
    hospital.position.z = pz
    hospital.position.y = py

    scene.add(hospital)
}

function createHospital() {
    var hospital = new THREE.Object3D()

    var baseGeometry = new THREE.BoxBufferGeometry(180, 3, 140)
    var base = utils.makeMesh('lambert', baseGeometry, 0xffffff)
    base.position.y = 1
    hospital.add(base)

    var frontMainCoords = [
    [-80, -30],
    [-80, 20],
    [50, 20],
    [50, 0],
    [20, -30],
    [-80, -30]
    ]
    var frontMainShape = utils.makeShape(frontMainCoords)
    var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 100)
    var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    frontMainMaterial.map.repeat.set(0.1, 0.08)
    var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    frontMain.castShadow = true
    frontMain.receiveShadow = true
    hospital.add(frontMain)

    // var frontTopShape = frontMainShape
    // var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    // var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    // frontTop.position.y = 100
    // hospital.add(frontTop)

    // var frontRoofShelfGeometry = new THREE.Geometry()
    // var frontRoofShelfCubeGeometry = new THREE.BoxGeometry(2, 2, 40)
    // // for z-axis
    // for (var i = 0; i < 12; i++) {
    // var geometry = frontRoofShelfCubeGeometry.clone()
    // geometry.translate(i * 5, 0, 0)
    // frontRoofShelfGeometry.merge(geometry)
    // }
    // // for x-axis
    // for (var i = 0; i < 2; i++) {
    // var geometry = frontRoofShelfCubeGeometry.clone()
    // geometry.rotateY(0.5 * Math.PI)
    // geometry.scale(1.6, 1, 1)
    // geometry.translate(27, 0, -15 + i * 30)
    // frontRoofShelfGeometry.merge(geometry)
    // }
    // // for y-axis
    // var frontRoofShelfCubeYPosition = [
    // [0, 0],
    // [1, 0],
    // [0, 1],
    // [1, 1]
    // ]
    // for (var i = 0; i < frontRoofShelfCubeYPosition.length; i++) {
    // var p = frontRoofShelfCubeYPosition[i]
    // var geometry = frontRoofShelfCubeGeometry.clone()
    // geometry.scale(1, 1, 0.4)
    // geometry.rotateX(0.5 * Math.PI)
    // geometry.translate(p[0] * 55, 0, -15 + p[1] * 30)
    // frontRoofShelfGeometry.merge(geometry)
    // }
    // frontRoofShelfGeometry = new THREE.BufferGeometry().fromGeometry(frontRoofShelfGeometry)
    // var frontRoofShelf = utils.makeMesh('phong', frontRoofShelfGeometry, 0xffffff)
    // frontRoofShelf.position.set(-70, 115, 5)
    // hospital.add(frontRoofShelf)

    // var frontPlatGeometry = new THREE.BoxBufferGeometry(150, 3, 90)
    // var fronPlat = utils.makeMesh('lambert', frontPlatGeometry, 0x0792a5)
    // fronPlat.position.set(-3, 18, 25)
    // hospital.add(fronPlat)

    // var frontPlatVerticalGeometry = new THREE.BoxBufferGeometry(150, 15, 3)
    // var frontPlatVertical = utils.makeMesh('phong', frontPlatVerticalGeometry, 0x0792a5)
    // frontPlatVertical.receiveShadow = false
    // frontPlatVertical.position.set(-3, 24, 68.5)
    // hospital.add(frontPlatVertical)

    // var frontPlatVerticalWhiteGeometry = new THREE.BoxBufferGeometry(150, 3, 3)
    // var frontPlatVerticalWhite = utils.makeMesh('phong', frontPlatVerticalWhiteGeometry, 0xffffff)
    // frontPlatVerticalWhite.position.set(-3, 33, 68.5)
    // hospital.add(frontPlatVerticalWhite)

    // var frontPlatPillarGeometry = new THREE.CylinderGeometry(2, 2, 15, 32)
    // var frontPlatPillar = utils.makeMesh('lambert', frontPlatPillarGeometry, 0xffffff)
    // frontPlatPillar.position.set(-60, 10, 55)
    // hospital.add(frontPlatPillar)

    // var frontPlatPillar2 = frontPlatPillar.clone()
    // frontPlatPillar2.position.set(55, 10, 55)
    // hospital.add(frontPlatPillar2)

    // var frontBorderVerticles = new THREE.Object3D()
    // var frontBorderVerticleGeometry = new THREE.BoxBufferGeometry(4, 106, 4)
    // var frontBorderVerticleMesh = utils.makeMesh('phong', frontBorderVerticleGeometry, 0xffffff)
    // var frontBorderVerticle1 = frontBorderVerticleMesh.clone()
    // frontBorderVerticle1.position.set(-80, 52, 30)
    // frontBorderVerticles.add(frontBorderVerticle1)
    // var frontBorderVerticle2 = frontBorderVerticleMesh.clone()
    // frontBorderVerticle2.position.set(-80, 52, -20)
    // frontBorderVerticles.add(frontBorderVerticle2)
    // var frontBorderVerticle3 = frontBorderVerticleMesh.clone()
    // frontBorderVerticle3.position.set(50, 52, -18)
    // frontBorderVerticles.add(frontBorderVerticle3)
    // hospital.add(frontBorderVerticles)

    // var frontRoofCoords = [
    // [-82, -32],
    // [20, -32],
    // [52, 0],
    // [52, 22],
    // [-82, 22],
    // [-82, -32]
    // ]
    // var frontRoofHolePath = [
    // [-78, -28],
    // [20, -28],
    // [48, 0],
    // [48, 18],
    // [-78, 18],
    // [-78, -28]
    // ]
    // var frontRoofShape = utils.makeShape(frontRoofCoords, frontRoofHolePath)
    // var frontRoofGeometry = utils.makeExtrudeGeometry(frontRoofShape, 8)
    // var frontRoof = utils.makeMesh('phong', frontRoofGeometry, 0xffffff)
    // frontRoof.position.y = 100
    // hospital.add(frontRoof)

    // var backMainCoords = [
    // [-80, 20],
    // [-80, 60],
    // [80, 60],
    // [80, 20],
    // [-80, 20]
    // ]
    // var backMainHolePath = [
    // [-78, 22],
    // [78, 22],
    // [78, 58],
    // [-78, 58],
    // [-78, 22]
    // ]
    // var backMainShape = utils.makeShape(backMainCoords, backMainHolePath)

    // var backMainGeometry = utils.makeExtrudeGeometry(backMainShape, 90)
    // var backMain = utils.makeMesh('lambert', backMainGeometry, 0xf2e21b)
    // hospital.add(backMain)

    // var backMiddleCoords = [
    // [0, 0],
    // [36, 0],
    // [36, 70],
    // [0, 70],
    // [0, 0]
    // ]
    // var backMiddleHolePath = [
    // [2, 2],
    // [34, 2],
    // [34, 68],
    // [2, 68],
    // [2, 2]
    // ]
    // var backMiddleShape = utils.makeShape(backMiddleCoords, backMiddleHolePath)
    // var backMiddkeGeometry = utils.makeExtrudeGeometry(backMiddleShape, 165)
    // var backMiddle = utils.makeMesh('lambert', backMiddkeGeometry, 0xffffff)

    // backMiddle.rotation.x = -0.5 * Math.PI
    // backMiddle.rotation.z = -0.5 * Math.PI
    // backMiddle.position.y = 86
    // backMiddle.position.z = -58
    // backMiddle.position.x = -78
    // hospital.add(backMiddle)

    // var backMiddleWindowGeometry = new THREE.PlaneGeometry(32, 66, 1, 1)
    // var backMiddleWindowMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // backMiddleWindowMaterial.map.repeat.set(2, 6)

    // var backMiddleWindow = new THREE.Mesh(backMiddleWindowGeometry, backMiddleWindowMaterial)
    // backMiddleWindow.position.set(83, 51, -40)
    // backMiddleWindow.rotation.y = 0.5 * Math.PI
    // hospital.add(backMiddleWindow)

    // var windowBackOrigin = createWindow()
    // windowBackOrigin.scale.set(0.6, 0.6, 1)
    // windowBackOrigin.rotation.y = Math.PI
    // windowBackOrigin.position.set(65, 75, -61)
    // for (var i = 0; i < 7; i++) {
    // for (var j = 0; j < 4; j++) {
    //     var windowObj = windowBackOrigin.clone()
    //     windowObj.position.x -= i * 22
    //     windowObj.position.y -= j * 20
    //     hospital.add(windowObj)
    // }
    // }

    return hospital	
}

function createWindow() {
    var windowObj = new THREE.Object3D()
    var glassGeometry = new THREE.PlaneGeometry(20, 20)
    var glass = utils.makeMesh('phong', glassGeometry, 0x6a5e74)
    windowObj.add(glass)

    var windowBorderGeometry = new THREE.BoxBufferGeometry(22, 2, 2)
    var windowBorder = utils.makeMesh('phong', windowBorderGeometry, 0xffffff)

    var windowBorderTop = windowBorder.clone()
    windowBorderTop.position.y = 10
    windowObj.add(windowBorderTop)

    var windowBorderBottom = windowBorder.clone()
    windowBorderBottom.position.y = -10
    windowObj.add(windowBorderBottom)

    var windowBorderLeft = windowBorder.clone()
    windowBorderLeft.rotation.z = 0.5 * Math.PI
    windowBorderLeft.position.x = -10
    windowObj.add(windowBorderLeft)

    var windowBorderRight = windowBorderLeft.clone()
    windowBorderRight.position.x = 10
    windowObj.add(windowBorderRight)

    return windowObj
}