function addTrees() {
    var treesPosition = [];
    var x = 6000;
    var y1 = -800;
    var y2 = -1100;
    //left main street trees
    for (var i = 0; i < 40; i++) {
      treesPosition.push([x - i * 300, y1]);
      treesPosition.push([x - i * 300, y2])
    }

    //left sub street trees
    for (var i = 0; i < 10; i++) {
      treesPosition.push([-4500, -800 - i * 300]);
      treesPosition.push([-4800, -800 - i * 300]);

      treesPosition.push([-3300, -800 - i * 300]);
      treesPosition.push([-3600, -800 - i * 300]);

      treesPosition.push([-2700, -800 - i * 300]);
      treesPosition.push([-2400, -800 - i * 300]);

      treesPosition.push([-1800, -800 - i * 300]);
      treesPosition.push([-1500, -800 - i * 300]);

      treesPosition.push([-600, -800 - i * 300]);
      treesPosition.push([-300, -800 - i * 300]);

      treesPosition.push([300, -800 - i * 300]);
      treesPosition.push([600, -800 - i * 300]);

      treesPosition.push([1500, -800 - i * 300]);
      treesPosition.push([1800, -800 - i * 300]);

      treesPosition.push([2400, -800 - i * 300]);
      treesPosition.push([2700, -800 - i * 300]);

      treesPosition.push([3300, -800 - i * 300]);
      treesPosition.push([3600, -800 - i * 300]);

      treesPosition.push([4200, -800 - i * 300]);
      treesPosition.push([4500, -800 - i * 300]);
      
      treesPosition.push([5100, -800 - i * 300]);
      treesPosition.push([5400, -800 - i * 300]);
    }

    //right main street trees
    for (var i = 0; i < 40; i++) {
      treesPosition.push([6000 - i * 300, 2300]);
      treesPosition.push([6000 - i * 300, 2900])
    }
    
    for (var i = 0; i < 6; i++) {
      treesPosition.push([4500, 2300 - i * 300]);
      treesPosition.push([5100, 2300 - i * 300]);

      treesPosition.push([3600, 2300 - i * 300]);
      treesPosition.push([3900, 2300 - i * 300]);

      treesPosition.push([3000, 2300 - i * 300]);
      treesPosition.push([2700, 2300 - i * 300]);

      treesPosition.push([1800, 2300 - i * 300]);
      treesPosition.push([2100, 2300 - i * 300]);

      treesPosition.push([600, 2300 - i * 300]);
      treesPosition.push([900, 2300 - i * 300]);

      treesPosition.push([-300, 2300 - i * 300]);
      treesPosition.push([-0, 2300 - i * 300]);

      treesPosition.push([-1200, 2300 - i * 300]);
      treesPosition.push([-900, 2300 - i * 300]);

      treesPosition.push([-2400, 2300 - i * 300]);
      treesPosition.push([-2100, 2300 - i * 300]);

      treesPosition.push([-3300, 2300 - i * 300]);
      treesPosition.push([-3000, 2300 - i * 300]);

      treesPosition.push([-4200, 2300 - i * 300]);
      treesPosition.push([-3900, 2300 - i * 300]);

      treesPosition.push([-5100, 2300 - i * 300]);
      treesPosition.push([-5400, 2300 - i * 300]);
    }

    treesPosition.forEach(function(elem) {
      var x = elem[0],
        y = -200,
        z = elem[1]
      var tree = createTree(x, y, z)
      scene.add(tree)
    })
  }

  function createTree(x, y, z) {
    var x = x || 0
    var y = y || 0
    var z = z || 0

    var tree = new THREE.Object3D()

    var treeTrunkGeometry = new THREE.BoxBufferGeometry(10, 30, 10)
    var treeTrunk = utils.makeMesh('lambert', treeTrunkGeometry, 0x8a613a)
    treeTrunk.position.y = 8
    tree.add(treeTrunk)

    var treeLeafsGeometry = new THREE.SphereGeometry( 30, 8, 4 );

    var treeColor = randomTreeColor();
    var treeLeafs = utils.makeMesh('lambert', treeLeafsGeometry, treeColor)
    treeLeafs.position.y = 30
    tree.add(treeLeafs)

    tree.position.set(x, y, z)

    return tree;
  }

  function randomTreeColor() {
    var colors = [0x9c9e5d, 0x5fb22c, 0x406d25, 0x57cc12];
    return colors[Math.floor(Math.random() * colors.length)];
  }

