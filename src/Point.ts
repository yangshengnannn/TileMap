class Point {
    x: number;
    y: number;
    f: number;
    g: number;
    h: number;
    Walkable: boolean = true;
    parent: Point;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}