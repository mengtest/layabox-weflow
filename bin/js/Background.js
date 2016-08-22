var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Background = (function (_super) {
    __extends(Background, _super);
    function Background() {
        _super.call(this);
        this.init();
    }
    Background.prototype.init = function () {
        this.bg1 = new Laya.Sprite();
        this.bg1.loadImage("http://img.xhangjia.com/h5/2016/08/olympic/assets/bg.jpg");
        this.addChild(this.bg1);
        this.bg2 = new Laya.Sprite();
        this.bg2.loadImage("http://img.xhangjia.com/h5/2016/08/olympic/assets/bg.jpg");
        this.bg2.pos(0, -852);
        this.addChild(this.bg2);
        Laya.timer.frameLoop(1, this, this.onLoop);
    };
    Background.prototype.onLoop = function () {
        this.y += 10;
        if (this.bg1.y + this.y >= 852) {
            this.bg1.y -= 852 * 2;
        }
        if (this.bg2.y + this.y >= 852) {
            this.bg2.y -= 852 * 2;
        }
    };
    return Background;
}(Laya.Sprite));
//# sourceMappingURL=Background.js.map