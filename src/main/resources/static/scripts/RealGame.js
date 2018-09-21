(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.coin = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ducky_0 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ducky_1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ducky_2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.gamebgjpgcopy = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.gameBG1html = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.gamebg2css = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.gamebg2cssj = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.NewPiskel2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.NewPiskel4 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.NewPiskel5 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.NewPiskel = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.platform1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.platformtest = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.powerup = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.salash = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.spikesmpngcopy = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Wizard_0 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Wizard_1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Wizard_2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.PowerupGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.powerup();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32,32);


(lib.PlatformGraphic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NewPiskel5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,32);


(lib.PlatformGraphic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NewPiskel4();
	this.instance.setTransform(-124.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-15.5,250,32);


(lib.PlatformGraphic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.platformtest();
	this.instance.setTransform(-149.5,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-149.5,-15.5,300,32);


(lib.PlatformGraphic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.platform1();
	this.instance.setTransform(0,0,0.086,0.096);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,20);


(lib.HeroGraphic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Wizard_0();

	this.instance_1 = new lib.Wizard_1();

	this.instance_2 = new lib.Wizard_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,50);


(lib.HeroGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ducky_0();

	this.instance_1 = new lib.ducky_1();

	this.instance_2 = new lib.ducky_2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25,25);


(lib.ObstacleGraphic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.salash();
	this.instance.setTransform(0,0,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.ObstacleGraphic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.spikesmpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,15);


(lib.ObstacleGraphic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.NewPiskel2();
	this.instance.setTransform(-16,-15.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-15.5,32,32);


(lib.CoinGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin();
	this.instance.setTransform(0,0,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20,20);


(lib.BackgroundGraphic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gamebgjpgcopy();
	this.instance.setTransform(-499.5,-539.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-499.5,-539.5,1000,1080);


(lib.BackgroundGraphic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gamebg2cssj();
	this.instance.setTransform(0,0,0.606,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.BackgroundGraphic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gamebg2css();
	this.instance.setTransform(0,0,0.606,0.909);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


(lib.BackgroundGraphic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gameBG1html();
	this.instance.setTransform(0,0,0.26,0.463);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500,500);


// stage content:
(lib.initalgameFiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BackgroundGraphic2();
	this.instance.setTransform(124.1,241.6,0.8,0.8,0,0,0,155.1,302);

	this.instance_1 = new lib.BackgroundGraphic1();
	this.instance_1.setTransform(250,250,1,1,0,0,0,250,250);

	this.instance_2 = new lib.HeroGraphic();
	this.instance_2.setTransform(234,168,1,1,0,0,0,12.5,12.5);

	this.instance_3 = new lib.ObstacleGraphic1();
	this.instance_3.setTransform(312,166.6,1,1,0,0,0,0,0.5);

	this.instance_4 = new lib.ObstacleGraphic2();
	this.instance_4.setTransform(178,175,1,1,0,0,0,7.5,7.5);

	this.instance_5 = new lib.ObstacleGraphic4();
	this.instance_5.setTransform(338,175,1,1,0,0,0,10,10);

	this.instance_6 = new lib.PowerupGraphic();
	this.instance_6.setTransform(366,134,1,1,0,0,0,16,16);

	this.instance_7 = new lib.PlatformGraphic1();
	this.instance_7.setTransform(257,188,1,1,0,0,0,100,10);

	this.instance_8 = new lib.CoinGraphic();
	this.instance_8.setTransform(321.9,132,1,1,0,0,0,10,10);

	this.instance_9 = new lib.ObstacleGraphic4();
	this.instance_9.setTransform(322,150,0.504,0.845,0,0,180,0,0.4);

	this.instance_10 = new lib.NewPiskel();
	this.instance_10.setTransform(390,169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,200,500,500);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;