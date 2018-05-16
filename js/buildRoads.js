function buildRoad() {
    var road = new THREE.Object3D()
    var roadColor = 0xffffff
    var roadBorderOuterCoords = [
      [-1000, 1000],
      [1000, 1000],
      [1000, -1000],
      [-1000, -1000],
    ]

    var roadBorderOuterHoleCoords = [
      [-900, 900],
      [-900, -900],
      [900, -900],
      [900, 900]
    ]

    var roadBorderOuterShape = utils.makeShape(roadBorderOuterCoords, roadBorderOuterHoleCoords)
    var roadBorderOuterGeometry = utils.makeExtrudeGeometry(roadBorderOuterShape, 0.1)
    var roadBorderOuter = utils.makeMesh('phong', roadBorderOuterGeometry, roadColor)
    road.add(roadBorderOuter)
  
    var roadBorderInnerCoords = [
      [-131, 131],
      [-131, -131],
      [131, -131],
      [131, 131],
      [19, 131],
      [19, 99],
      [99, 99],
      [99, -99],
      [-99, -99],
      [-99, 99],
      [-19, 99],
      [-19, 131]
    ]

    var roadBorderInnerShape = utils.makeShape(roadBorderInnerCoords)
    var roadBorderInnnerGeometry = utils.makeExtrudeGeometry(roadBorderInnerShape, 0.1)
    var roadBoaderInnder = utils.makeMesh('phong', roadBorderInnnerGeometry, roadColor)
    roadBoaderInnder.rotation.y = Math.PI
    road.add(roadBoaderInnder)
  
    var roadLinesGeometry = new THREE.Geometry()
    var roadLineGeometry = new THREE.BoxGeometry(20, 0.1, 2)
  
    var roadLinesBottomGeometry = new THREE.Geometry()
    for (var i = 0; i < 9; i++) {
      var geometry = roadLineGeometry.clone()
      geometry.translate(i * 30, 0, -1)
      roadLinesBottomGeometry.merge(geometry)
    }

    roadLinesBottomGeometry.translate(-120, 0, 145)
    roadLinesGeometry.merge(roadLinesBottomGeometry)
  
    var roadLinesTopGeometry = roadLinesBottomGeometry.clone()
    roadLinesTopGeometry.translate(0, 0, -290)
    roadLinesGeometry.merge(roadLinesTopGeometry)
  
    var roadLinesLeftGeometry = roadLinesBottomGeometry.clone()
    roadLinesLeftGeometry.rotateY(0.5 * Math.PI)
    roadLinesGeometry.merge(roadLinesLeftGeometry)
  
    var roadLinesRightGeometry = roadLinesBottomGeometry.clone()
    roadLinesRightGeometry.rotateY(-0.5 * Math.PI)
    roadLinesGeometry.merge(roadLinesRightGeometry)
    roadLinesGeometry = new THREE.BufferGeometry().fromGeometry(roadLinesGeometry)
    var roadLines = utils.makeMesh('phong', roadLinesGeometry, roadColor)
    road.add(roadLines)
    scene.add(road);
  }