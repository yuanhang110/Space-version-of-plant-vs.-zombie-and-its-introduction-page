(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1000,
	fps: 24,
	color: "#FFFFFF",
	// change 2
	manifest: [
		{src:"static/images/bosspsd.png", id:"bosspsd"},
		{src:"static/images/castlepsd.png", id:"castlepsd"},
		{src:"static/images/castle2psd.png", id:"castle2psd"},
		{src:"static/images/enemy1psd.png", id:"enemy1psd"},
		{src:"static/images/enemy2psd.png", id:"enemy2psd"},
		{src:"static/images/enemy3psd.png", id:"enemy3psd"},
		{src:"static/images/junkpsd.png", id:"junkpsd"},
		{src:"static/images/satellitepsd.png", id:"satellitepsd"},
		{src:"static/images/satellite2psd.png", id:"satellite2psd"}
	]
};

// stage content:
(lib.assets = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.SpaceJunk();
	this.instance.setTransform(232.4,497.1,1,1,0,0,0,1,-0.2);

	// Layer 1
	this.instance_1 = new lib.WaveCleared();
	this.instance_1.setTransform(341,746.1,0.933,0.933,0,0,0,14.8,0);

	// Layer 1
	this.instance_2 = new lib.Enemy1();
	this.instance_2.setTransform(145.9,165.4);

	// Layer 1
	this.instance_3 = new lib.Enemy3();
	this.instance_3.setTransform(577.8,158.2);

	// Layer 1
	this.instance_4 = new lib.Castle2();
	this.instance_4.setTransform(490.7,327.4);

	// Layer 1
	this.instance_5 = new lib.Castle();
	this.instance_5.setTransform(405.2,498.1);

	// Isolation Mode
	this.instance_6 = new lib.Selection();
	this.instance_6.setTransform(319.8,412.1);

	// Grid
	this.instance_7 = new lib.Board();
	this.instance_7.setTransform(14.3,120.3);

	// WaveIndicator
	this.instance_8 = new lib.WaveIndicator();
	this.instance_8.setTransform(23.5,34.3,1,1,0,0,0,0,0.4);

	// Bullet
	this.instance_9 = new lib.Bullet();
	this.instance_9.setTransform(626.2,52.4);

	// Satellite2
	this.instance_10 = new lib.Satellite2();
	this.instance_10.setTransform(406.3,244.5);

	// Satellite
	this.instance_11 = new lib.Satellite();
	this.instance_11.setTransform(226.5,240.6);

	// Enemy2
	this.instance_12 = new lib.Enemy2();
	this.instance_12.setTransform(315.7,156);

	// Energy
	this.instance_13 = new lib.Energy();
	this.instance_13.setTransform(331.5,221.7);

	// Explode
	this.instance_14 = new lib.Explode();
	this.instance_14.setTransform(397.6,80.1,1,1,0,0,0,1.4,-6.4);

	// Enemy1
	this.instance_15 = new lib.Boss();
	this.instance_15.setTransform(142.2,410.1);

	// Layer 4
	this.instance_16 = new lib.Background();
	this.instance_16.setTransform(384,592.1,1,1,0,0,0,384,592.1);

	this.addChild(this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(116.2,500,1038.4,1354.5);


// symbols:
(lib.bosspsd = function() {
	this.initialize(img.bosspsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,84);


(lib.castlepsd = function() {
	this.initialize(img.castlepsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,67,86);


(lib.castle2psd = function() {
	this.initialize(img.castle2psd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,87);


(lib.enemy1psd = function() {
	this.initialize(img.enemy1psd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,72);


(lib.enemy2psd = function() {
	this.initialize(img.enemy2psd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,61,77);


(lib.enemy3psd = function() {
	this.initialize(img.enemy3psd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,89);


(lib.junkpsd = function() {
	this.initialize(img.junkpsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,83);


(lib.satellitepsd = function() {
	this.initialize(img.satellitepsd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,84,73);


(lib.satellite2psd = function() {
	this.initialize(img.satellite2psd);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,93,80);


(lib.WaveIndicator = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABGCEQg2gUhYgDQgLAAgDgLQgEgMAKgFQApgQAegYQAjgfAKgfQAIgYgIgZQgKgdgZgEQgQgCgQANQgRANASAPQALAKgLALQgLAKgLgJQgVgTAEgXQAEgUAVgOQAWgPAWABQAbAAARAVQAzA9gvBEQgaAmgoAbQA4AGAoAOQAOAFgEAOQgDALgIAAIgHgBg");
	this.shape.setTransform(142.5,25.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABMBzQg7gEhcAAQgPABABgPQAAgOAOgCQAwgFAegZQAlgdgFgrQgDgZgJgTQgNgdgSALQgKAGgHAJQgJANAJAHQALAJgKALQgLAKgLgJQgSgOAFgXQAEgUAUgQQAUgQAUACQAZABAPAaQAUAiAAAlQABAmgWAfQgNARgSAMIA/ADQAOABAAAPQAAAOgMAAIgCAAg");
	this.shape_1.setTransform(120.7,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").p("AkFgLQAABkBCBJQA/BGBgAMQBAAIBFgdQBFgcAug1QA0g7gChTQgChVg5g3QhBg/hHgZQhNgdhPAUQhOATguA8QgwA9AABWg");
	this.shape_2.setTransform(132.3,24.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkD0QhggMg/hGQhChJAAhkQAAhWAwg9QAug8BOgTQBPgUBNAdQBHAZBBA/QA5A3ACBVQACBTg0A7QguA1hFAcQg2AXgzAAQgOAAgOgCg");
	this.shape_3.setTransform(132.3,24.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAGASIgXgHQgTgGgDADQgJAMgKgLQgLgJAJgLQAOgRAlANQAnAOANgJQAMgIAHANQAIALgMAIQgLAHgQAAQgLAAgOgDg");
	this.shape_4.setTransform(90.2,25.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGBrQg0gJgUgBQgGAAgEgEQgFgFAAgGQAAgfAGg3QAHg9ABgbQAAgPAPAAQAPAAAAAPQgBAbgHA9QgEArgBAdIAwAFIAcAEQAVABAHgGQALgJALAKQALALgLAJQgRAPgiAAIgTgBg");
	this.shape_5.setTransform(89.9,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag/AMQgLgLAKgJQAGgHATgBIAcABIBCADQAOABAAANQAAAPgOgBIg2gDIgeAAIgOAAIgCABQgEADgEAAQgEAAgGgFg");
	this.shape_6.setTransform(90.6,17);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQB0QgGgCgDgFQgSghgKhDIgHgyQgGgfgOgQQgJgMAKgKQALgLAJALQAZAfAJBGQAHA2ALAeQAHgMAGgTIAOgzQAEgMAQgfQAOgbACgQQABgOAPAAQAPAAgBAOQgDAVgQAjQgTAngEAPQgJAkgIARQgNAdgSAPQgEADgEAAIgEgBg");
	this.shape_7.setTransform(72.2,25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAuAQIgsgDQgZgBgSADQgOADgEgOQgEgNAOgDQAUgEAdABIAuADQAPAAAAANQAAAPgOAAIgBAAg");
	this.shape_8.setTransform(56.3,28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA/BrQgBgRgKgZIgSgpIgXg8IgLgfIgYBHQgUBBgUAlQgHANgNgIQgNgHAHgNQATgkAVhAQAZhNALgbQAEgHAJAAQAHAAAEAHQAOAaAOAnIAYBAIATAsQALAcABATQAAAOgPAAQgPAAAAgOg");
	this.shape_9.setTransform(57.2,25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag6B9QgJgTgGgeIgKgzIgQg+QgHgjAAgeQAAgOAPAAQAPAAAAAOQAAAbAHAiIAPA6IAIAvIABAGIALgjIAYhMQADgKAKgBQAMAAACALQALBJAaAwIAGgfIAHg+IAIgyQAFgggFgRQgEgOAOgEQAPgEAEAOQAHAXgGAmIgKA7QgHBPgNApQgDAHgIADQgJADgFgHQghgqgRg/IgFAWQgOAwgMAeQgDAJgKACIgDAAQgIAAgDgHg");
	this.shape_10.setTransform(37.8,24.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AKyDDI1jAAIAAmFIVjAAg");
	this.shape_11.setTransform(69,24.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AqxDCIAAmEIVjAAIAAGEg");
	this.shape_12.setTransform(69,24.1);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,160.6,51.6);


(lib.WaveCleared = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("EgvPgOcMBefAAAEgvPAOdMBefAAA");
	this.shape.setTransform(10.9,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgoVAAnIiGEZIjpoxIhBAAIAAg+IEPAAIAAA+IgjAAIB3EbIArhWIhPjFIgiAAIAAg+IEkAAIAAA+IhXAAIBwEJIB0kJIhjAAIAAg+IDJAAIkRJzgA4zgkIg9AZIgXg5IDChQICPD5IBnifIhVAAIAAg9IDFAAIkTGrgEAhxAEMQgpgPgigbIgdgeQgNgQgKgTQgKgTgEgVQgGgVAAgXQAAgXAGgVQAEgVAKgRQANgZAngpQAigbApgPQAqgPArAAQAmAAAiALQAiAKAcAVQAbAVAQAeQAQAgACAlIj7AAIAAg7IBwAAQgFgVgRgLQgQgJgXAAQgZAAgTANQgTAMgMAVQgLAUgGAXQgFAXAAAXQAAAbAJAbQAJAaARAVQARAWAXAMQAZANAcAAQAWAAAXgIQAVgIATgPQAUgPANgSQAOgUAHgVIA7ARQgLAkgXAdQgVAcgfAUQgeAUgkALQgjAKglAAQgrAAgqgPgALdEMQgqgPgggbIgegeQgNgQgKgTQgJgTgGgVQgFgVAAgXQAAgXAFgVQAGgVAJgRQANgZAogpQAggbAqgPQApgPArAAQAnAAAiALQAiAKAbAVQAcAVAPAeQARAgACAlIj7AAIAAg7IBxAAQgHgVgRgLQgPgJgXAAQgZAAgTANQgSAMgNAVQgLAUgFAXQgGAXAAAXQAAAbAJAbQAJAaARAVQASAWAWAMQAZANAbAAQAXAAAWgIQAWgIAUgPQASgPAOgSQAOgUAHgVIA6ARQgKAkgWAdQgWAcgfAUQgeAUgkALQgkAKglAAQgrAAgpgPgAu1EMQgpgPghgbIgegeQgNgQgKgTQgJgTgGgVQgFgVAAgXQAAgXAFgVQAGgVAJgRQANgZAogpQAhgbApgPQAqgPAqAAQAnAAAiALQAiAKAbAVQAcAVAQAeQAQAgACAlIj7AAIAAg7IBxAAQgHgVgRgLQgPgJgXAAQgZAAgTANQgTAMgMAVQgLAUgFAXQgGAXAAAXQAAAbAJAbQAJAaARAVQASAWAWAMQAZANAbAAQAWAAAXgIQAWgIAUgPQASgPAOgSQAPgUAGgVIA6ARQgKAkgXAdQgVAcgfAUQgfAUgjALQgkAKglAAQgqAAgqgPgASmEMQgfgHgXgMQgbgPgOgVQgRgYAAgfQAAgSAIgRQAGgQANgNQAWgZApgRQAigQAsgIQAlgHAhAAIAvAEIAAguQABgggLgNQgMgQgfAAQgOAAgNAJIAAA4IiIAnIAAizICIAAIAAANIAbgDQAhAAAhALQAjAKAbATQAeAVAQAbQATAegBAgIAADJIAxAAIAAA9Ii8AAIAAgLQgcAKgdAFQgeAFgdAAQgeAAgbgGgAT0BqQgXAUAAAdQAAAYATAMQARAKAaAAQAbAAAdgNIAAg9QAAgSgNgMQgNgLgSAAQgcAAgXAUgEggHAEMQgegHgYgMQgagPgPgVQgQgYAAgfQAAgSAHgRQAHgQANgNQAVgZAqgRQAigQArgIQAlgHAhAAIAwAEIAAguQAAgggLgNQgLgQggAAQgOAAgNAJIAAA4IiIAnIAAizICIAAIAAANIAbgDQAiAAAhALQAjAKAbATQAdAVARAbQASAeAAAgIAADJIAwAAIAAA9Ii7AAIAAgLQgcAKgeAFQgeAFgdAAQgdAAgcgGgA+4BqQgYAUAAAdQAAAYAUAMQAQAKAaAAQAcAAAdgNIAAg9QAAgSgNgMQgNgLgSAAQgcAAgXAUgEAqeAEJQgoAAgmgOQgngOgdgaQgfgbgRgiIgNglQgEgUgBgVQAAgVAGgUQAEgUAKgQQASgiAggbQAfgZAogOQAngOAoAAQAiAABDASIAAhuIgtAMIgQg6IDIg4IAAIFIAwAAIAAA9gEAqcgAnQgTAKgQASQgOAPgIAWQgIAWAAAYQAAAXAIAWQAIAWAOASQAPASAUAKQAVAKAYAAQASAAARgGQARgHAOgMIAAjCQgOgMgRgHQgRgGgSAAQgYAAgVAKgAZBEJIAAg9IAwAAIAAjnIgtANIgQg8IDIg3IAAAfIA4gSQAggIAZAAQAUAAAOAGQAOAFAJAKQAKAKAFAPQAEAPAAATIAABgIiLAlIAAhwQAAgSgRAAQgKAAgXAJIAADsIAxAAIAAA9gAE5EJIAAg9IAxAAIAAmfIgtAMIgRg6IDJg4IAAIFIAwAAIAAA9gAhwEEQgfgFgdgLQgcgKgbgOQgagPgYgTQgXgTgSgXQgUgYgNgaQgNgbgIgeQgHgeAAgfQAAggAHgfQAIgdAOgcQAOgaATgYQAUgYAYgTQAXgUAbgPQAbgPAegLQAdgKAegGQAfgFAfAAQAgAAAhAIIAAgMICbAAIAAFdIibA2IAAk0QgOgLgNgGQgQgGgRAAQgTAAgRAHQgRAGgOALQgZAWgSAmQgPAhgJApQgHAlgBAiQAAAoALAmQALApAVAfQAXAgAgASQARAKAUAFQAUAFAXAAQAdAAAigNQAfgMAegWQAegVAWgbQAXgcAMgcIA4AXIgXAsIgdAnQgwAtgcAQQgqAZgxANQgtANgyAAQgeAAgfgFg");
	this.shape_1.setTransform(11.2,4.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-292.6,-93.5,607,187);


(lib.Group_0 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ACECdQhSAFhgAJQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape.setTransform(18.5,63.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D2A543").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABQhSAFhgAJIgXABQgzAAglgNg");
	this.shape_1.setTransform(18.5,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_2.setTransform(66.5,63.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D2A543").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_3.setTransform(66.5,63.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_4.setTransform(66.7,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D2A543").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_5.setTransform(66.7,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_6.setTransform(18.7,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2A543").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_7.setTransform(18.7,18.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,85.3,82.4);


(lib.Group = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ACECdQhSAFhgAJQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape.setTransform(18.5,63.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFCE2").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABQhSAFhgAJIgXABQgzAAglgNg");
	this.shape_1.setTransform(18.5,63.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_2.setTransform(66.5,63.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFCE2").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_3.setTransform(66.5,63.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_4.setTransform(66.7,18.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFCE2").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_5.setTransform(66.7,18.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_6.setTransform(18.7,18.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFCE2").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_7.setTransform(18.7,18.7);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,85.3,82.4);


(lib.ClipGroup = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AB0DfIjNgSIgXBFIgcgDIgIgtIhuhQIgTgxIgNhLIAAg3IAlg5IBehOIABgvIgGgjIAGgmIA0gNIBngGIBqAFIA+AbIAjAXIAABUIAVANIAxAtIAVAmIAACaIgZBIIhYA9IAAAyIgaArg");
	mask.setTransform(29.9,43);

	// Layer 3
	this.instance = new lib.enemy2psd();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,12.1,58.4,61.7);


(lib.ClipGroup_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgxF/IgvhBIgihJIgfhxIgFhdIh6ADIgsBDIhAhZIAAiBIAhgeIA5AAIAFAhIBSAPIAqgpIgNg8IA+AGIgLhAIAYhFIAagEIAQAsIAbAAIBEiPIAbgEIAUB+IAlgNIAdANIAWAbIAMAxIgJBRIAJBQIArAOIA8AAIAOgzIArAKIA/AAIAFBiIgZBJIg5BDIgnhZIhKAAIAACKIhiCpIhfA9g");
	mask_1.setTransform(40.9,43.9);

	// Layer 3
	this.instance_1 = new lib.enemy3psd();

	this.instance_1.mask = mask_1;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.2,1.1,79.5,85.5);


(lib.ClipGroup_2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	mask_2.graphics.p("AiFGDIgbgkIgRgqIhIgZIABhVIgKhQIgbgTIgcg3IAAglIAIgkIAZgWIAZgIIAKiQIAXggQAEgJAIgFQAPgNAMAMIABhuIAcgIIAzANIgHA8IA5ABIBigHIAAhHIAMgfIAmAIIAVBlIBbAhIALg2IAoAOIALA6IApAhIgGA/IALA5IgEBEQgGBJgPAeQgPAegBAwQAAAYACARIgpBfIg7BDIhBAeIiPALg");
	mask_2.setTransform(32.1,42.1);

	// Layer 3
	this.instance_2 = new lib.castlepsd();

	this.instance_2.mask = mask_2;

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.6,1.7,63,80.8);


(lib.ClipGroup_3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	mask_3.graphics.p("AEbFBIgIgvIAQhWIgZhMIkaAOIjbgdIg/BjIgIBOIg2gCIgShFIAAhGIAthFIgwgqIAMgsIBKgXIAsiaIA6hWIBkgvIBNgFIBnAfIBXA/IBSBLIAsB1IBAAjIgBA5IggAuIAoA9IAMCLIgjAzg");
	mask_3.setTransform(40.8,35.2);

	// Layer 3
	this.instance_3 = new lib.enemy1psd();

	this.instance_3.mask = mask_3;

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(2.5,1.3,76.6,67.8);


(lib.ClipGroup_4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	mask_4.graphics.p("AAIFxIgDADIgDgCIgoAoIgig2IgDAAIgnAeIAAg+IgCgHIhEAFIAjg2IgEgFIg9gJIAughIABgCIjFAAIAAl6IBOgHIAMAHIAAj6IBOAAIgCD6IAFAAIAXgHIAdhIIAuBIIDLADIAthQIAdBQIAXAEIAAj6IBQAAIAAD6IBQAAIAAF6Ii/AAIAyAiIg7AKIgEAGIAiA1IhEgFIgCAFIAABDIgqghIgBABIggA1g");
	mask_4.setTransform(36.9,42.2);

	// Layer 3
	this.instance_4 = new lib.bosspsd();

	this.instance_4.mask = mask_4;

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.4,1.2,73,82.1);


(lib.ClipGroup_5 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	mask_5.graphics.p("AkFEuIANg9IBzipIgxgaIjWA4Igog0IAPjDIBOgVIC6BeIApgZIgpjZIBRhEIDEAVIAwAvIhEDhIgBAOQAAAOADgBID1hdIBaBCIgPCwIhSAdIiZgxIgoAdIBaDEIg3BQIlrALg");
	mask_5.setTransform(45.5,39.8);

	// Layer 3
	this.instance_5 = new lib.satellite2psd();

	this.instance_5.mask = mask_5;

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.8,1.5,87.6,76.7);


(lib.ClipGroup_6 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	mask_6.graphics.p("ABZEGIggAMIhXgWIhPi4Ig0AhIAYA6Ii+BzIhViQIDchqIAUAxIAvgqIg3h/IAAgBIAWg7IAsgRIgMgYIhDAaIhDh6IDIhBIAbB+Ig8AWIALAaIAAABIAogKIBdAAIBLCsIA5gkIACAFIgfg2IDChzIBBCnIi2BOIgig3Ig/AeIgGgLIBEChIAABJIgBgBIgeAMIALB/g");
	mask_6.setTransform(42.1,36.5);

	// Layer 3
	this.instance_6 = new lib.satellitepsd();

	this.instance_6.mask = mask_6;

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0.8,0.5,82.8,72);


(lib.ClipGroup_7 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	mask_7.graphics.p("ADeFHIgvAYIh4AZIhpgPIhJgnIgwggIikBPIgZgQIAohTIBBg8IgYiRIAKh0IAtheIBShCQBZgpADADQABADAmgFIAjgGIAwAEIBYiiIAXAiIAXDHIBPBGIBCCIQALBugBAHQAAAGglBjIgLAoIAaBiIghAgg");
	mask_7.setTransform(37.9,43.6);

	// Layer 3
	this.instance_7 = new lib.castle2psd();

	this.instance_7.mask = mask_7;

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.7,1.9,72.4,83.4);


(lib.ClipGroup_8 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	mask_8.graphics.p("Ag/FrQgkgPgzgaIhQgsIh1g8IgEglQgCgWgMhQQgJg+AAgmIgCgWIgEhCIgIhSIABAAQC9iygCAAIBYgJQBlgMBDgFIBqgLIDjDAIgDACIgIBdQgDAYgHAuQgFApADAaIgCAXQgFBLgOBAIgBAQIgeATIgVAOQgjAZgzAhIhUA2IhmBCg");
	mask_8.setTransform(39,41.4);

	// Layer 3
	this.instance_8 = new lib.junkpsd();

	this.instance_8.mask = mask_8;

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.7,78,81.5);


(lib.Group_0_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("ACECdQhSAFhgAJQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape_8.setTransform(18.5,63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D2A543").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABQhSAFhgAJIgXABQgzAAglgNg");
	this.shape_9.setTransform(18.5,63.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_10.setTransform(66.5,63.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D2A543").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_11.setTransform(66.5,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_12.setTransform(66.7,18.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D2A543").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_13.setTransform(66.7,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAagCBAAIQA/AHAggDQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgHhHAHQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_14.setTransform(18.7,18.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D2A543").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAagCBAAIQA/AHAggDQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgHhHAHQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_15.setTransform(18.7,18.7);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,85.3,82.4);


(lib.Group_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("ACECdQhSAFhgAJQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape_8.setTransform(18.5,63.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFCE2").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABQhSAFhgAJIgXABQgzAAglgNg");
	this.shape_9.setTransform(18.5,63.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_10.setTransform(66.5,63.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFCE2").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_11.setTransform(66.5,63.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_12.setTransform(66.7,18.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFCE2").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_13.setTransform(66.7,18.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAagCBAAIQA/AHAggDQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgHhHAHQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_14.setTransform(18.7,18.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFCE2").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAagCBAAIQA/AHAggDQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgHhHAHQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_15.setTransform(18.7,18.7);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0.1,85.3,82.4);


(lib.Path = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFED3").s().p("AgbAbQgLgLAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgLALQgMAMgQAAQgPAAgMgMg");
	this.shape.setTransform(13,140.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFED3").s().p("AgOAPQgGgGgBgJQABgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIABQgIgBgGgGg");
	this.shape_1.setTransform(69.4,114.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFED3").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAIAHAAAIQAAAJgIAHQgGAGgJABQgIgBgHgGg");
	this.shape_2.setTransform(99.2,108.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFED3").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_3.setTransform(133.9,33.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFED3").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_4.setTransform(164.1,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFED3").s().p("AgbAcQgMgLAAgRQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAARgMALQgLAMgRAAQgPAAgMgMg");
	this.shape_5.setTransform(200.1,94.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFED3").s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_6.setTransform(261.3,4.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFED3").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_7.setTransform(318.8,2.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFED3").s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_8.setTransform(353.3,83.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFED3").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_9.setTransform(382,115.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFED3").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_10.setTransform(432.3,32.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFED3").s().p("AgOAPQgGgHAAgIQAAgHAGgGQAHgHAHAAQAJAAAGAHQAGAGAAAHQAAAIgGAHQgGAGgJAAQgHAAgHgGg");
	this.shape_11.setTransform(429.9,154.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFED3").s().p("AgTAVQgKgJABgMQgBgLAKgJQAIgJALAAQAMAAAJAJQAIAJABALQgBAMgIAJQgJAJgMAAQgLAAgIgJg");
	this.shape_12.setTransform(415.6,159.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFED3").s().p("AgRASQgIgHAAgLQAAgJAIgIQAIgIAJAAQALAAAHAIQAIAIAAAJQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape_13.setTransform(491.2,245.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFED3").s().p("AgYAYQgKgKAAgOQAAgNAKgKQALgLANAAQAOAAAKALQALAKAAANQAAAOgLAKQgKALgOAAQgNAAgLgLg");
	this.shape_14.setTransform(423.6,188.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFED3").s().p("AgbAdQgMgMAAgRQAAgQAMgMQAMgMAPAAQAQAAAMAMQANAMAAAQQAAARgNAMQgMAMgQgBQgPABgMgMg");
	this.shape_15.setTransform(397.5,245.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFED3").s().p("AgdAeQgNgNAAgRQAAgQANgNQANgNAQAAQARAAANANQANANAAAQQAAARgNANQgNANgRAAQgQAAgNgNg");
	this.shape_16.setTransform(351.5,168.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFED3").s().p("AgTAUQgJgJAAgLQAAgLAJgIQAJgJAKAAQAMAAAIAJQAJAIAAALQAAALgJAJQgIAJgMAAQgKAAgJgJg");
	this.shape_17.setTransform(318.9,64.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFED3").s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgQAAgNgMg");
	this.shape_18.setTransform(401.8,146.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFED3").s().p("AgaAbQgLgMAAgPQAAgPALgLQALgLAPAAQAPAAAMALQAMALgBAPQABAPgMAMQgMALgPAAQgPAAgLgLg");
	this.shape_19.setTransform(408.7,35.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFED3").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAKgKAMAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape_20.setTransform(476.6,103);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFED3").s().p("AgOAPQgIgGABgJQgBgIAIgGQAGgIAIABQAJgBAGAIQAIAGAAAIQAAAJgIAGQgGAIgJgBQgIABgGgIg");
	this.shape_21.setTransform(505.7,82);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFED3").s().p("AgYAZQgLgLABgOQgBgNALgLQAKgKAOAAQAOAAALAKQALALAAANQAAAOgLALQgLAKgOAAQgOAAgKgKg");
	this.shape_22.setTransform(552.7,62.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFED3").s().p("AgbAcQgMgLAAgRQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMg");
	this.shape_23.setTransform(595.2,132.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFED3").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAJAAAHAHQAHAHAAAIQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_24.setTransform(634.6,100.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFED3").s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_25.setTransform(663.7,170.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFED3").s().p("AgMANQgGgFAAgIQAAgGAGgGQAGgGAGAAQAIAAAFAGQAGAGAAAGQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_26.setTransform(685.6,211.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFED3").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAJQgJAKgNAAQgMAAgJgKg");
	this.shape_27.setTransform(796.1,162.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFED3").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_28.setTransform(737.5,224.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFED3").s().p("AgMANQgFgFAAgIQAAgGAFgGQAGgFAGgBQAHABAGAFQAFAGAAAGQAAAIgFAFQgGAGgHgBQgGABgGgGg");
	this.shape_29.setTransform(779.6,253.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFED3").s().p("AgcAdQgMgMABgRQgBgQAMgMQANgMAPAAQARAAAMAMQALAMABAQQgBAQgLANQgMAMgRAAQgPAAgNgMg");
	this.shape_30.setTransform(692.9,258.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFED3").s().p("AgXAYQgKgKAAgOQAAgMAKgLQAKgKANAAQAOAAAKAKQAKALAAAMQAAAOgKAKQgLAKgNAAQgNAAgKgKg");
	this.shape_31.setTransform(694.1,306.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFED3").s().p("AgOAPQgHgHAAgIQAAgIAHgGQAGgGAIAAQAJAAAGAGQAHAGgBAIQABAIgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_32.setTransform(674.5,317.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFED3").s().p("AgLAMQgFgFgBgHQABgGAFgFQAFgGAGABQAHgBAGAGQAEAFAAAGQAAAHgEAFQgGAFgHABQgGgBgFgFg");
	this.shape_33.setTransform(658,407.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFED3").s().p("AgZAaQgMgLAAgPQAAgOAMgLQAKgLAPAAQAQAAALALQAKALABAOQgBAPgKALQgLALgQAAQgOAAgLgLg");
	this.shape_34.setTransform(606.8,409.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFED3").s().p("AgeAfQgNgNABgSQgBgRANgNQANgNARAAQASAAAMANQAOANAAARQAAASgOANQgMANgSAAQgRAAgNgNg");
	this.shape_35.setTransform(545.6,449);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFED3").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_36.setTransform(487.7,385.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFED3").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAJAAAJQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_37.setTransform(455.9,431.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFED3").s().p("AgTAUQgIgIAAgMQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_38.setTransform(421.8,378.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFED3").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_39.setTransform(378.8,312.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFED3").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_40.setTransform(351.5,394.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFED3").s().p("AgcAdQgMgMAAgRQAAgPAMgNQAMgMAQAAQARAAAMAMQAMANAAAPQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_41.setTransform(271.5,380.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFED3").s().p("AgWAXQgKgJAAgOQAAgMAKgKQAJgLANABQANgBAKALQALAKgBAMQABAOgLAJQgKAKgNAAQgNAAgJgKg");
	this.shape_42.setTransform(315.4,456.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFED3").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQAMAAAIAIQAIAJAAAKQAAALgIAJQgIAIgMAAQgKAAgJgIg");
	this.shape_43.setTransform(362.4,466);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFED3").s().p("AgRATQgJgIAAgLQAAgKAJgHQAHgJAKABQALgBAHAJQAJAHAAAKQAAALgJAIQgHAHgLABQgKgBgHgHg");
	this.shape_44.setTransform(266.4,556.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFED3").s().p("AgeAfQgNgNAAgSQAAgRANgMQANgOARAAQASAAANAOQANAMAAARQAAASgNANQgNANgSgBQgRABgNgNg");
	this.shape_45.setTransform(408.9,599.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFED3").s().p("AgLANQgGgGAAgHQAAgGAGgGQAFgFAGAAQAIAAAFAFQAFAGAAAGQAAAHgFAGQgFAFgIAAQgGAAgFgFg");
	this.shape_46.setTransform(409.6,654.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFED3").s().p("AgOAPQgHgGAAgJQAAgIAHgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_47.setTransform(302.8,676.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFED3").s().p("AgZAbQgMgMAAgPQAAgOAMgLQALgLAOAAQAQAAALALQALALAAAOQAAAPgLAMQgLALgQgBQgOABgLgLg");
	this.shape_48.setTransform(288.6,731.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFED3").s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_49.setTransform(237,736.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFED3").s().p("AgWAXQgKgKAAgNQAAgNAKgJQAKgKAMAAQAOAAAJAKQAKAJAAANQAAANgKAKQgJAKgOAAQgMAAgKgKg");
	this.shape_50.setTransform(245.3,774);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFED3").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQAMAMAAAPQAAAQgMAMQgLAMgRAAQgPAAgMgMg");
	this.shape_51.setTransform(207.9,799.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFED3").s().p("AgYAZQgLgKAAgPQAAgOALgLQAKgKAOgBQAPABALAKQAKALAAAOQAAAPgKAKQgLALgPAAQgOAAgKgLg");
	this.shape_52.setTransform(166.1,790.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFED3").s().p("AgdAeQgMgNAAgRQAAgQAMgNQAMgMARAAQARAAANAMQAMANAAAQQAAARgMANQgNAMgRAAQgRAAgMgMg");
	this.shape_53.setTransform(139.8,804.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFED3").s().p("AgcAdQgMgNAAgQQAAgPAMgNQAMgMAQAAQARAAAMAMQAMANAAAPQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_54.setTransform(102.2,794.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFED3").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAAKAKQAKAKAAAMQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape_55.setTransform(3.3,811.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFED3").s().p("AgaAbQgLgMAAgPQAAgOALgLQAMgLAOAAQAPAAALALQALALAAAOQAAAPgLAMQgLALgPAAQgOAAgMgLg");
	this.shape_56.setTransform(11,743.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFED3").s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQAQAAAMAMQAMAMAAAPQAAAQgMAMQgMAMgQAAQgPAAgMgMg");
	this.shape_57.setTransform(29.8,693.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFED3").s().p("AgVAWQgJgKAAgMQAAgLAJgKQAJgKAMAAQAMAAAKAKQAJAKAAALQAAAMgJAKQgKAKgMgBQgMABgJgKg");
	this.shape_58.setTransform(56.6,661);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFED3").s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_59.setTransform(93.8,640.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFED3").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_60.setTransform(124.3,655.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFED3").s().p("AgPAQQgHgHAAgJQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_61.setTransform(165.7,664);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFED3").s().p("AgXAYQgLgKABgOQgBgNALgLQAKgJANgBQAOABAKAJQALALAAANQAAAOgLAKQgKAKgOAAQgNAAgKgKg");
	this.shape_62.setTransform(218,589.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFED3").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_63.setTransform(273.2,625.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFED3").s().p("AgaAbQgMgLAAgQQAAgOAMgMQALgMAPAAQAQAAALAMQAMAMAAAOQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_64.setTransform(302.6,592);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFED3").s().p("AgVAWQgKgJAAgNQAAgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg");
	this.shape_65.setTransform(358.9,593.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFED3").s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_66.setTransform(401.9,543.1);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFED3").s().p("AgLAMQgGgFAAgHQAAgGAGgFQAFgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAFQgGAGgHAAQgGAAgFgGg");
	this.shape_67.setTransform(444.1,565.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFED3").s().p("AgUAVQgIgJAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_68.setTransform(503,654.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFED3").s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_69.setTransform(551.8,596.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFED3").s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_70.setTransform(595.7,674);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFED3").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAKQgJAJgNAAQgMAAgKgJg");
	this.shape_71.setTransform(679.3,529.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFED3").s().p("AgcAdQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAANANQAMAMAAAQQAAARgMAMQgNANgRAAQgQAAgMgNg");
	this.shape_72.setTransform(660.5,670.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFED3").s().p("AgXAYQgKgKAAgOQAAgMAKgLQALgKAMAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_73.setTransform(733.6,631.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFED3").s().p("AgSATQgJgIAAgLQAAgKAJgJQAIgIAKAAQALAAAJAIQAIAJAAAKQAAALgIAIQgJAJgLAAQgKAAgIgJg");
	this.shape_74.setTransform(767,681.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFED3").s().p("AgMANQgGgFAAgIQAAgHAGgFQAGgGAGAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgGAAgGgGg");
	this.shape_75.setTransform(814.8,681.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFED3").s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAJAKQAKAJAAAMQAAANgKAKQgJAJgNAAQgMAAgKgJg");
	this.shape_76.setTransform(887.9,638.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFED3").s().p("AgRASQgIgIAAgKQAAgJAIgIQAIgIAJAAQALAAAHAIQAIAIAAAJQAAAKgIAIQgHAIgLAAQgJAAgIgIg");
	this.shape_77.setTransform(902.7,764.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFED3").s().p("AgOAPQgGgHAAgIQAAgHAGgGQAHgHAHAAQAIAAAHAHQAGAGAAAHQAAAIgGAHQgHAGgIAAQgHAAgHgGg");
	this.shape_78.setTransform(961.6,655.8);

	this.addChild(this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,963.7,814.5);


(lib.explodepart3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag1A7QgEgOAOgFQAggMASgXQAXgYgGgfQgDgOAPgEQAOgEADAOQAJAsgdAiQgaAggrAQIgHACQgHAAgDgLg");
	this.shape.setTransform(49.1,48);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCA1QgGgXABgUQgRAPgNAPQgJALgLgKQgLgLAKgLQAcgfArgfQAMgMAUgHQAMgEAFAMQAFANgLAGIgZAQQgSAUAMAtQAEAOgPAEIgFAAQgJAAgCgLg");
	this.shape_1.setTransform(45.9,35.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAABNQhCgRgjgsQgWgagKgoQgNgxAsARQANAFgDAOQgDAMgJgBQAHAYAGAJQAZAiAmASQBCAfBUgJQAPgCAAAPQAAAPgPACQgUADgUAAQgqAAgogLg");
	this.shape_2.setTransform(13.8,46.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhqBmQgEgOAPgCQBDgNA+gzQBOg8g/gvQgMgJAIgMQAHgNAMAIQBUA+hQBOQgfAggtAYQgsAYgkAFIgDABQgLAAgEgNg");
	this.shape_3.setTransform(57.3,38.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhpADIgWgMQgOgKAAgLQAAgVAiAFQAPACgEAPIgBADIAsAZQApASAuABQAtABAtgRQANgDAEAMQAEAPgOAFQgsARgsAAQhIAAhMgtg");
	this.shape_4.setTransform(28.2,51.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFB3QgJgLAJgJQAfgbAKgmQALglgPgmQgNgkgagMQgagOgdAZQgLAKgKgLQgLgLALgJQAkggAoAKQAoAJAVAtQAWAzgJAwQgKA0gpAkQgFAFgFAAQgGAAgFgGg");
	this.shape_5.setTransform(51.4,24.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag+BSQgogYABg0QACgvAiggQATgQAWgEQAXgEATAKQAdAOAXAkQAPAZAQAnQACAGgEAFQgDAGgGABQgGACgFgDQgFgDgCgGQgKgagLgSIgLgSIgDgEIgBgCQgBgBABACIgGgHQgEgFgGgGIgHgFIgLgGIgCgBIgIgDIgBAAIgIABIgDAAIgIACIgBABIgJAFIgCACIABgCIgBACIgJAIIgDAEIgBABQgGAIgFAKIgGAWIgBABIABAAIgBAIIAAALIAEAOIABACIAAAAIAFAIIABABIAHAHQADADgDgDIALAHIACABIABAAIATAFIAAAAIACAAIAAABIACAAQAdACAogKQAOgEAEAOQADAPgOADQglAKgbAAQgiAAgYgNg");
	this.shape_6.setTransform(14.3,39.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiqC7Qhhg5AmhtQAghaBbg/QAxghAygOQA5gRAxAPQBpAhAkCUQAEAOgPAEQgOAEgDgOQgjiOhdgUQgqgJgtAOQgpALgoAcQhPA2giBKQgpBeBUAxQAMAHgHANQgGAIgGAAQgEAAgFgCg");
	this.shape_7.setTransform(28.4,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3E3E3").s().p("AiGEKIhQgQQgQgDgQgMQgMgJgHgLQgHgMgegaQgXgTgBgSQABgMAFgGQALgKAegEQABgTAOgSQANgSAAgBIgMgeQgMgaAAgcQAAgeAagbQAsgsATggQAOgWAIgLQARgVAVgPQADgCAXgHIAkgMQAwgSATgDQAlgGAdAVQAZAVAuAwQAlAoAfAVQAlAZAKAnQAGAZgEArQA0gBANAcQAFAJAAAcQAAAigcAeQgeAhhAAXQgZAJgVATQgXAUgOAKQgxAkhsAAQgdAAhGgNg");
	this.shape_8.setTransform(33.6,27.9);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,68.1,56.5);


(lib.explodepart2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgtBNQgIgNANgGQAmgTAPggQAUgjghgbQgLgIAIgNQAFgNAMAJQAwAlgSAzQgQAxg0AaQgFACgDAAQgIAAgFgIg");
	this.shape.setTransform(45.1,37.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgzBiQg/gBgvgRQgOgFAEgPQAEgOANAFQAoAOA2ADQA8ADAugMQB7ggghhqQgEgOAOgDQAPgEAEAOQAnB8iIAsQgyAQg6AAIgLAAg");
	this.shape_1.setTransform(40.7,36.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgdA3QhagjgThKQgDgOAOgEQAOgDAEAOQAQA9BOAcQBFAaBDgSQAOgDAEAOQADAOgOAEQgfAIghAAQgvAAgugSg");
	this.shape_2.setTransform(28.3,45.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhcByQgEgPAOgEQBGgWAyg/QA9hHhTghQgNgFAEgPQADgOAOAFQBtArg+BcQgYAkgrAhQgoAfgmAMIgGABQgJAAgDgLg");
	this.shape_3.setTransform(42.7,28);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiAgQgigdALguQAEgOAOAEQAPAEgEAOQgIAhAaAPQAVAOAjgDQAOgBAAAPQAAAPgOABIgOABQgmAAgcgXg");
	this.shape_4.setTransform(13.2,40.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAeQgpgGgpgaQgLgIAHgNQAIgMAMAIQAdAUAfAHQAqALAPgXQAIgMANAHQANAIgIAKQgTAfgoAAIgSgCg");
	this.shape_5.setTransform(10.8,35.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABTBzQgNgHAHgNQAcg7gMguQgNg3g+gQQgmgKgkAJQgvAMAJApQADAOgOAEQgPADgDgOQgNg7A6gYQAygVA2AQQBMAWATBDQARA7gkBIQgEAIgGAAQgEAAgFgDg");
	this.shape_6.setTransform(38.8,12.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABhBbQgNhegugpQgmgjg1ASQg2ATAOA3QAEAOgOAEQgPAEgDgOQgPg4AvgoQAvgoA3AWQAxATAeA2QAZAqAIA9QADAOgPAEIgFABQgKAAgBgLg");
	this.shape_7.setTransform(19.6,10.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABHCHQgsgFgogjQgogigTguQgVguANgnQAPgrA2gUQAMgFAEAPQAEAOgMAFQgqAPgJAiQgHAfATAkQASAjAeAbQAhAbAgAEQAPABAAAPQAAAOgMAAIgDAAg");
	this.shape_8.setTransform(8.6,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F2F2F2").s().p("AhvC6Qg9giAAgQQAAgQAHgHQAGgHAjgXQhIhAgTgTQgagdAAgrQAAgSACgKQADgPAJgOQAFgIAcgMQAegNAJgKQALgMALgUQAMgPAmAAQA5ADAVAPQAJAIAQARQADgBAQgQQASgPAVgBIBlAAQAoAOANAxQAKAoAAAaQAAAJgEAYQgDAXAAAKQAAAQgGATQgHASAAAIQAAAFAHAiQAAAcgCAGQgCAHgQAkQgCAIgPAKQgTANgZAEQiUAWgNAAQgkAAg+gig");
	this.shape_9.setTransform(25.7,24.5);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,58.1,53.3);


(lib.explodepart1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgIASIgdgKQgPgFgHgBQgNACgFgLQgHgRASgBQANAAAPAFQAiALAOAEQAdAFAWgFQAOgEAEANQAEAOgOAEQgOAEgQAAQgWAAgZgIg");
	this.shape.setTransform(58.6,54.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXB4QgKgLAKgKQAogqACg+QABhGg4gTQgOgEAEgPQADgOAOAEQBKAYADBXQADBPg1A1QgFAFgFAAQgFAAgGgFg");
	this.shape_1.setTransform(64.6,43.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgKBNQgNgHAIgNQAPgcAAgdQgBgcgWgYQgKgLALgLQAKgKAKAKQAbAgADAoQADAlgXAmQgEAHgFAAQgEAAgFgDg");
	this.shape_2.setTransform(56.6,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AicgSQgIgNANgIQANgHAHAMQAqBEBZgLQBPgLA3g7QAKgLAKALQALALgKALQhABFheAJIgVAAQhYAAgshHg");
	this.shape_3.setTransform(36.7,58.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhgBYQgZg7AUgzQAXg6A+gNQA/gNAkArQAjApgIA/QgCAOgPAAQgPAAACgOQAGgwgWggQgYglgwAMQgwAMgRApQgRAmATAuQAGANgNAIQgFADgDAAQgHAAgDgJg");
	this.shape_4.setTransform(53.7,26.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhmCIQg9g2AnhVQAjhMBHgnQAfgSAfgDQAlgCAXAYQAhAhADA9QACAjgLBDQgCAOgOgEQgPgEADgOQAJg9gBgbQgCg7gdgXQgUgPgeAHQgXAGgXARQg2AlgaA1QggBDAwApQALAKgLALQgGAFgFAAQgFAAgGgEg");
	this.shape_5.setTransform(32.4,14);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgxCqQgjgXgVgoQgTglgGgsQgFguALgrQAMgwAggeQBIhDCCAeQAOADgEAPQgEAOgOgDQh6gbg3A9QgYAagJAmQgJAiAEAkQAKBTA3AkQA4AoBDg2QAMgJAKALQALAKgLAJQgnAfgmAJQgOADgMAAQgdAAgagSg");
	this.shape_6.setTransform(13.3,47.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AlCDlQgNgjAAg4QAEgkAAgRQAAgPARgJQARgLACgEIAJgeQAGgPALgGQAfgVB1AAIAZgBIACgBQgegogEgJQgCgFgBgiQAAhUAwg3QArgyA3gDQA6gDAdAxQAiA3gYBlQAFgDAOgRQAVgQAmAAQBjAAANAyQAIAagMAlQACAMAMASQAOAXACAJQAIAXAAAlQgBA1gFATQgSA/hCAAQgrAAgGgEQACgEgGgBIgYAAQgKAUgoASQgvAUg5AAQgdAAgbgJQgbgJgCAAQh7AygSAAQhTAAgchQg");
	this.shape_7.setTransform(33.9,33.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,69.4,65.9);


(lib.Energy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASBvIgdgFIACgLQAKADARAAIAAANgAAuBcQANgEALgMIAHAIQgMALgPAHgAhGBTIAGgJQAKAHAQAFIgDAKQgPgFgOgIgAhpAsIgCgLIAJgCIACAJQADAJAGAHIgHAHQgIgLgDgIgABXA1QAHgOAEgNIAJADQgFAPgHANgAhuACQABgOADgQIAKADQgDAOgBANgABhgdIAJgDQAFAPAAAQIgKAAQAAgPgEgNgAheg5IAHgKQAEgFAKgJIAGAHIgMAOIgGAIgAA/hMIAHgHQANALAHAMIgIAGQgEgIgPgOgAguhiQAPgHAOgEIACALQgNACgOAHgAAMhlIABgJQARABAOAHIgFAJQgLgGgQgCg");
	this.shape.setTransform(0,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1).p("AgWABQAFgDARACQAVABACAA");
	this.shape_1.setTransform(-0.6,-1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1).p("AAfg5QABgDgVABQgWABgEAAQAAAAgZAAQACAOAAAyQAAAFgBAPQgBAOACAGQAIAQAegDQAlgDAGAC");
	this.shape_2.setTransform(0,-0.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("Ah4AyQANAnA4AWQAzATApgIQAhgGAYggQAVgcAGgkQALhDhDg2QglgegyAKQgzAJgeAmQgTAYgGAlQgFAiAJAdg");
	this.shape_3.setTransform(0,-0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEF381").s().p("AgzBvQg4gWgNgnQgJgdAFgiQAGglATgYQAegmAzgJQAygKAlAeQBDA2gLBDQgGAkgVAcQgYAgghAGQgMADgNAAQgfAAgkgOg");
	this.shape_4.setTransform(0,-0.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("ADNAAQAAAJggAOQghANgDAIQgCAJASAeQASAdgGAIQgFAIgigIQgigIgHAFQgHAFgDAkQgDAigJADQgJADgWgaQgYgbgIAAQgIAAgXAbQgWAagJgDQgJgDgDgiQgDgkgHgFQgHgFgjAIQghAIgGgIQgFgIARgdQATgegDgJQgCgIghgNQgggOAAgJQAAgIAggNQAhgOACgIQADgJgTgeQgRgdAFgIQAGgIAhAIQAjAIAHgFQAHgFADgkQADgiAJgDQAJgDAWAaQAXAbAIAAQAIAAAYgbQAWgaAJADQAJADADAiQADAkAHAFQAHAFAigIQAigIAFAIQAGAIgSAdQgSAeACAJQADAIAhAOQAgANAAAIg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAE4").s().p("AAgCsQgYgbgIAAQgIAAgXAbQgWAagJgDQgJgDgDgiQgDgkgHgFQgHgFgjAIQghAIgGgIQgFgIARgdQATgegDgJQgCgIghgNQgggOAAgJQAAgIAggNQAhgOACgIQADgJgTgeQgRgdAFgIQAGgIAhAIQAjAIAHgFQAHgFADgkQADgiAJgDQAJgDAWAaQAXAbAIAAQAIAAAYgbQAWgaAJADQAJADADAiQADAkAHAFQAHAFAigIQAigIAFAIQAGAIgSAdQgSAeACAJQADAIAhAOQAgANAAAIQAAAJggAOQghANgDAIQgCAJASAeQASAdgGAIQgFAIgigIQgigIgHAFQgHAFgDAkQgDAigJADIgCAAQgKAAgTgXg");

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-22.1,-20.8,44.3,41.7);


(lib.Bullet = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFABIABgCIAKABIgBACg");
	this.shape.setTransform(-0.8,-24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQC3IgQgEIgBAAIgBAAIAAgBIgBAAIgUgLIgHgHIgOgOIAAgBIgBgBIgDgGIgDgNIAAgGIAAgYIAFgiIAEgRIAEgRIAJggIA8iyIA1CDIAIAUIARA8IAHAqIAAAsIgDAMQgBAHgCAEQgDAIgGAMIgBABIgIAIIgSALIgUAGIgXABgAhBBxIAAAKIABAEIADAIIALAMIAHAFIAGAFIALAFIAMADIAJABIAYgBIAQgEIAAAAIAHgEIAHgEIAEgFIAIgRQACgDADgQIACgUIgBgUIgHgpIgFgUIgFgSIgNgoIgNgnIgYg/Ig4DEIgDAQIgGAiIABAAg");
	this.shape_1.setTransform(-0.9,-8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F0A54E").s().p("AgSAGQgIgLADgeQAYAFAYAAIgHBCQgSgHgSgXg");
	this.shape_2.setTransform(-5.9,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCC054").s().p("AADghIAAAAQgBAbgEAog");
	this.shape_3.setTransform(-3.7,5.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEE258").s().p("AgYAAIAxgCIAAABIgBAEQgYAAgYgDg");
	this.shape_4.setTransform(-5.9,1.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FCC054").s().p("AgIBgIAEhUQAEguAFgjIAEgaIgRC/g");
	this.shape_5.setTransform(-2.4,-8.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE258").s().p("AAjiDIABAEIACAIIgLBUQgHAjgEAuIgEBUIgxACQAIhMBAi7g");
	this.shape_6.setTransform(-4.6,-11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCC054").s().p("AgCghIAAgBIACAgQACAQABAVg");
	this.shape_7.setTransform(-0.4,-20.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FCC054").s().p("AgEhCQAEgdAAgcIAIBGQADA4AEARQAEAWACAvQAAAPADATIgvACg");
	this.shape_8.setTransform(-0.8,-11.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCC054").s().p("AgYAAIAAgBIAwgCIABAGIgxABg");
	this.shape_9.setTransform(-0.8,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FCC054").s().p("AAGBZQgEgUAAgPQgCgugCgUQgDgSgEg6IATCxg");
	this.shape_10.setTransform(1,-7.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FCC054").s().p("AgBgDIACAAIABAGIgCABg");
	this.shape_11.setTransform(1.9,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCC054").s().p("AgDgSIADgBIADAng");
	this.shape_12.setTransform(2.2,3.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F69C4E").s().p("AghAfQAGgnABgbIAxgBIAIAnIAAAAIAEAcQgQAFgTABQgVgBgMgFg");
	this.shape_13.setTransform(-0.6,5.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC8D52").s().p("AgXgBIAvgCIgYAEIgWAEg");
	this.shape_14.setTransform(4.5,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#BC8D52").s().p("AgdgyQgBgVgCgRIgFghIABgEQBKCpAABRIguACg");
	this.shape_15.setTransform(3,-11.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C8804B").s().p("AgSALIAAAAIgEgnIAVgDIAYgHQAAAjgQAZQgHAMgOAFIgEgcg");
	this.shape_16.setTransform(4.5,4.8);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.3,-26.7,17,37);


(lib.Board = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgAEA4GIAAgfIAIAAIAAAfgEgAEA2DIAAgdIAIAAIAAAdgEgAEA0CIAAgeIAIAAIAAAegEgAEAx/IAAgeIAIAAIAAAegEgAEAv+IAAgeIAIAAIAAAegEgAEAt8IAAgfIAIAAIAAAfgEgAEAr5IAAgdIAIAAIAAAdgEgAEAp4IAAgfIAIAAIAAAfgEgAEAn1IAAgdIAIAAIAAAdgEgAEAl0IAAgfIAIAAIAAAfgEgAEAjxIAAgdIAIAAIAAAdgEgAEAhwIAAgeIAIAAIAAAegAgEftIAAgeIAIAAIAAAegAgEdsIAAgeIAIAAIAAAegAgEbqIAAgfIAIAAIAAAfgAgEZnIAAgdIAIAAIAAAdgAgEXmIAAgfIAIAAIAAAfgAgEVjIAAgdIAIAAIAAAdgAgETiIAAgfIAIAAIAAAfgAgERfIAAgdIAIAAIAAAdgAgEPeIAAgeIAIAAIAAAegAgENbIAAgeIAIAAIAAAegAgELaIAAgeIAIAAIAAAegAgEJYIAAgfIAIAAIAAAfgAgEHVIAAgdIAIAAIAAAdgAgEFUIAAgfIAIAAIAAAfgAgEDRIAAgdIAIAAIAAAdgAgEBQIAAgfIAIAAIAAAfgAgEgxIAAgeIAIAAIAAAegAgEiyIAAgeIAIAAIAAAegAgEk1IAAgeIAIAAIAAAegAgEm3IAAgdIAIAAIAAAdgAgEo4IAAgfIAIAAIAAAfgAgEq7IAAgdIAIAAIAAAdgAgEs8IAAgfIAIAAIAAAfgAgEu/IAAgdIAIAAIAAAdgAgExAIAAgfIAIAAIAAAfgAgEzDIAAgeIAIAAIAAAegAgE1EIAAgeIAIAAIAAAegAgE3HIAAgeIAIAAIAAAegAgE5JIAAgdIAIAAIAAAdgAgE7KIAAgfIAIAAIAAAfgAgE9NIAAgdIAIAAIAAAdgAgE/OIAAgfIAIAAIAAAfgEgAEghRIAAgdIAIAAIAAAdgEgAEgjSIAAgfIAIAAIAAAfgEgAEglVIAAgeIAIAAIAAAegEgAEgnWIAAgeIAIAAIAAAegEgAEgpZIAAgeIAIAAIAAAegEgAEgrbIAAgdIAIAAIAAAdgEgAEgtcIAAgfIAIAAIAAAfgEgAEgvfIAAgdIAIAAIAAAdgEgAEgxgIAAgfIAIAAIAAAfgEgAEgzjIAAgdIAIAAIAAAdgEgAEg1kIAAgfIAIAAIAAAfgEgAEg3nIAAgeIAIAAIAAAeg");
	this.shape.setTransform(608,340.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgAEA4GIAAgfIAIAAIAAAfgEgAEA2DIAAgdIAIAAIAAAdgEgAEA0CIAAgeIAIAAIAAAegEgAEAx/IAAgeIAIAAIAAAegEgAEAv+IAAgeIAIAAIAAAegEgAEAt8IAAgfIAIAAIAAAfgEgAEAr5IAAgdIAIAAIAAAdgEgAEAp4IAAgfIAIAAIAAAfgEgAEAn1IAAgdIAIAAIAAAdgEgAEAl0IAAgfIAIAAIAAAfgEgAEAjxIAAgdIAIAAIAAAdgEgAEAhwIAAgeIAIAAIAAAegAgEftIAAgeIAIAAIAAAegAgEdsIAAgeIAIAAIAAAegAgEbqIAAgfIAIAAIAAAfgAgEZnIAAgdIAIAAIAAAdgAgEXmIAAgfIAIAAIAAAfgAgEVjIAAgdIAIAAIAAAdgAgETiIAAgfIAIAAIAAAfgAgERfIAAgdIAIAAIAAAdgAgEPeIAAgeIAIAAIAAAegAgENbIAAgeIAIAAIAAAegAgELaIAAgeIAIAAIAAAegAgEJYIAAgfIAIAAIAAAfgAgEHVIAAgdIAIAAIAAAdgAgEFUIAAgfIAIAAIAAAfgAgEDRIAAgdIAIAAIAAAdgAgEBQIAAgfIAIAAIAAAfgAgEgxIAAgeIAIAAIAAAegAgEiyIAAgeIAIAAIAAAegAgEk1IAAgeIAIAAIAAAegAgEm3IAAgdIAIAAIAAAdgAgEo4IAAgfIAIAAIAAAfgAgEq7IAAgdIAIAAIAAAdgAgEs8IAAgfIAIAAIAAAfgAgEu/IAAgdIAIAAIAAAdgAgExAIAAgfIAIAAIAAAfgAgEzDIAAgeIAIAAIAAAegAgE1EIAAgeIAIAAIAAAegAgE3HIAAgeIAIAAIAAAegAgE5JIAAgdIAIAAIAAAdgAgE7KIAAgfIAIAAIAAAfgAgE9NIAAgdIAIAAIAAAdgAgE/OIAAgfIAIAAIAAAfgEgAEghRIAAgdIAIAAIAAAdgEgAEgjSIAAgfIAIAAIAAAfgEgAEglVIAAgeIAIAAIAAAegEgAEgnWIAAgeIAIAAIAAAegEgAEgpZIAAgeIAIAAIAAAegEgAEgrbIAAgdIAIAAIAAAdgEgAEgtcIAAgfIAIAAIAAAfgEgAEgvfIAAgdIAIAAIAAAdgEgAEgxgIAAgfIAIAAIAAAfgEgAEgzjIAAgdIAIAAIAAAdgEgAEg1kIAAgfIAIAAIAAAfgEgAEg3nIAAgeIAIAAIAAAeg");
	this.shape_1.setTransform(521,340.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("EgADA4GIAAgfIAIAAIAAAfgEgADA2DIAAgdIAIAAIAAAdgEgADA0CIAAgeIAIAAIAAAegEgADAx/IAAgeIAIAAIAAAegEgADAv+IAAgeIAIAAIAAAegEgADAt8IAAgfIAIAAIAAAfgEgADAr5IAAgdIAIAAIAAAdgEgADAp4IAAgfIAIAAIAAAfgEgADAn1IAAgdIAIAAIAAAdgEgADAl0IAAgfIAIAAIAAAfgEgADAjxIAAgdIAIAAIAAAdgEgADAhwIAAgeIAIAAIAAAegAgDftIAAgeIAIAAIAAAegAgDdsIAAgeIAIAAIAAAegAgDbqIAAgfIAIAAIAAAfgAgDZnIAAgdIAIAAIAAAdgAgDXmIAAgfIAIAAIAAAfgAgDVjIAAgdIAIAAIAAAdgAgDTiIAAgfIAIAAIAAAfgAgDRfIAAgdIAIAAIAAAdgAgDPeIAAgeIAIAAIAAAegAgDNbIAAgeIAIAAIAAAegAgDLaIAAgeIAIAAIAAAegAgDJYIAAgfIAIAAIAAAfgAgDHVIAAgdIAIAAIAAAdgAgDFUIAAgfIAIAAIAAAfgAgDDRIAAgdIAIAAIAAAdgAgDBQIAAgfIAIAAIAAAfgAgDgxIAAgeIAIAAIAAAegAgDiyIAAgeIAIAAIAAAegAgDk1IAAgeIAIAAIAAAegAgDm3IAAgdIAIAAIAAAdgAgDo4IAAgfIAIAAIAAAfgAgDq7IAAgdIAIAAIAAAdgAgDs8IAAgfIAIAAIAAAfgAgDu/IAAgdIAIAAIAAAdgAgDxAIAAgfIAIAAIAAAfgAgDzDIAAgeIAIAAIAAAegAgD1EIAAgeIAIAAIAAAegAgD3HIAAgeIAIAAIAAAegAgD5JIAAgdIAIAAIAAAdgAgD7KIAAgfIAIAAIAAAfgAgD9NIAAgdIAIAAIAAAdgAgD/OIAAgfIAIAAIAAAfgEgADghRIAAgdIAIAAIAAAdgEgADgjSIAAgfIAIAAIAAAfgEgADglVIAAgeIAIAAIAAAegEgADgnWIAAgeIAIAAIAAAegEgADgpZIAAgeIAIAAIAAAegEgADgrbIAAgdIAIAAIAAAdgEgADgtcIAAgfIAIAAIAAAfgEgADgvfIAAgdIAIAAIAAAdgEgADgxgIAAgfIAIAAIAAAfgEgADgzjIAAgdIAIAAIAAAdgEgADg1kIAAgfIAIAAIAAAfgEgADg3nIAAgeIAIAAIAAAeg");
	this.shape_2.setTransform(434,340.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("EgAEA4GIAAgfIAIAAIAAAfgEgAEA2DIAAgdIAIAAIAAAdgEgAEA0CIAAgeIAIAAIAAAegEgAEAx/IAAgeIAIAAIAAAegEgAEAv+IAAgeIAIAAIAAAegEgAEAt8IAAgfIAIAAIAAAfgEgAEAr5IAAgdIAIAAIAAAdgEgAEAp4IAAgfIAIAAIAAAfgEgAEAn1IAAgdIAIAAIAAAdgEgAEAl0IAAgfIAIAAIAAAfgEgAEAjxIAAgdIAIAAIAAAdgEgAEAhwIAAgeIAIAAIAAAegAgEftIAAgeIAIAAIAAAegAgEdsIAAgeIAIAAIAAAegAgEbqIAAgfIAIAAIAAAfgAgEZnIAAgdIAIAAIAAAdgAgEXmIAAgfIAIAAIAAAfgAgEVjIAAgdIAIAAIAAAdgAgETiIAAgfIAIAAIAAAfgAgERfIAAgdIAIAAIAAAdgAgEPeIAAgeIAIAAIAAAegAgENbIAAgeIAIAAIAAAegAgELaIAAgeIAIAAIAAAegAgEJYIAAgfIAIAAIAAAfgAgEHVIAAgdIAIAAIAAAdgAgEFUIAAgfIAIAAIAAAfgAgEDRIAAgdIAIAAIAAAdgAgEBQIAAgfIAIAAIAAAfgAgEgxIAAgeIAIAAIAAAegAgEiyIAAgeIAIAAIAAAegAgEk1IAAgeIAIAAIAAAegAgEm3IAAgdIAIAAIAAAdgAgEo4IAAgfIAIAAIAAAfgAgEq7IAAgdIAIAAIAAAdgAgEs8IAAgfIAIAAIAAAfgAgEu/IAAgdIAIAAIAAAdgAgExAIAAgfIAIAAIAAAfgAgEzDIAAgeIAIAAIAAAegAgE1EIAAgeIAIAAIAAAegAgE3HIAAgeIAIAAIAAAegAgE5JIAAgdIAIAAIAAAdgAgE7KIAAgfIAIAAIAAAfgAgE9NIAAgdIAIAAIAAAdgAgE/OIAAgfIAIAAIAAAfgEgAEghRIAAgdIAIAAIAAAdgEgAEgjSIAAgfIAIAAIAAAfgEgAEglVIAAgeIAIAAIAAAegEgAEgnWIAAgeIAIAAIAAAegEgAEgpZIAAgeIAIAAIAAAegEgAEgrbIAAgdIAIAAIAAAdgEgAEgtcIAAgfIAIAAIAAAfgEgAEgvfIAAgdIAIAAIAAAdgEgAEgxgIAAgfIAIAAIAAAfgEgAEgzjIAAgdIAIAAIAAAdgEgAEg1kIAAgfIAIAAIAAAfgEgAEg3nIAAgeIAIAAIAAAeg");
	this.shape_3.setTransform(347,340.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("EgAEA4GIAAgfIAJAAIAAAfgEgAEA2DIAAgdIAJAAIAAAdgEgAEA0CIAAgeIAJAAIAAAegEgAEAx/IAAgeIAJAAIAAAegEgAEAv+IAAgeIAJAAIAAAegEgAEAt8IAAgfIAJAAIAAAfgEgAEAr5IAAgdIAJAAIAAAdgEgAEAp4IAAgfIAJAAIAAAfgEgAEAn1IAAgdIAJAAIAAAdgEgAEAl0IAAgfIAJAAIAAAfgEgAEAjxIAAgdIAJAAIAAAdgEgAEAhwIAAgeIAJAAIAAAegAgEftIAAgeIAJAAIAAAegAgEdsIAAgeIAJAAIAAAegAgEbqIAAgfIAJAAIAAAfgAgEZnIAAgdIAJAAIAAAdgAgEXmIAAgfIAJAAIAAAfgAgEVjIAAgdIAJAAIAAAdgAgETiIAAgfIAJAAIAAAfgAgERfIAAgdIAJAAIAAAdgAgEPeIAAgeIAJAAIAAAegAgENbIAAgeIAJAAIAAAegAgELaIAAgeIAJAAIAAAegAgEJYIAAgfIAJAAIAAAfgAgEHVIAAgdIAJAAIAAAdgAgEFUIAAgfIAJAAIAAAfgAgEDRIAAgdIAJAAIAAAdgAgEBQIAAgfIAJAAIAAAfgAgEgxIAAgeIAJAAIAAAegAgEiyIAAgeIAJAAIAAAegAgEk1IAAgeIAJAAIAAAegAgEm3IAAgdIAJAAIAAAdgAgEo4IAAgfIAJAAIAAAfgAgEq7IAAgdIAJAAIAAAdgAgEs8IAAgfIAJAAIAAAfgAgEu/IAAgdIAJAAIAAAdgAgExAIAAgfIAJAAIAAAfgAgEzDIAAgeIAJAAIAAAegAgE1EIAAgeIAJAAIAAAegAgE3HIAAgeIAJAAIAAAegAgE5JIAAgdIAJAAIAAAdgAgE7KIAAgfIAJAAIAAAfgAgE9NIAAgdIAJAAIAAAdgAgE/OIAAgfIAJAAIAAAfgEgAEghRIAAgdIAJAAIAAAdgEgAEgjSIAAgfIAJAAIAAAfgEgAEglVIAAgeIAJAAIAAAegEgAEgnWIAAgeIAJAAIAAAegEgAEgpZIAAgeIAJAAIAAAegEgAEgrbIAAgdIAJAAIAAAdgEgAEgtcIAAgfIAJAAIAAAfgEgAEgvfIAAgdIAJAAIAAAdgEgAEgxgIAAgfIAJAAIAAAfgEgAEgzjIAAgdIAJAAIAAAdgEgAEg1kIAAgfIAJAAIAAAfgEgAEg3nIAAgeIAJAAIAAAeg");
	this.shape_4.setTransform(261,340.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgADA4GIAAgfIAIAAIAAAfgEgADA2DIAAgdIAIAAIAAAdgEgADA0CIAAgeIAIAAIAAAegEgADAx/IAAgeIAIAAIAAAegEgADAv+IAAgeIAIAAIAAAegEgADAt8IAAgfIAIAAIAAAfgEgADAr5IAAgdIAIAAIAAAdgEgADAp4IAAgfIAIAAIAAAfgEgADAn1IAAgdIAIAAIAAAdgEgADAl0IAAgfIAIAAIAAAfgEgADAjxIAAgdIAIAAIAAAdgEgADAhwIAAgeIAIAAIAAAegAgDftIAAgeIAIAAIAAAegAgDdsIAAgeIAIAAIAAAegAgDbqIAAgfIAIAAIAAAfgAgDZnIAAgdIAIAAIAAAdgAgDXmIAAgfIAIAAIAAAfgAgDVjIAAgdIAIAAIAAAdgAgDTiIAAgfIAIAAIAAAfgAgDRfIAAgdIAIAAIAAAdgAgDPeIAAgeIAIAAIAAAegAgDNbIAAgeIAIAAIAAAegAgDLaIAAgeIAIAAIAAAegAgDJYIAAgfIAIAAIAAAfgAgDHVIAAgdIAIAAIAAAdgAgDFUIAAgfIAIAAIAAAfgAgDDRIAAgdIAIAAIAAAdgAgDBQIAAgfIAIAAIAAAfgAgDgxIAAgeIAIAAIAAAegAgDiyIAAgeIAIAAIAAAegAgDk1IAAgeIAIAAIAAAegAgDm3IAAgdIAIAAIAAAdgAgDo4IAAgfIAIAAIAAAfgAgDq7IAAgdIAIAAIAAAdgAgDs8IAAgfIAIAAIAAAfgAgDu/IAAgdIAIAAIAAAdgAgDxAIAAgfIAIAAIAAAfgAgDzDIAAgeIAIAAIAAAegAgD1EIAAgeIAIAAIAAAegAgD3HIAAgeIAIAAIAAAegAgD5JIAAgdIAIAAIAAAdgAgD7KIAAgfIAIAAIAAAfgAgD9NIAAgdIAIAAIAAAdgAgD/OIAAgfIAIAAIAAAfgEgADghRIAAgdIAIAAIAAAdgEgADgjSIAAgfIAIAAIAAAfgEgADglVIAAgeIAIAAIAAAegEgADgnWIAAgeIAIAAIAAAegEgADgpZIAAgeIAIAAIAAAegEgADgrbIAAgdIAIAAIAAAdgEgADgtcIAAgfIAIAAIAAAfgEgADgvfIAAgdIAIAAIAAAdgEgADgxgIAAgfIAIAAIAAAfgEgADgzjIAAgdIAIAAIAAAdgEgADg1kIAAgfIAIAAIAAAfgEgADg3nIAAgeIAIAAIAAAeg");
	this.shape_5.setTransform(174,340.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgAEA4GIAAgfIAIAAIAAAfgEgAEA2DIAAgdIAIAAIAAAdgEgAEA0CIAAgeIAIAAIAAAegEgAEAx/IAAgeIAIAAIAAAegEgAEAv+IAAgeIAIAAIAAAegEgAEAt8IAAgfIAIAAIAAAfgEgAEAr5IAAgdIAIAAIAAAdgEgAEAp4IAAgfIAIAAIAAAfgEgAEAn1IAAgdIAIAAIAAAdgEgAEAl0IAAgfIAIAAIAAAfgEgAEAjxIAAgdIAIAAIAAAdgEgAEAhwIAAgeIAIAAIAAAegAgEftIAAgeIAIAAIAAAegAgEdsIAAgeIAIAAIAAAegAgEbqIAAgfIAIAAIAAAfgAgEZnIAAgdIAIAAIAAAdgAgEXmIAAgfIAIAAIAAAfgAgEVjIAAgdIAIAAIAAAdgAgETiIAAgfIAIAAIAAAfgAgERfIAAgdIAIAAIAAAdgAgEPeIAAgeIAIAAIAAAegAgENbIAAgeIAIAAIAAAegAgELaIAAgeIAIAAIAAAegAgEJYIAAgfIAIAAIAAAfgAgEHVIAAgdIAIAAIAAAdgAgEFUIAAgfIAIAAIAAAfgAgEDRIAAgdIAIAAIAAAdgAgEBQIAAgfIAIAAIAAAfgAgEgxIAAgeIAIAAIAAAegAgEiyIAAgeIAIAAIAAAegAgEk1IAAgeIAIAAIAAAegAgEm3IAAgdIAIAAIAAAdgAgEo4IAAgfIAIAAIAAAfgAgEq7IAAgdIAIAAIAAAdgAgEs8IAAgfIAIAAIAAAfgAgEu/IAAgdIAIAAIAAAdgAgExAIAAgfIAIAAIAAAfgAgEzDIAAgeIAIAAIAAAegAgE1EIAAgeIAIAAIAAAegAgE3HIAAgeIAIAAIAAAegAgE5JIAAgdIAIAAIAAAdgAgE7KIAAgfIAIAAIAAAfgAgE9NIAAgdIAIAAIAAAdgAgE/OIAAgfIAIAAIAAAfgEgAEghRIAAgdIAIAAIAAAdgEgAEgjSIAAgfIAIAAIAAAfgEgAEglVIAAgeIAIAAIAAAegEgAEgnWIAAgeIAIAAIAAAegEgAEgpZIAAgeIAIAAIAAAegEgAEgrbIAAgdIAIAAIAAAdgEgAEgtcIAAgfIAIAAIAAAfgEgAEgvfIAAgdIAIAAIAAAdgEgAEgxgIAAgfIAIAAIAAAfgEgAEgzjIAAgdIAIAAIAAAdgEgAEg1kIAAgfIAIAAIAAAfgEgAEg3nIAAgeIAIAAIAAAeg");
	this.shape_6.setTransform(87,340.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("EgAEA4GIAAgfIAJAAIAAAfgEgAEA2DIAAgdIAJAAIAAAdgEgAEA0CIAAgeIAJAAIAAAegEgAEAx/IAAgeIAJAAIAAAegEgAEAv+IAAgeIAJAAIAAAegEgAEAt8IAAgfIAJAAIAAAfgEgAEAr5IAAgdIAJAAIAAAdgEgAEAp4IAAgfIAJAAIAAAfgEgAEAn1IAAgdIAJAAIAAAdgEgAEAl0IAAgfIAJAAIAAAfgEgAEAjxIAAgdIAJAAIAAAdgEgAEAhwIAAgeIAJAAIAAAegAgEftIAAgeIAJAAIAAAegAgEdsIAAgeIAJAAIAAAegAgEbqIAAgfIAJAAIAAAfgAgEZnIAAgdIAJAAIAAAdgAgEXmIAAgfIAJAAIAAAfgAgEVjIAAgdIAJAAIAAAdgAgETiIAAgfIAJAAIAAAfgAgERfIAAgdIAJAAIAAAdgAgEPeIAAgeIAJAAIAAAegAgENbIAAgeIAJAAIAAAegAgELaIAAgeIAJAAIAAAegAgEJYIAAgfIAJAAIAAAfgAgEHVIAAgdIAJAAIAAAdgAgEFUIAAgfIAJAAIAAAfgAgEDRIAAgdIAJAAIAAAdgAgEBQIAAgfIAJAAIAAAfgAgEgxIAAgeIAJAAIAAAegAgEiyIAAgeIAJAAIAAAegAgEk1IAAgeIAJAAIAAAegAgEm3IAAgdIAJAAIAAAdgAgEo4IAAgfIAJAAIAAAfgAgEq7IAAgdIAJAAIAAAdgAgEs8IAAgfIAJAAIAAAfgAgEu/IAAgdIAJAAIAAAdgAgExAIAAgfIAJAAIAAAfgAgEzDIAAgeIAJAAIAAAegAgE1EIAAgeIAJAAIAAAegAgE3HIAAgeIAJAAIAAAegAgE5JIAAgdIAJAAIAAAdgAgE7KIAAgfIAJAAIAAAfgAgE9NIAAgdIAJAAIAAAdgAgE/OIAAgfIAJAAIAAAfgEgAEghRIAAgdIAJAAIAAAdgEgAEgjSIAAgfIAJAAIAAAfgEgAEglVIAAgeIAJAAIAAAegEgAEgnWIAAgeIAJAAIAAAegEgAEgpZIAAgeIAJAAIAAAegEgAEgrbIAAgdIAJAAIAAAdgEgAEgtcIAAgfIAJAAIAAAfgEgAEgvfIAAgdIAJAAIAAAdgEgAEgxgIAAgfIAJAAIAAAfgEgAEgzjIAAgdIAJAAIAAAdgEgAEg1kIAAgfIAJAAIAAAfgEgAEg3nIAAgeIAJAAIAAAeg");
	this.shape_7.setTransform(0,340.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("EAyiAAEIAAgIIAfAAIAAAIgEAwhAAEIAAgIIAdAAIAAAIgEAueAAEIAAgIIAfAAIAAAIgEAsdAAEIAAgIIAdAAIAAAIgEAqaAAEIAAgIIAfAAIAAAIgEAoZAAEIAAgIIAdAAIAAAIgEAmXAAEIAAgIIAeAAIAAAIgEAkUAAEIAAgIIAeAAIAAAIgEAiTAAEIAAgIIAeAAIAAAIgEAgQAAEIAAgIIAfAAIAAAIgAePAEIAAgIIAdAAIAAAIgAcMAEIAAgIIAfAAIAAAIgAaLAEIAAgIIAdAAIAAAIgAYIAEIAAgIIAfAAIAAAIgAWHAEIAAgIIAdAAIAAAIgAUFAEIAAgIIAeAAIAAAIgASCAEIAAgIIAeAAIAAAIgAQBAEIAAgIIAeAAIAAAIgAN+AEIAAgIIAfAAIAAAIgAL9AEIAAgIIAdAAIAAAIgAJ6AEIAAgIIAfAAIAAAIgAH5AEIAAgIIAdAAIAAAIgAF2AEIAAgIIAfAAIAAAIgAD1AEIAAgIIAdAAIAAAIgABzAEIAAgIIAeAAIAAAIgAgOAEIAAgIIAcAAIAAAIgAiPAEIAAgIIAdAAIAAAIgAkSAEIAAgIIAfAAIAAAIgAmTAEIAAgIIAdAAIAAAIgAoWAEIAAgIIAfAAIAAAIgAqXAEIAAgIIAdAAIAAAIgAsaAEIAAgIIAfAAIAAAIgAucAEIAAgIIAeAAIAAAIgAwdAEIAAgIIAeAAIAAAIgAygAEIAAgIIAeAAIAAAIgA0hAEIAAgIIAdAAIAAAIgA2kAEIAAgIIAfAAIAAAIgA4lAEIAAgIIAdAAIAAAIgA6oAEIAAgIIAfAAIAAAIgA8pAEIAAgIIAdAAIAAAIgA+sAEIAAgIIAfAAIAAAIgEgguAAEIAAgIIAeAAIAAAIgEgivAAEIAAgIIAeAAIAAAIgEgkyAAEIAAgIIAeAAIAAAIgEgmzAAEIAAgIIAdAAIAAAIgEgo2AAEIAAgIIAfAAIAAAIgEgq3AAEIAAgIIAdAAIAAAIgEgs6AAEIAAgIIAfAAIAAAIgEgu7AAEIAAgIIAdAAIAAAIgEgw+AAEIAAgIIAfAAIAAAIgEgzAAAEIAAgIIAeAAIAAAIg");
	this.shape_8.setTransform(295,668.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("EAyiAAEIAAgIIAfAAIAAAIgEAwhAAEIAAgIIAdAAIAAAIgEAueAAEIAAgIIAfAAIAAAIgEAsdAAEIAAgIIAdAAIAAAIgEAqaAAEIAAgIIAfAAIAAAIgEAoZAAEIAAgIIAdAAIAAAIgEAmXAAEIAAgIIAeAAIAAAIgEAkUAAEIAAgIIAeAAIAAAIgEAiTAAEIAAgIIAeAAIAAAIgEAgQAAEIAAgIIAfAAIAAAIgAePAEIAAgIIAdAAIAAAIgAcMAEIAAgIIAfAAIAAAIgAaLAEIAAgIIAdAAIAAAIgAYIAEIAAgIIAfAAIAAAIgAWHAEIAAgIIAdAAIAAAIgAUFAEIAAgIIAeAAIAAAIgASCAEIAAgIIAeAAIAAAIgAQBAEIAAgIIAeAAIAAAIgAN+AEIAAgIIAfAAIAAAIgAL9AEIAAgIIAdAAIAAAIgAJ6AEIAAgIIAfAAIAAAIgAH5AEIAAgIIAdAAIAAAIgAF2AEIAAgIIAfAAIAAAIgAD1AEIAAgIIAdAAIAAAIgABzAEIAAgIIAeAAIAAAIgAgOAEIAAgIIAcAAIAAAIgAiPAEIAAgIIAdAAIAAAIgAkSAEIAAgIIAfAAIAAAIgAmTAEIAAgIIAdAAIAAAIgAoWAEIAAgIIAfAAIAAAIgAqXAEIAAgIIAdAAIAAAIgAsaAEIAAgIIAfAAIAAAIgAucAEIAAgIIAeAAIAAAIgAwdAEIAAgIIAeAAIAAAIgAygAEIAAgIIAeAAIAAAIgA0hAEIAAgIIAdAAIAAAIgA2kAEIAAgIIAfAAIAAAIgA4lAEIAAgIIAdAAIAAAIgA6oAEIAAgIIAfAAIAAAIgA8pAEIAAgIIAdAAIAAAIgA+sAEIAAgIIAfAAIAAAIgEgguAAEIAAgIIAeAAIAAAIgEgivAAEIAAgIIAeAAIAAAIgEgkyAAEIAAgIIAeAAIAAAIgEgmzAAEIAAgIIAdAAIAAAIgEgo2AAEIAAgIIAfAAIAAAIgEgq3AAEIAAgIIAdAAIAAAIgEgs6AAEIAAgIIAfAAIAAAIgEgu7AAEIAAgIIAdAAIAAAIgEgw+AAEIAAgIIAfAAIAAAIgEgzAAAEIAAgIIAeAAIAAAIg");
	this.shape_9.setTransform(295,584.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("EAyiAAFIAAgIIAfAAIAAAIgEAwhAAFIAAgIIAdAAIAAAIgEAueAAFIAAgIIAfAAIAAAIgEAsdAAFIAAgIIAdAAIAAAIgEAqaAAFIAAgIIAfAAIAAAIgEAoZAAFIAAgIIAdAAIAAAIgEAmXAAFIAAgIIAeAAIAAAIgEAkUAAFIAAgIIAeAAIAAAIgEAiTAAFIAAgIIAeAAIAAAIgEAgQAAFIAAgIIAfAAIAAAIgAePAFIAAgIIAdAAIAAAIgAcMAFIAAgIIAfAAIAAAIgAaLAFIAAgIIAdAAIAAAIgAYIAFIAAgIIAfAAIAAAIgAWHAFIAAgIIAdAAIAAAIgAUFAFIAAgIIAeAAIAAAIgASCAFIAAgIIAeAAIAAAIgAQBAFIAAgIIAeAAIAAAIgAN+AFIAAgIIAfAAIAAAIgAL9AFIAAgIIAdAAIAAAIgAJ6AFIAAgIIAfAAIAAAIgAH5AFIAAgIIAdAAIAAAIgAF2AFIAAgIIAfAAIAAAIgAD1AFIAAgIIAdAAIAAAIgABzAFIAAgIIAeAAIAAAIgAgOAFIAAgIIAcAAIAAAIgAiPAFIAAgIIAdAAIAAAIgAkSAFIAAgIIAfAAIAAAIgAmTAFIAAgIIAdAAIAAAIgAoWAFIAAgIIAfAAIAAAIgAqXAFIAAgIIAdAAIAAAIgAsaAFIAAgIIAfAAIAAAIgAucAFIAAgIIAeAAIAAAIgAwdAFIAAgIIAeAAIAAAIgAygAFIAAgIIAeAAIAAAIgA0hAFIAAgIIAdAAIAAAIgA2kAFIAAgIIAfAAIAAAIgA4lAFIAAgIIAdAAIAAAIgA6oAFIAAgIIAfAAIAAAIgA8pAFIAAgIIAdAAIAAAIgA+sAFIAAgIIAfAAIAAAIgEgguAAFIAAgIIAeAAIAAAIgEgivAAFIAAgIIAeAAIAAAIgEgkyAAFIAAgIIAeAAIAAAIgEgmzAAFIAAgIIAdAAIAAAIgEgo2AAFIAAgIIAfAAIAAAIgEgq3AAFIAAgIIAdAAIAAAIgEgs6AAFIAAgIIAfAAIAAAIgEgu7AAFIAAgIIAdAAIAAAIgEgw+AAFIAAgIIAfAAIAAAIgEgzAAAFIAAgIIAeAAIAAAIg");
	this.shape_10.setTransform(295,501.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("EAyiAAFIAAgJIAfAAIAAAJgEAwhAAFIAAgJIAdAAIAAAJgEAueAAFIAAgJIAfAAIAAAJgEAsdAAFIAAgJIAdAAIAAAJgEAqaAAFIAAgJIAfAAIAAAJgEAoZAAFIAAgJIAdAAIAAAJgEAmXAAFIAAgJIAeAAIAAAJgEAkUAAFIAAgJIAeAAIAAAJgEAiTAAFIAAgJIAeAAIAAAJgEAgQAAFIAAgJIAfAAIAAAJgAePAFIAAgJIAdAAIAAAJgAcMAFIAAgJIAfAAIAAAJgAaLAFIAAgJIAdAAIAAAJgAYIAFIAAgJIAfAAIAAAJgAWHAFIAAgJIAdAAIAAAJgAUFAFIAAgJIAeAAIAAAJgASCAFIAAgJIAeAAIAAAJgAQBAFIAAgJIAeAAIAAAJgAN+AFIAAgJIAfAAIAAAJgAL9AFIAAgJIAdAAIAAAJgAJ6AFIAAgJIAfAAIAAAJgAH5AFIAAgJIAdAAIAAAJgAF2AFIAAgJIAfAAIAAAJgAD1AFIAAgJIAdAAIAAAJgABzAFIAAgJIAeAAIAAAJgAgOAFIAAgJIAcAAIAAAJgAiPAFIAAgJIAdAAIAAAJgAkSAFIAAgJIAfAAIAAAJgAmTAFIAAgJIAdAAIAAAJgAoWAFIAAgJIAfAAIAAAJgAqXAFIAAgJIAdAAIAAAJgAsaAFIAAgJIAfAAIAAAJgAucAFIAAgJIAeAAIAAAJgAwdAFIAAgJIAeAAIAAAJgAygAFIAAgJIAeAAIAAAJgA0hAFIAAgJIAdAAIAAAJgA2kAFIAAgJIAfAAIAAAJgA4lAFIAAgJIAdAAIAAAJgA6oAFIAAgJIAfAAIAAAJgA8pAFIAAgJIAdAAIAAAJgA+sAFIAAgJIAfAAIAAAJgEgguAAFIAAgJIAeAAIAAAJgEgivAAFIAAgJIAeAAIAAAJgEgkyAAFIAAgJIAeAAIAAAJgEgmzAAFIAAgJIAdAAIAAAJgEgo2AAFIAAgJIAfAAIAAAJgEgq3AAFIAAgJIAdAAIAAAJgEgs6AAFIAAgJIAfAAIAAAJgEgu7AAFIAAgJIAdAAIAAAJgEgw+AAFIAAgJIAfAAIAAAJgEgzAAAFIAAgJIAeAAIAAAJg");
	this.shape_11.setTransform(295,417.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EAyiAAEIAAgIIAfAAIAAAIgEAwhAAEIAAgIIAdAAIAAAIgEAueAAEIAAgIIAfAAIAAAIgEAsdAAEIAAgIIAdAAIAAAIgEAqaAAEIAAgIIAfAAIAAAIgEAoZAAEIAAgIIAdAAIAAAIgEAmXAAEIAAgIIAeAAIAAAIgEAkUAAEIAAgIIAeAAIAAAIgEAiTAAEIAAgIIAeAAIAAAIgEAgQAAEIAAgIIAfAAIAAAIgAePAEIAAgIIAdAAIAAAIgAcMAEIAAgIIAfAAIAAAIgAaLAEIAAgIIAdAAIAAAIgAYIAEIAAgIIAfAAIAAAIgAWHAEIAAgIIAdAAIAAAIgAUFAEIAAgIIAeAAIAAAIgASCAEIAAgIIAeAAIAAAIgAQBAEIAAgIIAeAAIAAAIgAN+AEIAAgIIAfAAIAAAIgAL9AEIAAgIIAdAAIAAAIgAJ6AEIAAgIIAfAAIAAAIgAH5AEIAAgIIAdAAIAAAIgAF2AEIAAgIIAfAAIAAAIgAD1AEIAAgIIAdAAIAAAIgABzAEIAAgIIAeAAIAAAIgAgOAEIAAgIIAcAAIAAAIgAiPAEIAAgIIAdAAIAAAIgAkSAEIAAgIIAfAAIAAAIgAmTAEIAAgIIAdAAIAAAIgAoWAEIAAgIIAfAAIAAAIgAqXAEIAAgIIAdAAIAAAIgAsaAEIAAgIIAfAAIAAAIgAucAEIAAgIIAeAAIAAAIgAwdAEIAAgIIAeAAIAAAIgAygAEIAAgIIAeAAIAAAIgA0hAEIAAgIIAdAAIAAAIgA2kAEIAAgIIAfAAIAAAIgA4lAEIAAgIIAdAAIAAAIgA6oAEIAAgIIAfAAIAAAIgA8pAEIAAgIIAdAAIAAAIgA+sAEIAAgIIAfAAIAAAIgEgguAAEIAAgIIAeAAIAAAIgEgivAAEIAAgIIAeAAIAAAIgEgkyAAEIAAgIIAeAAIAAAIgEgmzAAEIAAgIIAdAAIAAAIgEgo2AAEIAAgIIAfAAIAAAIgEgq3AAEIAAgIIAdAAIAAAIgEgs6AAEIAAgIIAfAAIAAAIgEgu7AAEIAAgIIAdAAIAAAIgEgw+AAEIAAgIIAfAAIAAAIgEgzAAAEIAAgIIAeAAIAAAIg");
	this.shape_12.setTransform(295,334.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("EAyiAAFIAAgIIAfAAIAAAIgEAwhAAFIAAgIIAdAAIAAAIgEAueAAFIAAgIIAfAAIAAAIgEAsdAAFIAAgIIAdAAIAAAIgEAqaAAFIAAgIIAfAAIAAAIgEAoZAAFIAAgIIAdAAIAAAIgEAmXAAFIAAgIIAeAAIAAAIgEAkUAAFIAAgIIAeAAIAAAIgEAiTAAFIAAgIIAeAAIAAAIgEAgQAAFIAAgIIAfAAIAAAIgAePAFIAAgIIAdAAIAAAIgAcMAFIAAgIIAfAAIAAAIgAaLAFIAAgIIAdAAIAAAIgAYIAFIAAgIIAfAAIAAAIgAWHAFIAAgIIAdAAIAAAIgAUFAFIAAgIIAeAAIAAAIgASCAFIAAgIIAeAAIAAAIgAQBAFIAAgIIAeAAIAAAIgAN+AFIAAgIIAfAAIAAAIgAL9AFIAAgIIAdAAIAAAIgAJ6AFIAAgIIAfAAIAAAIgAH5AFIAAgIIAdAAIAAAIgAF2AFIAAgIIAfAAIAAAIgAD1AFIAAgIIAdAAIAAAIgABzAFIAAgIIAeAAIAAAIgAgOAFIAAgIIAcAAIAAAIgAiPAFIAAgIIAdAAIAAAIgAkSAFIAAgIIAfAAIAAAIgAmTAFIAAgIIAdAAIAAAIgAoWAFIAAgIIAfAAIAAAIgAqXAFIAAgIIAdAAIAAAIgAsaAFIAAgIIAfAAIAAAIgAucAFIAAgIIAeAAIAAAIgAwdAFIAAgIIAeAAIAAAIgAygAFIAAgIIAeAAIAAAIgA0hAFIAAgIIAdAAIAAAIgA2kAFIAAgIIAfAAIAAAIgA4lAFIAAgIIAdAAIAAAIgA6oAFIAAgIIAfAAIAAAIgA8pAFIAAgIIAdAAIAAAIgA+sAFIAAgIIAfAAIAAAIgEgguAAFIAAgIIAeAAIAAAIgEgivAAFIAAgIIAeAAIAAAIgEgkyAAFIAAgIIAeAAIAAAIgEgmzAAFIAAgIIAdAAIAAAIgEgo2AAFIAAgIIAfAAIAAAIgEgq3AAFIAAgIIAdAAIAAAIgEgs6AAFIAAgIIAfAAIAAAIgEgu7AAFIAAgIIAdAAIAAAIgEgw+AAFIAAgIIAfAAIAAAIgEgzAAAFIAAgIIAeAAIAAAIg");
	this.shape_13.setTransform(295,250.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("EAyiAAFIAAgIIAfAAIAAAIgEAwhAAFIAAgIIAdAAIAAAIgEAueAAFIAAgIIAfAAIAAAIgEAsdAAFIAAgIIAdAAIAAAIgEAqaAAFIAAgIIAfAAIAAAIgEAoZAAFIAAgIIAdAAIAAAIgEAmXAAFIAAgIIAeAAIAAAIgEAkUAAFIAAgIIAeAAIAAAIgEAiTAAFIAAgIIAeAAIAAAIgEAgQAAFIAAgIIAfAAIAAAIgAePAFIAAgIIAdAAIAAAIgAcMAFIAAgIIAfAAIAAAIgAaLAFIAAgIIAdAAIAAAIgAYIAFIAAgIIAfAAIAAAIgAWHAFIAAgIIAdAAIAAAIgAUFAFIAAgIIAeAAIAAAIgASCAFIAAgIIAeAAIAAAIgAQBAFIAAgIIAeAAIAAAIgAN+AFIAAgIIAfAAIAAAIgAL9AFIAAgIIAdAAIAAAIgAJ6AFIAAgIIAfAAIAAAIgAH5AFIAAgIIAdAAIAAAIgAF2AFIAAgIIAfAAIAAAIgAD1AFIAAgIIAdAAIAAAIgABzAFIAAgIIAeAAIAAAIgAgOAFIAAgIIAcAAIAAAIgAiPAFIAAgIIAdAAIAAAIgAkSAFIAAgIIAfAAIAAAIgAmTAFIAAgIIAdAAIAAAIgAoWAFIAAgIIAfAAIAAAIgAqXAFIAAgIIAdAAIAAAIgAsaAFIAAgIIAfAAIAAAIgAucAFIAAgIIAeAAIAAAIgAwdAFIAAgIIAeAAIAAAIgAygAFIAAgIIAeAAIAAAIgA0hAFIAAgIIAdAAIAAAIgA2kAFIAAgIIAfAAIAAAIgA4lAFIAAgIIAdAAIAAAIgA6oAFIAAgIIAfAAIAAAIgA8pAFIAAgIIAdAAIAAAIgA+sAFIAAgIIAfAAIAAAIgEgguAAFIAAgIIAeAAIAAAIgEgivAAFIAAgIIAeAAIAAAIgEgkyAAFIAAgIIAeAAIAAAIgEgmzAAFIAAgIIAdAAIAAAIgEgo2AAFIAAgIIAfAAIAAAIgEgq3AAFIAAgIIAdAAIAAAIgEgs6AAFIAAgIIAfAAIAAAIgEgu7AAFIAAgIIAdAAIAAAIgEgw+AAFIAAgIIAfAAIAAAIgEgzAAAFIAAgIIAeAAIAAAIg");
	this.shape_14.setTransform(295,166.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("EAyiAAEIAAgIIAfAAIAAAIgEAwhAAEIAAgIIAdAAIAAAIgEAueAAEIAAgIIAfAAIAAAIgEAsdAAEIAAgIIAdAAIAAAIgEAqaAAEIAAgIIAfAAIAAAIgEAoZAAEIAAgIIAdAAIAAAIgEAmXAAEIAAgIIAeAAIAAAIgEAkUAAEIAAgIIAeAAIAAAIgEAiTAAEIAAgIIAeAAIAAAIgEAgQAAEIAAgIIAfAAIAAAIgAePAEIAAgIIAdAAIAAAIgAcMAEIAAgIIAfAAIAAAIgAaLAEIAAgIIAdAAIAAAIgAYIAEIAAgIIAfAAIAAAIgAWHAEIAAgIIAdAAIAAAIgAUFAEIAAgIIAeAAIAAAIgASCAEIAAgIIAeAAIAAAIgAQBAEIAAgIIAeAAIAAAIgAN+AEIAAgIIAfAAIAAAIgAL9AEIAAgIIAdAAIAAAIgAJ6AEIAAgIIAfAAIAAAIgAH5AEIAAgIIAdAAIAAAIgAF2AEIAAgIIAfAAIAAAIgAD1AEIAAgIIAdAAIAAAIgABzAEIAAgIIAeAAIAAAIgAgOAEIAAgIIAcAAIAAAIgAiPAEIAAgIIAdAAIAAAIgAkSAEIAAgIIAfAAIAAAIgAmTAEIAAgIIAdAAIAAAIgAoWAEIAAgIIAfAAIAAAIgAqXAEIAAgIIAdAAIAAAIgAsaAEIAAgIIAfAAIAAAIgAucAEIAAgIIAeAAIAAAIgAwdAEIAAgIIAeAAIAAAIgAygAEIAAgIIAeAAIAAAIgA0hAEIAAgIIAdAAIAAAIgA2kAEIAAgIIAfAAIAAAIgA4lAEIAAgIIAdAAIAAAIgA6oAEIAAgIIAfAAIAAAIgA8pAEIAAgIIAdAAIAAAIgA+sAEIAAgIIAfAAIAAAIgEgguAAEIAAgIIAeAAIAAAIgEgivAAEIAAgIIAeAAIAAAIgEgkyAAEIAAgIIAeAAIAAAIgEgmzAAEIAAgIIAdAAIAAAIgEgo2AAEIAAgIIAfAAIAAAIgEgq3AAEIAAgIIAdAAIAAAIgEgs6AAEIAAgIIAfAAIAAAIgEgu7AAEIAAgIIAdAAIAAAIgEgw+AAEIAAgIIAfAAIAAAIgEgzAAAEIAAgIIAeAAIAAAIg");
	this.shape_15.setTransform(295,83.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("EAyiAAEIAAgIIAfAAIAAAIgEAwhAAEIAAgIIAdAAIAAAIgEAueAAEIAAgIIAfAAIAAAIgEAsdAAEIAAgIIAdAAIAAAIgEAqaAAEIAAgIIAfAAIAAAIgEAoZAAEIAAgIIAdAAIAAAIgEAmXAAEIAAgIIAeAAIAAAIgEAkUAAEIAAgIIAeAAIAAAIgEAiTAAEIAAgIIAeAAIAAAIgEAgQAAEIAAgIIAfAAIAAAIgAePAEIAAgIIAdAAIAAAIgAcMAEIAAgIIAfAAIAAAIgAaLAEIAAgIIAdAAIAAAIgAYIAEIAAgIIAfAAIAAAIgAWHAEIAAgIIAdAAIAAAIgAUFAEIAAgIIAeAAIAAAIgASCAEIAAgIIAeAAIAAAIgAQBAEIAAgIIAeAAIAAAIgAN+AEIAAgIIAfAAIAAAIgAL9AEIAAgIIAdAAIAAAIgAJ6AEIAAgIIAfAAIAAAIgAH5AEIAAgIIAdAAIAAAIgAF2AEIAAgIIAfAAIAAAIgAD1AEIAAgIIAdAAIAAAIgABzAEIAAgIIAeAAIAAAIgAgOAEIAAgIIAcAAIAAAIgAiPAEIAAgIIAdAAIAAAIgAkSAEIAAgIIAfAAIAAAIgAmTAEIAAgIIAdAAIAAAIgAoWAEIAAgIIAfAAIAAAIgAqXAEIAAgIIAdAAIAAAIgAsaAEIAAgIIAfAAIAAAIgAucAEIAAgIIAeAAIAAAIgAwdAEIAAgIIAeAAIAAAIgAygAEIAAgIIAeAAIAAAIgA0hAEIAAgIIAdAAIAAAIgA2kAEIAAgIIAfAAIAAAIgA4lAEIAAgIIAdAAIAAAIgA6oAEIAAgIIAfAAIAAAIgA8pAEIAAgIIAdAAIAAAIgA+sAEIAAgIIAfAAIAAAIgEgguAAEIAAgIIAeAAIAAAIgEgivAAEIAAgIIAeAAIAAAIgEgkyAAEIAAgIIAeAAIAAAIgEgmzAAEIAAgIIAdAAIAAAIgEgo2AAEIAAgIIAfAAIAAAIgEgq3AAEIAAgIIAdAAIAAAIgEgs6AAEIAAgIIAfAAIAAAIgEgu7AAEIAAgIIAdAAIAAAIgEgw+AAEIAAgIIAfAAIAAAIgEgzAAAEIAAgIIAeAAIAAAIg");
	this.shape_16.setTransform(295,-0.1);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.5,-18.6,653,718);


(lib.SpaceJunk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A6C20").s().p("AAMBjIgOgNIgKgLIgJgOIgIgSIgCgVQgBgFADgQIANglQAGgNAKgSIAQgcQACgDADgBQAEgBADACQAHAFgFAHIAAAAIgSAcQgHAKgHATIgNAhIgCASQgBAEADANIAFAQQACAFAGAHIAHAKIAHAGIAHAHQAFAEgEAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAIgEgBg");
	this.shape.setTransform(32.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9A6C20").s().p("AgBBwIAAgBIAAAAIAAgFIgLiZIABgCIAAgBIACgHIABgHIABgPQACgLgBgFIABgRQAAgFADAAQACgBAAAGIACAgIAAASIgCAPIAJCOIABABQADACAAADIgCAKQABAHgIAAQgEAAgBgGg");
	this.shape_1.setTransform(29.6,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9A6C20").s().p("AgWBtIgDiyIABABIgFgVQAAgDADgBQAAAAABAAQABAAAAAAQABABAAAAQAAAAAAABIABAAIAGAJIAEAKIAZBfIAAgbIACgxIACgdIgBgcQAAgFAFgBQAEABABAEIAEAdIAAAZIAAAEIgCB8QAAADgCADQgCACgDAAIgEAAQgHAAgCgGIgUhkIAFCIQAAADgCADQgCABgDAAQgIABAAgIg");
	this.shape_2.setTransform(23.3,6.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9A6C20").s().p("AgLBUQgHgGgGgOIgGgUQgEgTgBgWIgBgSIACgoIAEgUQAAgBAAAAQAAAAAAgBQABAAAAAAQABAAAAgBIAEAAQAFABAAACIAAABIgEATIAEA5QADAaADAMIAFASQAEAKAEADIABABIAFgCQAGgFACgGQAEgNACgYQACgSAAgTIgBgoIAAACIgEgXIgBgHIAAAAQAAgFAEAAQAEgBABAEIAIAcIAAACIADAoQABAYgBAOIgBAUIgFAVIgCAGIgDAFIgBABIgBABIAAAAIAAABIgHAGQgJAFgFAAIgBAAQgGAAgGgFg");
	this.shape_3.setTransform(16,10.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9A6C20").s().p("AgRB4IgHgJIgCgEQgCgHAHgCQAEgCAEAFIABABIABACIABACIACACQAEACADgBIABgBIAAAAIADgBIACgBIAAgBIABgCQAEgFgBgKIACjSQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAAAAAABIALDSQgBARgFAIIgFAFIgCABIAAAAIAAABIgBAAIgCABIgCABIgJADIgCAAQgHAAgIgFg");
	this.shape_4.setTransform(7.8,13.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9A6C20").s().p("AgqAeIgBgCIACgBIAqgaIAPgJIAMgLIALgLQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAABgBAAIgLAMIgNALIgPAJIgrAaIgCABQAAAAAAAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_5.setTransform(8.9,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#291E02").s().p("ABxA8IjohoQgDgCgBgDQgBgDACgDQAEgHAHADIAVALIDRBeQAHADgDAHQgBADgDACIgDAAIgDgBg");
	this.shape_6.setTransform(-17.9,16.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#291E02").ss(1.5,1,1).p("Ah1g2QAHAFAPAHIARAIQAaAOBbAmIBOAl");
	this.shape_7.setTransform(-18.1,11.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#291E02").ss(1.3,1,1).p("Ah2g3QAFAEAVAJIARAJQAqAWBNAgQAGACAJAFIA8Ac");
	this.shape_8.setTransform(-18.3,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#291E02").ss(1.2,1,1).p("Ah4g5QAFAFAKAEQAGADAIAEIASAJQAyAaBJAdIBHAj");
	this.shape_9.setTransform(-18.4,1.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#291E02").ss(1,1,1).p("Ah6g7QAGAGALAFQAGADAKAEIASAJQAwAaBOAgIBEAi");
	this.shape_10.setTransform(-18.6,-3.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#291E02").s().p("AB8BBIidhIIgugZIgLgFIgZgMIgKgHQgEgDADgDQACgEAEADIAAAAIAKAHIAXALIAMAGIDKBjQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAABQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgCAAg");
	this.shape_11.setTransform(-18.9,-8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#291E02").ss(1.3,0,1).p("AAOgDQABAGgDAGQgDAGgGABQgDACgGgFQgFgEgCgHQgFgWAZAGQAEADADAIg");
	this.shape_12.setTransform(-31.3,15.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#291E02").ss(1,0,1).p("AASAAQAAAJgFAHQgGAHgHABQgHAAgFgHQgFgHAAgKQAAgIAFgIQAFgHAHAAQAHAAAGAHQAFAHAAAJg");
	this.shape_13.setTransform(-1,30.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#291E02").ss(0.6,0,1).p("AAVgCQABAJgEAJQgFAJgIABQgHACgIgHQgHgHgDgLQgCgJAFgIQAFgJAIgCQAHgCAIAHQAHAHADALg");
	this.shape_14.setTransform(-1,-1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#291E02").ss(1.1,0,1).p("AAPgCQABAHgDAFQgHAHgDABQgDACgGgGQgGgFgBgHQgCgGAEgGQADgHAGgBQAEgBAGAFQAFAFACAHg");
	this.shape_15.setTransform(-35.1,-17.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#291E02").s().p("Ai7E7IgBgDIABmUQAAgEAEAAQAFAAAAAEIABGJICZhkIBOg1IBNgzIACgNIAAgBIAJg6IADgUIAHhXIAAgDIAAgGIABgUIAMh3IAIhQQABgIAIABQAHABAAAIIgIBPIAAgBIgOCLIAAAGIABADIgLBtIgKA7IAAAAIgCAPQAAADgDADIhQA0Qg9ApgSAMIiiBpIgEABQgCAAgCgDg");
	this.shape_16.setTransform(21,4.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#291E02").s().p("ADKEyIhWgrIABAAIglgRIgkgRIjShvQgEgCAAgEIgFgzIgHgzIgIgyIgDgaQgCgLAAgOIgRjOQgBgIAIgBQAIgBABAIIAQDPIANBkIAHAzIAEAvIDPBtIAjASIAkAQIABABIBWArQAGAEgDAGQgBADgDABIgDAAIgDgBg");
	this.shape_17.setTransform(-18,6.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#291E02").s().p("AAKCTIg6gdIg/gcIh4g/IAAAAIg7gdQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIABgBIByhrIABgBIBUgKIAigEIDIgSIACAAICTB8QADACgCAEIgBAAQgRAIgVALIAAAAIgPALIgBAAIhUAvIhOA2IAAAAIgBAAIg2AgQgDACgCAAIgFgBgAivhuIhuBpIA7AWIAAAAIDwBuIAygeIgBABIAogcICEg+IAAAAIAPgIIAAAAQATgLANgJIiNh6g");
	this.shape_18.setTransform(0.6,-24.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#291E02").s().p("AAPDQIiHhBIABABIhDggIgBAAIjNhgQgHgDAEgHIABgCIC/isIAAABIACgDIACAAIADAAIFlgmIADABIDmC9QAGAFgFAHIgCACIhaAyIAAgBIjLB0IgCABIgCABIhKAtIgDABIgEgBgAitBnIA6AcIABAAICEA/IBLguICFhJIBEgrIABAAIBPgsIhnhbIhvhgIlkAiIgCAAIgBAAIiwCsIDCBdIgBAAg");
	this.shape_19.setTransform(0.5,-24.9);

	this.instance = new lib.ClipGroup_8();
	this.instance.setTransform(1.5,-4.5,1,1,0,0,0,40,41.5);

	this.addChild(this.instance,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-39.3,-46,80.8,83);


(lib.Satellite2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMBoQgJgtAFg7QABgMANhaQACgLAJADQALADgCAKIgOBhQgEA3AHAqQADALgKADIgDABQgHAAgCgIg");
	this.shape.setTransform(-42.9,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHAMQgEgEAAgEQAAgEAEgIQACgEAFgBQACgCAEADQAJAEgFAJIAAADQgBAEgDAEQgDADgDAAQgEAAgDgDg");
	this.shape_1.setTransform(10.7,9.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgDAOQgJgCABgMQABgDADgFQAHgJAHAFQAEACABAFQABAFgCACIgCAEQAAAEgFADIgEABIgDAAg");
	this.shape_2.setTransform(11.4,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgIAVQgJgGAFgKQAEgNAEgHQAEgKAJAGQAJAFgFAKQgDAFgFAQQgCAEgDABIgDAAQgDAAgCgBg");
	this.shape_3.setTransform(12.6,2.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKAFIAAgJQABgLAJAAQAEAAAEADQADADAAAFIgBAJQABALgLAAQgKAAAAgLg");
	this.shape_4.setTransform(-6.4,5.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgKAEIAAgHQAAgLAKAAQALAAAAALIAAAHQAAALgLAAQgKAAAAgLg");
	this.shape_5.setTransform(-6.6,2.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAMQACgNgBgGQgDgLALgCQAJgDACAKQACAFgBAIIAAAMQAAAKgLAAIAAAAQgKAAAAgKg");
	this.shape_6.setTransform(-6.8,-2.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgJAAQgBgKAKAAQAKAAAAAKQAAALgKAAQgKAAABgLg");
	this.shape_7.setTransform(-11.9,6.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgIAFIgCgCQgEgJAIgFQAEgCADABQAFABACAEIADAHQACADgDAEQgCAFgFABIgDAAQgFAAgDgIg");
	this.shape_8.setTransform(-12.3,3.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAOIgFgVQgDgLALgDQAJgDADALQACAHADAOQADALgLADIgEAAQgFAAgDgIg");
	this.shape_9.setTransform(-13.1,0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCAQQgLgDADgLIABgGQgBgLAKAAQALAAAAALQAAAGgCAGQgBAIgIAAIgCAAg");
	this.shape_10.setTransform(4.2,6.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgHAPQgEgEAAgEIACgNQACgLAIAAQAEAAAEAEQADADAAAEIgCANQgBALgJAAQgEAAgDgDg");
	this.shape_11.setTransform(5.1,2.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAYQgFgBgCgEQgDgEACgFQAHgRAAgGQABgEADgDQACgEADAAQAFAAADAEQAEADAAAEQgBALgHASQgEAJgFAAIgDgBg");
	this.shape_12.setTransform(6.2,-2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOA4QgJgGAEgJQAGgOAEggQAEggAFgPQAFgJAKAFQAKAGgFAJQgEAJgDAPIgDAXIgEAXQgDANgDAKQgCAHgFAAQgDAAgEgDg");
	this.shape_13.setTransform(9.1,2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgBAxQgFgQgEgeQgFgggDgNQgDgLALgDQAKgDABALQADANAFAiQAFAbAFARQADALgLADIgEAAQgHAAgBgIg");
	this.shape_14.setTransform(-10.1,-0.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgIBnQgKgDACgLQAQhAAAgZQAEgzgYgiQgGgJAJgGQAKgFAHAIQAaAlgDA6QgCAdgRBEQgCAIgFAAIgFAAg");
	this.shape_15.setTransform(37.6,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AiSgPQgHgIAIgIQAHgIAHAIQAqAuBWgBQAZgBBzgRQAKgCADAJQADALgLACQh0AUgjAAQhcAAgtgzg");
	this.shape_16.setTransform(-1.1,32.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgOBkQgKgDAEgKQAUgzADgkQAJg/gggPQgKgFAGgJQAGgKAJAEQAqAUgGBFQgEAtgXA5QgCAHgHAAIgFAAg");
	this.shape_17.setTransform(33,0.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAABJIAChIQgCgogTgYQgHgIAIgIQAIgIAGAJQAWAbAFAuQACAQgCA+QgBAKgLAAIgBAAQgKAAAAgKg");
	this.shape_18.setTransform(26.2,0.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AAIBEQAGhTgogrQgIgHAIgIQAIgIAHAIQAYAZALApQAJAhgCAqQgBAKgLAAQgLAAAAgKg");
	this.shape_19.setTransform(20.9,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgHAjQhlgDg7gsQgIgHAGgJQAFgKAJAHQA4ApBiACQAbABCIgNQALAAAAAKQAAAMgLABQh9AMgmAAIgGAAg");
	this.shape_20.setTransform(2.2,27.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiGgEQgJgGAGgKQAFgKAJAGQAxAfBKgCQA0gBBLgTQAKgDADALQADAJgLADQhOAVg4ABIgHAAQhKAAgzgfg");
	this.shape_21.setTransform(-0.1,22.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgBAUQg1gDgtgQQgKgBADgLQADgLAKAEQAsAOAxADQAqABA3gEQALgBAAAJQAAAMgLABQgnADggAAIgbAAg");
	this.shape_22.setTransform(2.2,16);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPAsQAAgSAEgaIAGgsQABgKAKgBQALABgBAKIgGAsQgEAaAAASQAAAMgJAAQgMAAAAgMg");
	this.shape_23.setTransform(-23.1,-3.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgDA1QgLAAgBgLQgCgvANgnQADgKAJADQALADgEAKQgLAjACAtQAAALgIAAIgBAAg");
	this.shape_24.setTransform(-30.1,-1.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgSBEQgFgxACgYQAEgoAVgcQAGgJAIAIQAIAIgHAIQgTAZAAAjQgBAVAEAtQABAKgJAAQgMAAgBgKg");
	this.shape_25.setTransform(-34.3,-2.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgcBLQAAg9ADgWQAIgyAagXQAIgHAIAIQAIAIgJAGQgYAVgEAtQgCAQABA7QAAALgLAAQgMAAAAgLg");
	this.shape_26.setTransform(-34.3,-3.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA3ANQhIgGgkABQgLABAAgKQAAgLALAAQAkgBBIAGQAKABAAAJQAAAKgJAAIgBAAg");
	this.shape_27.setTransform(-4.6,-14.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ABZAWQg8gTgdgDQg1gFggAVQgJAGgGgKQgFgJAIgFQAkgZA8AGQAhAEA/ARQAKADgDALQgCAJgGAAIgFgBg");
	this.shape_28.setTransform(-2.3,-18.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhhATQgHgIAIgHQAhgbA7ABQAaABBGAOQALACgDAJQgDALgKgDQhCgMgVAAQg1gCgcAVQgDAEgEAAQgEAAgFgEg");
	this.shape_29.setTransform(-2.6,-23.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AB8AbQhRgYgrgFQhOgMgoAhQgIAHgIgIQgIgIAIgHQAugmBUALQAJABB9AcQALADgDALQgCAIgIAAIgEAAg");
	this.shape_30.setTransform(-0.8,-29.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgJAAQAAgKAJAAQALAAgBAKQABALgLAAQgJAAAAgLg");
	this.shape_31.setTransform(-9.5,-27.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgHAUIgFgkQgBgEAEgEQAEgDAEAAQAIAAABALIAFAeQACALgLADIgEAAQgFAAgCgIg");
	this.shape_32.setTransform(21.2,7.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAJAPQgLgLgOgBQgLAAAAgJQAAgMALABQAXABARAQQAJAGgIAIQgFAEgEAAQgEAAgDgDg");
	this.shape_33.setTransform(-18.3,-8.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhvAhQgDgLAKgDIBngaQA7gRApgPQAKgEADALQADALgKADQgqAQg8APIhlAbIgEABQgHAAgCgIg");
	this.shape_34.setTransform(-24.8,7.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhHAXQgDgLAKgDIB7gmQAKgEADALQADALgKADQgpAMhSAaIgFABQgGAAgCgIg");
	this.shape_35.setTransform(-32.3,9.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgBAXQgHgPgJgVQgCgEADgEQADgFAEgBQAFgBAEACQABADACAEIAOAeQAEAKgJAGQgEACgCAAQgFAAgCgGg");
	this.shape_36.setTransform(-40.3,7.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAKAbQgKgUgagVQgIgGAIgIQAHgIAJAHQAbAXANAWQAFAKgKAFQgEADgDAAQgFAAgDgHg");
	this.shape_37.setTransform(-42.1,7.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgjAQQgFgHAGgGQAZgUAhgEQALgCADALQADALgLABIgGAAQAAAEgGADQgVAKgUAFIgDAAQgGAAgDgGg");
	this.shape_38.setTransform(-39.8,-14.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AA7A0QhSg0gugfQgJgGAGgKQAFgKAJAHQAqAeBWA1QAJAFgFAKQgEAGgFAAQgDAAgDgCg");
	this.shape_39.setTransform(-27.1,-12.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("ABSAwQg4gMgjgQQgygUgggcQgIgHAHgIQAIgIAIAHQAeAcAuARQAiANA1AMQALADgDAKQgCAJgHAAIgEAAg");
	this.shape_40.setTransform(-27.6,-12.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgKAHIAAgNQAAgLAKAAQALAAAAALIAAANQAAALgLAAQgKAAAAgLg");
	this.shape_41.setTransform(13.4,-32.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAKAZQgQgZgSgJQgKgFAGgJQAGgKAJAFQAVALAVAfQAGAJgJAGQgEACgDAAQgGAAgDgGg");
	this.shape_42.setTransform(11.9,-34.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAAKQg/gIgkABQgKABgBgKQABgLAKAAQAkgBA/AIQBDAIAhAAQAKAAABAJQgBALgKAAQghAAhDgIg");
	this.shape_43.setTransform(1,-36.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ABHATIhHgNQgrgGgfAEQgLACAAgJQAAgMALgBQAhgFAqAHIBMANQALABgDAKQgDAJgIAAIgDAAg");
	this.shape_44.setTransform(0,-36.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgdAeQgIgIAIgIIArgrQAIgIAIAIQAIAIgIAIIgrArQgEAEgEAAQgEAAgEgEg");
	this.shape_45.setTransform(-12.8,-32.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgmAkQgIgHAHgJIABgBQAmgnAagRQAKgGAFAKQAGAKgJAGQgSALgeAdQAAAEgFAEIgHAEIgBABQgEAEgEAAQgEAAgDgEg");
	this.shape_46.setTransform(-12.3,-33.1);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgmBoQgKgGAFgKIARgmQAKgyAUgwQADgFAEAAIANgsQADgKALADQAKADgDAKIgcBcQgRA7gJAjQgDAIgKgBIgDAAQgDAEgEAAQgDAAgDgCg");
	this.shape_47.setTransform(13.9,-22.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgbBSQgLgDAEgKIAahGIAWhJQADgKALADQALADgEAKQgMApgkBmQgCAIgIAAIgEgBg");
	this.shape_48.setTransform(12.9,-18.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AALBmQgThCgKghQgRg6ADgrQABgLALAAQALAAgBALQgCApAOA5QAKAgAVBBQADAKgLADIgEAAQgHAAgDgIg");
	this.shape_49.setTransform(-12.8,-18.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AALBCQgGgDAAgFQgFgBgCgHQgWg5gFgyQAAgJAKgCQAKgBADAJQAGAZAUAuIAJAZQADARgGAKQgDAGgFAAQgEAAgDgDg");
	this.shape_50.setTransform(-12.8,-19.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAHAWQgPgNgNgPQgIgIAIgHQADgDAFgBQAFAAACAEQAMAQAQAMQAEACAAAFQgBAFgDADQgDAEgEAAQgFgBgDgDg");
	this.shape_51.setTransform(37.4,-13.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag7AZQgHgIAIgHQASgOAjgIQAvgLAIgDQAKgEACALQADALgKADQgJAEgqAGQgfAHgQANQgDADgEAAQgEAAgFgDg");
	this.shape_52.setTransform(28.6,-11.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhlAtQgFgKAJgFQAcgPBBgWQA7gYAfgRQAKgFAFAJQAGAKgJAFQgfASg+AVQg+AYgcAPQgEACgDAAQgFAAgEgGg");
	this.shape_53.setTransform(25.7,-12.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgwAUQgFgKAJgFQAXgNA6gQQAKgDADALQADAKgLADQg1AOgWANQgDACgDAAQgFAAgEgGg");
	this.shape_54.setTransform(20.4,-8.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAFAWQgPgRgLgLQgDgEAAgEQAAgFADgDQAEgDAFAAQAEgBADAEIAaAcQAIAIgIAIQgEAEgEAAQgEAAgEgEg");
	this.shape_55.setTransform(42.5,-10.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgZBXQACggAMg3QAMg7ACgbQABgLAMAAQALAAgBALQgDAbgNA7QgKA3gCAgQgBALgLAAIgBAAQgKAAAAgLg");
	this.shape_56.setTransform(43.9,0.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgvAYQgGgKAJgGQAhgTAwgRQAKgDADALQADAKgLAEQgrANggAUQgDADgDAAQgFAAgDgGg");
	this.shape_57.setTransform(37.9,10.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgzAXQgGgKAKgFIArgNQAYgJAOgLQAJgHAHAIQAIAIgIAGQgQALgaAKIgsARIgFABQgGAAgEgGg");
	this.shape_58.setTransform(37.7,11);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ABGAfIgkgMIgigNIgggLQgXgHgKAEQgJAFgGgKQgGgJAKgFQANgHAWAFQAKACAZAJIBRAcQALADgDALQgDAIgGAAIgEgBg");
	this.shape_59.setTransform(29.1,11);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ABFAcQgXgIgvgKQgxgJgYgGQgKgEADgKQADgLAKADQAXAIAvAKQAxAJAYAGQAKAEgDAKQgCAJgGAAIgFgBg");
	this.shape_60.setTransform(26.7,9.3);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ABeBgQgKgGAFgKQAQgegegmQgVgZgkgXQghgWgWgIQgngPgWAOQgKAFgFgJQgGgKAJgGQAhgUA0AVQAiAOApAgQAlAcARAdQAXAogSAjQgEAGgFAAQgDAAgDgCg");
	this.shape_61.setTransform(7.5,-1.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AA7AeIgsgJQgbgFgPgEQgUgFgJgEQgRgHABgOQAAgLALAAQAMAAgBALQAAAHAzALIBAAJQALACgDALQgDAIgHAAIgEAAg");
	this.shape_62.setTransform(6.7,-8.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAAAPQgJgDABgIIgDgEQgCgCABgEQACgKAKACQAIABADAHQAEAGgDAHQgCAJgHgBIgDAAg");
	this.shape_63.setTransform(9.2,-7.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAAARQhpgTgdAAQgLgBAAgLQAAgLALAAQAdABBpAUQBQAPAzgLQALgCADAJQADALgLACQgXAGgdAAQgmAAgvgJg");
	this.shape_64.setTransform(1.5,9.1);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("ABqAUQgpgIhBgCQhXgCgVgCQgIgBgDgGQgCgIAIgEQAIgFAIgBQAJgCAEAIIBVADQBFADAqAHQALABgDALQgDAJgHAAIgEgBg");
	this.shape_65.setTransform(1.5,12.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AACAlQgMgYgMgqQgDgKALgDQALgDADALQAJAmANAWQAFAJgKAGQgEACgDAAQgFAAgDgGg");
	this.shape_66.setTransform(16.7,15.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAHBKQgHhYgbg0QgFgKAKgGQAKgFAFAJQAaA5AKBfQABALgLAAQgLAAgBgLg");
	this.shape_67.setTransform(22.1,23.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgaAsQgKgGAFgJIAWgkQAKgVANgNQAIgIAIAHQAHAIgHAIQgMANgMASIgRAjQgEAGgFAAQgDAAgDgCg");
	this.shape_68.setTransform(21.2,34.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgSAiQgKgGAEgKQAJgSATgeQAGgJAKAGQAKAGgGAJQgWAegGASQgDAGgFAAQgDAAgDgCg");
	this.shape_69.setTransform(21,35.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AABARQhngKg0gEQgLgBAAgJQAAgLALAAQAzAEBnALQBYAEA/gNQALgDADALQADAJgLACQgvAMg9AAQgXAAgZgCg");
	this.shape_70.setTransform(2.5,38.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AiKAEQgLgCADgJQADgLAKACQByAQCdgGQALgBgBAJQAAAMgKAAQgyADguAAQhkAAhQgNg");
	this.shape_71.setTransform(-5.4,38.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AACAcQgOgWgKgYQgEgKALgDQALgDAEAKQAGAUAQAUQAGAJgKAGQgEACgDAAQgFAAgEgFg");
	this.shape_72.setTransform(-19.8,35.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AAYAyIgagvQgRgZgUgMQgKgFAGgKQAFgJAKAFQAXANASAdQALAPAUAjQAGAJgKAGQgDACgEAAQgFAAgEgGg");
	this.shape_73.setTransform(-21.5,35.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgTAXQgEgBgDgEQgFgJAJgGIAhgXQAJgGAGAKQAGAJgJAGIghAXQgCACgDAAIgEgBg");
	this.shape_74.setTransform(-16.8,13.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag2BXQgJgGAFgKQAPgeAiguQAkg2ANgXQAFgJAKAGQAKAFgGAKQgNAWgmA1QgfAwgQAeQgDAGgFAAQgDAAgEgCg");
	this.shape_75.setTransform(-19.1,17.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAqArQghgFgXgRQgbgTgMgbQgEgKAJgFQAKgGAEAKQAWAxA7AJQALABgDALQgDAKgHAAIgDgBg");
	this.shape_76.setTransform(-16.1,5.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgbA6QgRgjAQgkQAQglAjgMQAKgDADALQADAKgKAEQgaAIgKAcQgMAaAMAYQAFAKgKAGQgEACgDAAQgFAAgDgGg");
	this.shape_77.setTransform(-15.7,-2.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgzASQgDgLAKgDIApgLQAWgHAQgJIABABIACgCQAJgDAEAKQAEAKgIAEIgDABQAAABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQgGAIgKgFQgZAKgnAMIgEABQgHAAgCgIg");
	this.shape_78.setTransform(-5.8,-8.9);

	this.instance = new lib.ClipGroup_5();
	this.instance.setTransform(1.2,1.1,1,1,0,0,0,46.5,40);

	this.addChild(this.instance,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-45.3,-38.9,93,80);


(lib.Satellite = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#05442A").s().p("AgXAlQgDgEAFgDIAtgeIgLgYIgnAiQgEAFgFgFQgEgFAFgEIAugnQAEgEAEAFIABABIAQAkQACAEgEADIgyAgIgDACQgDAAgCgEg");
	this.shape.setTransform(-13.8,8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#05442A").s().p("AgcAeIgBgBIgKgXQgBgFADgBIA4gfQADgCADAEQACADgEADIg0AcIAHAPIA3gaQADgDADAGQABACgBABQAAABAAABQAAAAAAABQgBAAAAAAQAAABgBAAIg7AdIgCAAQgDAAgBgDg");
	this.shape_1.setTransform(16.6,-1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#05442A").s().p("AAHA1IgGgCQgBgBgCgCIglhNQgDgGAGgDQAGgDAEAGIAiBJIABABIAFAAIADAAIADgBIACgBIACgDIABgEIABgCIgfhGQgBgCACgDQABgDADgBQABgCAEABQAEABAAADIAgBIIAAABQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAABIgCAGIgCAFIgEAGIgGAFIgIACg");
	this.shape_2.setTransform(-8.9,-14.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#05442A").s().p("AAnBCIhWhfQgFgFAGgFQAEgEAGAFIBIBRIgJhnQAAgGAGgBQAGAAAAAFIALB7QABAHgHAAIAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_3.setTransform(13.7,31.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#05442A").s().p("Ag0BfIgwhdIgRgdQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIABAAIBjghIBigiQAEgBABAEIAAAAIAAAAIAfB8QACAGgHACIifA8IgCAAQgDAAgBgDgAhvgbIAiA4IAgA5ICTg7IgWhyg");
	this.shape_4.setTransform(-14.1,-24.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#05442A").ss(1.5,1,1).p("ABTh8IA2CGIi8BzIhViQg");
	this.shape_5.setTransform(-27.2,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#05442A").ss(1,1,1).p("AiAgHIBNCCIC0hQIhBilg");
	this.shape_6.setTransform(28.9,-8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#05442A").s().p("AhMAbQgCgGAGgDICOgxQAFgCACAGQACAFgFACIiNA0IgDAAQgEAAgCgFg");
	this.shape_7.setTransform(13.3,26.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#05442A").s().p("ABEDWIiTlcQgDgHAGgCQAHgDACAGICGE7IAAgkIiTlZQgCgDABgDQABgEADgBQADgBADABQADABAAADICVFdIABADIAABIQAAAHgHAAQgFAAgCgEg");
	this.shape_8.setTransform(13,2.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#05442A").s().p("AB1DBIhZgWQgEgBgCgEIiUlcQgBgDABgDQABgDADgBQADgBADABQAEABABADICSFYIBGASIiNlNQgBgDABgDQABgEADgBQADgBADABQADABABADICUFcQACADgBADQgCAEgDABIgDABIgCgBg");
	this.shape_9.setTransform(-5.8,10.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#05442A").s().p("AgeBGIhHgWQgIgDgDABQgCABgDgBQgDAAgBgDQgCgDACgDIAAAAIAWg7QACgDADgBIAsgQQAHgCADAGQABAEgBACQgCADgDABIgpAPIgRAtIAGABIA7AUIAGABQAAAAABAAQAAAAABAAQAAAAAAAAQABgBAAAAIABgBIAAACIADAAICGgyIAAg5IhWAAIgiANQgHACgDgHQgBgDACgDQABgDADgBIAjgOIADAAIBfAAQAGAAAAAIIgBBHQAAAFgDACIiKAzIgCAAIAAAAIgCACIgEAAg");
	this.shape_10.setTransform(-6.2,-11.9);

	this.instance = new lib.ClipGroup_6();
	this.instance.setTransform(0.3,1.8,1,1,0,0,0,42,36.5);

	this.addChild(this.instance,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.9,-34.7,84.8,73.1);


(lib.ClipGroup_1_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AltEGQg/gEgZgdQg0g7gPhqQgMhYAQhZQAPhPA+gmQA1ghBVABQEhAEDqASQApADBsgFQBfACAoArQAbAegJBXQgJBXgtgHQgQgBgPgTQgSgZgHgEQgQgKgaABIgtACQhbgIiQADIjsAGQg4gEgXAEQgnAGgMApQgGAPABAbIABAuQAAAXAEBFQAAA+gOAXIADgbQgNAhg2AAIgNgBg");
	mask.setTransform(52.6,26.3);

	// Layer 3
	this.instance = new lib.Group();
	this.instance.setTransform(59.1,51.7,1,1,0,0,0,42.6,41.2);
	this.instance.alpha = 0.98;

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.5,10.6,85.3,42.1);


(lib.ClipGroup_9 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	mask_9.graphics.p("AjOEYQgegGgvgRQg5gUgTgGQhKgTgcgRQgwgbgSg2QgGgUABgfQAAggAJgdQARg2AhgOQATgJAZAKQAUAIANAPIAsAuQAZAVAhADQAhACAvAAIBPgBICGACICEABQA1AAANgBQAngEAWgQQAbgRALgmQAIgaABgsQgEg3AAgfQABg3AbgSQBOg0A9B8QApBRAPBlQAZCagtBGQgRAZgeAMQgSAIgcADIgvAEIhxAMQhEAGguADQhyAIg5ADIguABQhJAAg1gKg");
	mask_9.setTransform(53.4,69.6);

	// Layer 3
	this.instance_9 = new lib.Group_0();
	this.instance_9.setTransform(51.4,41.2,1,1,0,0,0,42.6,41.2);
	this.instance_9.alpha = 0.281;

	this.instance_9.mask = mask_9;

	this.addChild(this.instance_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.8,40.6,85.3,41.8);


(lib.ClipGroup_1_2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AltEGQg/gEgZgdQg0g7gPhqQgMhYAQhZQAPhPA+gmQA1ghBVABQEhAEDqASQApADBsgFQBfACAoArQAbAegJBXQgJBXgtgHQgQgBgPgTQgSgZgHgEQgQgKgaABIgtACQhbgIiQADIjsAGQg4gEgXAEQgnAGgMApQgGAPABAbIABAuQAAAXAEBFQAAA+gOAWIADgaQgNAhg2AAIgNgBg");
	mask_1.setTransform(52.6,26.3);

	// Layer 3
	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(59.1,51.7,1,1,0,0,0,42.6,41.2);
	this.instance_1.alpha = 0.98;

	this.instance_1.mask = mask_1;

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(16.5,10.6,85.3,42.1);


(lib.ClipGroup_10 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	mask_10.graphics.p("AjOEXQgegFgvgRQg5gVgTgFQhJgTgdgRQgwgbgSg2QgGgUABgfQAAggAJgdQARg2AhgOQATgJAZAKQAUAIANAPIAsAuQAZAVAhADQAhACAvAAIBPgBICGACICEABQA1AAANgBQAngEAWgQQAbgRALgmQAIgaABgsQgEg3AAgfQABg3AbgSQBOg0A9B8QApBRAPBlQAZCagtBGQgRAZgeAMQgSAHgcAEIgvAEIhxALQhEAHguACQhyAJg5ACIguABQhJAAg1gKg");
	mask_10.setTransform(53.4,69.6);

	// Layer 3
	this.instance_10 = new lib.Group_0_1();
	this.instance_10.setTransform(51.4,41.2,1,1,0,0,0,42.6,41.2);
	this.instance_10.alpha = 0.281;

	this.instance_10.mask = mask_10;

	this.addChild(this.instance_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(8.8,40.6,85.3,41.8);


(lib.Explode = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// explode part 3
	this.instance = new lib.explodepart3();
	this.instance.setTransform(-0.5,3.6,0.514,0.514,0,0,0,34,28.2);
	this.instance.cache(0, 0, 80, 80);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:-2.3,y:51.5,alpha:0},7).wait(4));

	// explode part 2
	this.instance_1 = new lib.explodepart2();
	this.instance_1.setTransform(12.3,-2.6,0.514,0.514,0,0,0,29,26.7);
	this.instance_1.cache(0, 0, 80, 80);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1,x:77.9,y:-41.9,alpha:0},7).wait(4));

	// explode part 1
	this.instance_2 = new lib.explodepart1();
	this.instance_2.setTransform(-6.7,-13.9,0.514,0.514,0,0,0,34.6,33);
	this.instance_2.cache(0, 0, 80, 80);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:34.7,scaleX:1,scaleY:1,x:-62.8,y:-48.2,alpha:0},7).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.5,-30.8,51.7,48.9);


(lib.Enemy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgNAGIAAgLQgBgPAOAAQAPAAgBAPIAAALQABAPgPAAQgOAAABgPg");
	this.shape.setTransform(15.6,-22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJAmQgHgCgCgFQgIgYgQgVQgEgFACgGQACgGAFgDQAMgHAHAMQANASANAbQAGAOgLAGQgEACgEAAIgEAAg");
	this.shape_1.setTransform(12.8,-26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAgQgLgFADgMQAAgDgBgEIgDgHQgDgFAAgHQgBgOAPAAQAPAAABAOIAAACIABAAIAZgTQAFgEAFAAQAGgBAFAFQAEAEAAAHQAAAHgEADIgYAOQgNAKgGAJQgFAHgHAAIgHgBg");
	this.shape_2.setTransform(8.2,-27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKArQgHg4AAgdQAAgPAPAAQANAAAAAPQAAAdAHA4QABAOgPAAQgNAAgBgOg");
	this.shape_3.setTransform(5.9,-29.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAkQgDgXgKgsQgDgOAPgEQAMgEADAOQAMA8ACAPQACAPgPAAQgNAAgCgPg");
	this.shape_4.setTransform(4.9,-36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgMAOQgFgFAAgGQAAgEAFgFIAGgGQAFgFAEAAQAGAAAEAFQAFAEAAAGQAAAFgFAEIgGAHQgFAEgEAAQgGAAgEgEg");
	this.shape_5.setTransform(2.5,-39.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgZA5QgOgEACgOQAEgWAQgXIAbgrQAHgNANAIQANAHgIANIgaAmQgNAXgEAUQgCALgJAAIgGgBg");
	this.shape_6.setTransform(-0.8,-33.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgVApQgPgEADgPQAGgfAngdQAMgIAHANQAIANgMAIQgbATgEAYQgCALgJAAIgGgBg");
	this.shape_7.setTransform(-3.8,-28.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAAAdQgFgDgBgGQgDgPgJgNQgHgMANgIQAMgHAGAMQALASAEARQABAGgDAGQgCAFgHACIgEAAQgDAAgDgCg");
	this.shape_8.setTransform(-9.2,-28.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCAgQgHgCAAgHIgHglQgCgPAMgEQAGgBAEADQAGACABAHIAGAlQADAPgNAEIgEABQgDgBgCgCg");
	this.shape_9.setTransform(15.2,-23.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgVAaQgEgEgBgGQAAgHAFgEQANgKAIgRQABgGAHgBQAGgCAFAEQAGADABAGQABAGgCAFQgKATgPAOQgFAFgGgBQgGABgEgFg");
	this.shape_10.setTransform(14.1,-15.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgIAsQgOgEAEgOQAIgYACgfQABgOANAAQAPAAgBAOQgCAkgJAbQgDAKgIAAIgGAAg");
	this.shape_11.setTransform(16.3,-21.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgoAlQAFg0A2ghQAMgHAIANQAHANgMAHQgoAXgEAkQgCAOgPAAQgPAAACgOg");
	this.shape_12.setTransform(-12.5,-26.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAABOQgJgCgEgJQgNghABgjQABglARgfQAHgMALAHQANAIgHAMQgOAZAAAeQAAAOACANQAFgCAIAEQANAIgHANQgHAOgFAGQgFAHgHAAIAAAAg");
	this.shape_13.setTransform(-13.6,-22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAAAcQgGgDgBgGQgBgHgJgSQgGgOALgHQAFgDAHACQAEABADAGQALAXACAJQABAGgDAFQgDAGgGABIgEABQgEAAgBgCg");
	this.shape_14.setTransform(-36.6,11.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgxBYQgLgKALgJQAggaASgpQASgkAGgtQACgOAPAAQAPAAgCAOQgHA0gTAoQgXAwgiAdQgFAEgFAAQgFAAgGgGg");
	this.shape_15.setTransform(6.8,22.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgZBSQgMgHAFgNQAIgSAJg0QAIguANgWQAIgMANAHQANAIgIAMQgJANgFAVIgHAjQgIAqgJAbQgEAIgGAAQgEAAgFgDg");
	this.shape_16.setTransform(9.6,20.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgbBEQgfghgQglQgTgvAMglQAEgOAPAEQAOAEgEAOQgIAYAMAiQAJAYATAaQAVAgAVAFQAWAFANgiQAFgNAPAEQAOAEgFANQgUAygiACIgEAAQgcAAgbgeg");
	this.shape_17.setTransform(-1,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AAFBrQgZhAgIgpQgNg7APgwQAEgOAOAEQANAEgEAOQgMAsALA3QAIAkAaA9QAFAOgOAEIgGAAQgJAAgFgKg");
	this.shape_18.setTransform(-6.5,19.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgMAPQgGAAgEgFQgFgFAAgFQAAgFAFgEQAEgFAGAAIAZAAQAGAAAEAFQAFAEAAAFQAAAFgFAFQgEAFgGAAg");
	this.shape_19.setTransform(-22.5,-8.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgTAQQgOgGADgLQACgFAFgEQAGgDAGACQAJADADAAIABgBIABgCQAHgNANAIQANAIgHAKQgIAOgOADIgHABQgJAAgKgEg");
	this.shape_20.setTransform(15.9,-4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgzAQQAAgPAOgBQAlgCAZgWQALgKALALQALAKgLAKQgkAdgwAEIgCAAQgMAAAAgOg");
	this.shape_21.setTransform(11.4,-12.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ACIAVQi1gGhagHQgOgBAAgNQAAgPAOABQBaAHC1AGQAOABAAANQAAAOgNAAIgBAAg");
	this.shape_22.setTransform(3.2,-11.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AB4AiQglgEhTgRQhLgNgrgEQgPgBAAgPQAAgPAPABQArAEBLAPQBTAPAlAEQAOACAAAPQAAAOgLAAIgDgBg");
	this.shape_23.setTransform(-6.5,-12.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AArAbIgvgNQgdgHgTgHQgOgFAIgNQAIgNANAGQARAHAZAHIAtALQAOACgDAOQgDAMgJAAIgGgBg");
	this.shape_24.setTransform(-15.2,-15.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgGAiQgOgEAEgOIAEgVIABgLQABgGACgEQADgGAGgBQAIgBAEAFQAHAJgDAGIAAABIgBABIAAACIgBAKQgCAQgDAIQgDALgHAAIgGgBgAAQgLIAAgBIABAAIAAgBIAAAAIAAABIgBABg");
	this.shape_25.setTransform(15.9,-9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag2ATQAAgPAOAAQAcAAAMgCQAZgEAAgRQAAgOAPAAQAPAAAAAOQAAA1hfAAQgOAAAAgPg");
	this.shape_26.setTransform(12.2,-6.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABUAYIhUgMQgwgHgjgBQgOAAAAgNQAAgPAOAAQAjABAwAHIBUAMQAOACAAANQAAAOgLAAIgDgBg");
	this.shape_27.setTransform(-6.7,-6.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgwAOQgPgCAAgNQAAgPAPACQA1AFAogGQAOgCAEAOQAEANgOACQgdAEgcAAQgWAAgWgCg");
	this.shape_28.setTransform(7.9,-5.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAXAlQgvgSgPglQgDgGAEgGQADgFAGgCQANgDAFAOQAKAXAgALQAOAFgEAOQgDALgIAAIgHgBg");
	this.shape_29.setTransform(-15.8,-8.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgCArQgagoAEgmQACgPAPAAQANAAgCAPQgDAgAVAfQAIANgNAHQgFADgEAAQgHAAgDgIg");
	this.shape_30.setTransform(-18.8,-11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgNAAQAAgOANAAQAOAAAAAOQAAAOgOABQgNgBAAgOg");
	this.shape_31.setTransform(-19.8,-15.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAKAVIgCAAIAAAAIAAAAIgBAAIgDgBIgEgBIgCgCIgHgDIgMgEQgHgDgEgEQgIgEAFgKQAEgJAJgBIAFABIAFADIAAAAIAMAFIAKAFIADAAIAKAAQAPAAAAANQAAAQgPgBIgNAAIAAAAgAAHAVIABAAIgBAAg");
	this.shape_32.setTransform(20.5,-2.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgWAPQgPgBABgOQgBgNAPAAIAtAAQAOAAAAANQAAAOgOABg");
	this.shape_33.setTransform(-24.8,-6.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgMATQgKgEADgKIAAgCQgPgBgSABQgPABAAgNQAAgPAPgBQAxgDAfAMQAKADABALIAKgDQAOgEAEANQADAOgOAEQgRAFgPAAQgUAAgQgIg");
	this.shape_34.setTransform(32.2,-6.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag6BuQgHgNAMgIQArgbASg9QAFgMAThfQADgOAOADQAOAEgCAOQgTBfgKAXQgXBCgvAeQgEADgEAAQgHAAgFgIg");
	this.shape_35.setTransform(35.5,7.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGBmQgPgEADgOQAIgnABguQABgdgCg6QgBgOANAAQAPAAABAOQACA7gBAeQgCAzgIAoQgCALgHAAIgGgBg");
	this.shape_36.setTransform(38.6,2.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AglAaQgKg6APgzQAEgOAPAEQANAEgDAOQgLAjAEAvQAGA8AfgDQAPgBAAAPQAAAPgPABIgGABQgtAAgNhFg");
	this.shape_37.setTransform(30.1,8.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgHBSQgLgwgBgiQgCgsANgmQAFgOAMAEQAPAEgFAOQgMAiACAoQABAeAJAsQADAPgOAEIgFABQgIAAgCgMg");
	this.shape_38.setTransform(27.6,-0.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AACBrQgshoAShqQACgOAPAEQANAEgDAOQgOBfAnBbQAGANgNAIQgFADgDAAQgHAAgEgIg");
	this.shape_39.setTransform(29.3,8.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgsBWQgXhWAQhPQACgKAMgBIBRgFQANgBACAOQABAMgIADQgCANgNAAIgxAAQgJAAgDgHQgLBAAUBLQAEAOgPAEIgGAAQgJAAgDgKg");
	this.shape_40.setTransform(-35.5,-3.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgMBYQgNhcAQhTQADgOAMAEQAPAEgDAOQgPBOAMBRQACAOgOAEIgEABQgJAAgCgLg");
	this.shape_41.setTransform(-38.9,-0.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgEBKQgPgFADgOQAIgygEhAQAAgOANAAQAPAAAAAOQAEBEgKA2QgBALgJAAIgEAAg");
	this.shape_42.setTransform(-30,-1.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXApQgKgLAIgLQARgTAIghQADgOAPADQAOAEgEAOQgLAlgUAdQgFAGgFAAQgEAAgGgFg");
	this.shape_43.setTransform(-32.4,10.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGBsQgOgEACgPQAPhigJhVQgCgOAOAAQAOAAACAOQAKBVgRBqQgCAMgHAAIgGgBg");
	this.shape_44.setTransform(-29.9,-0.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgpAGQgEgMANgFQANgEASgBIAdABQAPAAAAAPQAAANgPAAIgbgBQgOAAgLAEIgGABQgIAAgDgLg");
	this.shape_45.setTransform(25.1,8.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ADbAVIjbgIQh9gFhdAAQgOAAAAgNQAAgPAOAAQBdAAB9AFIDbAIQAOABAAANQAAAOgNAAIgBAAg");
	this.shape_46.setTransform(-1.7,8.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("Ag0CoQgNgHAHgNQBZidAAiTQAAgOAPAAQAPAAAAAOQAACbhdCkQgEAIgHAAQgEAAgFgDg");
	this.shape_47.setTransform(14.9,22.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("Ag7ClQgNgIAIgMQB+ixgdh0QgEgOAPgEQAOgEAEAOQAgCAiEC9QgFAHgHAAQgEAAgFgDg");
	this.shape_48.setTransform(14.1,25.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhrBeQAAgPAPgBQA4gGAvg+QAageAqhPQAHgNANAIQANAHgHANQgtBUghAlQg2BAhBAHIgDAAQgMAAAAgOg");
	this.shape_49.setTransform(6.9,36.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("ABQDFQgxgRgmg2Qgdgogbg/Qg6iJAohMQAHgMANAHQANAIgHANQgjBCA6CAQAZA3AUAfQAjAwAoAOQANAFgEAOQgCALgJAAIgGgBg");
	this.shape_50.setTransform(-8.2,27.2);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(-0.1,3.7,1,1,0,0,0,41.5,44.5);

	this.addChild(this.instance,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.6,-41.3,83.4,89.4);


(lib.Enemy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAAdQgGgDgBgGIgKgfQgEgOAOgEQANgDADAOIAGAQIAEAOQABAHgCAFQgDAFgGABIgEABQgEAAgBgCg");
	this.shape.setTransform(18.6,23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTAkQgNgHAJgMQALgQAMgcQAEgOAMADQAGACADAFQAEAGgCAFQgNAigOASQgDAHgGAAQgFAAgFgDg");
	this.shape_1.setTransform(-7.7,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZAkQgGgSAKgVQAFgMAQgYQAIgLAMAHQANAIgIAMIgSAXQgIARACALQAFAOgMAEIgGABQgKAAgDgLg");
	this.shape_2.setTransform(-12.1,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgJAgQgFgWgBgKQgDgRAEgOQACgOANAEQAOAEgDAOQgCAKADANIAEAYQADAOgOAEIgFABQgIAAgCgLg");
	this.shape_3.setTransform(9.8,11.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgIAhQAAgZgFgTQgEgEgBgHIgBgKQgCgNAOgBQALgBAFALQALAfAAAmQAAAPgPAAQgNAAAAgPg");
	this.shape_4.setTransform(9.3,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFAVQgNgDADgPQAAgHAGgKQADgFAGgCQAFgBAFADQAFADABAGQACAGgDAEIgEALQAAAGgGADQgEACgCAAIgEgBg");
	this.shape_5.setTransform(16.6,-29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgHAcQgPgEAEgOQAFgSAHgMQAGgMAMAHQANAIgIANQgCAEgGARQgDAMgIAAIgFgBg");
	this.shape_6.setTransform(12.4,-30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgFAcQgGgBgDgGQgEgGADgFQAEgLAAgLQAAgGAFgFQAEgEAEAAQAGAAAFAEQAEAFAAAGQAAARgGAMQgEALgHAAIgFAAg");
	this.shape_7.setTransform(7.4,-30.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgMARQgFgRAFgQQAEgOAMAEQAPAEgEAOQgCAIACAKQAEANgPAFIgEAAQgJAAgDgLg");
	this.shape_8.setTransform(0.3,-31.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAfQgGgDgBgGQgDgSAGgZQADgOAMAEQAPAEgEAOQgEASACAKQABAGgDAFQgDAFgGACIgCAAQgDAAgEgCg");
	this.shape_9.setTransform(-7,-29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLAfQgFgFAAgGIAFgoQABgOANAAQAPAAgBAOIgFAoQgBAPgMAAQgGAAgEgEg");
	this.shape_10.setTransform(-11.4,-28.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAlQgOgDADgPQAGgbABgPQABgOANAAQAPAAgBAOQgBASgHAgQgBAGgGADQgDACgDAAIgDgBg");
	this.shape_11.setTransform(21.8,-24.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgQAqQAChAADgTQABgOANAAQAPAAgBAOQgDATgCBAQgBAOgNAAQgPAAABgOg");
	this.shape_12.setTransform(-17.6,-24);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgOAFIAAgKQABgOANAAQAPAAAAAOIAAAKQAAAPgPAAQgNAAgBgPg");
	this.shape_13.setTransform(10.4,-16.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLANQgEgFAAgGQAAgEAEgEIADgGQAEgEAFAAQAGAAAEAEQAFAFAAAGQgCAIgFAGQgFAEgEAAQgGAAgFgEg");
	this.shape_14.setTransform(5.3,-17.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgGAWQgFgDgCgGQgHgOALgPQADgFAGgCQAEgBAFADQAFADACAGQACAGgEAFIgBABIAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAgBAAAAIABAEQACAFgDAGQgDAFgGACIgDAAQgDAAgDgCg");
	this.shape_15.setTransform(-2.8,-17.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNAKIAAgUQAAgOANAAQAOAAAAAOIAAAUQAAAPgOAAQgNAAAAgPg");
	this.shape_16.setTransform(0.9,-16.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgmAMQgBgQAXgJQANgFAYgHQAFgCAGADQAFAEACAGQADAMgOAEIgZAHIgKAFIgBABIAAgCQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAgBAAIACAAQgCAMgNAAQgPAAAAgPg");
	this.shape_17.setTransform(-13.4,-17.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABaAgQgigbg5gGQgmgFg/ACQgOABAAgPQAAgPAOgBQBEgCArAHQA/ALAoAdQALAJgLAKQgGAGgGAAQgFAAgFgEg");
	this.shape_18.setTransform(9.5,-18.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgNAMIAAgXQgBgOAOAAQAPAAgBAOIAAAXQABAOgPAAQgOAAABgOg");
	this.shape_19.setTransform(16.4,-13.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgMAUQgFgRAFgVQABgGAGgDQAFgEAEACQAHACACAFQADAFgBAGQgDANADAKQAEAOgPAEIgEABQgJAAgDgLg");
	this.shape_20.setTransform(13.5,-13.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgOAaIAAgzQAAgOAOAAQAOAAABAOIAAAzQgBAOgOAAQgOAAAAgOg");
	this.shape_21.setTransform(10.2,-13.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgLAgQgEgEAAgGIADgrQgBgOANgBQAPABABAOIgDArQgBAPgMgBQgGABgFgFg");
	this.shape_22.setTransform(5.8,-13);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgNAWIAAgrQAAgOANAAQAOAAAAAOIAAArQAAAOgOAAQgNAAAAgOg");
	this.shape_23.setTransform(1.7,-13.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgOAWIAAgrQAAgOAOAAQAPAAAAAOIAAArQAAAOgPAAQgOAAAAgOg");
	this.shape_24.setTransform(-2.1,-13.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMAZIgCgZQgBgPAAgKQABgOAOAAQAOAAgBAOQAAAKABAPIACAZQgBAPgPAAQgNAAABgPg");
	this.shape_25.setTransform(-6.7,-14.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgMAbQgDgjAAgSQAAgOAPAAQANAAAAAOQAAASADAjQgBAOgPAAQgNAAABgOg");
	this.shape_26.setTransform(-11.7,-14.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgUAdQgEgEgBgHQAAgHAFgEQAUgOgBgHQgBgGACgFQABgFAGgCQAGgBAGADQAGADAAAGQADAPgIAMQgGAKgOANQgFAEgFAAQgGAAgEgEg");
	this.shape_27.setTransform(18.7,-11.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgOAjQgKgKAJgLQAEgEADgJQADgJgEgDQgMgIAIgNQAHgMAKAIQARAMgBAXQgBAUgOAQQgFAGgDAAQgFAAgGgGg");
	this.shape_28.setTransform(19.9,-12.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAEAVQhPgJgjAAQgPABAAgNQAAgPAPgBQAVAAAnADQApACARAAIAwACQAcgBASgIQANgHAIANQAIAMgNAFQgiAQg4AAIgYAAg");
	this.shape_29.setTransform(6.1,-10.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ah9ADQgOgDAEgNQAEgOAOADQB1AcB6gLQAPgCAAANQAAAPgPACQgnAEgmAAQhVAAhVgWg");
	this.shape_30.setTransform(-0.4,-10.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgkA9QgsgHgXgXQgGgGgDgVQgCgTAEgIQARgcBQgKQBDgJAwANQAOAEgDAOQgEAPgOgEQgpgLgwADQgzAEggAVQgHgGADAIIADAYQgBAJAFgJQAYANAeAFQAWADAigBQAPAAAAAPQAAAPgPAAIgOABQgiAAgYgFg");
	this.shape_31.setTransform(-6.3,-15.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AAKAhQgZgSgHgHQgQgQAKgUQACgFAHgCQAGgBAFADQAGADABAGQABAFgCAGIAAAAIABACQABAEAFADIAUALQAMAIgHANQgFAIgGAAQgEAAgFgDg");
	this.shape_32.setTransform(-14.7,-13.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgJAmQgKgmACgiQABgOAPAAQANAAgBAOQgCAgAJAgQAEAOgPAEIgGABQgHAAgDgLg");
	this.shape_33.setTransform(21.2,-7.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgNAbIgBg2QAAgOAOABQAOgBAAAOIABA2QAAAOgPAAQgNAAAAgOg");
	this.shape_34.setTransform(21.4,-7.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAiQgJgKAHgLIAAgCIABgDIAAgKIgBgJIgBgCQgGgGAGgKQAIgNAKAHQAKAFACAcQABAYgKALQgFAGgDAAQgFAAgFgFg");
	this.shape_35.setTransform(-15.7,-8.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgmAhQgLgLAKgKQAKgJATgNIAcgXQAKgKALALQALALgLAJIgeAWQgRAOgJAJQgFAGgGAAQgFAAgFgGg");
	this.shape_36.setTransform(-19.4,-3.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgMB/QgOgEACgOIAOg6QAIgkgCgWQgBgRgFgkIgHg1QgBgOAPAAQANAAABAOIAJA9QAGAmgCAVQgCAWgHAhIgMA3QgCALgHAAIgGgBg");
	this.shape_37.setTransform(28.2,12.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AASAhQgJgLgQgOIgdgUQgLgKAKgLQALgKALAJIAbAXQASAMAJALQAJALgLALQgFAFgFAAQgFAAgEgGg");
	this.shape_38.setTransform(24.9,-1.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgjA9QgNgIAHgMIAdgyQAPgeAQgTQAJgLALALQAKALgJALQgPARgQAbIgYAwQgEAIgHAAQgEAAgFgDg");
	this.shape_39.setTransform(-25.9,4.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgFAQQgIgIgDgHQgDgEABgFQACgGAFgDQAFgDAGABQAFABADAGQACAFAFADQAEAEAAAFQAAAHgEAEQgFAFgGAAQgEAAgFgFg");
	this.shape_40.setTransform(-12.1,40);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAoQgLgKALgJQAWgRABgjQABgOAPAAQAPAAgBAOQgEAygbAXQgGAEgFAAQgGAAgFgGg");
	this.shape_41.setTransform(16.9,38.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQAqQgLgLAKgKQAQgQgFggQgCgPANgEQAOgEACAPQAIAzgbAaQgDAFgFAAQgFAAgFgFg");
	this.shape_42.setTransform(17.4,36.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAAAiQgGgDgBgGQgDgbgHgKQgIgNANgHQAMgIAHAMQAJAPAEAeQACAPgMADIgEABQgEAAgCgCg");
	this.shape_43.setTransform(13.8,36.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgGAdQAAgQgOggQgFgNAMgHQANgIAEANIAMAgQAGAPAAAQQABAOgPAAQgNAAgBgOg");
	this.shape_44.setTransform(13.3,37.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgFAaQgGgCgDgFQgDgGACgGIAEgVQACgGAFgDQAEgDAGACQAGABADAGQADAFgCAGIgFAVQgBAGgFADQgEACgCAAIgEAAg");
	this.shape_45.setTransform(-11,37.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgOAsQgOgEAEgOIAKghQAGgTAJgNQAJgLALALQAKAKgJALQgIAJgEAPIgHAcQgDALgIAAIgGgBg");
	this.shape_46.setTransform(-10.7,37.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgEAlQgRgdgBgmQAAgOAPAAQANAAAAAOQABAeANAWQAIAMgNAIQgFADgEAAQgGAAgEgIg");
	this.shape_47.setTransform(-14,36.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgGAgQgQgfADgZQACgPANAAQAEAAAFAEQAFAFgBAGQgDAVAMAUQAGANgNAIQgEACgEAAQgFAAgEgIg");
	this.shape_48.setTransform(-13.9,36.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AATAZQgaghgOAIQgLAJgIgLQgIgNAMgIQASgOAXANQATAKAQASQAJALgKALQgGAFgEAAQgFAAgFgGg");
	this.shape_49.setTransform(15.9,20.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgiAUQgEgOAOgEQAbgEADgSQABgGAGgDQAGgDAGACQAMADgCAPQgFAfguAMIgGABQgJAAgDgMg");
	this.shape_50.setTransform(18,27);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAKA+QgjgQgHgvQgGg0AqgJQAOgEAEAPQAEAOgOADQgXAGAKAcQAHAcAUAJQANAFgIANQgFAJgIAAQgEAAgEgCg");
	this.shape_51.setTransform(14,23.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgOA+QgNgFAEgOQAEgPANAGQAcALAHgMQAIgOgJgVQgIgYgRgJQgQgJgVAUQgLAKgLgLQgKgKAKgKQAngjAhASQAeAQAMAmQALAmgRAWQgMAPgUACIgFAAQgOAAgPgHg");
	this.shape_52.setTransform(-16.5,24.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAJA0QgNgKgMgRQgLgSgDgPQgDgVAKgNQAKgOAUACQAOACAAAPQAAAQgOgDIgIAAIAAABQgBAGACALQAJAXAPAJQAMAIgHANQgFAIgGAAQgEAAgFgDg");
	this.shape_53.setTransform(-18.3,24.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ag9AiQAAgPAOAAQAdgCATgOQAWgNAJgbQAFgOAOAEQAPAEgFAOQgNAjgdAUQgaAVgoACIgBAAQgNAAAAgPg");
	this.shape_54.setTransform(22.7,27.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAEAZQhygQg5gGQgPgCAAgNQAAgPAPACQA1AFBwASQBhAHBAgcQANgHAIANQAIANgOAEQg4AbhNAAIglgCg");
	this.shape_55.setTransform(0.3,32.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAzCTQhkhCgQhTQgVhqApgkQALgKAKALQALALgLAJQgVATACAwQABAoANAeQAZA9BGAuQAMAIgHANQgFAIgHAAQgEAAgEgDg");
	this.shape_56.setTransform(-23,18.7);

	this.instance = new lib.ClipGroup();
	this.instance.setTransform(0.7,6.2,1,1,0,0,0,30.5,38.5);

	this.addChild(this.instance,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.4,-34.2,61.6,78.9);


(lib.Enemy1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFANIgFgEQgFgDgCgGQgBgEADgFQADgFAGgCQAGgBADACIALAIQAEAFAAAEQAAAHgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape.setTransform(-30.3,-6.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLA+QgEgOANgFQAUgHgQgkQgNglgSgHQgNgGAIgNQAIgNANAGQAjAQANA2QANA6gsAOIgEABQgIAAgDgLg");
	this.shape_1.setTransform(35.2,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAnAiQgNgIAIgMIAFgJQABgEgGgBQgLgFgUAAQgigCgUAHQgNAEgEgNQgEgOANgFQApgPAxANQA7APgeAsQgFAIgGAAQgFAAgFgDg");
	this.shape_2.setTransform(34.2,-1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgMBBQgOgEAFgNQAMghADgNQAGgbgMgSQgIgMANgHQALgIAIAMQAPAXgEAjQgDATgOAlQgEAKgIAAIgGgBg");
	this.shape_3.setTransform(29.6,21.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgEBCQgPgEAFgOQAIgVgEgbQgGgigCgRQgCgPAPAAQANAAACAPIAIA1QAEAfgJAXQgDALgKAAIgEgBg");
	this.shape_4.setTransform(27.5,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhtAaQg0gHgdgVQgLgJAKgLQALgKALAIQAdAXA8ABQASABBLgCQBCgDBngMQAPgCAAAPQAAANgPACQiIAQhDAAIgRAAQgwAAgXgCg");
	this.shape_5.setTransform(1.3,12.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABDA/QhRgbgPgHQg0gcgEgyQgBgOAPAAQAPAAABAOQADAnAwATQAZAMA2AOQAOAEgEAPQgDAKgIAAIgHgBg");
	this.shape_6.setTransform(-31.6,4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgnBSQgOgEAEgNQAPg5ALgbQAVgyAigMQAOgEAEAOQAEAPgOAEQgbAJgNAsQgJAZgLAvQgDAKgKAAIgGgBg");
	this.shape_7.setTransform(-22.6,-22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAqBBQgKgKglgvQgeghgZgPQgNgIAIgNQAHgNANAIQAbAQAdAlQAqAvAKAKQALAJgLALQgFAGgFAAQgFAAgGgFg");
	this.shape_8.setTransform(17,-24.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AB9ApQhOgigtgKQhMgWguAeQgMAIgHgNQgIgLAMgIQAzgkBUAVQAvAMBWAiQANAFgEAPQgDALgIAAIgGgCg");
	this.shape_9.setTransform(1,-31.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgLARQgFgDgCgGQgBgGADgDQAFgKAKgGQADgCAGABQAGACADAFQADAFgBAGQgCAFgFACIgCACIgBAAIgBADQgDAFgFACIgDAAQgEAAgEgCg");
	this.shape_10.setTransform(30.1,-5.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhbAsQAAgPAOgBQAmgBAogYQApgVAVggQAIgMANAHQANAIgIAMQgaAlgwAbQgtAbgvACIgBAAQgNAAAAgOg");
	this.shape_11.setTransform(22.4,-1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADAbQgDgDgCgGQgEgNgLgFQgNgGAIgNQAIgNAMAHQATANAIAWQACAFgDAGQgEAGgFABIgEABQgEAAgEgCg");
	this.shape_12.setTransform(34.7,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgNAvQgPgEACgOQAIguATgYQAKgLAKAKQALALgKALQgJALgFAPQgDAJgEAWQgBALgHAAIgGgBg");
	this.shape_13.setTransform(-25.8,-16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLAdQgFgEABgHIADgjQABgHAEgEQAEgFAEAAQAHAAAEAFQAFAFgBAGIgDAjQgCAPgLABQgGgBgFgEg");
	this.shape_14.setTransform(-27.8,-5.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAhQgNgDACgPIAFghQAAgGAEgEQAEgFAFAAQAGAAAEAFQAFAEAAAGIgGApQAAAGgHADQgEACgBAAIgEgBg");
	this.shape_15.setTransform(30.5,-4.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAaBiQgahkg0hUQgIgMANgHQANgHAIALQA2BXAbBoQADAOgOAEIgGABQgJAAgDgLg");
	this.shape_16.setTransform(25.5,-12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAJAXIgggVQgMgFAIgNQAHgNANAHIAfAVQAMAFgHANQgFAIgHAAQgEAAgEgCg");
	this.shape_17.setTransform(15.6,-26.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgmANQgHgNANgFQAZgMAigEQAPgBAAAPQAAANgPABQgbADgRAJQgFADgDAAQgIAAgFgJg");
	this.shape_18.setTransform(-14.6,-31.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgvAKQgEgMAOgEQAegJApgFQAPgCAAAPQAAANgPACQgeADghAJIgFABQgKAAgDgLg");
	this.shape_19.setTransform(-15.3,-31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgBAVQg1gCgtgMQgOgDAEgNQAEgOAOADQArALAxACQAlABA6gDQAPgBAAANQAAAPgPABQgrADghAAIgVgBg");
	this.shape_20.setTransform(-11.5,10);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgRATQgEgNAEgKQAEgMAKgJQADgEAFAAQAGAAAFAEQAEAFAAAGQAAAHgEAEQgJAFADAJQAEAOgOAEIgFABQgJAAgDgLg");
	this.shape_21.setTransform(-35.5,-3.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAEAhQgbgUgDggQAAgGAFgEQAEgFAGAAQAGAAAFAFQACAEAAAGQACARAPAJQAMAJgHALQgDAFgGACIgEABQgEAAgDgCg");
	this.shape_22.setTransform(-37.5,1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgXAeQgOgEAEgOQAGgWARgMQARgPAVAOQAMAIgIANQgHALgMgIQgEgBgCAAQgCAAgEADQgCAGgDALQgDALgKAAIgGgBg");
	this.shape_23.setTransform(-32.7,-4.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgnAOQgOgBAAgOQAAgPAOACQAnADAogCQAOAAABANQgBAPgOAAIgbABQgZAAgbgCg");
	this.shape_24.setTransform(-10.3,10);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgDAoQgNgHAIgNQAMgVgUgNQgNgHAIgNQAHgNANAHQATANAGAVQAFAUgNAVQgFAIgHAAQgEAAgDgDg");
	this.shape_25.setTransform(35.2,0.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AiNAaQgOgCAEgPQAEgMAOACQBUANAzgEQBLgFA2glQALgJAIANQAHANgLAJQg6AphRAFIgXABQg0AAhJgNg");
	this.shape_26.setTransform(18.2,9.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgBAzQgNgIAIgMQAJgRgCgOQgBgTgTgEQgOgDAEgPQAEgOAOADQAgAHAIAiQAHAdgSAcQgFAIgHAAQgEAAgDgDg");
	this.shape_27.setTransform(34.7,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgTAVQgFgDgCgGQgCgGADgGQAEgDAFgCQAMgDAGgIQAKgLALALQAKAKgKAJQgNAOgSAFIgEABQgDAAgEgCg");
	this.shape_28.setTransform(33.3,6.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgNAnQgKgLALgKQAJgIgCgKQgCgJgKgJQgLgJALgLQALgKAJAJQASARACAWQACAXgSAQQgFAFgEAAQgFAAgGgFg");
	this.shape_29.setTransform(35.5,2.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAOAeQgGgCgDgFQgFgMgEgHIgEgEQgHAHgJgGQgFgBgCgGQgCgHAEgEQAIgLAMgBQAJgBAKAJQALALAKASQADAGgBAFQgCAGgFADQgEACgEAAIgEAAg");
	this.shape_30.setTransform(31.7,-3.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhAALQgOgCAEgMQAEgPAOACQA0AJBBgGQAPgCAAAPQAAANgPACQgbACgaAAQglAAgjgGg");
	this.shape_31.setTransform(-15.4,1.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAYQgQgOABgPQACgOAJgFQAIgEANACQAGABADAGQADAGgCAFQgCAIgIABIACACQAEAEAAAGQAAAGgEAFQgFAEgGAAQgEAAgEgEg");
	this.shape_32.setTransform(-28.2,-3.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgEAWQgLgQgFgPQgCgGADgFQAEgGAFgBQAGgCAEADQAFADACAGQAEAOAJAJQADAFgCAHQgCAGgFADQgEACgDAAQgHAAgEgHg");
	this.shape_33.setTransform(-32.1,-4.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgMATQAAgTgDgRQAAgGAFgFQAEgEAGAAQAMAAABAPQADARAAATQABAOgPAAQgNAAgBgOg");
	this.shape_34.setTransform(34.3,11.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgDAeQgEgFgBgGQAAgRgJgMQgHgMANgIQALgIAHANQAMAUABAYQABAGgFAFQgFAEgGAAQgFAAgDgEg");
	this.shape_35.setTransform(33.6,11.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgEAcIgRgvQgFgOAPgDQAMgEAFANIARAvQAEANgOAEIgHABQgHAAgDgKg");
	this.shape_36.setTransform(29.1,14.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAGA9QgCgZgOgjIgYg4QgFgOAPgEQAOgEAFAOQAFAVASApQAPAiADAcQACAOgPAAQgPAAgCgOg");
	this.shape_37.setTransform(28.2,15.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgCAcQgGgRgPgaQgHgNANgHQANgIAFANQAPAaAJAYQAFAOgPAEIgGABQgJAAgCgLg");
	this.shape_38.setTransform(36.3,13.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAABUQgMgEAEgOQAIgigDgfQgEgcgQghQgGgNANgIQAMgHAFANQATAmAEAkQAFAkgLAnQgCALgKAAIgGgBg");
	this.shape_39.setTransform(36.9,18.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgmA/QgHgNAMgIQAZgOAIgdQAEgKAIgwQADgOAOAEQAPAEgDAOQgIAygIARQgOAigcASQgFADgEAAQgHAAgFgIg");
	this.shape_40.setTransform(36.3,28.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAXAoQgLgQgTgQIglgZQgMgIAIgNQAHgNAMAIIApAgQAYARANATQAIAMgMAHQgFADgFAAQgHAAgFgHg");
	this.shape_41.setTransform(26.2,13.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAGAvQgVAAgRgNQgSgOgCgUQgBgVANgSQAIgMANAHQANAIgIAMQgIALAAAJQAAAKAKAGQAUANAXgQQAMgIAHANQAIANgMAIQgRAMgWAAIgBAAg");
	this.shape_42.setTransform(31.3,30.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgWAiQgFgDgCgHQgCgGADgFQAUgZANgSQAEgFAHAAQAGABAEAEQAKAKgKALIgcAlQgDAFgGACIgEABQgEAAgDgCg");
	this.shape_43.setTransform(-25.3,11.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgcBJQgNgIAIgNQADgGACgMIACgSQAFgQAEgJIAbg6QAGgNANAIQANAHgHANIgRAiQgLATgEAPIgDAaQgCAQgGAKQgEAIgHAAQgEAAgFgDg");
	this.shape_44.setTransform(-30.2,21.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgRAmQgFgFABgGQADgcAMgeQAFgNANAEQAOAEgFANQgMAbgCAXQgBAHgEAEQgCAEgGAAQgGAAgFgEg");
	this.shape_45.setTransform(-31.5,25.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgNAfQgFgEAAgGQACgTAHgaQAEgOANAEQAOAEgEAOQgGAVgCAQQgBAGgDAEQgFAFgEAAQgGAAgEgFg");
	this.shape_46.setTransform(-31.8,25.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgXASQgEgEAAgGQgBgHAFgCQAQgOARgGQAGgCAFADQAGAEABAFQACAGgDAFQgDAEgGACQgMADgIAJQgEAEgGABQgGAAgFgFg");
	this.shape_47.setTransform(-32.6,7.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAMAzQgagCgTgfQgPgWgEggQgCgOAPAAQAPAAACAOQADATAIAQQAKATAOADIAJgBIABAAIAAgHIgDgXQgCgOAPAAQAPAAACAOIADAVQABAOgEAJQgHARgZAAIgGAAg");
	this.shape_48.setTransform(-33.6,24.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgQAZQgNgHAHgNQAKgOAMgNQAEgEAHgBQAGAAAEAFQAEAEABAHQAAAGgFAEQgKAIgJANQgDAIgHAAQgEAAgEgDg");
	this.shape_49.setTransform(-33.4,7.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgUAlQgLgHAGgOQAJgUAQgaQAHgMANAHQANAIgIAMQgTAcgGASQgCAGgGABIgEABQgEAAgEgCg");
	this.shape_50.setTransform(-35.1,8.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgEAiQhfgLhPgfQgNgFAEgPQAEgOANAFQBOAgBcAJQBMAJBjgFQAOgBAAAPQAAAPgOABQgnACgjAAQg5AAgwgGg");
	this.shape_51.setTransform(-3.9,1.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("ACSApQgKgCiOgQQhcgKg6gZQgNgGAIgNQAHgNANAGQA4AZBYAKQCHAMAQADQAOADgEAOQgEAMgKAAIgEAAg");
	this.shape_52.setTransform(-14.1,-0.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAzQgKg0gQglQgFgNAMgHQANgIAGANQARAsALA0QADAOgOAEIgGABQgJAAgCgLg");
	this.shape_53.setTransform(26.9,-12.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgKAdQgEgEAAgGIABglQAAgPANAAQAPAAAAAPIgBAlQgBAGgDAEQgFAFgFAAQgFAAgFgFg");
	this.shape_54.setTransform(30.3,-4.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgMAiQgNgIAIgMQAKgPABgVQAAgOANAAQAPAAAAAOQgBAdgOAWQgFAIgFAAQgEAAgFgDg");
	this.shape_55.setTransform(28.3,-5.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AASAbQgXgRgbgLQgNgGAIgNQAHgNANAGQAXAMAbAQQAMAIgHANQgFAIgGAAQgEAAgFgDg");
	this.shape_56.setTransform(15.7,-25.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhXBnQgLhKAzg7QAtg3BJgcQAOgFAEAPQAEAOgOAFQg/AYglAsQguAyAJA9QACAPgOAEIgGABQgJAAgCgMg");
	this.shape_57.setTransform(-19.7,-22.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgjA0QAEg6Alg0QAJgMANAIQANAHgJAMQgiAvgDAwQgBAOgPAAQgPAAABgOg");
	this.shape_58.setTransform(-24.6,-19.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AglAWQgHgNALgIQAZgQAagMQAOgGAGALQADAFgBAHQgBAGgGADQgbAKgXASQgFADgEAAQgGAAgFgIg");
	this.shape_59.setTransform(-14.6,-30.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag3CTQgbhEArhUQA5hfAUgwQAGgNANAIQANAHgGANQgKAYgZApQgdAxgJASQgpBOAYA+QAFANgOAEIgFABQgKAAgFgKg");
	this.shape_60.setTransform(-24.8,-16.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("Ag3AMQgPgCAAgNQAAgOAPABQA3AGA4gBQAOAAAAANQAAAPgOAAIgRAAQgvAAgvgFg");
	this.shape_61.setTransform(-9.6,10.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ABcAcQh2gPhFgNQgOgBAEgPQAEgOAOADQA8ALB3AQQAPAAAAAPQAAAOgMAAIgDgBg");
	this.shape_62.setTransform(-6.4,11.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgXAaQgIgNAMgIQAQgIACgPQABgPAMAAQAGAAAEAFQAFAEAAAGQgFAfgaASQgEADgEAAQgGAAgFgIg");
	this.shape_63.setTransform(36.7,4.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AgpAMQgEgNAOgDQAggHATgKQANgGAIANQAHANgNAEQgWAMgkAIIgFABQgKAAgDgMg");
	this.shape_64.setTransform(31.9,7.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhKAUQgEgPAOgEIA9gPQAjgLAZgFQAOgDAEAPQAEAOgOADQgaAEgkAKIg7ARIgFABQgKAAgDgLg");
	this.shape_65.setTransform(27.8,11);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAVAQQgXgDgTgBQgPAAAAgNQAAgPAPAAQATABAXADQAQACAAALQAAAGgFAFQgFAFgFAAIgBgBg");
	this.shape_66.setTransform(12.3,12);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhHAYQgOgCAAgPQAAgNAOACQA3AEAPAAQAogBAVgVQAKgLALALQALALgKAKQgbAZguAEIgNAAQgZAAgqgEg");
	this.shape_67.setTransform(28.6,12.1);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgoAMQgEgMAOgEQAdgGAXgLQAGgCAGADQAFAEACAFQADALgOAGQgVAJgfAIIgFAAQgJAAgEgLg");
	this.shape_68.setTransform(31.5,10.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("ACEAbIiFgHQhQgEg2gOQgOgCAEgOQAEgPAOAEQA0ANBMAFICDAGQAPABAAANQAAAOgNAAIgCAAg");
	this.shape_69.setTransform(1.6,1.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAkAaQgrgKglgNQgNgDAEgPQADgOAOAFQAkANAsAKQAOABgEAPQgDALgKAAIgFAAg");
	this.shape_70.setTransform(-28.1,-3.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AALAQQgIgCgRgCQgHAAgEgEQgEgEAAgFQAAgGAEgEQAFgFAGAAIAhAFQAGABADAGQADAEgBAGQgCAGgFADQgEACgEAAIgEgBg");
	this.shape_71.setTransform(-29.1,-6.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgNAAQAAgOANAAQAOAAAAAOQAAAOgOABQgNgBAAgOg");
	this.shape_72.setTransform(-28,-6.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag2AzQgXgIABgSQABgSASgMQAWgSAigLQASgHApgJQAOgDAEAOQAEAOgOAEIgnAJQgXAGgOAGQgSAHgIAHIgHAGIgBADQALAFgDANQgDALgKAAIgFgBg");
	this.shape_73.setTransform(-33.5,-2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AhJAgQgGhGCLgHQAOgBAAAPQAAAPgOABQgtACgTAGQgpAJACAeQABAOgPAAQgPAAgBgOg");
	this.shape_74.setTransform(-33.3,-2.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AggAqQgNgDACgPQAGgoA+gZQAOgFAEAPQAEAOgOAFQgrAPgEAdQAAAGgHADQgEACgDAAIgEgBg");
	this.shape_75.setTransform(-33.6,-4.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgSAOQgPAAAAgOQAAgOAPAAIAlABQAPAAAAANQAAAPgPAAg");
	this.shape_76.setTransform(-28.1,8.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AAkAPQgvgCgYABQgPABAAgPQAAgNAPgBQAYgBAvACQAPABAAANQAAAOgNAAIgCAAg");
	this.shape_77.setTransform(-11.5,9.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AiDATQgOgBAAgPQAAgNAOABQBUAHAvgBQBGgBA5gTQAOgFAEAPQAEANgOAEQg7AThKACIgQAAQgvAAhGgGg");
	this.shape_78.setTransform(12.2,10);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAxAaQg0gIg1gQQgOgCAEgPQADgOAOAEQA0AQA2AIQAOABgEAOQgDANgLAAIgEgBg");
	this.shape_79.setTransform(-25.9,10.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AAdAQQgfgBgagCQgOgBAAgNQAAgPAOABQAaACAfABQAOABAAANQAAAOgNAAIgBAAg");
	this.shape_80.setTransform(-11.2,12.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AA6BSQg+gMgpgoQgygvAfg4QAHgNANAIQANAHgHANQgXAqAtAhQAhAbAxAJQAOADgEAOQgDAMgLAAIgEAAg");
	this.shape_81.setTransform(-32.6,2.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgMBCQgQgiACgmQADguAbgSQAMgIAIANQAHANgMAIQgSALABAhQAAAdAKAWQAHANgNAHQgFADgCAAQgGAAgFgIg");
	this.shape_82.setTransform(-36.5,15.8);

	this.instance = new lib.ClipGroup_3();
	this.instance.setTransform(0.6,0.8,1,1,0,0,0,41.5,36);

	this.addChild(this.instance,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-41.2,-35.8,83.4,72.6);


(lib.Castle2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgrApQgNgIAIgMQAng0ApgLQAPgDAEAOQAEAPgPADQgiAJgcApQgFAHgGAAQgFAAgFgDg");
	this.shape.setTransform(-19.2,-17.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSAVQgPgBAAgPQAAgNAPABQAHAAAKgEIAQgIQAOgDAEAOQAEANgOADIgVAIQgKAFgIAAIgCAAg");
	this.shape_1.setTransform(9.5,18.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAVAvQgMgxgygbQgNgGAHgNQAIgNANAGQAbAPAVAZQAVAXAHAfQAEAOgPAEIgGABQgJAAgDgLg");
	this.shape_2.setTransform(-16.2,22);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGAyQgDgNgBglIAAgRQgBgPgDgDQgLgJALgLQAKgKAJAJQAHAHADAOIACAXQABAqADAMQACAPgOAEIgGAAQgHAAgCgLg");
	this.shape_3.setTransform(4.7,-13.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHAMIgEgEQgEgEgBgFQABgGAEgEQAEgFAHABQAEgBAEAFIAEAEQAEAEABAFQgBAGgEAEQgEAFgHgBQgEABgEgFg");
	this.shape_4.setTransform(23.1,-2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgOABIAAgCQAAgOAOAAQAOAAABAOIAAACQgBAPgOAAQgOAAAAgPg");
	this.shape_5.setTransform(21.8,13.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgNAAQAAgOANAAQAOAAAAAOQAAAOgOABQgNgBAAgOg");
	this.shape_6.setTransform(9.7,24.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNAAQAAgNANgBQAOABAAANQAAAOgOAAQgNAAAAgOg");
	this.shape_7.setTransform(-1.2,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgNAAQAAgNANAAQAOAAAAANQAAAOgOAAQgNAAAAgOg");
	this.shape_8.setTransform(-11.7,8.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgNAAQAAgOANABQAOgBAAAOQAAAPgOgBQgNABAAgPg");
	this.shape_9.setTransform(-7,-4.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgNAAQAAgNANgBQAOABAAANQAAAPgOAAQgNAAAAgPg");
	this.shape_10.setTransform(8.9,-9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgNADIAAgFQAAgPANAAQAOAAABAPIAAAFQgBAPgOAAQgNAAAAgPg");
	this.shape_11.setTransform(0.7,-9.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAHAgQgFgCgCgFIgXghQgHgNANgHQANgIAFANIAXAhQAEAFgCAGQgCAGgFADQgEACgDAAIgFAAg");
	this.shape_12.setTransform(18.2,18.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAvBPQgagWgggtQgqg0gPgPQgKgLALgKQAKgLAKAKQAOAPApA3QAiAqAaAXQALAJgLALQgFAFgGAAQgFAAgFgEg");
	this.shape_13.setTransform(-8.6,-12.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhGAlQgIgNANgHIA9geQAhgTAbgLQANgFAEAPQAEAOgNAFQgZAKghAQIg3AfQgFACgEAAQgHAAgFgIg");
	this.shape_14.setTransform(-11.3,14);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgZAMQgOgDAEgNQAEgOAOADQAUAEAUAAQAOgBAAANQAAAPgOABIgEAAQgUAAgYgFg");
	this.shape_15.setTransform(28.4,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRBMIgBhNQACgsAHghQAEgOAMAEQAOAEgDAOQgHAfgBApIABBKQAAAOgNAAQgPAAAAgOg");
	this.shape_16.setTransform(5,27.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgqAzQgNgIAJgLQAMgRAXgWIAjgoQAKgLALAKQAKALgJALIgjAjQgUAWgLAQQgFAHgHAAQgEAAgGgDg");
	this.shape_17.setTransform(22.1,-9.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABRAWQhigWg/ALQgOACgEgNQgEgOAOgCQBJgPBoAaQAOAEgEAMQgDAMgKAAIgFgBg");
	this.shape_18.setTransform(-16.4,0.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ah7A5QgEgOAOgEQArgMBFglQBKgsAigMQAOgFADAOQAEAPgNAFQgiAMhMAqQhDAngrAMIgGABQgJAAgDgMg");
	this.shape_19.setTransform(-23.6,31.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhSBpQgOgEAFgOQAXg7AqgwQAqg1A2gdQANgHAHANQAIANgNAHQgwAagnAwQgnAsgVA1QgEALgKAAIgGgBg");
	this.shape_20.setTransform(-28.8,26.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgVCqQgUhjAEhLQAGhfAphJQAHgNANAIQANAIgHAMQgmBEgFBZQgEBGARBcQACAPgMAEIgFAAQgKAAgCgLg");
	this.shape_21.setTransform(-25.7,1.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AghAaQAAgPAOAAIAMgBIADgCIABgBIABgHQACgUAGgMQAGgNANAIQANAHgGANQgDAHgDALQgCAOgDAGQgKAUgeAAQgOAAAAgPg");
	this.shape_22.setTransform(31.9,39.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgtArQgNgIAIgMQAOgVAXgQQAOgMAegRQANgGAIAMQAHANgNAHQgbAPgMAHQgTAQgMARQgFAIgHAAQgEAAgFgDg");
	this.shape_23.setTransform(20.5,23.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag3AvQgNgHAGgNQANgbAhgWQAbgSAjgIQAOgEAEAPQAEAOgOAEQgeAHgYAMQgZARgLAZQgEAIgHAAQgDAAgFgDg");
	this.shape_24.setTransform(22.5,23.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAOBlQgHglgSg9QgYhEgHgbQgEgOAPgEQAOgEAEAOQAHAbAWBGQAUA7AHAlQADAOgPAEIgFABQgKAAgCgLg");
	this.shape_25.setTransform(31.3,28.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AAWBrQgOgEACgPQAGgjgTg1IgchDQgJgDABgLIAAgLQABgNAMgBQANgCAEAMQAJAfAaBAQAUA4gHApQgCAMgJAAIgGgBg");
	this.shape_26.setTransform(30.5,29.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AA6BCQg8hOhJgeQgOgFAEgOQAEgPAOAFQBSAjBFBXQAIAMgNAHQgFADgFAAQgGAAgFgHg");
	this.shape_27.setTransform(23.2,34.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAUQgYgIgJgEQgSgIgGgNQgFgOAPgEQAOgEAFAOQAAgCAHAEIAJAFQAOAGAOAFQAUAEAIABQARADAMgEQAOgCADAMQAEAPgNAEQgKADgLAAQgaAAgigNg");
	this.shape_28.setTransform(12.1,-17.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgWBdQgMgHAHgMQAUggAGgqQACgbAAg1QAAgPAOAAQAPAAAAAPQABA5gFAdQgGAxgVAiQgEAHgHAAQgFAAgFgDg");
	this.shape_29.setTransform(19.4,-22.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AACCKQgMgEAEgOQAOg2gIhCQgGgtgYhKQgEgOAOgEQAPgEAEAOQAXBMAHAzQAJBHgRA5QgEALgJAAIgGgBg");
	this.shape_30.setTransform(18.7,-29.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjBtQgPgEAEgOQAKgrAUg0IAiheQAFgOAPAEQAOAEgFAOIgkBcQgSA3gKAqQgDALgKAAIgFgBg");
	this.shape_31.setTransform(11.4,-32.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgjBtQgOgEADgOQAdhwAlhQQAHgNAMAIQANAHgGANQgkBIgbBxQgDALgJAAIgGgBg");
	this.shape_32.setTransform(8.3,-27.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAzAqQhIgPgrgqQgLgKALgLQALgLAKALQAmAkBAANQAPADgEAOQgEANgLAAIgEgBg");
	this.shape_33.setTransform(1.6,16.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("Ag1BiQgEgOAOgEQAbgIAQgVQARgUAFgcQAEgdgBgQQgDgdgTgKQgKgGAHgNQAGgNANAGQAuAZgNBWQgGAngXAbQgXAbgjAMIgGABQgJAAgDgMg");
	this.shape_34.setTransform(15.5,8.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("ABQA4QglgqgmgWQg0ghgoAPQgNAFgEgOQgEgPANgFQAwgSA8AjQAvAbApAuQAKALgLAKQgFAGgFAAQgFAAgFgGg");
	this.shape_35.setTransform(10.4,-2.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ABDAbQgdgTgkgHQgtgIgRAUQgJAMgNgIQgNgHAJgKQAagiA5AGQAsAFApAYQANAHgIANQgEAJgHAAQgEAAgFgDg");
	this.shape_36.setTransform(6.4,-5.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgeBgQgdg3APg+QAQhGA7gMQAOgDAEAOQAEAPgOADQgsAJgLA4QgKAwAWAqQAEANgLAIQgFADgDAAQgHAAgEgJg");
	this.shape_37.setTransform(-3.2,3.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgeAWQgFgEgCgFQgDgNAOgEIAugRQAOgFADAOQAEAMgNAFIguASIgEABQgEAAgEgCg");
	this.shape_38.setTransform(19.8,33.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AhjAkQgOgDAEgPQAEgOAOADQApAIAygPIBXglQANgFAIAMQAHANgNAGQhSAhgQAFQgjAMgiAAQgRAAgRgDg");
	this.shape_39.setTransform(12.5,35.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AiFAnQgHgNAMgJQB8hTCCAaQAOADgEAPQgEAOgOgDQh2gXhxBNQgFAEgEAAQgGAAgFgIg");
	this.shape_40.setTransform(-5.1,-22.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AAVD6QgNgIAJgLQBQhogpiNQgniIhthJQgMgIAIgNQAHgNAMAIQB4BQAqCTQAtCbhXBxQgFAHgHAAQgFAAgFgDg");
	this.shape_41.setTransform(27.7,3.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("ABoA9QhIgNgugTQg+gYgqgmQgKgKAKgLQALgLAKAKQAnAmA6AUQArARBFAMQAPADgEAOQgEAMgLAAIgEAAg");
	this.shape_42.setTransform(-6.5,32.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAFAmQgMgkgXgcQgJgLANgIQANgHAJALQAWAgAPAnQAFAOgOAEIgGABQgJAAgEgLg");
	this.shape_43.setTransform(26.4,-11.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAKARQgNgCgOgEQgOgEAEgMQAEgPAOAEQARAFAKABQAGABADAGQADAEgCAGQgDALgKAAIgFgBg");
	this.shape_44.setTransform(3.8,37.7);

	this.instance = new lib.ClipGroup_7();
	this.instance.setTransform(0,0,1,1,0,0,0,38,43.5);

	this.addChild(this.instance,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-38.2,-43.5,76.2,87);


(lib.Castle = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAPQgPgEgLgPQgEgGAGgEQAGgEAEAGQAIALAIABQAJAFAIgHQAFgFAGAFQAFAEgFAFQgKAKgMAAIgIgCg");
	this.shape.setTransform(23.7,-30.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHBJQgTgEgQgPQgFgFAFgFQAGgGAFAFQANANAQACQAbAFACgoIAEhZQgBgHAIAAQAHAAAAAHQgBBCgBAXQgEAhgLAJQgLAJgPAAIgJgBg");
	this.shape_1.setTransform(2.1,-20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgoAOQgKgWAsgIQAqgIAHAYQACAGgIABQgHACgCgHQgDgIgaAFQgcADADAIQADAGgHADIgDAAQgFAAgCgFg");
	this.shape_2.setTransform(2.2,-27.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAFQgGgEAEgFQADgGAGAEQAKAGAXAAQAbACABgKQABgHAHAAQAIAAgBAHQgCAVgiADIgHAAQgYAAgQgLg");
	this.shape_3.setTransform(2.1,-26.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgJA3QgBgUADgjIAEg2QAAgHAGAAQAHAAAAAHIgEA2QgDAjABAUQAAAHgGAAQgHAAAAgHg");
	this.shape_4.setTransform(-1.9,-20.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRANQgEgHAGgEIAVgPQAFgFAFAFQAGAFgGAFQgOALgJAHIgEACQgDAAgDgEg");
	this.shape_5.setTransform(11.7,36.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AALAWQg6gHgZADQgHABgCgHQgCgHAHgBQAVgDA5AGQA0ACAPgaQADgGAHAEQAGAEgDAGQgSAfgyAAIgDAAg");
	this.shape_6.setTransform(5.5,36.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhTABQgHgBACgFQACgHAHABQBXAQBIgLQAHgBACAHQACAGgHABQggAFgiAAQgvAAg2gLg");
	this.shape_7.setTransform(-2.4,37.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAPAdQgQgMgJgKQgNgNgCgQQAAgIAHAAQAIABAAAHQACASAeAUQAGAEgDAHQgDAEgDAAIgEgCg");
	this.shape_8.setTransform(-14.9,35.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgCASQgIgXAAgLQAAgHAIAAQAFAAAAAHQAAAIAHAWQADAHgIACIgDABQgCAAgCgGg");
	this.shape_9.setTransform(-14.3,28.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgDAIQgCgCgBgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAAAIABgDQAEgHAEAEQAIAGgFAFQgDAEgDAAIgDgBg");
	this.shape_10.setTransform(-10.8,17.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_11.setTransform(-16.1,15.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAAQgBgGAGAAQAGAAAAAGQAAAHgGAAQgGAAABgHg");
	this.shape_12.setTransform(-16.3,20.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgGAAIAAAAQAAgGAGAAQAHAAAAAGIAAAAQAAAHgHAAQgGAAAAgHg");
	this.shape_13.setTransform(-11.7,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgEAmQgLgzANgZQACgHAGAEQAGAEgDAHQgJASAIAuQACAHgHACIgDAAQgDAAgBgFg");
	this.shape_14.setTransform(-14.3,25.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgFAtQgIgCACgHQAJgwACgZQAAgHAGAAQAIAAgBAHQgDAbgJAyQgBAFgDAAIgCAAg");
	this.shape_15.setTransform(-14.3,22.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_16.setTransform(21.4,19.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_17.setTransform(17.1,22.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgNAzQgHgDADgHQAGgOAFgdQAFgeAGgPQADgHAGAEQAHAEgDAGQgIAPgFAcQgFAggEANQgCAEgDAAIgEgBg");
	this.shape_18.setTransform(19.3,23.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_19.setTransform(18.5,16.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_20.setTransform(23,17);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgYAEQgHgCACgFQACgHAHACQAWAGAVgCQAHAAAAAFQAAAIgHAAIgJABQgRAAgVgGg");
	this.shape_21.setTransform(23.6,17.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgjAYQgCgHAHgCIAUgDQAKgCAFgGQAFgEAFgJIAHgQQAEgGAGADQAGAEgDAHIgJARQgGALgHAGQgHAGgLADIgVAEIgDAAQgEAAgCgGg");
	this.shape_22.setTransform(18.5,18);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AABAJQhtgEgWAAQgHAAAAgFQAAgIAHAAQAWAABsAEQBPADAygHQAHgBACAHQACAFgHABQglAFg0AAIgrAAg");
	this.shape_23.setTransform(0.7,19.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAvAPIgvgGQgbgEgUgFQgHgBACgIQACgHAHACQASAGAZAEIAvAEQAHABAAAHQAAAHgGAAIgBAAg");
	this.shape_24.setTransform(-19.1,17.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgZAyQAAgHAHgBQASgDACgOQACgIgBgVQgCggAKgQQAEgHAHAEQAGAEgEAGQgFAJgCA0QgBAkgiAFIgBAAQgGAAAAgHg");
	this.shape_25.setTransform(-14.4,14.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_26.setTransform(23.8,-5.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_27.setTransform(20.8,-5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgNBvIAChvQAChBAJgvQABgHAHACQAIACgCAHQgLAtgBA/QgCAlAABKQAAAHgGAAQgHAAAAgHg");
	this.shape_28.setTransform(22.4,4.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_29.setTransform(24.5,-9.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgFAFQgDgGAEgEQAEgFAFAFQAEAEgCABQAAAEgEADIgDACQgDAAgCgEg");
	this.shape_30.setTransform(20.5,-9.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_31.setTransform(-12.8,-10.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgGAAIAAAAQAAgGAGAAQAHAAAAAGIAAAAQAAAHgHAAQgGAAAAgHg");
	this.shape_32.setTransform(-8.9,-10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgGAAIAAAAQAAgGAGAAQAHAAAAAGIAAAAQAAAHgHAAQgGAAAAgHg");
	this.shape_33.setTransform(-8.9,-6.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgDAhQgHgCABgHIAFgYIABgLQAAgIgDgDQgEgGAHgEQAEgDAEAFQAGAIgCATQgCARgDAOQgBAGgDAAIgDgBg");
	this.shape_34.setTransform(-11.7,-11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgZAQQgDgHAFgEQAFgEAPgFQALgGAGgGQAGgFAFAFQAFAGgFAFQgHAFgOAGQgOAIgFAEQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgDAAgCgDg");
	this.shape_35.setTransform(26.2,-9.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgGAWQgBgJABgNIABgVQAAgHAFAAQAIAAAAAHIgBAVQgBANABAJQABAHgIAAQgFAAgBgHg");
	this.shape_36.setTransform(22.5,-10.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAOQhjgBhCgNQgHAAADgHQABgHAIABQBLANBVAAIBRAAQAwAAAhgGQAGgBADAHQACAFgIABQgiAHgwABIgUAAIg/AAg");
	this.shape_37.setTransform(6.5,-8.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAAQAAgGAFAAQAHAAgBAGQABAHgHAAQgFAAAAgHg");
	this.shape_38.setTransform(-14.3,-7.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ABAAcQhVgLgtgdQgGgEAEgHQADgGAGAEQAsAcBPAKQAHABAAAHQAAAHgFAAIgCAAg");
	this.shape_39.setTransform(-17.6,-11.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgPBpQABgmAGhDQAGhIABgfQAAgFADgCQAEgCAEADIADADQAFAEgFAGIgBAAIgHBgQgFBDAAAmQAAAHgIAAQgHAAAAgHg");
	this.shape_40.setTransform(-11.8,1.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgFAaIAAgzQAAgGAFAAQAGAAAAAGIAAAzQAAAGgGAAQgFAAAAgGg");
	this.shape_41.setTransform(-26.3,12.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhIAEQgHgCACgFQACgIAHACQAdAHAnAAIBHgDQAHAAAAAFQAAAIgHAAQgwACgXAAIgKAAQgkAAgagGg");
	this.shape_42.setTransform(-1,38.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAlAKIglgFQgUgCgOAEQgHACgCgHQgCgFAHgDQAPgEAXACIAlAFQAHAAAAAGQAAAHgGAAIgBAAg");
	this.shape_43.setTransform(-3.2,37.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgvAEQAAgGAHAAQAnAAAogIQAHgCACAIQACAFgHABQgqAJgpAAQgHAAAAgHg");
	this.shape_44.setTransform(4.6,36.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhEAFQgGgCACgGQACgHAGADQAMAEAVAAIAfgBQAoAAAbgDQAHAAAAAHQAAAGgHAAQghAEgzgBIgZAAQgPAAgLgEg");
	this.shape_45.setTransform(0.7,37.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag6APQAAgHAHgBQAogFALgCQAbgFASgOQAGgFAFAGQAFAFgFAEQgVAPgfAHQgOAEgpAFIgBAAQgGAAAAgHg");
	this.shape_46.setTransform(8.3,36.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgaAQQgCgIAHgBQAUgDAOgVQAEgGAHAEQAGADgEAGQgUAcgXAEIgCAAQgGAAgBgGg");
	this.shape_47.setTransform(12.6,35.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AhBAAQgHgCACgIQACgHAHACQAzAPBKABQAHAAAAAHQAAAIgHAAQhNgDg0gNg");
	this.shape_48.setTransform(-9.5,37.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AAdAoQgdgMgSgQQgagVALgaQACgHAHAEQAGAEgDAHQgHAQAYAQQANALAYAJQAGADgCAHQgBAFgEAAIgDAAg");
	this.shape_49.setTransform(-13.9,34);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAAAaQgEgLgHgTIgCgOQgBgIAHgCQAHgDAAAHQABAEgBADIAAABIABAEIAMAfQADAGgGAEIgEABQgDAAgDgEg");
	this.shape_50.setTransform(-16.1,32.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAQBBQgYgYgNgjQgOgmANgeQADgHAHAEQAGAEgDAGQgLAZAOAhQAKAfAXAVQAFAFgFAFQgDACgDAAQgCAAgDgCg");
	this.shape_51.setTransform(-29.3,2.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgcAdQgEgWARgUQAPgVAXABQAHAAAAAIQAAAHgHAAQgPgBgLAQQgNANACAPQABAHgHACIgDAAQgFAAAAgFg");
	this.shape_52.setTransform(-28.7,-4.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgfAtQgDgHAFgEQAYgQAJgQQAOgSAAgZQgBgHAIAAQAHAAABAHQAAAdgPAVQgOATgZATIgEACQgDAAgDgEg");
	this.shape_53.setTransform(-22.7,4.8);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAOAnQgCgXgIgRQgJgXgSgHQgGgCACgIQACgHAGADQAWAJANAbQALAUACAcQAAAIgHAAQgIAAAAgIg");
	this.shape_54.setTransform(-22.3,-2.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAXARQgZgJgagLQgGgDAEgHQADgGAHADQAXANAYAGQAHACgCAHQgBAGgFAAIgDgBg");
	this.shape_55.setTransform(-26.5,1.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AALA/QgagQgGg0QgHg4AlgCQAHgBAAAIQAAAHgHABQgXABAJAtQAGAqASAKQAGAEgEAGQgCAEgDAAIgFgBg");
	this.shape_56.setTransform(-27.6,0.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgQA3QgDgHAFgEQARgPABgcQAAgWgJgYQgDgHAHgEQAEgEADAHQAOAfgCAaQgCAigWATQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgEAAgCgDg");
	this.shape_57.setTransform(-24.8,0.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgJA4QgDgGAFgEQALgJAAgkQABgRgDgJQgCgOgOgGQgGgDAEgHQADgGAHADQAcAOgDAtQgBAVgDAKQgEATgLAIIgDABQgDAAgDgEg");
	this.shape_58.setTransform(-24.8,0.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgHAfIACguQgEgCABgGIAFgLQACgFAEACQAHABgBAGIgDA9QgBAIgFAAQgIAAABgIg");
	this.shape_59.setTransform(-28.8,-0.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgGARQgdgHgMgSQgDgGAGgDQAHgEADAGQAKAPAYADQANADAcgBQAIAAAAAHQgBAIgHAAIgGAAQgbAAgOgDg");
	this.shape_60.setTransform(4.9,14.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgyAHQgHgDACgFQACgHAHACQAaAJAUAAQAdABAMgRQAEgGAHAEQAGADgEAGQgQAWghACIgEAAQgWAAgdgLg");
	this.shape_61.setTransform(7,13.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AABA4QgFgEAEgGQANgZgGgZQgHglgPgBQgHAAAAgIQAAgHAHAAQANABAIAMQAIAKAFAPQAMAogUAhQgDAEgDAAIgEgCg");
	this.shape_62.setTransform(11.6,8);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAhAXQgOgQgSgIQgVgNgQAGQgGADgCgHQgCgHAGgDQAUgIAZAOQAVAMASARQAEAFgFAFQgDADgCAAQgDAAgCgDg");
	this.shape_63.setTransform(8.5,2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAEAqQgjgwAUgiQAEgHAHAEQAEAEgEAGQgMAaAdApQAEAGgGAEIgFABQgDAAgDgDg");
	this.shape_64.setTransform(0.5,10.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgOA7QgKglAEgbQAGglAZgUQAFgEAEAHQAEAGgGAEQgUARgDAgQgDAYAIAfQABAHgFACIgDAAQgFAAgCgFg");
	this.shape_65.setTransform(1.3,7.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AglAkQADgdAUgUQASgZAbgDQAHgBAAAIQAAAHgHABQgUADgPAUQgPARgDAWQgBAHgIAAQgHAAABgHg");
	this.shape_66.setTransform(2.3,3.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgNAoQAAgzANgfQADgHAHAEQAGAEgDAGQgNAcAAAvQAAAIgGAAQgHAAAAgIg");
	this.shape_67.setTransform(7,7.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgMApQABgtALgnQAAgGAHACQAIACgCAGQgMAnAAApQAAAHgFAAQgIAAAAgHg");
	this.shape_68.setTransform(7.1,7.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAAAIIgogHQgHAAACgGQACgHAHABIAkAGQAXAEAQAAQAHAAAAAGQAAAHgHAAQgRAAgWgEg");
	this.shape_69.setTransform(6.3,8.5);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgrAAQgGgEAEgGQAEgHAGAEQAZAPAygBQAHAAAAAHQAAAIgHAAIgFAAQgzAAgbgQg");
	this.shape_70.setTransform(6.5,8.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAZAfQgZgJgQgLQgYgQAKgVQADgGAHAEQAGAEgDAGQgJASA3AQQAHADgCAHQgCAFgFAAIgCAAg");
	this.shape_71.setTransform(3.5,11.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgaA0QgCgIAHgBQAZgFAHghQAHgfgUgRQgGgEAEgGQAEgHAEAEQAdAXgHApQgIArgjAHIgCAAQgFAAgCgGg");
	this.shape_72.setTransform(10.1,9.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgGAdQACgOgDgrQAAgHAHAAQAGABAAAGQADArgCAOQgBAHgGAAQgHAAABgHg");
	this.shape_73.setTransform(10.3,-33.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgkA2QgFgpABgXQACguAcgEQAkgFAJAjQAGAVAAArQABAHgHACQgHACgBgHIgBgZIgBgYQgBgVgIgHQgHgGgJgBQgJgBgGAGQgMAOABAfIAFAyQAAAIgIAAQgHAAAAgIg");
	this.shape_74.setTransform(6.9,-37.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAUAKIgbgBQgPgCgDgHQgEgEAHgEQAGgDAEAGIABAAIAEABIAIAAIATABQAHAAAAAGQAAAHgGAAIgBAAg");
	this.shape_75.setTransform(22.8,-19.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AAJAOQgBgEACgCQgKgHgOgDQgDADgGgBIgHgFQgFgEACgFQACgGAHABQAhAFAYAUQADAEgCAEQgCAEgFABIgJABIgBAAQgGAAgCgGg");
	this.shape_76.setTransform(23.3,-33.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgBAfQgHgCADgHQAEgOAAgIQABgKgIgIQgFgFAFgFQAFgGADAFQAUAUgNAjQgCAGgFAAIgBgBg");
	this.shape_77.setTransform(25.8,-28.4);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgSAjQgCgHAGgCQAPgEADgVQACgJgDgZQgBgHAIAAQAHAAABAHQAIBCgkAIIgCAAQgFAAgBgGg");
	this.shape_78.setTransform(24.7,-22.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AgHArIAChVQAAgHAGAAQAHAAAAAHIgCBVQAAAHgGAAQgHAAAAgHg");
	this.shape_79.setTransform(20.7,-27.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgGBOQgHgCABgHQAMg+AAhOQAAgHAGAAQAHAAAAAHQAABNgMBDQgBAGgDAAIgDgBg");
	this.shape_80.setTransform(20.2,-26.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgJASQgigCgBgbQAAgHAIAAQAHAAAAAHQABAQAagBQAUgBAPgHQAHgDADAGQAEAFgGADQgVAMgWAAIgHgBg");
	this.shape_81.setTransform(-15.9,-24.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgJBCQgHgCACgHQAIgXADgiIADg6QABgHAIAAQAHAAgBAHIgFA7QgEAkgGAYQgBAFgFAAIgDAAg");
	this.shape_82.setTransform(-12.2,-29.5);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAfATQgHgEAEgGQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBIgFgEQgHgDgLgDQgXgFgHAKQgDAHgHgEQgGgEADgEQAIgOASgCQAPgCAOAHQAlAOgKAQQgCAEgEAAIgEgBg");
	this.shape_83.setTransform(-14.9,-37.9);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgngGQgFgFAGgGQAFgFAEAGQAVAZArgEQAIgBAAAIQgBAHgHABIgOAAQgnAAgVgag");
	this.shape_84.setTransform(-15.4,-37.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgHBCQgHgCACgHQAIgaADgfQABgUAAgnQAAgHAFAAQAIAAAAAHQAAAogBAUQgDAigIAaQgBAGgEAAIgDgBg");
	this.shape_85.setTransform(-19.1,-30.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgfAWQgCgIAHgCQAkgMAHgUQACgIAHACQAIADgDAGQgKAdgrAOIgCABQgFAAgCgFg");
	this.shape_86.setTransform(20.7,27.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhfgLQgGgDAEgHQADgGAHADQBTAmBhgDQAHAAAAAHQAAAIgHAAIgNAAQhcAAhTglg");
	this.shape_87.setTransform(-11.4,31.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("Ah+AiQAAgHAHgBQBqgKCAg3QAGgDAEAGQAEAHgGADQiGA5hsAKIgBAAQgGAAAAgHg");
	this.shape_88.setTransform(11.2,29.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AB6AlQh4gLgIgCQhJgMgugiQgGgEAEgHQAEgGAGAEQAtAiBGALIB8AMQAHABABAHQAAAHgHAAIgBAAg");
	this.shape_89.setTransform(-11.2,29.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AhCByQgEgGAHgEQA5geAeg9QAfg4gChDQgBgHAIAAQAHAAABAHQACBHghA8QgiBAg7AgIgEABQgDAAgDgEg");
	this.shape_90.setTransform(21.6,22.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgUDKIASjKQAIh4gBhSQAAgHAHAAQAIAAAAAHQABBSgKB4IgQDKQAAAIgIAAQgHAAAAgIg");
	this.shape_91.setTransform(27.1,2.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgdDBQgHgBACgHQBKjKgaimQAAgHAGgCQAIgCAAAHQAbCthKDKQgCAGgFAAIgDgBg");
	this.shape_92.setTransform(28,-0.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("ABMAnQhVgQhIguQgGgEAEgHQAEgGAGAEQBIAtBRAPQAHACgCAHQgCAGgFAAIgCAAg");
	this.shape_93.setTransform(-17,28.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgFBFQACgVgCgwQgCgsADgYQAAgHAEAAQAHAAgBAHQgCAYABAsQACAwgBAVQgBAHgFAAQgFAAAAgHg");
	this.shape_94.setTransform(-25.7,-13.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AACCRQgPg/gDhRQgBgtAEhjQAAgHAIAAQAFAAAAAHQgCBkABArQABBPAQA+QACAHgHACIgDABQgEAAgCgGg");
	this.shape_95.setTransform(-25.4,10);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AChAZQiug2iTAdQgHAAgCgFQgCgHAHgCQCWgfCzA3QAHADgCAHQgCAGgEAAIgDgBg");
	this.shape_96.setTransform(4.5,-30.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AgHA7QgEgHAGgEQAcgUgJgfQgIgfgfgNQgHgCACgIQACgHAHADQAoAQAKAoQAKAogmAaIgCACQgDAAgDgEg");
	this.shape_97.setTransform(28.4,-21.1);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AgHAzQgSgJgHgNQgJgPAJgPQAQgcAqgWQAGgDAEAHQAEAGgHADQgeAQgMAPQgNALAAAKQABAIAHAHIAOAJQAFAEgEAGQgBAFgDAAIgEgCg");
	this.shape_98.setTransform(-22.2,-23.8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AhtAqQgHgCACgHQACgHAHABQA+AKAygRQA3gSAogsQAFgFAFAFQAFAFgEAGQgrAvg7ASQghAMgnAAQgXAAgZgEg");
	this.shape_99.setTransform(19.7,-16.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDAdQhlgFhJgnQgHgDAEgHQAEgGAGAEQBHAlBiAEQBIADBmgRQAHAAACAGQACAHgHABQhZAPhDAAIgYAAg");
	this.shape_100.setTransform(3.9,-14);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AC+A/QhygLhTgXQhogdhRgwQgHgDAEgHQAEgHAGAEQBQAyBmAaQBSAWBvALQAHABAAAIQAAAGgGAAIgBAAg");
	this.shape_101.setTransform(-6.3,-17.1);

	this.instance = new lib.ClipGroup_2();
	this.instance.setTransform(0.8,-1.4,1,1,0,0,0,33.5,43);

	this.addChild(this.instance,this.shape_101,this.shape_100,this.shape_99,this.shape_98,this.shape_97,this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-32.7,-44.4,67,86);


(lib.Boss = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgFA8QgOgBgNgIIgKgJIgHgJIgGgJIgDgIIgBgMIgBgEIAAAAIABgCIACgMIACgJIAGgJIAHgJIAKgIQAIgFAEgBQAKgEAFAAQAKgCATAHQAPAGALAQQAHALABAFIADAQQgBATgKAPQgLAPgPAHIgQAEIgHABgAgEgwIgMADIgLAFIgIAHIgGAHIgEAIIgCAGQgBADAAAHIgBACIABADIABALIACAGIAEAHIAGAIIAIAHQANAHAKABIAEAAIAHgBQADAAADgBIAHgCQAMgGAJgMQAIgOAAgOIgCgNIgGgNQgJgMgMgGQgLgEgJAAIgEAAg");
	this.shape.setTransform(24.2,8.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgHA9IgIgCIgJgDQgPgHgLgPQgKgPgBgTIADgQQABgDAHgOQALgPAPgHQAUgHALACQADAAALAEQAFABAIAFIAKAIIAIAKIAHARQACAFAAAHIABADIAAAAIgBAEIgCALIgDAJIgEAJIgIAJIgKAJQgPAJgMABIgHAAgAgSgsQgNAGgJAMQgFALAAACIgCANQABAPAGAMQALANALAEIAGACQACACAEAAIAGABIAGgBQAIAAANgHIAJgHIAGgHIADgIIACgGIADgNIgBgCQAAgGgCgEIgCgHIgDgHIgGgHIgJgHIgJgFIgGgCIgGgBIgGAAQgIAAgKAEg");
	this.shape_1.setTransform(-24,9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgSBcQgOgDgGgCQgUgIgPgOQgGgGgHgKIgGgIIgJgTIgDgLIgCgQIABABIgBgDIAAACQgkg3gKgUQgFgHAIgEQAHgEAEAHQAQAZAdA0IABAEIAAAHIADASIADAJIAJAQIALAOQANANATAHQAHAEAKABQAGACALAAQANAAAGgCQALgBAHgEQARgGAOgOQAHgHAFgHIAFgIIAEgIIAFgSIAGgQIAAgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIAshNQAEgGAGAEQACABABADQABADgCADIguBLIgCAQIgHAUIgKASQgHAKgHAGQgPAOgTAIIgUAFIgVABIgSgBg");
	this.shape_2.setTransform(0,-11.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AALAvQgDgCgBgDIgbhOQgBgDABgDQABgCADgCQADgBADABQADACABADIAbBOQADAHgHADIgDAAIgDAAg");
	this.shape_3.setTransform(16.3,-15.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgRAvQgGgDABgHIAchPQABgDAEgBQADgCADACQAHACgCAIIgcBPQgCAFgFAAIgEgBg");
	this.shape_4.setTransform(-16.1,-15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAqAhIgBgDIglgiQgDACgBgDIgmAkQgFAEgDgDIgBgBQgNgVgXggQgEgGAGgEQAHgEADAGIABABIAdAwIAlggQACgDACACQAEgCADADIAlAhIAegxQAEgEAEACQAFAEgDAEIgiA3QgCACgDAAIgDgBg");
	this.shape_5.setTransform(0,42.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AARAoQgEAAgBgFIgigfQgEgDAEgDQAEgEAEADIAAABIAaAXIAAg2QgBgFAFgBQAFAAAAAGIAAA+IACACQAEADgDAEQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAgBAAg");
	this.shape_6.setTransform(10,40.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgXAlIgBgDIgChBQAAgDACgCQACgDADAAQAEAAACADQADACAAADIAAAAIgCAzIAbgXQAFgFAFAFQAFADgGAGIAAAAIgmAgQgBABAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAQgDAAgCgDg");
	this.shape_7.setTransform(-9.8,40.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgiAeQgGAAAAgGQAAgFAGAAIABAAIA7AFIgggwQgCgGAEgDQAEgDADAFIAlA6QACAEgEADIgDABIhFgFg");
	this.shape_8.setTransform(15.6,34.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgqAeIABgEIAlg6QACgDACAAQACgBADACQACABABADQABADgCADIAAAAIgeAuIA4gGQAIgBABAIQABAIgIABIAAAAIgjACIgjACQgGAAgBgGg");
	this.shape_9.setTransform(-15.3,34.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOBWIgRgCQgRgDgPgGQgPgGgPgJIgNgJIgNgMIgVgZIgJgOIgHgNIgBgDIg/gMQgIgBACgHQAAgBAAAAQABgBAAAAQAAgBABAAQAAgBABAAIAAgBIA6grQACgCADAAQADABACACIACAEIAAAQIAHAdIAFAPIAOAYIAJAMIAVAWIANAJQAPAJALAFQAPAGAOADIAdAEQAOAAAQgDQAOgDAQgFQANgGAOgJIAMgJIAMgKIATgYIAPgZIACgGIAAAAIADgIIADgPIADgeIAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIADABIA6AsQAFAEgDAFIgEACIhBAMIgRAeIgVAZIgMALIgOAKQgRAKgMAFQgOAGgRAEQgLACgWABgACog+IgGAgIArgIIglgcgAjKgnIAoAHIgGgeIAAgCg");
	this.shape_10.setTransform(0.1,33.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgtDAIAAl/QAAgCACgDQADgCADAAIBLAAQAHAAAAAHIABF5QAAAHgIAAQgIAAAAgHIABlyIg9AAIAAF4QgBAHgGAAQgIAAAAgHg");
	this.shape_11.setTransform(24.3,-17.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAfDAIABl4Ig+gBIACDkIAAAvIAABfQAAAEgCACQgDADgEAAQgDAAgDgDQgDgCAAgEIAClJIAAgwQAAgCACgDQADgCACAAIBMAAQADAAACACQACACAAADIABF/QABAIgJABQgHAAgBgIg");
	this.shape_12.setTransform(-24.1,-17.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgJBWQgUgCgSgMQgOgJgLgPQgHgLgEgOQgDgIABgJIgBgGIAAAAIABgEIACgRQAHgRAFgIQAJgNAPgLQASgMAVgDQAVgCAVAJQAYAKAPAVQAHAMAEALIACANIABALQAAAMgEANQgEAOgHAJQgOAVgYAKQgNAGgJABIgLABgAgHhFQgRABgPAKQgMAIgIAMQgGAKgDALQgCAIAAAGIAAAIIADAOQAFAZAXAPQAPAKARACIAHABIAKgBQAHgBAMgFQAIgDAJgHQAHgHAGgJQAMgSgBgVQAAgGgBgDIgCgKQgDgKgGgIQgKgRgUgJQgOgHgOAAIgHABg");
	this.shape_13.setTransform(24.2,8.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgLBXQgKgBgNgGQgYgKgOgWQgHgJgEgOQgEgNAAgMIABgLIADgNQAFgPAGgJQAPgWAXgJQAWgKAWADQAUACATAMQAOAKAKAPQAIANADAMIAEARIAAAKQAAAHgDALQgEAOgHALQgJAOgQALQgRALgWADIgKABIgLgBgAgag/QgTAIgLASQgGAIgDAKIgCAKIgBAJQAAAKADAKQAEAKAFAIQAMASASAHQAIAEAKACIAIAAIAIAAQARgCAOgJQAMgIAIgMQAFgHAEgNIADgNIAAgJQAAgGgCgIQgDgMgGgIQgKgNgKgHQgQgJgQgCIgHAAQgNAAgOAGg");
	this.shape_14.setTransform(-24,9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhaDGIi2AAIhbgBIAAAAQgIAAAAgIIAAgwIgBlJQAAgEADgDQADgCADAAQAEAAADACQACADAAAEIgBFxIBTgCIJ0ACIAAlxQAAgIAHAAQAHAAAAAHIACC9IAAAvIgBCOQAAAHgIAAIhbABIhbAAIi1ABIhaAAg");
	this.shape_15.setTransform(0.1,7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AjKAGQgCgDAAgDQAAgDACgBQADgDADAAIGKABQADAAACADQACACAAABQAAACgCADQgCACgDAAImKABQgDAAgDgCg");
	this.shape_16.setTransform(-0.1,-11.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgwABQAAgDAIAAIAoAAQAUAAAVgDQAIAAAAAFQAAAFgIAAIhRABQgIAAAAgFg");
	this.shape_17.setTransform(32.3,-11.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgoAIQgEABgDgDQgCgCAAgEQAAgCACgDQADgCAEgBIBSAAQADABADACQACADAAACQAAADgCADQgDADgDgBg");
	this.shape_18.setTransform(-32.4,-11.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgGCKQgBhGAChFIAAiNQgBgEAFAAQADAAAAAEIAFEYQAAAJgHAAIAAAAQgGAAAAgJg");
	this.shape_19.setTransform(-0.2,11.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgWAIQgDAAgDgDQgDgDABgCQAAgIAIgBIAsAAQADAAADADQADADAAADQAAADgCADQgDAEgEAAg");
	this.shape_20.setTransform(34.3,8.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("ACgAKQgUgDgeAAIhugDIhsABIgyABQgJAAAAgGQAAgEADgCQACgCAEAAIAyAAIBsACICggCQADgBACAEQADADAAACQAAADgCADQgDADgDABg");
	this.shape_21.setTransform(-0.1,8.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgSAIQgDAAgDgCQgDgEAAgCQAAgDADgDQADgDADAAIAkAAQAEAAADADQADADAAADQAAAEgDACQgDAEgDAAg");
	this.shape_22.setTransform(-33.9,8.8);

	this.instance = new lib.ClipGroup_4();
	this.instance.setTransform(0.7,4.7,1,1,0,0,0,38,42);

	this.addChild(this.instance,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-37.3,76.2,84);


(lib.Background = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#275571").s().p("AmcGmQgcAAgigLQgWgIgcgSQgMgIgIgIIgOgMIgRgVIgKgRQgPgbgEgcQgBgHAAgIIAAgFIABAFIACAPQAHAbAQAYQAOAVALAKIAEAEIANALIAUAOQAcAPAUAFQAeAIAbAAQBGgCAwgqIAOgLIAKgKIAEgDQAOgLAdgDIDsgbQBdgOBHgQQBbgWA/gfIASgJIARgKIAQgLIAOgMQAhgaAQgdQAQgdAKgnQAFgcAFgrIAGhGQAEgnAGgbQAJgnAIgUIAVgzIATgsIAdhEIAMgVIAMgRIgKASIgLAWIgMAeIgdBUIgKAZQgGAPgDALQgHAYgGAiQgFAmgEBhQgCAsgEAeQgIAugQAgQgSAlgjAfQgXAVgyAaQg/AghjAYQhBAPhnAPIhQAKIhRAHIhNAFQgVABgIAFIgBABIgBABIgLAJIgPAMQg3AphIAAIgIAAg");
	this.shape.setTransform(24.5,927.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#275571").s().p("AQvUuIiZgBIjugHIiSgHIhPgEIhSgGIiwgRQgmgDg2gHIhfgNQjjgkipgxQhggchrgsQhzg0hOg2QhhhEhDhUQhHhYgohsQgkhhgQh7QgNhdgDiCQgDiaAEhBQADg0AKg3QAMg/ARgoQAkhdBUhNIAlgiIB1hcQBdhIA2gtQAzgqBRhLQBxhqBlhzQBVhiBChWIB7imQADgEAEADQAEADgDAEIh9ClIghApIhMBbIgrAzQhmB0hxBqQhNBHg3AtQg7AxhYBFQg0AngaAVIgnAgQgZAWgMAMQhUBOgiBZQgPAjgOBDQgKA4gDAzQgEBGACCUQACB6AOBlQAQB6AkBgQAoBsBFBXQBDBTBhBEQBNA1BzA0QByAvBYAZQCoAxDkAkQCbAUAgADICvARIBTAGIBPAEICSAHIDtAHICZABIA2AAQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAgBABQAAAAAAABQAAAAgBAAQAAAAgBAAg");
	this.shape_1.setTransform(721.8,1097.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#275571").ss(0.5,1,1).p("At8IKQjdgggpgFQiSgShwAAQjKAAi2A/Qh7ArioBgQjCBuhAAcQiQA/iLAAQijAAg0g5QgdghAAhTQAAhtAUjRQAUjQAAhtQAAjRBUi3QBUi3CfiIQFXkkI5AAQBvAACOANQBHAGAxAHQAYAAAkgOQAkgNAMAAQAAAABKA6QBcBHBcA6QEnC6DAAAQBPAAC6giQBtgVESg2QI1huE7AAQGQAAEdA0QFFA7DYCFQHmErAALWQAACvjJCTQhYBBhpAlQhqAmhgAAQhzAAhphMQg+guhvh6Qhuh6g/guQhphMhzAAQhoAAjZBUQhwAqgwAPQhXAag8AAQgIAAgRgKQgRgKgjAAIirAAQnNAAkogNQmdgSlRgxg");
	this.shape_2.setTransform(231.4,1090.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#275571").s().p("EAixAH+IhYgEQhYAAhbgQQikgcivhRQg2gYhpg2Qhqg1g1gZQhggshDgaQhagjhMgWQixgzipgPIhXgGQgUgChEgBQhJgBhoAFQigALi8AeQhOAMhgATIhXAQIhZAPIgnAEIiLgGQhVgChZAQQiaAaiwBWQhCAhhaAyQhvA7gwAWQhhAshMAJIgXACIhEgCIhagMQhVgRhWgmQhQglhLgzQiKhdiCiOQg8hCg2hEQgqg2g8hcQhjiWhIigQBSCiBhCPQAqA/BABPQA4BEA7A/QA8A/BEA6QBGA8BGAtQCgBpCfAgIArAHIArAEIAxACIAlgDQApgFAqgOQAkgLAtgVQAzgXBpg5QBhg1A9geQCzhXCggbQBcgPBXACICEAGIABABIABAAIADgBIAFAAIAhgDQAjgFA0gJIBWgQQBigTBNgMQC/gfCggJQBogDBLAAQBEAAAUABIBZAHQCqAPCzA0QBWAaBTAgQBHAcBcArIChBNQBfAuBBAdQBfArBDAXQBWAdBUAQQBYARBWACIAsACIAsADQAiADAxgUIAAAAIAfgHIAxgTIASgKIASgKIAigYQAZgTAHgIIAggcIAdgfQAKgKARgVIAbghIAZgiIAvhGIAxhVIgrBYIgXAlIgWAjIgZAjIgaAiIgcAgIgdAgIgfAdIggAcIgjAZIgTALIgTALIh7ArIgXAEIgSABIgFAAgEArFAAAIgfBBg");
	this.shape_3.setTransform(396,924.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#275571").s().p("EAS5AoXQkhgFlfgaQqIgutriLIthiWQjrgrqwiGIuQiyIgggJIgfgKQhugmh7hKQhyhDhkhSQjVisiQjYQiWjjg+kLQgch7gHiUIgChFIAKjMQAakUBjkDQBjkECkjoQCyjyDEiwQBghXB7hZIB0hQIDviVIB6hFIA+giIA+ggIB/g/QAVgKArgTIBBgcICAg7ICCg2QBlgqAdgLQByguCXgyQBBgWDLhBQA+gSBKgVICIgiIBFgRQAmgHAfgHICJgeIBFgOIBEgPQBogTAigFICLgUQBcgOAvgFQB2gQCfgMIEWgVICKgHICKgEQAjgBBmABQBbAAAuACICKAGICIAJQAuACBbAIIBEAFQApADAaADIEOAiQAsAGBZANQBCAJBDAOIEGA2QAeAGBjAZICAAiQBlAhAZAHICdAyIDWBMQDQBNEICAIA5AdIA4AcIBxA6IAbAPIAbAQIEICnIBmBFIBjBKIAYASIChCKICqCpIBQBZIAnArIBwCIIBFBcQAMAPAVAgIBABfIAeAwIA6BhIA1BiIAaAxIAYAyIAuBkIApBlIAUAyIA0CVQB2GAAZGbIAGC/IABAuIgBAuIgDAuIgDAuQgKBKgDAQIgYBuIgiBoIgQApQhCCahuB/QheBviHBhQhwBPiGBBQhsA2iDAvQhqAohzAgQhOAYh5AcQigAmidAcQh7AVhLAMIgaAEIAagFQCAgVBFgNQCqggCTgjQCDggBEgVQBzghBpgoQCAgvBug4QCHhDBshOQCIhjBbhsQBsiABAiYIAPgnIAPgpIApirQAEgWAIhDIADgtIADguIgIkaQgbmYh4l+IgjhhIhPjHIguhjIgYgyIgagwIg0hiIg7heIh/i8Ii0jhIgogrIhRhUIhshnIgWgTIjkjCIhfhLIhjhKIiahmIg1ghIjYh+QgWgOhZgtQjnh0jvhYIg8gXIk2hmQgYgIgngJIhAgQIhAgQIhAgQQhVgVgsgKIkEg1IiEgXQhhgSgkgEIiFgSIkOgcQhagHgugDIiIgHIiJgDQgtgBhcAAIiHAAIiKACQhFADhFACIhFADIhFAEIiKALIkUAgIiKASIhFAKQgnAHgeAGQghAHhoAQQhXAOgzALQgXAFhyAYIhEARIlTBZIjKA8QgNADg1ASIkJBfQgUAHhvAsIiBA1Qh5A1iFBEIh8BBIg+AhIg9AhIjxCOQiOBdhVBFQhgBNhyBoQhqBkhXBhQgtA0grA1IgpA3IgoA4QilDqhdD0QhiD8gcEMIgFBEIgEDIQAGCQAbB2QA6EDCRDcQCJDSDQCsQBkBRBsBBQB3BHBrAnIAdAKIAdAIIOOC4QKCCAEYA2INgCaQNoCQKIAzQFaAbElAGIIgADIFTgKIBjgFIDIgJIjIANIhjAFIlTALIkDAEg");
	this.shape_4.setTransform(341.7,1095.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#87A383").s().p("AokFbQgugtgFhAQCXhzCqhmQGZjzHVi4QgNAYgSAxIgaBBQgjBLgHCEQgIB9gaAyQguBWiNAyQilA5lMAYQgOABgHACQgLAEgJAJQg8A8hVAAQhVAAg8g8g");
	this.shape_5.setTransform(23.9,927.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9BB186").s().p("EAgJANjQg+guhvh6Qhuh6g/guQhphMhzAAQhoAAjaBUQhvAqgxAPQhWAag8AAQgHAAgSgKQgRgKgiAAIirAAQnOAAkogNQmcgSlSgxQjcgggpgFQiTgShwAAQjJAAi3A/Qh7ArioBgQjBBuhBAcQiQA/iLAAQijAAg0g5QgdghAAhTQAAhtAUjRQAUjQAAhtQAAjRBUi3QBUi3CgiIQFWkkI5AAQBvAACOANQBIAGAwAHQAYAAAkgOQAkgNAMAAIBKA6QBdBHBbA6QEnC6DAAAQBPAAC6giQBtgVESg2QI1huE7AAQGPAAEdA0QFGA7DYCFQHmErAALWQAACvjJCTQhYBBhpAlQhqAmhgAAQhzAAhphMg");
	this.shape_6.setTransform(231.4,1090.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A0B587").s().p("EAi+AKmQgqgFgiAAQjHAAjNhMQhbghkRiGQjthzivg0QkDhMkhAAQj3AAk8A4IjOAlQhdASgfAAQgYAAgxgEQgwgDgZAAQihAAiiA2QhyAmiXBQQjFBpgeAOQh3A2haAAQlJAAlGk5QkVkIi5mCQK4jiLvhRQLlhQLVBFQLdBGKLDXQKeDeIOFjQhJCbhmB1QhyCDhtAfIgfAIQgsATgiAAIgCAAg");
	this.shape_7.setTransform(395.2,906.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9CC9D0").s().p("EgQlAhsQoRhYr4iVQtZirmnhTQhwgVinhgQjJhzipinQnOnKAApuQAAogEOnfQD3m4HDlZQAFBAAuAtQA9A8BUAAQBVAAA8g8QAJgJALgEQAHgCAOgBQFPgYCkg5QCOgyAthWQAbgyAHh/QAIiEAihLIAahBQASgxAOgYQC1hHC3g8QC6GEEUEIQFGE5FJAAQBbAAB3g2QAdgODGhpQCXhQBxgmQCig2ChAAQAZAAAuADQAxAEAYAAQAfAABdgSIDOglQE+g4D3AAQEiAAECBMQCvA0DtBzQESCGBaAhQDOBMDHAAQAhAAAqAFQAkAAAsgTIAfgIQBtgfByiDQBmh1BJibQEFCyDTDIQjuFLjyDjQhfBZjxC9QiVB0gxBcQhBB5AADjQAAE9ArCkQA9DvC2CVQDSCtGWBaQG7BiLOAJQhsIjpOEqQmzDcs1B8Qq8A3qMAAQwKAA23j0gAJlEjQA+AuBuB6QBvB6A+AuQBqBMBzAAQBfAABqgmQBpglBZhBQDIiTABivQgBrWnlkrQjZiFlFg7Qkdg0mPAAQk5AAo1BuQkSA2hwAVQi6AihOAAQjAAAkni6Qhcg6hdhHIhJg6QgNAAgjANQglAOgXAAQgxgHhHgGQiOgNhvAAQo5AAlXEkQigCIhUC3QhTC3AADTQgBBtgTDOQgVDRAABtQAABTAeAhQAzA5CjAAQCMAACQg/QBAgcDChuQCohgB7grQC2g/DKAAQBwAACSASQApAFDcAgQFSAxGdASQEpANHOAAICrAAQAjAAARAKQARAKAIAAQA8AABWgaQAxgPBtgqQDahUBnAAQBzAABqBMg");
	this.shape_8.setTransform(341.3,1114.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#86A684").s().p("AiNS5QmWhajRitQi2iVg9jvQgsikABk/QAAjhBAh5QAxhcCVh0QDxi9BfhZQDyjjDtlLQHjHHD/JBQEOJjABLRQAACNgaB+QrNgJm6hig");
	this.shape_9.setTransform(713.6,1098.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF8B7").s().p("AljOPQj7g2i+h7QGHjsDwloQDrlgAAlRQAAihg+jnQCVACBbAdQB3AoBgBpQBhBpBLCMQBJCGApCQQA9DWgRDPQgRDhhpCvQgtBMg/BDQifClkRAsQhdAPhfAAQiQAAiaghg");
	this.shape_10.setTransform(582.6,864.9,0.517,0.517);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#636466").s().p("AoMIZQhvjAAAjwQAAikBmiwQBfiiCjiNQCfiICzhRQC8hTCiAAIChAAQA+DnAAChQAAFRjtFgQjwFomFDsQi/h7hnizg");
	this.shape_11.setTransform(553.3,859.5,0.517,0.517);

	// Layer 4
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#231F20").ss(1.2).p("AnXDZQgzA8goBRQgjBKAAAhQAAAbAMAQQAOARAZAAQAnAAC9iCQDSiSDci5QEAjTB/iVQBnh4AAg8QAAgbgWgMQgSgJgiAAQgjAAgxAQQg2ARgnAb");
	this.shape_12.setTransform(75.1,81.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#231F20").ss(1.2).p("ADvnpQBUhBCWgyQCEgsBDABQCTgSg8CHQg2B3jKDTQimCujXC0QjXC5jACBQkPC2hwAAQieAABMisQA+iLCfih");
	this.shape_13.setTransform(77.6,79.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#231F20").ss(1.2).p("AmqEeQBCAyA9AVQA4AUBOADQCzAGCOhZQB8hOBKiJQBEh8ACiDQADiEhBhN");
	this.shape_14.setTransform(91.7,97.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#231F20").ss(1.2).p("AH/jXQgRghgSgVQglgqgSgTQgfghgbgVQgigagngPIgJgEQhxgrhqAAQjpAAikCZQivCjAAEAQAABUAWA1QANAfAUAdQAUAdAqAvQAaAdBBBJ");
	this.shape_15.setTransform(73.5,73.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D7C985").s().p("AmJF0QgqgvgUgdQgUgdgNgfQgWg1AAhUQAAkACvijQCkiZDpAAQBqAABxArIAJAEQAnAPAiAaQAbAVAfAhQASATAlAqQASAVARAhQh/CUkADTQjcC5jSCSIhbhmg");
	this.shape_16.setTransform(73.5,73.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EDF6ED").s().p("AruHeQA+iLCfihQAMAeAVAdQgzA9goBRQgjBJAAAhQAAAbAMAQQAOASAZAAQAnAAC9iDQDSiRDci5QD/jTB/iVQBoh4AAg8QAAgbgXgMQgRgJgjAAQgiAAgyAQQg1ARgoAbQgigagmgQIgKgEQBUhBCWgyQCEgsBDABQCTgSg8CHQg2B3jKDTQimCujXC0QjXC5jACBQkPC2hwAAQieAABMisg");
	this.shape_17.setTransform(77.6,79.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7C985").s().p("AikF9QhOgDg4gTQg9gWhCgyQDAiBDZi2QDVi3CmitQBBBNgDCEQgCCDhEB8QhKCJh8BOQiEBSikAAIgZAAg");
	this.shape_18.setTransform(91.6,97.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B3D370").s().p("AkND0QgzhXgRhrQCyjMBEhIQByh7BLgtIAHAHIABAJQAAALgGAXQgIAYAAAHQAAAMAMAAQALAAAigVQAigVAMAAQAKAAAMAKQANALgBAQQABAQgRAkQgQAlAAAQQAAAaAYAAQAPAAAkgNQAkgOALAAQAMAAAEAFQADAEAAAKInbJCQhRg9gzhag");
	this.shape_19.setTransform(556.3,337.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B3D370").s().p("AksCrQAAgGA9hiQA9hhBChlQCLgyCtAAQA2AAAvAGIimCyQgEAAAAgIIABgUQAAgHgEgDQgDgCgJAAQgbAAgeAnQgeAogGAAQgXAAgPgTQgRgUgHAAQgHAAhwBaQhvBZgbAAQgEAAAAgLg");
	this.shape_20.setTransform(576.8,280.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B3D370").s().p("AlPHRQgGABgIgFQgJgEAAgFQAAgwCNhtIBghLQAsglAAgQQAAgLgJgIQgMgKgVAAQgQAAgiAHQgiAIgMgBQgbAAAAgZQAAgcA4grQA3gsAAgXQAAgcgogMQgogMAAgRQAAgVExlsQBzBPBFCJQA8B2AVCTQirCfkGChQhVA0hRArQhAAjgEAAg");
	this.shape_21.setTransform(622.8,318.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B3D370").s().p("ABJhfQC0h6gGAwQgCAYgqAlQgoAlAAAYQAAAKAIAAIBsgzQgxBZhWA6QhcA+h9AVQgRADgWAHQgaAKgMADQgnAKhYAIQCtigCxh2g");
	this.shape_22.setTransform(626.5,369.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#CDDD6E").s().p("AhXJ0QjuAAidh3IHdpBQAAgLgDgEQgEgFgMAAQgLAAgkAOQgkAOgPAAQgYAAAAgbQAAgQAQgkQARglgBgQQABgQgNgLQgMgJgKgBQgMABgiAUQgiAWgLAAQgMAAAAgNQAAgHAIgXQAGgYAAgLIgBgJIgHgHQhLAth0B7QhEBIiyDMQgJg2AAg6QAAjSBsinQB1i2DXhMQhCBkg9BkQg9BiAAAFQAAAMAEAAQAbAABvhZQBwhaAHAAQAGAAASAUQAQASAYAAQAFABAegoQAegpAcAAQAJAAADACQAEACAAAIIgCAUQABAKAEAAICji0QCTATBrBKQk0FtAAAVQAAARApALQAoAMAAAcQAAAag3ArQg4ApAAAcQAAAaAbAAQAMAAAigIQAhgHAQAAQAWAAAMAKQAJAJAAALQAAAQgsAkIhhBMQiKBsAAAwQAAAFAJAEQAIAFAGAAIAZABQAEAABAgjQBRgsBVg0QEHigCsidQAMBMAABSQAACIg4BrIhsAyQgIABAAgLQAAgYAoglQAqglACgXQAGgxi0B6QizB4itChQg3AEguAAg");
	this.shape_23.setTransform(590.8,325.7);

	// Layer 4
	this.instance = new lib.Path();
	this.instance.setTransform(278.1,421.9,1,1,0,0,0,481.9,407.2);
	this.instance.alpha = 0.398;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#A68667").s().p("AAOBAIgFgDIgXgMQgKgDgEgDQgDgCgHgNIgHgNQgdACgNgEIgKgFQATgTApgWIAagQQALgHANgIIAXASQAOALADABQAEABAMgBQANAAAFABQAEABAHAHIgCACQgHAKgXAkQgKATgGAHIgCACQgJAIgSAFIgFABIgCgBg");
	this.shape_24.setTransform(782.6,223.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#DBAE86").s().p("AAfBOQgFgCgNABQgMAAgCgBQgDgBgOgKIgXgSIgFgEIgLgIQgFgEgBgJQgCgGAAgKIAAgOQgBgfACgtQAEAAAFAEQAHAFALAAQAOABAFACQARAEAHAPQAFAIAIAXQAGASAKAGQADACAOADQALADADAHQACAFgEAMIABAXQgBAGgKAIQgHAIgFAGQgHgGgEgBg");
	this.shape_25.setTransform(788.2,212.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#896F55").s().p("AgfBjQgDgMgFgDIgLgFQgQgIgJgNQgKgPAFgQQABgVAEgGQAEgHATgNQASgMADgLQAAgLACgFQABgDAJgLQAFgFAUgTIAKAJQAGAHAFABIAOgMQAIgGAGgCIAFgBQgDAsABAfIABAQQAAAKABAFQACAIAEAEIAMAIIAEAEQgPAIgKAGIgbARQgmAWgUAVIgDgEg");
	this.shape_26.setTransform(775.7,213.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#A68667").s().p("AAPAoIgQgFIgKgBQgCgBgGgHIgGgIQgSAFgKgBQgEAAgDgCQAJgPAYgTIAPgNQAFgGAHgHIAAgBIARAJIANAGIALgDQAHgCAEAAQAEABAEADIABAAIgBACIgOAhIgGATIgBABQgEAGgMAGIgEABIgEgBg");
	this.shape_27.setTransform(775.4,307.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DBAE86").s().p("AgBAqIgUgKIgJgDQgDgCgCgGIgGgVQgEgPgFgfQADgBADACQAFACAHgBQAJgCAEABQALABAIAIQADAFAIANQAGAKAHAEIAMACQAIAAACACQACADAAAIIADAPQABAEgGAGQgDAEgCAHIgBAAQgEgDgEAAQgEgBgHADIgLACIgLgGg");
	this.shape_28.setTransform(777.4,299.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#896F55").s().p("AgJBGQgEgHgEgCIgHgBQgMgEgHgHQgJgHABgLQgCgOABgFQACgHAKgIQAKgKABgIQgCgHABgDIAEgKIAPgUIAHAFQAEADADABIAHgLIAIgGIADgCQAFAfAEASIAGAUQACAEADACIAJADIADACIAAABQgJAGgFAGIgPAOQgYAVgHAPIgCgCg");
	this.shape_29.setTransform(770.1,302.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#A68667").s().p("AAMA7IgFgDIgUgMQgKgDgEgCQgCgCgGgMIgGgMQgaABgNgEQgGgCgDgDQASgQAmgUIAYgOQAJgGAMgHIABAAIAUARIAPALQAEABALAAQAMgBAFACQACAAAIAHIgCACIgdApQgJARgGAGIgCACQgHAHgRAEIgEABIgCAAg");
	this.shape_30.setTransform(729.7,338.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#DBAE86").s().p("AAbBHQgEgBgMAAQgLAAgCgBIgPgKIgZgUIgKgIQgEgEgCgIQgBgFAAgXQAAgWADguQADAAAFADQAHAFAJABQANAAAEACQAPAFAHANQAEAHAHAVQAGASAIAEIAQAGQAKADACAGQABAEgDALIABALQAAAGgBAEQAAAFgJAIIgMAMQgHgGgDgBg");
	this.shape_31.setTransform(734.9,328.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#896F55").s().p("AgdBaIgDgIQgBgEgDgDIgKgEQgOgIgIgLQgJgOAEgPQACgTAEgEQADgIASgMQAQgKADgKQABgKABgEIAKgNIAXgVIAJAJQAFAGAFABIAMgMQAHgEAHgCIAEgCQgDAvAAAWQAAAXABAFQACAHAEAFIAKAIIAEADIAAAAQgOAGgJAGIgZAPQgkATgRASg");
	this.shape_32.setTransform(723.4,330);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A68667").s().p("AAGApIgDgCIgNgJQgHgCgCgCQgCgBgEgJIgEgIQgSAAgJgEIgGgDQAOgLAagMIARgKQAFgEAKgEIAAAAIAOAMIAKAIQADABAIAAIALABQADABAEAFIgXAcQgGAMgFAEIgBACQgFADgMAEIgDAAIgCAAg");
	this.shape_33.setTransform(637.4,254);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#DBAE86").s().p("AARAyIgLgBQgGAAgDgBIgKgIIgRgPIgHgFQgCgDgBgFIAAgTIADgwQADAAADADQAFADAGABIAMACQAIADAGAKQACAFAFAPQADAMAGADIALAEQAHACABAFQABADgCAIIgBAOQAAAEgHAFIgIAJQgEgFgDgBg");
	this.shape_34.setTransform(641.3,247);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#896F55").s().p("AgVA9QgCgHgDgDIgHgEQgKgGgEgHQgGgLADgKIACgJQABgEABgDQADgFANgHQALgHADgGQAAgIACgDIAGgIIARgOIAFAHQAEADADABIAJgHIAKgEIADgBIgEAvIAAATQABAFADADIAHAGIACACIAAAAQgKAFgGADIgSAKQgYANgNAMg");
	this.shape_35.setTransform(633.2,247.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A68667").s().p("AAIAdIgKgEIgHgCQgBAAgEgGIgEgGQgNADgHgBIgFgCQAIgLARgLIAUgSIAMAHIAIAFQAEAAAMgCIAGADIgLAXQgEAKgCADIgBABQgCADgJAFIgCABIgFgBg");
	this.shape_36.setTransform(665.1,376.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#DBAE86").s().p("AAUAhQgMACgEAAIgGgFIgMgHIgDgBIgFgDQgDgCgBgDIgDgOQgDgQgCgTQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAQADACAGAAIAIgBQAJACADAGIAIANQAEAIAFADIAJABQAFAAACACQABACgBAGIACALIgEAHIgFAIIgGgDg");
	this.shape_37.setTransform(666.9,370.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#896F55").s().p("AgJAxQgCgFgDgBIgFgCQgIgDgFgFQgFgGAAgIQAAgKABgEQABgEAIgFQAIgHAAgFIAAgIIAEgHIALgNIAEAEQACADADAAIAGgHIAGgFIACgBQABATADARIADAOQACACACACIAGAEIACABIgWASQgQAMgHALg");
	this.shape_38.setTransform(661.4,372.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A68667").s().p("AAcA0IgGgBIgWgFQgHAAgEgCQgCAAgJgKIgIgIQgYAHgLAAIgJgCQAKgUAdgaIARgTQAHgIALgJIAUAKIAJADIAIACQADABAKgEQAKgDAFAAQADAAAHAEIAAACQgFANgKAeIgDAMIgEAMIgBADQgFAHgOAJIgFACIAAAAg");
	this.shape_39.setTransform(588.5,324.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DBAE86").s().p("AARA6IgIgCIgJgDIgYgMIgLgEQgFgCgDgHQgDgFgGgVQgGgSgJgpQADgBAFACQAHADAJgCIAPgDQAPABALAJQAEAGALAQQAJAOAJAEQACABANgBQAKAAAEAFQACADAAAKIAGASQAAAFgGAJIgHAOQgHgEgDAAQgFAAgKADQgIAEgEAAIgBgBg");
	this.shape_40.setTransform(590.5,314.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#896F55").s().p("AgIBaQgFgJgFgBIgKgBQgPgEgJgIQgMgKAAgNQgDgTABgGQACgIAMgMQAMgOAAgJQgCgJAAgEIAFgOIARgZQADAAAHAGQAGADAEAAIAHgNQAEgFAGgEIADgCQAJApAHATQAFAVADAFQAEAFAEACIALAFIAEACQgKAJgHAIIgSATQgcAbgJAUg");
	this.shape_41.setTransform(581.5,318);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#A68667").s().p("AAiA5IgbgCIgNABQgDgBgLgJIgLgJQgZAMgPAAIgLAAQAKgaAdgiQAKgLAIgNQAHgLALgMIAZAIIAKADQAGACAEAAQAEAAALgGQAMgFAFgBQAFAAAIADIgBADIgKA0IgCAQQgBAIgCAGIgBADQgEAKgQALIgGADIgGgBg");
	this.shape_42.setTransform(597,414.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DBAE86").s().p("AAUBAIgKgDIgZgIIgFgCIgOgDQgFgCgFgHQgEgFgKgYQgKgTgQgwQADgCAGABQAIADAKgEQANgEAFgBQARgCAOAKQAIAGANARQAOAPAKADQADABAPgCQAMgCAEAFQADAEACALIAJAUQABAEgBAFIgEAIQgEAJgCAIQgIgDgFAAQgFABgMAFQgLAGgEAAIgCAAIgIgBg");
	this.shape_43.setTransform(597.8,402.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#896F55").s().p("AAABsIgFgHQgDgEgEgBIgLABQgSgCgMgIQgPgKgCgQIgEgOQgDgKABgEQAAgJANgTQAMgPgBgLQgEgKAAgGQgBgFAFgKQACgHANgaIANAFQAHAEAGgBIAIgQQADgIAFgFIAEgDQAQAwAKAVQAKAYAEAFQAFAHAFADIAOABIAFABQgLAMgHALQgIAMgKAMQgdAkgKAag");
	this.shape_44.setTransform(588.3,408.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#A68667").s().p("AAVA+IgGgDIgXgKIgOgEQgDgBgIgMIgHgMQgaAFgPgDQgHgBgDgDQAOgSAngbIAYgSQAKgIALgIIAAAAIAYAPIAIAGQAFADAEABIAQgBQALgCAGABQAEAAAIAGIgCADIgZAuQgHATgGAHIgBADQgJAIgQAGIgGACIAAAAg");
	this.shape_45.setTransform(443.5,325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#DBAE86").s().p("AAmBGQgFgBgMACIgQABQgDAAgEgEIgIgFIgYgQIgFgCIgLgHQgFgEgCgIQgCgGgBgJIgCgOQgEgdgCgrQAEgBAFADQAHAFALgBIASAAQAQADAJANQAGAIAJAVQAJARAJAGQADABAOABQALACADAGQACAEgCANIACAKQABAHAAAEQAAAFgJAKQgFAGgFAIQgIgFgEgBg");
	this.shape_46.setTransform(447.8,314);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#896F55").s().p("AgXBkIgEgIQgCgFgDgCIgLgDQgQgHgKgLQgLgNADgPQgBgVADgHQADgIARgNQAQgOACgJQgBgLABgFQACgEAHgKQAEgHAUgTIAIAIQAGAGAFABIAMgOIANgJIAFgCQACAsADAdIACAPQABAKACAEQADAIAEADIAMAHIAFADIgBAAQgNAJgJAHIgYASQglAbgPAUQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBgBAAAAg");
	this.shape_47.setTransform(436.3,316.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A68667").s().p("AAJAcIgDgBIgJgEIgHgCIgIgMQgNACgGgBIgFgCQAHgIASgMIAUgQIALAHIAIAFQAEABALgCIAFADIABAAIgBABIgMAVIgGAMIgBABQgCADgJAEIgCABIgBgBg");
	this.shape_48.setTransform(508.2,419.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DBAE86").s().p("AAXAjIgGgDQgLACgEgBIgGgEIgLgHIgCgBQgIgEgBgFIgCgMIgCgiQAAAAAAAAQABAAAAAAQABAAAAAAQABABAAAAQAHAEAKgCQAHACADAGQADADAFAKQADAIAFACIAIAAQAFABACADQABACgBAGIABAKQAAADgFAEIgEAGg");
	this.shape_49.setTransform(510.2,414.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#896F55").s().p("AgKAuQgCgFgCgCIgFgBQgSgIACgOQAAgKABgDQACgDAIgGQAHgFABgFIAAgIIAEgGQADgFAIgHIADAEQADACACABIAGgHIAGgEIACAAIACAhIACANQACAEAHAEIACABIgWAQQgPAMgHAKg");
	this.shape_50.setTransform(504.9,415.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#A68667").s().p("AAAAcIgJgHIgHgEIgFgOQgOgBgGgCIgEgBQAJgIAVgJIANgGIALgFIAJAKIAHAGIAJACIAIABQACABACADIgBABIgaAeIgBABQgEADgJABIgBAAIgEgCg");
	this.shape_51.setTransform(504.2,485);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#DBAE86").s().p("AAKAmIgIgBIgGgBIgHgHIgLgLIgFgFQgCgCAAgEIABgOIAFgjQABAAAAABQABAAAAAAQABAAAAABQABAAAAAAQADAEAFABIAJACQAFADAEAHQACADACAMQACAIAEADIAHAEQAGACAAADQABADgCAFIgBAKQgBADgFAEIgHAGQgCgEgDgBg");
	this.shape_52.setTransform(507.3,480);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#896F55").s().p("AgSArQAAgFgDgCIgEgDQgHgFgEgGQgDgHADgIIAEgLQACgEAKgEQAJgFACgFIACgHIAFgFIANgLIADAFQADAEACABIAHgFIAIgDIACAAIgFAjIgCANQABAFABACIAFAEIACACIgNAFIgNAGQgTAIgJAJg");
	this.shape_53.setTransform(501.2,480.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#A68667").s().p("AAHA8IgEgDIgVgOQgIgEgFgDQgCgBgFgNIgFgNQgaAAgOgGQgFgBgEgCQAUgSAogRIAagNQAIgGAOgFIAAgBIAVATIAGAHQAFAEADABQAEACAMAAQAMAAAFACQADACAGAGIAAABIgBACIghAnIgJAMIgIALIgDACQgHAHgSADIgGABIgBgBg");
	this.shape_54.setTransform(407.8,471.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#DBAE86").s().p("AAhBTQgFgGgEgCQgFgCgMAAQgKAAgDgCQgEgBgEgEIgHgHIgYgWQgJgHgBgCQgEgEgBgIQgBgGABgJIABgOQABgcAHgqQAEAAAEAEQAGAFAKACIARADQAOAGAHAPQAEAHAGAWQAFATAIAFQACACANAFQALADABAHQABAEgEAMIgBAVQgBAFgKAHIgNANg");
	this.shape_55.setTransform(413.8,461.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#896F55").s().p("AgiBZIgCgIQgBgFgDgDIgKgFQgOgJgHgMQgIgPAFgOQADgSAEgHQAFgHASgKQASgKAEgKQABgKACgFQACgEAIgHQAHgHATgOIAIAKQAFAGAFACIAOgLQAHgEAHgCIAEgBQgGAqgBAcIgBAQQgBAHABAGQABAIAEAEQABACAIAHIAEADIAAABQgOAFgLAGIgaANQglARgUASg");
	this.shape_56.setTransform(401.7,462.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#A68667").s().p("AAMAyIgFgCIgRgKIgLgEQgCgBgGgKIgGgKQgVACgMgEIgIgEQAPgPAggRQASgOAUgLIAAAAIASAOIAHAFIAHAEIANAAQAJgBAFACQADAAAGAGIgCACIgXAjIgMAVIgCABQgGAHgPAEIgEABIgBgBg");
	this.shape_57.setTransform(461.8,585.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#DBAE86").s().p("AAZA8QgEgBgKAAIgLAAIgHgDIgGgGIgWgQIgJgGQgEgDgBgHIgCgYQgBgTABgoQAEAAADADQAGAEAIAAIAPABQAOAEAFAMQAEAFAHASQAFAPAHADQACABAMADQAJADACAFQABAEgCAKIABARQgBAGgIAGQgFAEgEAHQgFgGgEAAg");
	this.shape_58.setTransform(466,577);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#896F55").s().p("AgXBOIgDgGIgDgGQgHgCgCgBQgNgHgHgJQgIgMADgMQACgRACgGQADgEAPgLQAOgJACgJQAAgIACgEQABgEAGgHIATgUIAIAIQAFAFAEABIAKgKIAMgHIADgBQgBAoABATIACAYQABAHAEADIAJAGIAEADIgBAAQgVALgTANQgdASgPARg");
	this.shape_59.setTransform(456.2,578.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#A68667").s().p("AAHAmIgEgCIgMgIIgIgEQgCgBgEgIIgDgHQgSAAgHgDQgEgBgDgCQAOgLAXgLIAQgJIAOgIIANALIAJAHIAKABQAIAAADABIAGAFIgBABIgTAaIgKAPIgBABQgGAFgKACIgDAAIgBAAg");
	this.shape_60.setTransform(380.6,576.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#DBAE86").s().p("AAQAvQgDgCgHABIgIgBIgKgHIgQgOIgGgEQgDgEgBgFIAAgRQAAgTADgZQACgBADADQAEADAGABIALACQAJADAEAIQADAFAFAOQADALAFADIAKADQAHACABAEQABADgCAIIAAANQgBADgGAGQgFADgCAEIgHgEg");
	this.shape_61.setTransform(384.1,570.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#896F55").s().p("AgTA5QgBgHgEgCIgGgDQgJgFgFgIQgGgJADgJQACgNACgCQADgFALgHQALgHACgGIACgKQABgCAFgFIAPgOQACABADAFQAEAEADABIAIgIIAJgEIADAAQgDAZAAATIAAARQABAFADAEIAGAEIADADIgQAIIgQAJQgUAKgOANg");
	this.shape_62.setTransform(376.5,571);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#A68667").s().p("AAFAwIgDgCIgPgLIgLgGQgDgBgDgKIgFgKQgXgBgIgEIgIgDQAPgNAhgPIAWgKIARgJIABAAIAQAPIAFAFIAGAFIAMABQAKABAEABQADABAFAGIgCABIgaAgIgOASIgBACQgHAFgOACIgDAAIgDAAg");
	this.shape_63.setTransform(342,606.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DBAE86").s().p("AASA9QgDgCgKAAIgKgCIgGgEIgGgFIgQgQIgDgCIgIgHQgDgEgBgGIABgXQABgXAFghQADAAAEADQAFAFAIABQAKABAEABQAKAFAGAMQADAGAFASQADAOAHAEQABACALAEQAJADABAFQABADgEAKIgBAQQgBAFgIAGIgKAJQgEgFgEgBg");
	this.shape_64.setTransform(346.8,597.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#896F55").s().p("AgbBHIgCgHQgBgEgCgCIgIgDQgLgIgGgKQgGgMAEgLQADgOADgFQADgGAQgIQAOgIADgIQABgIABgEQACgDAHgGIAUgRIAGAIQAEAFAEACIALgJIALgFIAEgBQgFAigBAXIgBAWQABAHADADIAIAHIADADIAAAAIgUAJIgVAKQgfAPgPAOg");
	this.shape_65.setTransform(337.1,598.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#A68667").s().p("AAQA2IgFgCIgTgJIgNgEQgCgBgHgLIgHgLQgXADgNgDIgIgDQAOgQAigWIAWgPQAIgHAKgHIAjAXIAPAAQALgCAEABQAEACAGAEIgCACQgIAOgPAaQgKAVgCACIgCACQgGAHgPAFIgFACIgBgBg");
	this.shape_66.setTransform(299.7,650.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#DBAE86").s().p("AAfA/QgEgBgLABIgOABIglgaIgKgGQgEgEgCgHIgEgZQgCgVgBgrQAEAAAEACQAHAEAJAAIAQABQAOADAHAMQAFAGAIATQAGAQAIAFQADAAAMACQAKACACAGQACADgCALIACATQgBAFgHAIIgKANQgFgFgFgBg");
	this.shape_67.setTransform(303.8,640.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#896F55").s().p("AgWBXQgDgLgFgDIgJgCQgOgHgIgKQgJgMACgOQABgSACgGQADgGAQgLQAOgLACgKQAAgJABgEQABgEAGgIIAWgWIAHAIQAFAEAFABIALgLIALgIIAEgBQABArACAVIAEAZQACAHAEADIAKAHIAEACQgNAIgIAGIgWAPQggAXgOARIgDgCg");
	this.shape_68.setTransform(293.5,642.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#A68667").s().p("AAVAjIgQgBIgIAAIgIgGIgHgFQgPAIgIABIgHAAQAFgQASgUQAIgPAMgOIAAAAIAPAEQAKADACAAIAJgEIAKgEQACAAAGACIgBABIgFAfIgDASIAAACQgDAGgIAHIgEACIgEAAg");
	this.shape_69.setTransform(221.5,559.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#DBAE86").s().p("AAHAkIgPgEIgDgBIgIgCQgDgBgDgEIgJgRIgRgnQACgBAEAAQAFABAGgCIAKgDQALgCAIAGQAFADAHALQAJAJAGABIALgBQAHgBADADQACACABAGIAGAMQABADgEAHQgCAGgBAFQgGgCgCAAIgKAEIgJAEIAAAAIgMgDg");
	this.shape_70.setTransform(221.8,552.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#896F55").s().p("AABBBQgCgGgEgBIgHABQgagCgDgTQgEgMAAgFQAAgFAIgMQAGgIgBgHQgCgGAAgDQgBgDADgHIAJgUIAHADQAFACADgBIAFgKQACgEACgEIACgBIARApIAJARQADAFADAAIAIACIADAAIAAAAQgLANgJAPQgRAXgGAPg");
	this.shape_71.setTransform(216.2,556);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#A68667").s().p("AAjA/IgdgEIgOAAQgDAAgMgLIgMgKQgcANgPAAQgGACgFgCQAKgbAgglIAUgaQAIgLAMgMIAAAAIAbAJQASAFADAAQAFgBAMgFQAMgFAGgBQAGgBAIAEIAAAAIgBAEIgMA4IgDAQIgDAQIgBADQgFALgRALIgGAEIgHgBg");
	this.shape_72.setTransform(180.5,579.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#DBAE86").s().p("AAJBBIghgKIgOgEQgGgDgFgHIgOggQgNgcgOgtQACgBAIABQAJADAKgEQAPgEAFgBQASgBAPAKQAIAGAPAUQAOAQALADQADABAQgCQANgBAEAGQAEAEACALIAEALQAEAHABAEQABAGgGANQgEAIgDAKIAAAAQgIgEgGABQgGAAgMAGQgMAFgFABIAAAAQgEAAgRgGg");
	this.shape_73.setTransform(181.6,567.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#896F55").s().p("AgBB0IgGgHQgEgFgEgBIgMAAQgTgCgNgJQgQgLgCgRIgDgPQgDgKABgFQAAgKAOgUQANgQgBgMIgCgIIgCgJQAAgEAFgNIARgiQAEAAAJAFQAJAFAGgBIAIgSQAEgIAFgFIAFgDQAOAtANAeIAOAfQAFAIAGACIAOACIAGACIAAAAQgMANgIALIgUAaQggAmgKAbIgDgCg");
	this.shape_74.setTransform(171.2,572.5);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#A68667").s().p("AABAjIgLgJIgIgEQgCgBgDgIIgDgHQgPAAgJgEIgGgCQAMgKAYgLIAQgIIAOgHIAMAMIAJAHIAJABIAKABIAGAFIAAACIgUAXIgKAOIgCACQgGAEgJABIgFABIgDgCg");
	this.shape_75.setTransform(156.5,657.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#DBAE86").s().p("AAOAuIgKgBIgHgBIgJgIIgPgNIgGgGQgDgCAAgFIAAgRIAFgrQACAAADADQAEADAGABIAKACQAIADAEAJQADAFADANQADALAFADQACABAIADQAGACABAEQABADgDAHIAAANQgBADgGAEIgIAIIgGgFg");
	this.shape_76.setTransform(160.1,650.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#896F55").s().p("AgUA2QgBgHgDgDIgGgCQgIgGgFgHQgFgJADgJQACgLADgDQACgFAMgGQAKgGADgGIABgJIAHgIIAPgMIAFAGQADAEADABIAIgHIAJgEIACAAIgEArIgBAQQABAFACADIAHAFIACACIgPAHIgQAIQgXALgLALg");
	this.shape_77.setTransform(152.7,651.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#A68667").s().p("AAQAgIgOgCIgHgBQgCAAgLgLQgPAGgHAAIgGgBQAHgOAQgQQAKgNAMgMIAMAFIALADIAJgCQAGgDADAAQADAAAEACIgBACIgHAbIgEAQIAAACQgDAGgIAFIgEACIgEgBg");
	this.shape_78.setTransform(123,683.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#DBAE86").s().p("AADAiIgPgGIgIgCQgDgCgCgEIgHgQIgMglQACgBADABQAFACAFgCIAKgCQAKgBAHAGQADAEAHAKQAHAIAGACIAJAAQAHAAACADQACACAAAFIAEALQABADgDAGIgEAKQgEgDgDABQgDAAgGACIgJADIgLgDg");
	this.shape_79.setTransform(123.8,677.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#896F55").s().p("AgCA7QgDgFgEgCIgGAAQgXgEgCgRQgCgMAAgEQABgFAIgKQAHgGgBgHIgCgJIADgIIAKgRIAGADQAEACAEAAIACgJIAGgHIACgBIANAnIAGAQQADAEADAAIAHACIADABQgMAMgJAMQgRASgFAPg");
	this.shape_80.setTransform(118.4,680.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#A68667").s().p("AAVA7IgFgCIgWgJQgKgBgEgCQgDgBgHgMIgIgLQgaAFgOgCQgGgBgDgCQANgVAlgYIAWgSQAJgIALgIIAAAAIAXAOIAJAFQAFADADAAQAEABAMgCQALgCAFAAQAFABAGAFIgBADIgXAtIgFANIgGANIgCACQgIAJgPAGIgGABIgBAAg");
	this.shape_81.setTransform(85.3,621.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#DBAE86").s().p("AAnBCQgFAAgLACQgMACgEgBQgDAAgEgDIgIgFIgbgRIgMgGQgFgEgCgHIgGgcQgEgdgDgpQAEAAAFACQAHAEAKAAIARgBQAQADAJAMQAGAIAJATQAJARAJAFQACACAOAAQALABADAGQACAEgBAMIACAKQABAGAAAEQAAAGgIAJIgKAOQgGgFgFgBg");
	this.shape_82.setTransform(89.1,610.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#896F55").s().p("AgUBhIgEgHQgDgFgDgCIgKgCQgQgGgJgLQgLgMACgPQgBgUACgIQADgIAQgMQAPgNACgKQgBgKABgFQABgEAGgJQAGgIARgSQACABAGAHQAGAFAFABIALgOQAHgGAFgDIAFgCQACApAFAdIAFAdQADAGAFAEIALAGIAFADIgBAAQgMAIgJAIIgXASQgiAagOAVIgDgDg");
	this.shape_83.setTransform(78.2,613.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#A68667").s().p("AAQAqIgQgFQgIAAgDgCQgCAAgHgIIgHgIQgUAFgIgBIgIgCQALgSAYgSQAOgOAOgOIAgAPQADAAAIgCIAMgCQAEAAAFAEIgBABIgOAjIgHAUIgBACQgFAGgLAGIgFACIgEgCg");
	this.shape_84.setTransform(60,657.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#DBAE86").s().p("AAKAyIghgQIgJgEQgDgCgDgGIgFgWIgKgxQADgBAEACQAFACAIgBIANgBQAMABAIAIQADAFAIAPQAIAMAHADQACABAKAAQAJABACACQACADAAAJIADAPQAAAFgFAHQgEAFgCAGQgGgDgDgBIgMACIgLACIgBAAg");
	this.shape_85.setTransform(62.2,649.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#896F55").s().p("AgKBKQgEgIgEgCIgIgBQgMgEgIgGQgJgKABgKQgCgQACgFQABgHALgJQALgLAAgHQgBgIAAgEIAFgKQADgGANgOIAHAFQAEADADABIAIgLIAIgHIADgCIAKAzIAGAXQACADAEACIAJAEIADACQgRAOgOAOQgYAUgJASg");
	this.shape_86.setTransform(54.4,652);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#A68667").s().p("AAHAmIgDgCIgNgIIgIgEQgCgBgDgIIgEgHQgTAAgGgDQgEgBgCgCQAKgJAagNIAQgJQAFgEAIgEIANALIAKAHIAKAAIALABIAGAFIgBABIgTAaIgKAPIgBABQgFAFgLACIgDABIgBAAg");
	this.shape_87.setTransform(22.4,655.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#DBAE86").s().p("AARAuIgKgBIgIAAIgKgHIgQgNIgGgFQgDgDgBgFIgBgSQAAgTADgZQACAAADACQAEADAGABIALABQAJAEAFAIQADAGAEANQAEAMAFABQABACAJADQAHABABAEQABADgCAHIAAAOQgBACgGAGIgHAIIgHgFg");
	this.shape_88.setTransform(25.9,648.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#896F55").s().p("AgTA6QgBgHgDgDIgHgCQgWgOAFgRQACgNACgCQACgFAMgIQALgGACgHIABgJIAGgIIAPgOIAFAGQAEAEADABIAAAAIAAAAIAIgIIAJgEIADgBQgDAZAAAUIABARQABAFADADIAGAFIADACQgKAEgGAEIgQAJQgYAOgKALg");
	this.shape_89.setTransform(18.4,649.6);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#A68667").s().p("AAaAwIgWgDQgGABgFgBQgEgBgQgQQgVAKgMAAIgJgBQAKgWAYgZIAQgUQAGgIAJgKIAVAHIAPAFQAEAAAJgFQAKgEAEAAQADAAAIADIgBACIgKArIgFAYIgBACQgEAJgNAIIgFADIgFgBg");
	this.shape_90.setTransform(-14.6,697.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#DBAE86").s().p("AAGAyIgZgIIgLgDQgEgCgEgGQgCgEgJgVQgHgQgMgnQADgCAEACQAHACAIgDQAMgDADAAQAPgBALAIQAFAFALAPQALAMAIADQADABAMgBQAKgBADAEQADADABAJIAHARQAAADgEALQgDAFgDAJQgIgDgDAAQgEAAgJAEQgJAFgEAAIgQgFg");
	this.shape_91.setTransform(-13.5,688.1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#896F55").s().p("AgBBZQgGgJgFgBIgJAAQgPgCgKgHQgMgJgBgNQgFgRABgGQABgIALgPQAKgMgBgJIgBgGIgCgHIAEgNQADgGALgUIAKAFQAGADAFAAIAGgOIAHgKIAEgCQAMAnAHASQAJAVACAEQAEAGAEABIALACIAEABQgJAKgGAIIgPAUQgZAbgJAWg");
	this.shape_92.setTransform(-21.6,692.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A68667").s().p("AAZA0IgXgEIgMgBQgCAAgJgKIgJgIQgXAJgNgBIgKgBQAKgVAdgcIARgUQAHgJALgKIAAAAIAVAJQAOAFADAAQAEAAAKgEQALgEAEAAQAEAAAIAEIgBACIgNAtIgHAaIgBADQgFAJgOAIIgFACIgGgBg");
	this.shape_93.setTransform(-57.7,581.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DBAE86").s().p("AADA2IgVgJIgFgBIgLgEQgFgCgEgHIgKgaQgIgUgKgpQADgBAFABQAIADAIgCQANgEADAAQAQAAALAKQAEAFANARQAKAOAKADQACABANgBQALAAADAFQADADABAJIAGATQABAFgGAKIgGAOQgIgDgEAAQgEAAgLAEQgKAEgEAAQgDAAgOgGg");
	this.shape_94.setTransform(-56.1,571.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#896F55").s().p("AgGBeQgFgIgGgDIgKgBQgPgCgKgIQgNgJAAgPQgEgSABgIQABgHAMgPQAMgNAAgKQgDgJAAgEIAFgPQADgIANgTIALAGQAGADAFAAIAGgOQAFgGAFgEIADgDQALAqAIAVIAKAbQADAGAFABIAMADIAEACIAAABQgKAJgHAJIgSAUQgcAegIAWg");
	this.shape_95.setTransform(-65,575.3);

	// Layer 1
	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#95AAB0").s().p("Eg7/BcgMAAAi4/MB3/AAAMAAAC4/g");
	this.shape_96.setTransform(384,592.1);

	this.addChild(this.shape_96,this.shape_95,this.shape_94,this.shape_93,this.shape_92,this.shape_91,this.shape_90,this.shape_89,this.shape_88,this.shape_87,this.shape_86,this.shape_85,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71,this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.instance,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-203.8,0,1038.4,1354.5);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(2,8.1,1,1,0,0,0,53.4,49.3);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(-6.5,-5.2,1,1,0,0,0,52.6,46.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ACECdQiHALgrADQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape.setTransform(-24.1,22.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF036").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABIiyAOIgXABQgzAAglgNg");
	this.shape_1.setTransform(-24.1,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_2.setTransform(23.9,22.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEF036").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_3.setTransform(23.9,22.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_4.setTransform(24,-22.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEF036").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_5.setTransform(24,-22.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_6.setTransform(-24,-22.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEF036").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_7.setTransform(-24,-22.5);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-59.2,-51.7,114.5,109.1);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.ClipGroup_9();
	this.instance.setTransform(1.7,6.7,0.851,0.851,0,0,0,53.5,49.2);

	this.instance_1 = new lib.ClipGroup_1_1();
	this.instance_1.setTransform(-5.5,-4.6,0.851,0.851,0,0,0,52.6,46.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ACECdQiHALgrADQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape.setTransform(-20.4,19.1,0.851,0.851);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF036").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABIiyAOIgXABQgzAAglgNg");
	this.shape_1.setTransform(-20.4,19.1,0.851,0.851);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_2.setTransform(20.4,19.1,0.851,0.851);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEF036").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_3.setTransform(20.4,19.1,0.851,0.851);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_4.setTransform(20.5,-19.1,0.851,0.851);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEF036").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_5.setTransform(20.5,-19.1,0.851,0.851);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_6.setTransform(-20.3,-19.1,0.851,0.851);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEF036").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAZgBBBAHQA/AIAggEQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgGhHAGQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_7.setTransform(-20.3,-19.1,0.851,0.851);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.3,-44,97.3,92.7);


(lib.Selection = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.ClipGroup_10();
	this.instance.setTransform(0.3,8.6,1,1,0,0,0,53.4,49.3);

	this.instance_1 = new lib.ClipGroup_1_2();
	this.instance_1.setTransform(-8.2,-4.7,1,1,0,0,0,52.6,46.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("ACECdQiHALgrADQhBADgugPQgLgLgBgQQAAgCACgtQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABQgWABAAAAg");
	this.shape.setTransform(-25.8,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEEDAF").s().p("AidCfQgLgLgBgQIACgvQgBgaAHhAQAIg/gEghQADg4AJgGQAHgFBUgDQALAAAJAIQAJAKAAAKQgHBKAHBFQAAAOAVAFQAJACAKgBIBPAHIAOgBQAQABANAHQApAWgKBHQACAcgQABIgWABIiyAOIgXABQgzAAglgNg");
	this.shape_1.setTransform(-25.8,23);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("ACdiDQAFBSAJBgQADBBgPAuQgLALgQABQgCAAgtgCQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARQABAVAAAAg");
	this.shape_2.setTransform(22.2,23);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FEEDAF").s().p("ABVCoQgaAChAgIQg/gHghADQg4gDgGgJQgFgHgChTQgBgMAIgJQAJgIAMAAQBIAHBGgHQAOAAAFgVIAIhjQgDgWALgVQAVgpBHAKQAcgCABARIABAVQAFBSAJBgQADBBgPAuQgLALgQABIgvgCg");
	this.shape_3.setTransform(22.2,23);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AiCicQBSgFBfgJQBBgDAuAPQALALABAQQAAADgCAtQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAQAVgCABAAg");
	this.shape_4.setTransform(22.4,-22);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEEDAF").s().p("AAjCkQgIgIAAgMQAHhKgHhGQAAgNgVgEIhjgJQgWAEgVgLQgpgWAKhHQgCgcARAAIAWgCQBSgFBfgJQBBgDAuAPQALALABAQIgCAwQACAZgIBAQgHA/ADAhQgDA5gJAFQgHAFhTADQgNAAgIgIg");
	this.shape_5.setTransform(22.4,-22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AicCEQgLiHgDgrQgDhBAPguQALgLAQgBQACAAAuACQAagCBAAIQA/AHAggDQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgHhHAHQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgVAphIgKQgbACgBgRQgBgVgBAAg");
	this.shape_6.setTransform(-25.6,-22);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEEDAF").s().p("Ah+CoQgbACgBgRQgBgVgBAAIgOiyQgDhBAPguQALgLAQgBIAwACQAagCBAAIQA/AHAggDQA5ADAFAJQAFAHADBUQABAMgJAIQgIAIgMAAQhJgHhHAHQgNABgEAVQgCAJABAKIgIBPIABAOQgBAQgHANQgRAhgyAAQgMAAgOgCg");
	this.shape_7.setTransform(-25.6,-22);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(-1.7,0.6);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(-1.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({_off:true,x:-1.6,y:0.5},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60.8,-51.2,114.5,109.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;