/**
 * related to main.ui
 * 
 * @Author : cxx
 * @Timestamp : 2016-12-06
 */ 
var app = sm("do_App");
var page = sm("do_Page"); 
var nf = sm("do_Notification");

var do_Button_1=ui("do_Button_1");

//展示相关
do_Button_1.on("touch", function(data, e) { 
	var read="常见场景:\r\n音量调整\r\n\r\n非基类属性：\r\nprogress[设置第一进度值，支持手势拖动]，\r\nsecondaryProgress[设置第二进度值]\r\n\r\n非基类事件：\r\nprogressChanged[进度变化时候触发]";
    nf.alert(read,"关于我");
})

/**
 * 当前组件相关 
 * 
 * */

var target_1 = ui("do_SeekBar_1"); //获取与实例化当前组件对象

/**
 * 组件--属性
 * 基本属性：
 *    参考网址：http://store.deviceone.net/Documents/Base/UI.html#property
 * 特殊属性： 
 * 	progress
 * 	secondaryProgress
 * */
//
target_1.set("progress",10);
target_1.set("secondaryProgress",2);

/**
 * 组件--方法
 * 没有自己独特的方法，参考网址：http://store.deviceone.net/Documents/Base/UI.html#method
 * */ 
 
 
/**
 * 组件--事件
 * */
//点击事件
target_1.on("touch", function(data, e) {
	var a=target_1.progress;
	target_1.progress=a+10; 	
    
}) 
//更改事件：进度变化时候触发
target_1.on("progressChanged", function(data) {
	deviceone.print("progressChanged");
	nf.toast("do_SeekBar_1更改了"+data);
}) 