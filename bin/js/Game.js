/**
 * Game
 */
var Loader = laya.net.Loader;
var Handler = laya.utils.Handler;
var Game = (function () {
    function Game() {
        Laya.init(750, 1334, Laya.WebGL);
        Laya.stage.scaleMode = "fixedwidth";
        Laya.stage.alignH = "center";
        Laya.stage.screenMode = "vertical";
        Laya.stage.bgColor = '#ffffff';
        var url = Consts.URLS;
        var resources = [];
        for (var i = 0; i < Consts.Resources.length; i++) {
            var newUrl = url + Consts.Resources[i];
            resources.push(newUrl);
        }
        this.loadingScene = new LoadingScene();
        Laya.stage.addChild(this.loadingScene);
        Laya.loader.load(resources, Handler.create(this, this.onAssetLoaded), Handler.create(this, this.onLoading, null, false), Loader.TEXT);
    }
    Game.prototype.onAssetLoaded = function (texture) {
        console.log("加载结束");
        this.loadingScene.removeSelf();
        var bg = new Background();
        Laya.stage.addChild(bg);
    };
    Game.prototype.onLoading = function (progress) {
        this.loadingScene.setProgress(progress);
        console.log("加载进度: " + progress);
    };
    return Game;
}());
new Game();
//# sourceMappingURL=Game.js.map