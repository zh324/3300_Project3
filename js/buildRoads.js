function buildRoad() {
    var road = new THREE.Object3D()
    var roadColor = 0xffffff
  
    var roadLinesGeometry = new THREE.Geometry()
    var roadLineGeometry = new THREE.BoxGeometry(40, 0.1, 10)

    //rotated
    var roadLinesGeometry2 = new THREE.Geometry()
    var roadLineGeometry2 = new THREE.BoxGeometry(10, 0.1, 40)

    var roadBordersGeometry = new THREE.Geometry();
    var roadBorderGeometry = new THREE.BoxGeometry(100, 0.1, 20);

    //rotated
    var roadBordersGeometry2 = new THREE.Geometry();
    var roadBorderGeometry2 = new THREE.BoxGeometry(20, 0.1, 100);  

    /*
      长虚线搞定
    */
    //right main street zebra line
    var roadLineLong = new THREE.Geometry()
    for (var i = 0; i < 200; i++) {
      var geometry = roadLineGeometry.clone()
      geometry.translate(i * 60, 0, -1)
      roadLineLong.merge(geometry)
    }
    roadLineLong.translate(-5800, -200, 2600)
    roadLinesGeometry.merge(roadLineLong)

    //left main street zebra line
    var roadLineLong1= roadLineLong.clone();
    roadLineLong1.translate(0, 0, -3550)
    roadLinesGeometry.merge(roadLineLong1)



    /*
      短虚线 - 短搞定
    */

   var roadLineShort = new THREE.Geometry()
   for (var i = 0; i < 25; i++) {
     var geometry = roadLineGeometry2.clone()
     geometry.translate(-1, 0, i * 60)
     roadLineShort.merge(geometry)
   }
   roadLineShort.translate(-5250, -200, 800)
   roadLinesGeometry.merge(roadLineShort)

   var roadLineShort1= roadLineShort.clone();
   roadLineShort1.translate(1200, 0, 0)
   roadLinesGeometry.merge(roadLineShort1)

   var roadLineShort2= roadLineShort1.clone();
   roadLineShort2.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort2)

   var roadLineShort3= roadLineShort2.clone();
   roadLineShort3.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort3)

   var roadLineShort4= roadLineShort3.clone();
   roadLineShort4.translate(1200, 0, 0)
   roadLinesGeometry.merge(roadLineShort4)

   var roadLineShort5= roadLineShort4.clone();
   roadLineShort5.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort5)

   var roadLineShort6= roadLineShort5.clone();
   roadLineShort6.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort6)

   var roadLineShort7= roadLineShort6.clone();
   roadLineShort7.translate(1200, 0, 0)
   roadLinesGeometry.merge(roadLineShort7)

   var roadLineShort8= roadLineShort7.clone();
   roadLineShort8.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort8)

   var roadLineShort9= roadLineShort8.clone();
   roadLineShort9.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort9)  

   var roadLineShort10= roadLineShort9.clone();
   roadLineShort10.translate(1050, 0, 0)
   roadLinesGeometry.merge(roadLineShort10)  


   /*
    短虚线 - 长搞定
   */

   var roadLineShort = new THREE.Geometry()
   for (var i = 0; i < 40; i++) {
     var geometry = roadLineGeometry2.clone()
     geometry.translate(-1, 0, i * 60)
     roadLineShort.merge(geometry)
   }
   roadLineShort.translate(-4650, -200, -3500)
   roadLinesGeometry.merge(roadLineShort)

   var roadLineShort1= roadLineShort.clone();
   roadLineShort1.translate(1200, 0, 0)
   roadLinesGeometry.merge(roadLineShort1)

   var roadLineShort2= roadLineShort1.clone();
   roadLineShort2.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort2)

   var roadLineShort3= roadLineShort2.clone();
   roadLineShort3.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort3)

   var roadLineShort4= roadLineShort3.clone();
   roadLineShort4.translate(1200, 0, 0)
   roadLinesGeometry.merge(roadLineShort4)

   var roadLineShort5= roadLineShort4.clone();
   roadLineShort5.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort5)

   var roadLineShort6= roadLineShort5.clone();
   roadLineShort6.translate(1200, 0, 0)
   roadLinesGeometry.merge(roadLineShort6)

   var roadLineShort7= roadLineShort6.clone();
   roadLineShort7.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort7)

   var roadLineShort8= roadLineShort7.clone();
   roadLineShort8.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort8)

   var roadLineShort9= roadLineShort8.clone();
   roadLineShort9.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort9)  

   var roadLineShort10= roadLineShort9.clone();
   roadLineShort10.translate(900, 0, 0)
   roadLinesGeometry.merge(roadLineShort10)


    /*
      长边界搞定
    */
    //right 1
    var roadBorderLong = new THREE.Geometry()
    for (var i = 0; i < 200; i++) {
      var geometry = roadBorderGeometry.clone()
      geometry.translate(i * 60, 0, -1)
      roadBorderLong.merge(geometry)
    }
    roadBorderLong.translate(-5800, -200, 2850)
    roadBordersGeometry.merge(roadBorderLong)

    //right 2
    var roadBorderLong1= roadBorderLong.clone();
    roadBorderLong1.translate(0, 0, -500)
    roadBordersGeometry.merge(roadBorderLong1)

    //left 1
    var roadBorderLong2= roadBorderLong.clone();
    roadBorderLong2.translate(0, 0, -3700)
    roadBordersGeometry.merge(roadBorderLong2)

    //left 2
    var roadBorderLong3= roadBorderLong.clone();
    roadBorderLong3.translate(0, 0, -3900)
    roadBordersGeometry.merge(roadBorderLong3)



    /*
      短边界 - 短搞定
    */
   var roadBorderShort = new THREE.Geometry()
   for (var i = 0; i < 25; i++) {
     var geometry = roadBorderGeometry2.clone()
     geometry.translate(-1, 0, i * 60)
     roadBorderShort.merge(geometry)
   }
   roadBorderShort.translate(-5350, -200, 800)
   roadLinesGeometry.merge(roadBorderShort)

   var roadBorderShort_copy= roadBorderShort.clone();
   roadBorderShort_copy.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort_copy)

   var roadBorderShort1= roadBorderShort.clone();
   roadBorderShort1.translate(1200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort1)

   var roadBorderShort11= roadBorderShort1.clone();
   roadBorderShort11.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort11)

   var roadBorderShort2= roadBorderShort1.clone();
   roadBorderShort2.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort2)

   var roadBorderShort12= roadBorderShort2.clone();
   roadBorderShort12.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort12)

   var roadBorderShort3= roadBorderShort2.clone();
   roadBorderShort3.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort3)

   var roadBorderShort13= roadBorderShort3.clone();
   roadBorderShort13.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort13)

   var roadBorderShort4= roadBorderShort3.clone();
   roadBorderShort4.translate(1200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort4)

   var roadBorderShort14= roadBorderShort4.clone();
   roadBorderShort14.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort14)

   var roadBorderShort5= roadBorderShort4.clone();
   roadBorderShort5.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort5)

   var roadBorderShort15= roadBorderShort5.clone();
   roadBorderShort15.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort15)

   var roadBorderShort6= roadBorderShort5.clone();
   roadBorderShort6.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort6)

   var roadBorderShort16= roadBorderShort6.clone();
   roadBorderShort16.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort16)

   var roadBorderShort7= roadBorderShort6.clone();
   roadBorderShort7.translate(1200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort7)

   var roadBorderShort17= roadBorderShort7.clone();
   roadBorderShort17.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort17)

   var roadBorderShort8= roadBorderShort7.clone();
   roadBorderShort8.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort8)

   var roadBorderShort18= roadBorderShort8.clone();
   roadBorderShort18.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort18)

   var roadBorderShort9= roadBorderShort8.clone();
   roadBorderShort9.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort9)  

   var roadBorderShort19= roadBorderShort9.clone();
   roadBorderShort19.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort19)  

   var roadBorderShort10= roadBorderShort9.clone();
   roadBorderShort10.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort10) 

   var roadBorderShort20= roadBorderShort10.clone();
   roadBorderShort20.translate(500, 0, 0)
   roadBordersGeometry.merge(roadBorderShort20) 


  /*
   短边界 - 长搞定
  */
    /*
      短边界 - 短搞定
    */
   var roadBorderShort = new THREE.Geometry()
   for (var i = 0; i < 40; i++) {
     var geometry = roadBorderGeometry2.clone()
     geometry.translate(-1, 0, i * 60)
     roadBorderShort.merge(geometry)
   }
   roadBorderShort.translate(-4750, -200, -3500)
   roadLinesGeometry.merge(roadBorderShort)

   var roadBorderShort_copy= roadBorderShort.clone();
   roadBorderShort_copy.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort_copy)

   var roadBorderShort1= roadBorderShort.clone();
   roadBorderShort1.translate(1200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort1)

   var roadBorderShort11= roadBorderShort1.clone();
   roadBorderShort11.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort11)

   var roadBorderShort2= roadBorderShort1.clone();
   roadBorderShort2.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort2)

   var roadBorderShort12= roadBorderShort2.clone();
   roadBorderShort12.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort12)

   var roadBorderShort3= roadBorderShort2.clone();
   roadBorderShort3.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort3)

   var roadBorderShort13= roadBorderShort3.clone();
   roadBorderShort13.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort13)

   var roadBorderShort4= roadBorderShort3.clone();
   roadBorderShort4.translate(1200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort4)

   var roadBorderShort14= roadBorderShort4.clone();
   roadBorderShort14.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort14)

   var roadBorderShort5= roadBorderShort4.clone();
   roadBorderShort5.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort5)

   var roadBorderShort15= roadBorderShort5.clone();
   roadBorderShort15.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort15)

   var roadBorderShort6= roadBorderShort5.clone();
   roadBorderShort6.translate(1200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort6)

   var roadBorderShort16= roadBorderShort6.clone();
   roadBorderShort16.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort16)

   var roadBorderShort7= roadBorderShort6.clone();
   roadBorderShort7.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort7)

   var roadBorderShort17= roadBorderShort7.clone();
   roadBorderShort17.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort17)

   var roadBorderShort8= roadBorderShort7.clone();
   roadBorderShort8.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort8)

   var roadBorderShort18= roadBorderShort8.clone();
   roadBorderShort18.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort18)

   var roadBorderShort9= roadBorderShort8.clone();
   roadBorderShort9.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort9)  

   var roadBorderShort19= roadBorderShort9.clone();
   roadBorderShort19.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort19)  

   var roadBorderShort10= roadBorderShort9.clone();
   roadBorderShort10.translate(900, 0, 0)
   roadBordersGeometry.merge(roadBorderShort10) 

   var roadBorderShort20= roadBorderShort10.clone();
   roadBorderShort20.translate(200, 0, 0)
   roadBordersGeometry.merge(roadBorderShort20) 


    roadLinesGeometry = new THREE.BufferGeometry().fromGeometry(roadLinesGeometry)
    var roadLines = utils.makeMesh('phong', roadLinesGeometry, roadColor)

    roadBordersGeometry = new THREE.BufferGeometry().fromGeometry(roadBordersGeometry);
    var roadBorders = utils.makeMesh('phong', roadBordersGeometry, roadColor);
  
    road.add(roadLines)
    road.add(roadBorders);
    scene.add(road);
  }