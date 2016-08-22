class Background extends Laya.Sprite {
    private bg1:Laya.Sprite;
    private bg2:Laya.Sprite;
    constructor() {
        super();
        this.init();
    }
    init():void{
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage("http://img.xhangjia.com/h5/2016/08/olympic/assets/bg.jpg");
        this.addChild(this.bg1);
        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage("http://img.xhangjia.com/h5/2016/08/olympic/assets/bg.jpg");
        this.bg2.pos(0, -852);
        this.addChild(this.bg2);

        Laya.timer.frameLoop(1, this, this.onLoop);
    }

    onLoop():void{
        this.y += 10;
        if(this.bg1.y + this.y >= 852) {
            this.bg1.y -= 852 * 2;
        }
        if(this.bg2.y + this.y >= 852) {
            this.bg2.y -= 852 * 2;
        }
    }
}