import ProgressBar = laya.ui.ProgressBar;
import Label = laya.ui.Label;    
class LoadingScene extends Laya.Sprite{
    private loadingbar:ProgressBar;
    private loadingLabel:Label;
    constructor() {
        super();
        this.init();
    }
    private init():void{
        var width = Laya.stage.width;
        var height = Laya.stage.height;
        this.loadingbar = new ProgressBar("./res/loading_bar.png");
        this.loadingbar.width = 400;
        this.loadingbar.pos(width /2 - this.loadingbar.width /2, height / 2);
        this.addChild(this.loadingbar);

        var label = new Label();
        label.font = "Microsoft YaHei";
		label.text = "0%";
		label.fontSize = 30;
        label.x = width /2;
        label.y = height / 2 - 100;
        this.addChild(label);
        this.loadingLabel = label;
        

        
        // Laya.timer.loop(100, this, this.setProgress);
    }
    public setProgress(progress:number):void{
        var radio = Math.floor(progress * 100);
        this.loadingLabel.text = radio + '%';
        this.loadingbar.value = progress;
        // if (this.loadingbar.value >= 1)
        //         this.loadingbar.value = 0;
        //     this.loadingbar.value += 0.05;
    }
}