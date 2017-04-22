import Omi from 'omi'
import OmiFinger from 'omi-finger';

OmiFinger.init();

export default class ClassComponent extends Omi.Component{
    constructor(data){
        super(data)

    }
    handleClick = (dom, evt) =>{
        if(dom.className === "js_show"){
            dom.className = ""
        } else {
            dom.className = "js_show"
        }
    };
    handleLink = (dom, evt)=> {
        window.location.hash = "/"+dom.dataset.id
    };
    render(){
        return `
            <div class="page home js_show">
                <div class="page__hd">
                    <h1 class="page__title">
                        <img src=${require('./assets/logo.png')} alt="WeUI" height="21px">
                    </h1>
                    <p class="page__desc">WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
                </div>
                <div class="page__bd page__bd_spacing">
                    <ul>
                       <li onclick="handleClick(this, event)" class={{}}>
                        <div class="weui-flex js_category">
                            <p class="weui-flex__item">表单</p>
                            <img src=${require('./assets/icon_nav_form.png')} alt="">
                        </div>
                        <div class="page__category js_categoryInner" data-height="220" style="">
                            <div class="weui-cells page__category-content">
                                <a class="weui-cell weui-cell_access js_item" onclick="handleLink(this, event)" data-id="button" href="javascript:;">
                                    <div class="weui-cell__bd">
                                        <p>Button</p>
                                    </div>
                                    <div class="weui-cell__ft"></div>
                                </a>
                                <a class="weui-cell weui-cell_access js_item" data-id="list" href="javascript:;">
                                    <div class="weui-cell__bd">
                                        <p>List</p>
                                    </div>
                                    <div class="weui-cell__ft"></div>
                                </a>
                                <a class="weui-cell weui-cell_access js_item" data-id="slider" href="javascript:;">
                                    <div class="weui-cell__bd">
                                        <p>Slider</p>
                                    </div>
                                    <div class="weui-cell__ft"></div>
                                </a>
                                        <a class="weui-cell weui-cell_access js_item" data-id="uploader" href="javascript:;">
                                            <div class="weui-cell__bd">
                                                <p>Uploader</p>
                                            </div>
                                            <div class="weui-cell__ft"></div>
                                        </a>
                                    </div>
                                </div>
                            </li>                  
                    </ul>           
                </div>
            </div>
        `
    }
}