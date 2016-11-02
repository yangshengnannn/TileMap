var PLAYER_SPEED = 0.2;
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        _super.call(this);
        this.isLeftFacing = true;
        this.speed = PLAYER_SPEED;
        this.appearance = new egret.Bitmap();
        this.appearance.height = 93;
        this.appearance.width = 60;
        this.appearance.scaleX = 0.55;
        this.appearance.scaleY = 0.55;
        this.appearance.anchorOffsetX = 30;
        this.appearance.anchorOffsetY = 42;
        this.animationList = {
            "idle_left": ["10000_png", "10000_png", "10000_png", "10000_png"],
            "idle_right": ["10000_png", "10000_png", "10000_png", "10000_png"],
            "walk_left": ["10001_png", "10002_png", "10003_png", "10004_png"],
            "walk_right": ["10001_png", "10002_png", "10003_png", "10004_png"]
        };
        this.fsm = new StateMachine(new IdleState(this));
        egret.startTick(this.fsm.runMachine, this.fsm);
        this.addChild(this.appearance);
    }
    var d = __define,c=Player,p=c.prototype;
    p.move = function (location) {
        this._moveState = new MoveState(this, location);
        this.fsm.switchState(this._moveState);
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Player;
}(egret.DisplayObjectContainer));
egret.registerClass(Player,'Player');
var IdleState = (function () {
    function IdleState(player) {
        this.Onidel = true;
        this.StateName = "Idle";
        this.player = player;
    }
    var d = __define,c=IdleState,p=c.prototype;
    p.EnterState = function () {
        this.Onidel = true;
        this.player.curAnimation = new Animation(this.player.animationList[this.player.isLeftFacing ? "idle_left" : "idle_right"], this.player.appearance, 8);
    };
    p.DuringState = function (pass) {
        this.player.curAnimation.playCurcularly(pass);
    };
    p.ExitState = function () {
        this.Onidel = false;
    };
    p.GetState = function () {
        return this;
    };
    return IdleState;
}());
egret.registerClass(IdleState,'IdleState',["State"]);
var MoveState = (function () {
    function MoveState(player, location) {
        this.OnMove = false;
        this.StateName = "Move";
        this.isOnposition = false;
        this.player = player;
        this.playerlocation = location;
        this.player.isLeftFacing = ((location.x - this.player.x) > 0 ? false : true);
    }
    var d = __define,c=MoveState,p=c.prototype;
    p.EnterState = function () {
        this.isOnposition = false;
        console.log("walk from:" + this.player.x.toFixed(1) + "  " + this.player.y.toFixed(1)
            + ", to:" + this.playerlocation.x.toFixed(1) + "  " + this.playerlocation.y.toFixed(1));
        this.player.curAnimation = new Animation(this.player
            .animationList[this.player.isLeftFacing ? "walk_left" : "walk_right"], this.player.appearance, 8);
        var funcChange = function () {
        };
        var tween = egret.Tween.get(this.player, { onChange: funcChange, onChangeObj: this.player });
        tween.to({
            x: this.playerlocation.x,
            y: this.playerlocation.y
        }, Math.sqrt(Math.pow((this.playerlocation.x - this.player.x), 2) +
            Math.pow((this.playerlocation.y - this.player.y), 2)) / this.player.speed, egret.Ease.sineInOut);
    };
    p.DuringState = function (pass) {
        this.player.curAnimation.playCurcularly(pass);
    };
    p.ExitState = function () {
        this.OnMove = false;
        this.isOnposition = true;
        console.log("Get Target Location");
    };
    p.GetState = function () {
        if (Math.abs(this.player.x - this.playerlocation.x) < 1) {
            return new IdleState(this.player);
        }
        else {
            return this;
        }
    };
    return MoveState;
}());
egret.registerClass(MoveState,'MoveState',["State"]);
//# sourceMappingURL=Player.js.map