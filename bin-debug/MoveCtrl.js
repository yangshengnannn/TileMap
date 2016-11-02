var SIZE1 = 1;
var SIZE32 = 32;
var SIZE48 = 48;
var Vector2 = (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    var d = __define,c=Vector2,p=c.prototype;
    d(p, "x"
        ,function () {
            return this._x;
        }
        ,function (x) {
            this._x = x;
        }
    );
    d(p, "y"
        ,function () {
            return this._y;
        }
        ,function (y) {
            this._y = y;
        }
    );
    return Vector2;
}());
egret.registerClass(Vector2,'Vector2');
var Vector2_pixel = (function (_super) {
    __extends(Vector2_pixel, _super);
    function Vector2_pixel(x, y, size) {
        _super.call(this, x, y);
        this.size = 1;
        this.size = size;
        this.x = x * this.size;
        this.y = y * this.size;
    }
    var d = __define,c=Vector2_pixel,p=c.prototype;
    d(p, "ix"
        ,function () {
            return this.x / this.size;
        }
        ,function (value) {
            this.x = value * this.size;
        }
    );
    d(p, "iy"
        ,function () {
            return this.y / this.size;
        }
        ,function (value) {
            this.y = value * this.size;
        }
    );
    d(p, "iPos"
        ,function () {
            return new Vector2(this.ix, this.iy);
        }
    );
    d(p, "Pos"
        ,function () {
            return new Vector2(this.x, this.y);
        }
    );
    Vector2_pixel.PixelToReal = function (value) {
        return value * SIZE1;
    };
    Vector2_pixel.RealToPixel = function (value) {
        return value / SIZE1;
    };
    return Vector2_pixel;
}(Vector2));
egret.registerClass(Vector2_pixel,'Vector2_pixel');
var Vector2_p32 = (function (_super) {
    __extends(Vector2_p32, _super);
    function Vector2_p32(x, y) {
        _super.call(this, x, y, SIZE32);
    }
    var d = __define,c=Vector2_p32,p=c.prototype;
    Vector2_p32.PixelToReal = function (value) {
        return value * SIZE32;
    };
    Vector2_p32.RealToPixel = function (value) {
        return value / SIZE32;
    };
    return Vector2_p32;
}(Vector2_pixel));
egret.registerClass(Vector2_p32,'Vector2_p32');
var Vector2_p48 = (function (_super) {
    __extends(Vector2_p48, _super);
    function Vector2_p48(x, y) {
        _super.call(this, x, y, SIZE48);
    }
    var d = __define,c=Vector2_p48,p=c.prototype;
    Vector2_p48.PixelToReal = function (value) {
        return value * SIZE48;
    };
    Vector2_p48.RealToPixel = function (value) {
        return value / SIZE48;
    };
    return Vector2_p48;
}(Vector2_pixel));
egret.registerClass(Vector2_p48,'Vector2_p48');
//# sourceMappingURL=MoveCtrl.js.map