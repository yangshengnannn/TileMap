class Animation{
    timePassed:number;
    FPS:number=4;
    textureList=[];
    curFrame:number;
    self:egret.Bitmap;
    public constructor(anim:any,self:egret.Bitmap,FPS = 4){
        this.textureList=anim;
        this.self=self;
        this.FPS=FPS;
        this.timePassed=0;
        this.curFrame=0;
    }
    public playCurcularly(timePassed:number){
        this.timePassed+=timePassed;
        if(this.timePassed>= 1000/this.FPS){
            this.timePassed-=(1000/this.FPS);
            this.curFrame=(++this.curFrame) % this.textureList.length;
            this.self.texture=RES.getRes(this.textureList[this.curFrame]);
        }
    }
    public playOnce(order:string,timePassed:number){
        this.timePassed+=timePassed;
        if(this.timePassed>= 1000/this.FPS){
            this.timePassed-=(1000/this.FPS);
            var list=this.textureList[order];
            if(this.curFrame < list.length){
                this.self.texture=RES.getRes(list[this.curFrame]);
                this.curFrame++;
            }
        }
    }
}