// addRestaurant();

function addRestaurant(pz, py) {
    var Restaurant = createRestaurant()
    Restaurant.position.z = pz
    Restaurant.position.y = py

    scene.add(Restaurant)
}

function createRestaurant() {
    var Restaurant = new THREE.Object3D()

    // 白色基地
    var baseGeometry = new THREE.BoxBufferGeometry(80, 3, 80)
    var base = utils.makeMesh('lambert', baseGeometry, 0xffffff)
    base.position.y = 1
    Restaurant.add(base)

    // // 带玻璃立方体
    // var frontMainCoords1 = [
    //     [-30, -25],
    //     [-30, 25],
    //     [-15, 35],
    //     [-15, -25]
    //     ]
    // var frontMainCoords2 = [
    //     [-15, -35],
    //     [-15, 35],
    //     [15, 35],
    //     [15, -35]
    //     ]

    // var frontMainCoords3 = [
    //     [15, -25],
    //     [15, 35],
    //     [30, 25],
    //     [30, -25]
    //     ]
    // var frontMainCoords4 = [
    //     [-10, -15],
    //     [-10, 15],
    //     [10, 15],
    //     [10, -15]
    //     ]
    // var frontMainShape = utils.makeShape(frontMainCoords1)
    // var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 100)
    // var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // frontMainMaterial.map.repeat.set(0.1, 0.08)
    // var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    // frontMain.castShadow = true
    // frontMain.receiveShadow = true
    // Restaurant.add(frontMain)
    // var frontTopShape = frontMainShape
    // var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    // var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    // frontTop.position.y = 100
    // Restaurant.add(frontTop)

    // var frontMainShape = utils.makeShape(frontMainCoords2)
    // var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 180)
    // var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // frontMainMaterial.map.repeat.set(0.1, 0.08)
    // var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    // frontMain.castShadow = true
    // frontMain.receiveShadow = true
    // Restaurant.add(frontMain)
    // var frontTopShape = frontMainShape
    // var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    // var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    // frontTop.position.y = 100
    // Restaurant.add(frontTop)

    // var frontMainShape = utils.makeShape(frontMainCoords3)
    // var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 100)
    // var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // frontMainMaterial.map.repeat.set(0.1, 0.08)
    // var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    // frontMain.castShadow = true
    // frontMain.receiveShadow = true
    // Restaurant.add(frontMain)
    // var frontTopShape = frontMainShape
    // var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    // var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    // frontTop.position.y = 100
    // Restaurant.add(frontTop)

    // var frontMainShape = utils.makeShape(frontMainCoords4)
    // var frontMainGeometry = utils.makeExtrudeGeometry(frontMainShape, 10)
    // var frontMainMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // frontMainMaterial.map.repeat.set(0.1, 0.08)
    // var frontMain = new THREE.Mesh(frontMainGeometry, frontMainMaterial)
    // frontMain.castShadow = true
    // frontMain.receiveShadow = true
    // frontMain.position.y = 180
    // Restaurant.add(frontMain)

    // var frontTopShape = frontMainShape
    // var frontTopGeometry = utils.makeExtrudeGeometry(frontTopShape, 5)
    // var frontTop = utils.makeMesh('lambert', frontTopGeometry, 0xb1a7af)
    // frontTop.position.y = 190
    // Restaurant.add(frontTop)

    // // var frontRoofShelfGeometry = new THREE.Geometry()
    // // var frontRoofShelfCubeGeometry = new THREE.BoxGeometry(2, 2, 40)
    // // // for z-axis
    // // for (var i = 0; i < 12; i++) {
    // // var geometry = frontRoofShelfCubeGeometry.clone()
    // // geometry.translate(i * 5, 0, 0)
    // // frontRoofShelfGeometry.merge(geometry)
    // // }
    // // // for x-axis
    // // for (var i = 0; i < 2; i++) {
    // // var geometry = frontRoofShelfCubeGeometry.clone()
    // // geometry.rotateY(0.5 * Math.PI)
    // // geometry.scale(1.6, 1, 1)
    // // geometry.translate(27, 0, -15 + i * 30)
    // // frontRoofShelfGeometry.merge(geometry)
    // // }
    // // // for y-axis
    // // var frontRoofShelfCubeYPosition = [
    // // [0, 0],
    // // [1, 0],
    // // [0, 1],
    // // [1, 1]
    // // ]
    // // for (var i = 0; i < frontRoofShelfCubeYPosition.length; i++) {
    // // var p = frontRoofShelfCubeYPosition[i]
    // // var geometry = frontRoofShelfCubeGeometry.clone()
    // // geometry.scale(1, 1, 0.4)
    // // geometry.rotateX(0.5 * Math.PI)
    // // geometry.translate(p[0] * 55, 0, -15 + p[1] * 30)
    // // frontRoofShelfGeometry.merge(geometry)
    // // }
    // // frontRoofShelfGeometry = new THREE.BufferGeometry().fromGeometry(frontRoofShelfGeometry)
    // // var frontRoofShelf = utils.makeMesh('phong', frontRoofShelfGeometry, 0xffffff)
    // // frontRoofShelf.position.set(-70, 115, 5)
    // // Restaurant.add(frontRoofShelf)


    // // 蓝色穿插屋顶
    // var frontPlatGeometry = new THREE.BoxBufferGeometry(20, 2, 10)
    // var fronPlat = utils.makeMesh('lambert', frontPlatGeometry, 0x0792a5)
    // fronPlat.position.set(0, 20, 35)
    // Restaurant.add(fronPlat)

    // var frontPlatVerticalGeometry = new THREE.BoxBufferGeometry(20, 3, 1)
    // var frontPlatVertical = utils.makeMesh('phong', frontPlatVerticalGeometry, 0x0792a5)
    // frontPlatVertical.receiveShadow = false
    // frontPlatVertical.position.set(0, 22, 40)
    // Restaurant.add(frontPlatVertical)

    // var frontPlatVerticalWhiteGeometry = new THREE.BoxBufferGeometry(20, 1, 1)
    // var frontPlatVerticalWhite = utils.makeMesh('phong', frontPlatVerticalWhiteGeometry, 0xffffff)
    // frontPlatVerticalWhite.position.set(0, 23, 40)
    // Restaurant.add(frontPlatVerticalWhite)


    // // 柱子
    // var frontPlatPillarGeometry = new THREE.CylinderGeometry(1, 1, 20, 32)
    // var frontPlatPillar = utils.makeMesh('lambert', frontPlatPillarGeometry, 0xffffff)
    // frontPlatPillar.position.set(-7.5, 10, 38)
    // Restaurant.add(frontPlatPillar)

    // var frontPlatPillar2 = frontPlatPillar.clone()
    // frontPlatPillar2.position.set(7.5, 10, 38)
    // Restaurant.add(frontPlatPillar2)


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
    // Restaurant.add(frontBorderVerticles)

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
    // Restaurant.add(frontRoof)


    // 后面的楼
    var backMainCoords = [
    [-35, -25],
    [-35, 35],
    [35, 35],
    [35, -25]
    ]
    // var backMainHolePath = [
    // [-30, 22],
    // [78, 22],
    // [78, 58],
    // [-78, 58],
    // [-78, 22]
    // ]
    var backMainShape = utils.makeShape(backMainCoords)

    var backMainGeometry = utils.makeExtrudeGeometry(backMainShape, 60)
    var backMain = utils.makeMesh('lambert', backMainGeometry, "#3B3C4E")
    Restaurant.add(backMain)

    var backTopShape = backMainShape
    var backTopGeometry = utils.makeExtrudeGeometry(backTopShape, 10)
    var backTop = utils.makeMesh('lambert', backTopGeometry, "#899FB8")
    backTop.position.y = 60
    Restaurant.add(backTop)

    var backTopShape = backMainShape
    var backTopGeometry = utils.makeExtrudeGeometry(backTopShape, 10)
    var backTop = utils.makeMesh('lambert', backTopGeometry, "#899FB8")
    backTop.position.y = 60
    Restaurant.add(backTop)



    var frontPlatPillarGeometry = new THREE.CylinderGeometry(5, 10, 50, 10)
    var frontPlatPillar = utils.makeMesh('lambert', frontPlatPillarGeometry, 0xffffff)
    frontPlatPillar.position.set(-20, 70, -20)
    Restaurant.add(frontPlatPillar)


    var tableGeometry1 = new THREE.CylinderGeometry(5, 5, 2, 32)
    var table1 = utils.makeMesh('lambert', tableGeometry1, 0xffffff)
    table1.position.set(0, 17, 35)
    Restaurant.add(table1)


    var tableGeometry2 = new THREE.CylinderGeometry(1, 1, 15, 32)
    var table2 = utils.makeMesh('lambert', tableGeometry2, 0xffffff)
    table2.position.set(0, 9, 35)
    Restaurant.add(table2)

    var chairGeometry1 = new THREE.BoxGeometry(9, 1, 7 );
    var chair1 = utils.makeMesh('lambert', chairGeometry1, 0xffffff)
    chair1.position.set(16, 11, 35)
    Restaurant.add(chair1)

    var chairGeometry2 = new THREE.BoxGeometry(1, 7, 7 );
    var chair2 = utils.makeMesh('lambert', chairGeometry2, 0xffffff)
    chair2.position.set(20, 15, 35)
    Restaurant.add(chair2)

    var chairGeometry3 = new THREE.CylinderGeometry(0.5, 0.5, 10, 32)
    var chair3 = utils.makeMesh('lambert', chairGeometry3, 0xffffff)
    chair3.position.set(13, 6, 37)
    Restaurant.add(chair3)

    var chairGeometry4 = new THREE.CylinderGeometry(0.5, 0.5, 10, 32)
    var chair4 = utils.makeMesh('lambert', chairGeometry4, 0xffffff)
    chair4.position.set(13, 6, 32)
    Restaurant.add(chair4)

    var chairGeometry5 = new THREE.CylinderGeometry(0.5, 0.5, 10, 32)
    var chair5 = utils.makeMesh('lambert', chairGeometry5, 0xffffff)
    chair5.position.set(19, 6, 37)
    Restaurant.add(chair5)

    var chairGeometry6 = new THREE.CylinderGeometry(0.5, 0.5, 10, 32)
    var chair6 = utils.makeMesh('lambert', chairGeometry6, 0xffffff)
    chair6.position.set(19, 6, 32)
    Restaurant.add(chair6)

    // var frontPlatPillarGeometry2 = new THREE.CylinderGeometry(, 15, 40, 32)
    // var frontPlatPillar2 = utils.makeMesh('lambert', frontPlatPillarGeometry2, 0xffffff)
    // frontPlatPillar2.position.set(-20, 70, 10)
    // Restaurant.add(frontPlatPillar2)
   
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
    // Restaurant.add(backMiddle)

    // var backMiddleWindowGeometry = new THREE.PlaneGeometry(32, 66, 1, 1)
    // var backMiddleWindowMaterial = new THREE.MeshPhongMaterial({ map: textures.window() })
    // backMiddleWindowMaterial.map.repeat.set(2, 6)

    // var backMiddleWindow = new THREE.Mesh(backMiddleWindowGeometry, backMiddleWindowMaterial)
    // backMiddleWindow.position.set(83, 51, -40)
    // backMiddleWindow.rotation.y = 0.5 * Math.PI
    // Restaurant.add(backMiddleWindow)

    var windowBackOrigin = createWindow()
    windowBackOrigin.scale.set(0.5, 0.5, 0.6)
    // windowBackOrigin.rotation.y = Math.PI
    windowBackOrigin.position.set(26, 40, 25)
    for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        var windowObj = windowBackOrigin.clone()
        windowObj.position.x -= i * 8
        windowObj.position.y -= j * 6
        Restaurant.add(windowObj)
    }
    }

    var windowBackOrigin2 = createWindow()
    windowBackOrigin2.scale.set(0.5, 0.5, 0.6)
    // windowBackOrigin.rotation.y = Math.PI
    windowBackOrigin2.position.set(5, 40, 25)
    for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 2; j++) {
        var windowObj2 = windowBackOrigin2.clone()
        windowObj2.position.x -= i * 8
        windowObj2.position.y -= j * 6
        Restaurant.add(windowObj2)
    }
    }

    var windowBackOrigin3 = createDoor()
    windowBackOrigin3.scale.set(0.5, 1, 0.3)
    // windowBackOrigin.rotation.y = Math.PI
    windowBackOrigin3.position.set(-20, 30, 25)
    for (var i = 0; i < 2; i++) {
    for (var j = 0; j < 4; j++) {
        var windowObj3 = windowBackOrigin3.clone()
        windowObj3.position.x -= i * 6
        windowObj3.position.y -= j * 5
        Restaurant.add(windowObj3)
    }
    }

    return Restaurant	
}






function createWindow() {
    var windowObj = new THREE.Object3D()
    var glassGeometry = new THREE.PlaneGeometry(20, 18)
    var glass = utils.makeMesh('phong', glassGeometry, "#2F6BA7")
    windowObj.add(glass)

    var windowBorderGeometry = new THREE.BoxBufferGeometry(25, 2, 2)
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


function createDoor() {
    var windowObj = new THREE.Object3D()
    var glassGeometry = new THREE.PlaneGeometry(20, 18)
    var glass = utils.makeMesh('phong', glassGeometry, "#2F6BA7")
    windowObj.add(glass)

    var windowBorderGeometry = new THREE.BoxBufferGeometry(20, 1, 2)
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