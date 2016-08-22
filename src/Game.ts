/**
 * Game
 */

import Loader = laya.net.Loader;
import Handler = laya.utils.Handler;
class Game {
    private loadingScene:LoadingScene;
    constructor() {
        Laya.init(750, 1334, Laya.WebGL);

        Laya.stage.scaleMode = "fixedwidth";

        Laya.stage.alignH = "center";

        Laya.stage.screenMode = "vertical";

        Laya.stage.bgColor = '#ffffff';

        var url = Consts.URLS;
        var resources = [];
        for(var i=0; i < Consts.Resources.length; i++) {
            var newUrl = url + Consts.Resources[i];
            resources.push(newUrl);
        }

        this.loadingScene = new LoadingScene();
        Laya.stage.addChild(this.loadingScene);

        Laya.loader.load(resources, Handler.create(this, this.onAssetLoaded), Handler.create(this, this.onLoading, null, false), Loader.TEXT);
    }
    private onAssetLoaded(texture: laya.resource.Texture):void{
        console.log("加载结束");
        this.loadingScene.removeSelf();
        var bg:Background = new Background();
        Laya.stage.addChild(bg);
    }
    private onLoading(progress: number): void {
        this.loadingScene.setProgress(progress);
		console.log("加载进度: " + progress);
    }
}
new Game();