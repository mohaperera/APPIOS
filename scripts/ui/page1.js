/* 
		WARNING 
		Auto generated file. 
		Do not modify it's contents.
*/

var page1 = new SMF.UI.Page({
	name: "page1",
	fillColor: "#EEEEEE"
});


var btn = new SMF.UI.TextButton({
	name: "btn",
	width: "70%",
	height: "10%",
	left: "15%",
	top: "70%",
	text: "Click me!"
});
page1.add(btn);


var lbl = new SMF.UI.Label({
	name: "lbl",
	width: "70%",
	height: "15.000000000000002%",
	left: "15%",
	top: "45%",
	multipleLine: true,
	textAlignment: SMF.UI.TextAlignment.CENTER
});
page1.add(lbl);


var img = new SMF.UI.Image({
	name: "img",
	width: "70%",
	height: "10%",
	left: "15%",
	top: "20%",
	image: "smartface.png",
	imageFillType: SMF.UI.ImageFillType.ASPECTFIT
});
page1.add(img);


var btnNext = new SMF.UI.TextButton({
	name: "btnNext",
	width: "70%",
	height: "10%",
	left: "15%",
	top: "80.8352144469526%",
	text: "Next Page"
});
page1.add(btnNext);



page1.onShow = function() {
    SMF.UI.statusBar.name = "statusBar";
    SMF.UI.statusBar.visible = false;
    if(Device.deviceOS === 'iOS'){
        SMF.UI.iOS.NavigationBar.name = "navigationBar";
        SMF.UI.iOS.NavigationBar.visible = false;
    }
    if(Device.deviceOS === 'Android'){
        page1.actionBar.name = "actionBar";
        page1.actionBar.visible = false;
    }
};

Object.assign(page1, {
    btn: btn,
    lbl: lbl,
    img: img,
    btnNext: btnNext
});

module && (module.exports = page1);