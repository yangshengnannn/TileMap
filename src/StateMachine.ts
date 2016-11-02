interface State {

    player :any;

    EnterState();

    DuringState(enterTimes:number);

    ExitState();

    GetState():State;
    StateName:String;
}

class StateMachine {
    curState: State;
    context: any;
    time = 0;
    constructor(firstState: State) {
        this.curState = firstState;
        this.curState.EnterState();
    }
    public runMachine(timeStamp:number):boolean {
        var now = timeStamp;
        let time = this.time;
        let pass = now-time;
        this.time=now;
        this.curState.DuringState(pass);
        var newState: State = this.curState.GetState();
        if (newState !=this.curState) {
            console.log("switch to new state");
            this.curState.ExitState();
            this.curState = newState;
            this.curState.EnterState();
        }
        return false;
    }
    public switchState(target:State){
        this.curState.ExitState();
        target.EnterState();
        this.curState=target;
    }
}