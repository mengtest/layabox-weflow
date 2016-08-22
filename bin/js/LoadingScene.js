var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ProgressBar = laya.ui.ProgressBar;
var Label = laya.ui.Label;
var LoadingScene = (function (_super) {
    __extends(LoadingScene, _super);
    function LoadingScene() {
        _super.call(this);
        this.init();
    }
    LoadingScene.prototype.init = function () {
        var width = Laya.stage.width;
        var height = Laya.stage.height;
        this.loadingbar = new ProgressBar("./res/loading_bar.png");
        this.loadingbar.width = 400;
        this.loadingbar.pos(width / 2 - this.loadingbar.width / 2, height / 2);
        this.addChild(this.loadingbar);
        var label = new Label();
        label.font = "Microsoft YaHei";
        label.text = "0%";
        label.fontSize = 30;
        label.x = width / 2;
        label.y = height / 2 - 100;
        this.addChild(label);
        this.loadingLabel = label;
        // Laya.timer.loop(100, this, this.setProgress);
    };
    LoadingScene.prototype.setProgress = function (progress) {
        var radio = Math.floor(progress * 100);
        this.loadingLabel.text = radio + '%';
        this.loadingbar.value = progress;
        // if (this.loadingbar.value >= 1)
        //         this.loadingbar.value = 0;
        //     this.loadingbar.value += 0.05;
    };
    return LoadingScene;
}(Laya.Sprite));
//# sourceMappingURL=LoadingScene.js.map