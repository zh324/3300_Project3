// addHotel();

function addHotel() {
    var Hotel = createHotel()
    // Hotel.position.z = pz
    // Hotel.position.y = py

    scene.add(Hotel)
}

function createHotel() {
    var Hotel = new THREE.Object3D()

    // 白色基地
    var baseGeometry = new THREE.BoxBufferGeometry(80, 3, 80)
    var base = utils.makeMesh('lambert', baseGeometry, 0xffffff)
    base.position.y = 1
    Hotel.add(base)

    // 带玻璃立方体
    var frontMainCoords1 = [
        [-30, -25],
        [-30, 25],
        [-15, 35],
        [-15, -25]
        ]
    var frontMainCoords2 = [
        [-15, -35],
        [-15, 35],
        [15, 35],
        [15, -35]
        ]

    var frontMainCoords3 = [
        [15, -25],
        [15, 35],
        [30, 25],
        [30, -25]
        ]
    var frontMainCoords4 = [
        [-10, -15],
        [-10, 15],
        [10, 15],
        [10, -15]
        ]
    var frontMainShape = utils.makeShape(frontMainCoords1)
    var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 100)
    var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    frontMainMaterial.map.repeat.set(0.1, 0.08)
    var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    frontMain.castShadow = true
    frontMain.receiveShadow = true
    Hotel.add(frontMain)
    var frontTopShape = frontMainShape
    var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    frontTop.position.y = 100
    Hotel.add(frontTop)

    var frontMainShape = utils.makeShape(frontMainCoords2)
    var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 180)
    var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    frontMainMaterial.map.repeat.set(0.1, 0.08)
    var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    frontMain.castShadow = true
    frontMain.receiveShadow = true
    Hotel.add(frontMain)
    var frontTopShape = frontMainShape
    var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    frontTop.position.y = 100
    Hotel.add(frontTop)

    var frontMainShape = utils.makeShape(frontMainCoords3)
    var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 100)
    var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    frontMainMaterial.map.repeat.set(0.1, 0.08)
    var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    frontMain.castShadow = true
    frontMain.receiveShadow = true
    Hotel.add(frontMain)
    var frontTopShape = frontMainShape
    var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    frontTop.position.y = 100
    Hotel.add(frontTop)

    var frontMainShape = utils.makeShape(frontMainCoords4)
    var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 10)
    var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    frontMainMaterial.map.repeat.set(0.1, 0.08)
    var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    frontMain.castShadow = true
    frontMain.receiveShadow = true
    frontMain.position.y = 180
    Hotel.add(frontMain)

    var frontTopShape = frontMainShape
    var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    frontTop.position.y = 190
    Hotel.add(frontTop)

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
    // Hotel.add(frontRoofShelf)


    // 蓝色穿插屋顶
    var frontPlatGeometry = new THREE.BoxBufferGeometry(20, 2, 10)
    var fronPlat = utils.makeMesh('lambert', frontPlatGeometry, 0x0792a5)
    fronPlat.position.set(0, 20, 35)
    Hotel.add(fronPlat)

    var frontPlatVerticalGeometry = new THREE.BoxBufferGeometry(20, 3, 1)
    var frontPlatVertical = utils.makeMesh('phong', frontPlatVerticalGeometry, 0x0792a5)
    frontPlatVertical.receiveShadow = false
    frontPlatVertical.position.set(0, 22, 40)
    Hotel.add(frontPlatVertical)

    var frontPlatVerticalWhiteGeometry = new THREE.BoxBufferGeometry(20, 1, 1)
    var frontPlatVerticalWhite = utils.makeMesh('phong', frontPlatVerticalWhiteGeometry, 0xffffff)
    frontPlatVerticalWhite.position.set(0, 23, 40)
    Hotel.add(frontPlatVerticalWhite)


    // 柱子
    var frontPlatPillarGeometry = new THREE.CylinderGeometry(1, 1, 20, 32)
    var frontPlatPillar = utils.makeMesh('lambert', frontPlatPillarGeometry, 0xffffff)
    frontPlatPillar.position.set(-7.5, 10, 38)
    Hotel.add(frontPlatPillar)

    var frontPlatPillar2 = frontPlatPillar.clone()
    frontPlatPillar2.position.set(7.5, 10, 38)
    Hotel.add(frontPlatPillar2)


    // // 前方大柱子
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
    // Hotel.add(frontBorderVerticles)

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
    // Hotel.add(frontRoof)


    // // 后面的楼
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
    // Hotel.add(backMain)

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
    // Hotel.add(backMiddle)

    // var backMiddleWindowGeometry = new THREE.PlaneGeometry(32, 66, 1, 1)
    // var backMiddleWindowMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // backMiddleWindowMaterial.map.repeat.set(2, 6)

    // var backMiddleWindow = new THREE.Mesh(backMiddleWindowGeometry, backMiddleWindowMaterial)
    // backMiddleWindow.position.set(83, 51, -40)
    // backMiddleWindow.rotation.y = 0.5 * Math.PI
    // Hotel.add(backMiddleWindow)

    // var windowBackOrigin = createWindow()
    // windowBackOrigin.scale.set(0.6, 0.6, 1)
    // windowBackOrigin.rotation.y = Math.PI
    // windowBackOrigin.position.set(65, 75, -61)
    // for (var i = 0; i < 7; i++) {
    // for (var j = 0; j < 4; j++) {
    //     var windowObj = windowBackOrigin.clone()
    //     windowObj.position.x -= i * 22
    //     windowObj.position.y -= j * 20
    //     Hotel.add(windowObj)
    // }
    // }

    return Hotel	
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