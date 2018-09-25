(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 800,
	height: 560,
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



(lib._4Fp21_0 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._4Fp21_1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._4Fp21_2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._4Fp21_3 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.body = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.coin = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.color = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ducky_0 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ducky_1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.ducky_2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.gameBG1html = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.gamebg2css = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.greencup1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.greencup = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.html = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.margin = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.NewPiskel4 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.NewPiskel5 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.night_0 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.night_1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.night_10 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.night_11 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.night_12 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.night_13 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.night_14 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.night_15 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.night_16 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.night_17 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.night_18 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.night_19 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.night_2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.night_20 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.night_21 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.night_22 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.night_23 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.night_24 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.night_25 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.night_26 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.night_27 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.night_28 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.night_29 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.night_3 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.night_30 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.night_31 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.night_32 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.night_33 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.night_34 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.night_35 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.night_36 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.night_37 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.night_38 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.night_39 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.night_4 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.night_40 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.night_41 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.night_42 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.night_43 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.night_44 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.night_45 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.night_46 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.night_47 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.night_5 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.night_6 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.night_7 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.night_8 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.night_9 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.p = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.platform1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.platformtest = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.powerup = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.width = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.Wizard_0 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.Wizard_1 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.Wizard_2 = function() {
	this.spriteSheet = ss["RealGame_atlas_"];
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.RedCupPowerup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.greencup1();
	this.instance.setTransform(0,0,0.846,0.806);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,25);


(lib.PowerupGraphic1 = function(mode,startPosition,loop) {
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


(lib.HeroGraphic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ducky_0();
	this.instance.setTransform(0,0,1.4,1.4);

	this.instance_1 = new lib.ducky_1();
	this.instance_1.setTransform(0,0,1.4,1.4);

	this.instance_2 = new lib.ducky_2();
	this.instance_2.setTransform(0,0,1.4,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).to({state:[{t:this.instance_2}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35,35);


(lib.GreenCupGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.greencup();
	this.instance.setTransform(22,25,0.846,0.806,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22,25);


(lib.EnemyCSS3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.color();
	this.instance.setTransform(0,0,0.272,0.366);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,15);


(lib.EnemyCSS2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.margin();
	this.instance.setTransform(0,0,0.251,0.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,50,15);


(lib.EnemyCSS1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.width();
	this.instance.setTransform(0,0,0.273,0.476);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,20);


(lib.EnemyHTML3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.body();
	this.instance.setTransform(0,0,0.221,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,20);


(lib.EnemyHTML2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.html();
	this.instance.setTransform(0,0,0.228,0.357);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45,15);


(lib.EnemyHTML1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.p();
	this.instance.setTransform(0,0,0.364,0.444);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40,20);


(lib.CoinGraphic = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.coin();
	this.instance.setTransform(0,0,0.029,0.029);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30,30);


(lib.BackgroundGraphic4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AA2DKIAAgLQAbgDAHgDQAIgEAAgNIgDgPIgIgXIgYg7IidAAIgbBIIgFAVQAAAPAMAGQAIAEAVACIAAALIh3AAIAAgLQAXgEAMgOQALgPAchCIB+klIAKAAICVFTQAPAhAJAIQAJAIAVAEIAAALgAAyAwIhCikIhFCkICHAAg");
	this.shape.setTransform(245,68.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAHDKIiTlIQgTgqgLgLQgLgKgWgBIAAgKICgAAIAAAKQgWAAgJACQgOAGAAAOQAAAHAFAOIATAtIBcDPIBVjhIAJgZIADgRQAAgSgPgGQgJgEgUAAIAAgKIB7AAIAAAKQgTADgJAHQgOALgOAjIiFFQg");
	this.shape_1.setTransform(209.2,69.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AA2DKIAAgLQAbgDAHgDQAIgEAAgNIgDgPIgIgXIgYg7IidAAIgbBIIgFAVQAAAPAMAGQAIAEAVACIAAALIh3AAIAAgLQAXgEAMgOQALgPAchCIB+klIAKAAICVFTQAPAhAJAIQAJAIAVAEIAAALgAAyAwIhCikIhFCkICHAAg");
	this.shape_2.setTransform(173.9,68.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AhaC8QgQgMgBgQQAAgQAKgHQAJgHAKAAQAUAAAJAZQAKAZALAAQAMAAAFgLQAEgJAAgaIAAkOQAAghgLgJQgKgKgigCIAAgKICpAAIAAAKQgjADgKAKQgKALAAAeIAADbQAAA8gdAdQgbAegrAAQgcAAgPgOg");
	this.shape_3.setTransform(140.4,69.5);

	this.instance = new lib.night_0();
	this.instance.setTransform(0,0,1.6,1.12);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AA2DJIAAgLQAbgCAHgDQAIgDAAgOIgDgPIgIgYIgYg5IidAAIgbBIIgFAUQAAAPAMAGQAIADAVACIAAALIh3AAIAAgLQAXgCAMgPQALgPAchCIB+klIAKAAICVFSQAPAiAJAJQAJAHAVADIAAALgAAyAvIhCijIhFCjICHAAg");
	this.shape_4.setTransform(220,90.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AAHDJIiTlIQgTgpgLgKQgLgLgWgBIAAgLICgAAIAAALQgWAAgJADQgOAEAAAPQAAAIAFANIATAsIBcDPIBVjgIAJgaIADgQQAAgRgPgHQgJgDgUgBIAAgLIB7AAIAAALQgTACgJAIQgOAMgOAiIiFFPg");
	this.shape_5.setTransform(184.2,91.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AA2DJIAAgLQAbgCAHgDQAIgDAAgOIgDgPIgIgYIgYg5IidAAIgbBIIgFAUQAAAPAMAGQAIADAVACIAAALIh3AAIAAgLQAXgCAMgPQALgPAchCIB+klIAKAAICVFSQAPAiAJAJQAJAHAVADIAAALgAAyAvIhCijIhFCjICHAAg");
	this.shape_6.setTransform(148.9,90.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AhbC9QgPgNgBgQQABgQAIgHQAKgHAKAAQAUAAAKAZQAJAZALAAQAMAAAFgKQAEgKAAgaIAAkOQAAghgLgJQgKgJgjgDIAAgLICqAAIAAALQgiADgLALQgKAKAAAeIAADbQAAA8gdAdQgbAegrgBQgcABgQgNg");
	this.shape_7.setTransform(115.4,91.5);

	this.instance_1 = new lib.night_1();
	this.instance_1.setTransform(0,0,1.6,1.12);

	this.instance_2 = new lib.night_2();
	this.instance_2.setTransform(0,0,1.6,1.12);

	this.instance_3 = new lib.night_3();
	this.instance_3.setTransform(0,0,1.6,1.12);

	this.instance_4 = new lib.night_4();
	this.instance_4.setTransform(0,0,1.6,1.12);

	this.instance_5 = new lib.night_5();
	this.instance_5.setTransform(0,0,1.6,1.12);

	this.instance_6 = new lib.night_6();
	this.instance_6.setTransform(0,0,1.6,1.12);

	this.instance_7 = new lib.night_7();
	this.instance_7.setTransform(0,0,1.6,1.12);

	this.instance_8 = new lib.night_8();
	this.instance_8.setTransform(0,0,1.6,1.12);

	this.instance_9 = new lib.night_9();
	this.instance_9.setTransform(0,0,1.6,1.12);

	this.instance_10 = new lib.night_10();
	this.instance_10.setTransform(0,0,1.6,1.12);

	this.instance_11 = new lib.night_11();
	this.instance_11.setTransform(0,0,1.6,1.12);

	this.instance_12 = new lib.night_12();
	this.instance_12.setTransform(0,0,1.6,1.12);

	this.instance_13 = new lib.night_13();
	this.instance_13.setTransform(0,0,1.6,1.12);

	this.instance_14 = new lib.night_14();
	this.instance_14.setTransform(0,0,1.6,1.12);

	this.instance_15 = new lib.night_15();
	this.instance_15.setTransform(0,0,1.6,1.12);

	this.instance_16 = new lib.night_16();
	this.instance_16.setTransform(0,0,1.6,1.12);

	this.instance_17 = new lib.night_17();
	this.instance_17.setTransform(0,0,1.6,1.12);

	this.instance_18 = new lib.night_18();
	this.instance_18.setTransform(0,0,1.6,1.12);

	this.instance_19 = new lib.night_19();
	this.instance_19.setTransform(0,0,1.6,1.12);

	this.instance_20 = new lib.night_20();
	this.instance_20.setTransform(0,0,1.6,1.12);

	this.instance_21 = new lib.night_21();
	this.instance_21.setTransform(0,0,1.6,1.12);

	this.instance_22 = new lib.night_22();
	this.instance_22.setTransform(0,0,1.6,1.12);

	this.instance_23 = new lib.night_23();
	this.instance_23.setTransform(0,0,1.6,1.12);

	this.instance_24 = new lib.night_24();
	this.instance_24.setTransform(0,0,1.6,1.12);

	this.instance_25 = new lib.night_25();
	this.instance_25.setTransform(0,0,1.6,1.12);

	this.instance_26 = new lib.night_26();
	this.instance_26.setTransform(0,0,1.6,1.12);

	this.instance_27 = new lib.night_27();
	this.instance_27.setTransform(0,0,1.6,1.12);

	this.instance_28 = new lib.night_28();
	this.instance_28.setTransform(0,0,1.6,1.12);

	this.instance_29 = new lib.night_29();
	this.instance_29.setTransform(0,0,1.6,1.12);

	this.instance_30 = new lib.night_30();
	this.instance_30.setTransform(0,0,1.6,1.12);

	this.instance_31 = new lib.night_31();
	this.instance_31.setTransform(0,0,1.6,1.12);

	this.instance_32 = new lib.night_32();
	this.instance_32.setTransform(0,0,1.6,1.12);

	this.instance_33 = new lib.night_33();
	this.instance_33.setTransform(0,0,1.6,1.12);

	this.instance_34 = new lib.night_34();
	this.instance_34.setTransform(0,0,1.6,1.12);

	this.instance_35 = new lib.night_35();
	this.instance_35.setTransform(0,0,1.6,1.12);

	this.instance_36 = new lib.night_36();
	this.instance_36.setTransform(0,0,1.6,1.12);

	this.instance_37 = new lib.night_37();
	this.instance_37.setTransform(0,0,1.6,1.12);

	this.instance_38 = new lib.night_38();
	this.instance_38.setTransform(0,0,1.6,1.12);

	this.instance_39 = new lib.night_39();
	this.instance_39.setTransform(0,0,1.6,1.12);

	this.instance_40 = new lib.night_40();
	this.instance_40.setTransform(0,0,1.6,1.12);

	this.instance_41 = new lib.night_41();
	this.instance_41.setTransform(0,0,1.6,1.12);

	this.instance_42 = new lib.night_42();
	this.instance_42.setTransform(0,0,1.6,1.12);

	this.instance_43 = new lib.night_43();
	this.instance_43.setTransform(0,0,1.6,1.12);

	this.instance_44 = new lib.night_44();
	this.instance_44.setTransform(0,0,1.6,1.12);

	this.instance_45 = new lib.night_45();
	this.instance_45.setTransform(0,0,1.6,1.12);

	this.instance_46 = new lib.night_46();
	this.instance_46.setTransform(0,0,1.6,1.12);

	this.instance_47 = new lib.night_47();
	this.instance_47.setTransform(0,0,1.6,1.12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_2},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_3},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_5},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_6},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_7},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_8},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_9},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_10},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_11},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_12},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_13},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_14},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_15},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_16},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_17},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_18},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_19},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_20},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_21},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_22},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_23},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_24},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_25},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_26},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_27},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_28},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_29},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_30},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_31},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_32},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_33},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_34},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_35},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_36},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_37},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_38},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_39},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_40},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_41},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_42},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_43},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_44},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_45},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_46},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.instance_47},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,560);


(lib.BackgroundGraphic3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AglCRQgHgRAAgdIAAiwIggAAIgCgCIgBgCIACgEIAIgIIAdgbIAog3IAFABIABAEIAABIIA6AAIAAAVIg7AAIAACnQAAAWADAMQAHAUAVAAQAKAAAIgFIARgQIAJAHIgHAIQgPAVgRAIQgRAJgQAAQghAAgMgfg");
	this.shape.setTransform(321.8,65.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AiKDLIAAgJQAbgCAIgKQAHgKAAgVIAAkYQAAgWgFgGQgGgGgPAAIgGAAIgHABIAAgKIAbgJIA7gUIACACIABACIAAAoQATgTAPgKQAZgQAbAAQAoAAAeAiQAdAjAAA8QAAA6gjAuQgjAvg1AAQgQAAgLgEQgTgGgPgQIAABgQAAAdAKAHQAJAHAeACIAAAKgAgbiZQgSAOAAAMIAACSQAIATAOAKQAPAKATAAQAfAAAXgfQAXgeAAg4QAAg2gXgaQgYgbgfAAQgTAAgSANg");
	this.shape_1.setTransform(297.3,75.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AhGDMIAAgIQAggDAIgHQAIgJAAgiIAAiMQAAgQgCgIQgFgMgOAAIgGAAIgSAFIAAgJIANgEIBFgZIALgEIAAAFIAADQQAAAhAJAJQAHAJAdACIAAAIgAgXiXQgJgJAAgMQAAgNAJgJQAJgJANAAQAKAAAJAJQAJAJAAANQAAAMgJAJQgJAJgKAAQgNAAgJgJg");
	this.shape_2.setTransform(274.6,62.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AhiCKIAAgKQAbgCAJgHQAIgIAAgXIAAiCQAAgdgFgMQgFgNgPAAIgHABIgLACIAAgKIAjgMIAYgJIAegNQAAAAAAAAQABAAAAABQAAAAABAAQAAAAAAABIABAGIAAAwQARgaARgPQARgOATAAQAPAAAKAJQAJAJAAANQAAAMgHAIQgHAJgLAAQgLAAgLgLQgMgKgGAAQgKAAgPARQgNAQAAASIAACCQAAAZAJAKQAMAKAbgBIAAAKg");
	this.shape_3.setTransform(256.6,69.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhQBoQgjgjAAg/QAAg6AmgrQAmgsA5gBQAkABAbASQAbAUAAAWQAAAKgHAIQgGAIgPAAQgKAAgIgHQgHgHgEgNIgDgPQgFgPgJgGQgKgHgQABQgeAAgYAcQgXAeAAAwQAAArAaAjQAZAjApAAQAfAAAYgUQANgMARgZIAIAGQgRAjgSAVQgkAmgtAAQgtAAgjgkg");
	this.shape_4.setTransform(232.9,69.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgrCHIgagGIgGADIgEAGIgIAAIAAhfIAKAAQAHAhALASQAUAhAnAAQAVAAANgMQAMgMAAgUQAAgMgHgLQgHgMgTgLIgfgSQgkgTgRgSQgRgUAAgbQAAggAYgWQAXgVAkAAQANAAATAGIAVAGIAHgBIAEgFIAHAAIACBSIgJAAQgGgdgJgQQgTgdggAAQgUAAgMANQgMAMAAARQAAAbApAVIAkAVQA/AgAAAtQAAAjgaAWQgaAWgoAAQgRAAgXgGg");
	this.shape_5.setTransform(208.5,69.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AhlB7QgTgSAAgcQAAgqAqgcQAbgQBPgeIAAgZQAAgdgGgMQgKgUgdAAQgPAAgNAHQgOAJAAANIACAMIABALQAAAQgLAHQgGADgJAAQgNAAgHgIQgHgJAAgLQAAgUAagWQAZgXAwABQA4AAAUAkQALAVAAAmIAAB0IACAXQAEAMAMgBIALgCIAPgKIAAAQQgJALgLAIQgQALgRgBQgVABgIgNQgKgNAAgSQgXATgNAJQgbARgYgBQgZAAgSgRgAgaAAQgqAZAAAhQAAAaARAMQAMAJAOAAQATAAAQgLQASgLAAgRIAAhaQggALgWANg");
	this.shape_6.setTransform(184.3,69.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFF00").s().p("AABCHIgDgIIhajVQgLgagMgJQgHgGgOgBIAAgJIB2AAIAAAJIgVAEQgHADAAAKIABAJIAFANIA8CRIAziAIAIgUIADgQQAAgMgLgFIgSgDIAAgJIBUAAIAAAJQgOABgHAIQgGAJgMAeIhVDRIgDAHIgFACg");
	this.shape_7.setTransform(154.8,69.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFF00").s().p("AhlB7QgTgSAAgcQAAgqArgcQAbgQBOgeIAAgZQAAgdgGgMQgKgUgdAAQgPAAgOAHQgNAJAAANIACAMIABALQAAAQgLAHQgGADgJAAQgNAAgHgIQgHgJAAgLQAAgUAagWQAZgXAwABQA4AAAUAkQALAVAAAmIAAB0IACAXQAEAMAMgBIALgCIAPgKIAAAQQgJALgLAIQgRALgQgBQgVABgIgNQgJgNgBgSQgXATgNAJQgbARgYgBQgZAAgSgRgAgaAAQgqAZAAAhQAAAaASAMQALAJAOAAQATAAARgLQARgLAAgRIAAhaQgfALgXANg");
	this.shape_8.setTransform(127.7,69.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF00").s().p("AhbC9QgPgNAAgQQAAgQAJgHQAJgHAKAAQAUAAAJAZQALAZAKAAQAMAAAEgLQAFgJAAgaIAAkOQAAghgLgJQgLgKghgCIAAgLICqAAIAAALQgkACgJAMQgLAKAAAeIAADbQAAA8gdAdQgbAdgrAAQgcABgQgNg");
	this.shape_9.setTransform(101.4,63.5);

	this.instance = new lib._4Fp21_0();
	this.instance.setTransform(0,0,3.2,3.457);

	this.instance_1 = new lib._4Fp21_1();
	this.instance_1.setTransform(0,0,3.2,3.457);

	this.instance_2 = new lib._4Fp21_2();
	this.instance_2.setTransform(0,0,3.2,3.457);

	this.instance_3 = new lib._4Fp21_3();
	this.instance_3.setTransform(0,0,3.2,3.457);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_2},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.instance_3},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,560);


(lib.BackgroundGraphic2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gamebg2css();
	this.instance.setTransform(0,0,0.97,1.018);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,560);


(lib.BackgroundGraphic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gameBG1html();
	this.instance.setTransform(0,0,0.417,0.519);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,560);


// stage content:
(lib.initalgameFiles = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;