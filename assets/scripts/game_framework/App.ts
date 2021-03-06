import ControllerManager from "./mvc/ControllerManager";
import DebugUtils from "./utils/DebugUtils";
import MathUtils from "./utils/MathUtils";
import DateUtils from "./utils/DateUtils";
import Log from "./utils/Log";
import StateMachine from "./fsm/StateMachine";
import StageUtils from "./utils/StageUtils";
import ViewManager from "./mvc/ViewManager";
import SceneManager from "./scene/manager/SceneManager";
import BuildInfo from "./consts/BuildInfo";
import GlobalInfo from "./consts/GlobalInfo";
import MessageCenter from "./utils/MessageCenter";
import HttpAPI from "./net/http/HttpAPI";
import ArrayUtils from "./utils/ArrayUtils";
import DeviceUtils from "./utils/DeviceUtils";
import NetManager from "./net/NetManager";
import LocalStorageUtils from "./utils/LocalStorageUtils";
import ResourceManager from "./resource/ResourceManager";
import SDKManager from "./sdk/SDKManager";
import PathUtils from "./utils/PathUtils";
import SoundManager from "./sound/SoundManager";
import TimerManager from "./utils/TimerManager";
import StringUtils from "./utils/StringUtils";
import HotUpdateManager from "./hot_update/HotUpdateManager";
import LayerManager from "./layer/LayerManager";
import FairyGUIUtil from "../game_main/misc/FairyGUIUtil";

export default class App {

    /**
     * 游戏框架名称
     */
    public static CCGameFrameworkName: string = "CCGameFramework";

    /**
     * 游戏框架版本
     */
    public static CCGameFrameworkVersion: string = "1.0";

    /**
     *   访问参数
     */
    public static UrlParameters: Object = null;

    /**
     * 打包配置数据
     * @type {null}
     */
    public static BuildInfo: BuildInfo = null;

    /**
     * 全局配置数据
     * @type {null}
     */
    public static GlobalInfo: GlobalInfo = null;

    /**
     * 流程管理器
     * @type {null}
     */
    public static get Procedure(): StateMachine {
        return StateMachine.getInstance();
    }

    /**
     * 资源管理器
     * @type {ResourceManager}
     */
    public static get ResManager(): ResourceManager {
        return ResourceManager.getInstance();
    }

    /**
     * 简单Http请求
     * @type {HttpAPI}
     */
    public static get Http(): HttpAPI {
        return HttpAPI.getInstance();
    }

    /**
     * 网络管理类
     * @type {NetManager}
     */
    public static get Net(): NetManager {
        return NetManager.getInstance();
    }

    /**
     * 消息调度中心
     * @type {MessageCenter}
     */
    public static get MessageCenter(): MessageCenter {
        return MessageCenter.getInstance(1);
    }

    /**
     * Stage操作相关工具类
     */
    public static get StageUtils(): StageUtils {
        return StageUtils.getInstance();
    }

    /**
     * 音乐管理类
     */
    public static get SoundManager(): SoundManager {
        return SoundManager.getInstance();
    }


    /**
     * 模块管理类
     * @type {ControllerManager}
     */
    public static get ControllerManager(): ControllerManager {
        return ControllerManager.getInstance();
    }

    /**
     * View管理类
     * @type {ViewManager}
     */
    public static get ViewManager(): ViewManager {
        return ViewManager.getInstance();
    }

    /**
     * 场景管理类
     * @type {SceneManager}
     */
    public static get SceneManager(): SceneManager {
        return SceneManager.getInstance();
    }

    /**
     * 日期工具类
     * @type {DateUtils}
     */
    public static get DateUtils(): DateUtils {
        return DateUtils.getInstance();
    }

    /**
     * 数学计算工具类
     * @type {MathUtils}
     */
    public static get MathUtils(): MathUtils {
        return MathUtils.getInstance();
    }

    /**
     * 调试工具
     * @type {DebugUtils}
     */
    public static get DebugUtils(): DebugUtils {
        return DebugUtils.getInstance();
    }

    /**
     * 数组工具类
     * @returns {any}
     * @constructor
     */
    public static get ArrayUtils(): ArrayUtils {
        return ArrayUtils.getInstance();
    }

    /**
     * 设备工具类
     */
    public static get DeviceUtils(): DeviceUtils {
        return DeviceUtils.getInstance();
    }

    /**
     * 渠道SDK管理器
     */
    public static get SDK(): SDKManager {
        return SDKManager.getInstance();
    }

    /**
     * 路径实用类
     * @returns {PathUtil}
     * @constructor
     */
    public static get PathUtil(): PathUtils {
        return PathUtils.getInstance();
    }

    /**
     * 计时器
     * @returns {TimerManager}
     * @constructor
     */
    public static get TimerManager(): TimerManager {
        return TimerManager.getInstance();
    }

    /**
     * 字符串工具类
     */
    public static get StringUtils(): StringUtils {
        return StringUtils.getInstance();
    }

    public static get HotUpdateManager(): HotUpdateManager {
        return HotUpdateManager.getInstance();
    }


    /**
     * 初始化函数
     * @constructor
     */
    public static init(): void {
        App.DebugUtils.isOpen(App.BuildInfo.IsDebug || App.UrlParameters["isDebug"]);
        Log.info(App.CCGameFrameworkName, App.CCGameFrameworkVersion);
        Log.info("当前引擎版本: ", cc.ENGINE_VERSION);
        App.DebugUtils.setThreshold(5);
        LocalStorageUtils.setHashID(App.BuildInfo.PackageName);
    }

    public static deinit(): void {
        StateMachine.destroy();
        SceneManager.destroy();
        LayerManager.deinit();
        ControllerManager.destroy();
        ViewManager.destroy();
        FairyGUIUtil.removeAllPackages();
        App.ResManager.release();
        ResourceManager.destroy();
        App.StageUtils.clear();
        StageUtils.destroy();
    }
}
