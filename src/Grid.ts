class Grid {
    StartPoint: Point;
    EndPoint: Point;
    _points: Array<any>;
    _numCols: number;
    _numRow: number;

    constructor(numCols: number, numRows: number) {
        this._numCols = numCols;
        this._numRow = numRows;
        this._points = new Array();
        for (var i = 0; i < this._numCols; i++) {

            this._points[i] = new Array<Point>();
            for (var j = 0; j < this._numRow; j++) {
                this._points[i][j] = new Point(i, j);

            }
        }

    }

    getPoint(x: number, y: number): Point {

        return this._points[x][y];

    }

    setStartPoint(x: number, y: number): void {

        this.StartPoint = this._points[x][y];
    }


    setEndPoint(x: number, y: number): void {

        this.EndPoint = this._points[x][y];

    }

    public setWalkable(x: number, y: number, value: boolean): void {

        this._points[x][y].Walkable = value;
    }

}