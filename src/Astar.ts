class Astar {
    _open: Array<Point>;
    _closed: Array<Point>;
    _grid: Grid;
    _StartPoint: Point;
    _EndPoint: Point;
    _path: Array<Point>
    _straghtCost: number = 1.0;
    _diagCost: number = Math.SQRT2;
    _heuristic: Function = this.euclidian;

    constructor() {
    }


    findPath(gird: Grid): boolean {
        this._grid = gird;
        this._open = new Array();
        this._closed = new Array();

        this._StartPoint = this._grid.StartPoint;
        this._EndPoint = this._grid.EndPoint;

        this._StartPoint.g = 0;
        this._StartPoint.h = this._heuristic(this._StartPoint)
        this._StartPoint.f = this._StartPoint.h + this._StartPoint.g;

        return this.search();
    }

    sortF(a, b) {
        return b.f - a.f;
    }


    search(): boolean {
        var point: Point = this._StartPoint;
        while (point != this._EndPoint) {

            var startX: number = Math.max(0, point.x - 1);
            var endX: number = Math.min(this._grid._numCols - 1, point.x + 1);
            var startY: number = Math.max(0, point.y - 1);
            var endY: number = Math.min(this._grid._numRow - 1, point.y + 1);

            for (var i = startX; i <= endX; i++) {//一共对8个点进行检测

                for (var j = startY; j <= endY; j++) {
                    var test: Point = this._grid.getPoint(i, j);
                    if (test == point || !test.Walkable ||
                       !this._grid.getPoint(point.x,test.y).Walkable||
                       !this._grid.getPoint(test.x,point.y).Walkable
                    ) continue;

                    var cost = this._straghtCost;

                    if (!((point.x == test.x) || (point.y == test.y))) {

                        cost = this._diagCost;
                    }
                    var g = point.g + cost;
                    var h = this._heuristic(test);
                    var f = h + g;
                    if (this.isOpen(test) || this.isClosed(test)) {

                        if (test.f > f) {
                            test.f = f;
                            test.g = g;
                            test.h = h;
                            test.parent = point;
                        }
                    }
                    else {
                        test.f = f;
                        test.g = g;
                        test.h = h;
                        test.parent = point;
                        this._open.push(test);
                    }
                }
            }
            this._closed.push(point);
            if (this._open.length == 0) {
                console.log("no path found");
                return false;
            }

            this._open.sort(this.sortF);
            point = this._open.shift() as Point;
        }
        this.buildPath();
        console.log("pathbulid");


        for (var i = 0; i < this._path.length; i++) {

            console.log("Node:"+this._path[i].x +","+this._path[i].y);
        }

        return true;
    }
    private buildPath(): void {
        this._path = new Array();
        var point: Point = this._EndPoint;
        this._path.push(point);

        while (point != this._StartPoint) {
            point = point.parent;
            this._path.unshift(point);
        }



    }
    public get_path(): Array<Point> {

        return this._path;

    }
    private isOpen(point: Point) {
        for (var i = 0; i < this._open.length; i++) {
            if (this._open[i] == point) {

                return true;
            }

        }
        return false;

    }


    private isClosed(point: Point) {
        for (var i = 0; i < this._closed.length; i++) {
            if (this._closed[i] == point) {

                return true;
            }

        }
        return false;

    }



    private euclidian(point: Point) {
        var dx = point.x - this._EndPoint.x;
        var dy = point.y - this._EndPoint.y;
        return Math.sqrt(dx * dx + dy * dy) * this._straghtCost;


    }

    private manhattan(point: Point) {

        return Math.abs(point.x - this._EndPoint.x) * this._straghtCost +
            Math.abs(point.y + this._EndPoint.y) * this._straghtCost;


    }

    private diagonal(point: Point) {
        var dx = Math.abs(point.x - this._EndPoint.x);
        var dy = Math.abs(point.y - this._EndPoint.y);
        var diag = Math.min(dx, dy);
        var straight = dx + dy;
        return this._diagCost * diag + this._straghtCost * (straight - 2 * diag);


    }
}