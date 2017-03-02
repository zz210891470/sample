/**
 * related to main.ui
 * 
 * @Author : cxxf
 * @Timestamp : 2017-01-03
 */

var app = sm("do_App");
var page = sm("do_Page");

var target=ui("do_BarcodeView_1");


//scanArea	扫描的区域 在设计器设置
ui("do_Button_1").on("touch",function(data){
	var txt= target.start();
	var reslut="返回值为："+JSON.stringify(txt)+",返回值类型为："+ typeof(txt);
	resultshow(reslut);
	
});

//status	String		是	闪光灯状态，支持两种状态：on（开启）、off（关闭）
ui("do_Button_2").on("touch",function(data){
	target.flash("on");
	
}); 
ui("do_Button_2").on("touch",function(data){
	target.flash("off");
	
});

function resultshow(data) {
	ui("do_Label_1").set("text",data);
}
