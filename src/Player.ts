var PLAYER_SPEED = 0.2;

class Player extends egret.DisplayObjectContainer {
    appearance: egret.Bitmap;
    fsm: StateMachine;

    _moveState:MoveState;
    _idelState:IdleState;

    posX: number;
    posY: number;
    curAnimation: Animation;
    
    isLeftFacing = true;
    animationList;

    speed: number;

    constructor() {
        super();
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

    move(location: Vector2) {
        this._moveState = new MoveState(this, location)
        this.fsm.switchState(this._moveState );
    }


    createBitmapByName(name: string): egret.Bitmap {
        var result = new egret.Bitmap();
        var texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

}
class IdleState implements State {

    private Onidel: boolean = true;
    player: Player;

    StateName = "Idle";

    public constructor(player: Player) {
        this.player = player;

    }

    EnterState() {

        this.Onidel = true;
        this.player.curAnimation = new Animation(this.player.animationList[this.player.isLeftFacing ? "idle_left" : "idle_right"],
            this.player.appearance,8);
    }

    DuringState(pass: number) {

        this.player.curAnimation.playCurcularly(pass);

    }

    ExitState() {

        this.Onidel = false;
    
    }

    GetState() {

        return this;
    }
}

class MoveState implements State {
    player: Player;
    private OnMove: boolean = false;
    playerlocation: Vector2;
    StateName = "Move";
    public isOnposition = false;

    constructor(player: Player, location: Vector2) {
        this.player = player;
        this.playerlocation = location;
        this.player.isLeftFacing = ((location.x - this.player.x) > 0 ? false : true);

    }
    EnterState() {
        this.isOnposition = false;

        console.log("walk from:" + this.player.x.toFixed(1) + "  " + this.player.y.toFixed(1)
            + ", to:" + this.playerlocation.x.toFixed(1) + "  " + this.playerlocation.y.toFixed(1));


        this.player.curAnimation = new Animation(this.player
            .animationList[this.player.isLeftFacing ? "walk_left" : "walk_right"], this.player.appearance, 8);

        var funcChange = function (): void {
        }
        var tween = egret.Tween.get(this.player, { onChange: funcChange, onChangeObj: this.player });

        tween.to({
            x: this.playerlocation.x,
            y: this.playerlocation.y
        }, Math.sqrt(
            Math.pow((this.playerlocation.x - this.player.x), 2) +
            Math.pow((this.playerlocation.y - this.player.y), 2)
        ) / this.player.speed, egret.Ease.sineInOut);

    }


    DuringState(pass: number) {
        this.player.curAnimation.playCurcularly(pass);
    }

    ExitState() {
        this.OnMove = false;
        this.isOnposition = true;
        console.log("Get Target Location");
    }

    GetState(): State {
        if (Math.abs(this.player.x - this.playerlocation.x) < 1) {
            return new IdleState(this.player);
        } else {
            return this;
        }
    }
}