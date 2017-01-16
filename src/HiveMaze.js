// tell game is end or not
// able to trace player's path

function HiveMaze () {
  var defaultOptions = {
    level: 3
  }

  this.mCells = []
}


function test () {
  var hive = new HiveMaze()
  hive.setPath() // 初始化可行的路径
  hive.start(x, y) // 从某个坐标的cell开始游戏
  hive.open(direction) // 0 - 5
}
