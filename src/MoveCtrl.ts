const SIZE1 = 1;
const SIZE32 = 32;
const SIZE48 = 48;
class Vector2 {
    _x: number = 0;
    _y: number = 0;
    public constructor(x: number = 0, y: number = 0) {
        this._x = x;
        this._y = y;
    }
    public get x(): number {
        return this._x;
    }
    public set x(x: number) {
        this._x = x;
    }
    public get y(): number {
        return this._y;
    }
    public set y(y: number) {
        this._y = y;
    }
}
class Vector2_pixel extends Vector2 {
    size: number = 1;
    public constructor(x: number, y: number, size: number) {
        super(x, y);
        this.size = size;
        this.x = x * this.size;
        this.y = y * this.size;
    }
    public get ix(): number {
        return this.x / this.size;
    }
    public set ix(value: number) {
        this.x = value * this.size;
    }
    public get iy(): number {
        return this.y / this.size;
    }
    public set iy(value: number) {
        this.y = value * this.size;
    }
    public get iPos(): Vector2 {
        return new Vector2(this.ix, this.iy);
    }
    public get Pos(): Vector2 {
        return new Vector2(this.x, this.y);
    }
    public static PixelToReal(value: number): number {
        return value * SIZE1;
    }
    public static RealToPixel(value: number): number {
        return value / SIZE1;
    }
}
class Vector2_p32 extends Vector2_pixel {
    public constructor(x: number, y: number) {
        super(x, y, SIZE32);
    }
    public static PixelToReal(value: number): number {
        return value * SIZE32;
    }
    public static RealToPixel(value: number): number {
        return value / SIZE32;
    }

}
class Vector2_p48 extends Vector2_pixel {
    public constructor(x: number, y: number) {
        super(x, y, SIZE48);
    }
    public static PixelToReal(value: number): number {
        return value * SIZE48;
    }
    public static RealToPixel(value: number): number {
        return value / SIZE48;
    }

}