var StateMachine = (function () {
    function StateMachine(firstState) {
        this.time = 0;
        this.curState = firstState;
        this.curState.EnterState();
    }
    var d = __define,c=StateMachine,p=c.prototype;
    p.runMachine = function (timeStamp) {
        var now = timeStamp;
        var time = this.time;
        var pass = now - time;
        this.time = now;
        this.curState.DuringState(pass);
        var newState = this.curState.GetState();
        if (newState != this.curState) {
            console.log("switch to new state");
            this.curState.ExitState();
            this.curState = newState;
            this.curState.EnterState();
        }
        return false;
    };
    p.switchState = function (target) {
        this.curState.ExitState();
        target.EnterState();
        this.curState = target;
    };
    return StateMachine;
}());
egret.registerClass(StateMachine,'StateMachine');
//# sourceMappingURL=StateMachine.js.map