var config = [
    { x: 0, y: 0, walkable: true, image: "tile_2_png" },
    { x: 0, y: 1, walkable: true, image: "tile_2_png" },
    { x: 0, y: 2, walkable: true, image: "tile_2_png" },
    { x: 0, y: 3, walkable: true, image: "tile_2_png" },
    { x: 0, y: 4, walkable: true, image: "tile_2_png" },
    { x: 0, y: 5, walkable: true, image: "tile_2_png" },
    { x: 0, y: 6, walkable: true, image: "tile_2_png" },
    { x: 0, y: 7, walkable: true, image: "tile_2_png" },
    { x: 0, y: 8, walkable: true, image: "tile_2_png" },
    { x: 0, y: 9, walkable: true, image: "tile_2_png" },
    { x: 1, y: 0, walkable: true, image: "tile_2_png" },
    { x: 1, y: 1, walkable: true, image: "tile_2_png" },
    { x: 1, y: 2, walkable: false, image: "tile_1_png" },
    { x: 1, y: 3, walkable: true, image: "tile_2_png" },
    { x: 1, y: 4, walkable: true, image: "tile_2_png" },
    { x: 1, y: 5, walkable: true, image: "tile_2_png" },
    { x: 1, y: 6, walkable: true, image: "tile_2_png" },
    { x: 1, y: 7, walkable: false, image: "tile_1_png" },
    { x: 1, y: 8, walkable: true, image: "tile_2_png" },
    { x: 1, y: 9, walkable: true, image: "tile_2_png" },
    { x: 2, y: 0, walkable: true, image: "tile_2_png" },
    { x: 2, y: 1, walkable: false, image: "tile_1_png" },
    { x: 2, y: 2, walkable: false, image: "tile_1_png" },
    { x: 2, y: 3, walkable: false, image: "tile_1_png" },
    { x: 2, y: 4, walkable: false, image: "tile_1_png" },
    { x: 2, y: 5, walkable: true, image: "tile_2_png" },
    { x: 2, y: 6, walkable: true, image: "tile_2_png" },
    { x: 2, y: 7, walkable: false, image: "tile_1_png" },
    { x: 2, y: 8, walkable: false, image: "tile_1_png" },
    { x: 2, y: 9, walkable: true, image: "tile_2_png" },
    { x: 3, y: 0, walkable: true, image: "tile_2_png" },
    { x: 3, y: 1, walkable: true, image: "tile_2_png" },
    { x: 3, y: 2, walkable: false, image: "tile_1_png" },
    { x: 3, y: 3, walkable: true, image: "tile_2_png" },
    { x: 3, y: 4, walkable: true, image: "tile_2_png" },
    { x: 3, y: 5, walkable: true, image: "tile_2_png" },
    { x: 3, y: 6, walkable: true, image: "tile_2_png" },
    { x: 3, y: 7, walkable: true, image: "tile_2_png" },
    { x: 3, y: 8, walkable: false, image: "tile_1_png" },
    { x: 3, y: 9, walkable: false, image: "tile_1_png" },
    { x: 4, y: 0, walkable: true, image: "tile_2_png" },
    { x: 4, y: 1, walkable: true, image: "tile_2_png" },
    { x: 4, y: 2, walkable: false, image: "tile_1_png" },
    { x: 4, y: 3, walkable: false, image: "tile_1_png" },
    { x: 4, y: 4, walkable: false, image: "tile_1_png" },
    { x: 4, y: 5, walkable: true, image: "tile_2_png" },
    { x: 4, y: 6, walkable: true, image: "tile_2_png" },
    { x: 4, y: 7, walkable: true, image: "tile_2_png" },
    { x: 4, y: 8, walkable: false, image: "tile_1_png" },
    { x: 4, y: 9, walkable: true, image: "tile_2_png" },
    { x: 5, y: 0, walkable: true, image: "tile_2_png" },
    { x: 5, y: 1, walkable: true, image: "tile_2_png" },
    { x: 5, y: 2, walkable: true, image: "tile_2_png" },
    { x: 5, y: 3, walkable: true, image: "tile_2_png" },
    { x: 5, y: 4, walkable: true, image: "tile_2_png" },
    { x: 5, y: 5, walkable: true, image: "tile_2_png" },
    { x: 5, y: 6, walkable: true, image: "tile_2_png" },
    { x: 5, y: 7, walkable: true, image: "tile_2_png" },
    { x: 5, y: 8, walkable: false, image: "tile_1_png" },
    { x: 5, y: 9, walkable: true, image: "tile_2_png" },
    { x: 6, y: 0, walkable: true, image: "tile_2_png" },
    { x: 6, y: 1, walkable: false, image: "tile_1_png" },
    { x: 6, y: 2, walkable: false, image: "tile_1_png" },
    { x: 6, y: 3, walkable: false, image: "tile_1_png" },
    { x: 6, y: 4, walkable: false, image: "tile_1_png" },
    { x: 6, y: 5, walkable: false, image: "tile_2_png" },
    { x: 6, y: 6, walkable: true, image: "tile_2_png" },
    { x: 6, y: 7, walkable: true, image: "tile_2_png" },
    { x: 6, y: 8, walkable: true, image: "tile_2_png" },
    { x: 6, y: 9, walkable: true, image: "tile_2_png" },
    { x: 7, y: 0, walkable: false, image: "tile_1_png" },
    { x: 7, y: 1, walkable: false, image: "tile_1_png" },
    { x: 7, y: 2, walkable: true, image: "tile_2_png" },
    { x: 7, y: 3, walkable: true, image: "tile_2_png" },
    { x: 7, y: 4, walkable: true, image: "tile_2_png" },
    { x: 7, y: 5, walkable: true, image: "tile_2_png" },
    { x: 7, y: 6, walkable: true, image: "tile_2_png" },
    { x: 7, y: 7, walkable: true, image: "tile_2_png" },
    { x: 7, y: 8, walkable: false, image: "tile_1_png" },
    { x: 7, y: 9, walkable: true, image: "tile_2_png" },
    { x: 8, y: 0, walkable: true, image: "tile_2_png" },
    { x: 8, y: 1, walkable: false, image: "tile_1_png" },
    { x: 8, y: 2, walkable: true, image: "tile_2_png" },
    { x: 8, y: 3, walkable: true, image: "tile_2_png" },
    { x: 8, y: 4, walkable: true, image: "tile_2_png" },
    { x: 8, y: 5, walkable: true, image: "tile_2_png" },
    { x: 8, y: 6, walkable: false, image: "tile_1_png" },
    { x: 8, y: 7, walkable: false, image: "tile_1_png" },
    { x: 8, y: 8, walkable: true, image: "tile_2_png" },
    { x: 8, y: 9, walkable: false, image: "tile_1_png" },
    { x: 9, y: 0, walkable: true, image: "tile_2_png" },
    { x: 9, y: 1, walkable: true, image: "tile_2_png" },
    { x: 9, y: 2, walkable: true, image: "tile_2_png" },
    { x: 9, y: 3, walkable: true, image: "tile_2_png" },
    { x: 9, y: 4, walkable: false, image: "tile_1_png" },
    { x: 9, y: 5, walkable: true, image: "tile_2_png" },
    { x: 9, y: 6, walkable: true, image: "tile_2_png" },
    { x: 9, y: 7, walkable: true, image: "tile_2_png" },
    { x: 9, y: 8, walkable: true, image: "tile_2_png" },
    { x: 9, y: 9, walkable: true, image: "tile_2_png" },
];
var TileMap = (function (_super) {
    __extends(TileMap, _super);
    function TileMap(grid) {
        _super.call(this);
        this.init();
        this.grid = grid;
        this.loadWalkable();
    }
    var d = __define,c=TileMap,p=c.prototype;
    p.init = function () {
        for (var i = 0; i < config.length; i++) {
            var data = config[i];
            var tile = new Tile(data);
            this.addChild(tile);
        }
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, function (e) {
            var localX = e.localX;
            var localY = e.localY;
            var gridX = Math.floor(localX / TileMap.TileSize);
            var gridY = Math.floor(localY / TileMap.TileSize);
            console.log("tap_grid " + gridX + "," + gridY);
        }, this);
    };
    p.findPath = function () {
        var astar = new Astar();
        if (astar.findPath(this.grid)) {
            return astar._path;
        }
    };
    p.loadWalkable = function () {
        for (var i = 0; i < config.length; i++) {
            this.grid.setWalkable(config[i].x, config[i].y, config[i].walkable);
        }
    };
    TileMap.TileSize = 64;
    return TileMap;
}(egret.DisplayObjectContainer));
egret.registerClass(TileMap,'TileMap');
var Tile = (function (_super) {
    __extends(Tile, _super);
    function Tile(data) {
        _super.call(this);
        this.data = data;
        var bitmap = new egret.Bitmap();
        this.addChild(bitmap);
        bitmap.texture = RES.getRes(data.image);
        this.x = data.x * TileMap.TileSize;
        this.y = data.y * TileMap.TileSize;
    }
    var d = __define,c=Tile,p=c.prototype;
    return Tile;
}(egret.DisplayObjectContainer));
egret.registerClass(Tile,'Tile');
//# sourceMappingURL=Map.js.map