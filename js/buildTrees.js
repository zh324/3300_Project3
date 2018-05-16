function addTrees() {
    var treesPosition = [
      [-1000, -1000],
      [-70, -110],
      [10, -110],
      [90, -110],
      [170, -110],
      [250, -110],
      [320, -110],
      [400, -110],
      [480, -110],
      [560, -110],


    ]
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

    var treeLeafsGeometry = new THREE.BoxBufferGeometry(30, 30, 30)
    var treeLeafs = utils.makeMesh('lambert', treeLeafsGeometry, 0x9c9e5d)
    treeLeafs.position.y = 30
    tree.add(treeLeafs)

    tree.position.set(x, y, z)

    return tree
  }

