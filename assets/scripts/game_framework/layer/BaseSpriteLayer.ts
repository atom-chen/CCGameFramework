import BaseSpriteView from "../mvc/view/BaseSpriteView";

const {ccclass,property} = cc._decorator;

@ccclass
export default class BaseSpriteLayer implements IBaseLayer {
    _container: cc.Node;

    public constructor() {
        this._container = new cc.Node();
        this._container.name = cc.js.getClassName(this);
    }

    public get container():cc.Node
    {
        return this._container;
    }

    public getChild(child:BaseSpriteView):void
    {
        this._container.getChildByUuid(child.displayObject.uuid);
    }

    public addChild(child:BaseSpriteView):void
    {
        this._container.addChild(child.displayObject);
    }

    public removeChild(child:BaseSpriteView):void
    {
        this._container.removeChild(child.displayObject);
    }
}