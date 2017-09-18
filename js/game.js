// Create the state that will contain the whole game
var config = {
	world_width: 2000,
	world_height: 2000,
	tree_density: 0.00001, // percentage of total area covered
	rabbit_density: 0.0001
}

var mainState = {  
    preload: function() {
    	game.load
    		.image('tree', 'img/tree.png')
    		.image('tree-eaten', 'img/tree-eaten.png')
    		.image('rabbit', 'img/rabbit.png');
    },

    create: function() {
    	console.log("In the beginning God created the heavens and the earth.");

        game.stage.backgroundColor = '#ffffff';
        game.world.setBounds(0, 0, config.world_width, config.world_height);
        game.physics.startSystem(Phaser.Physics.ARCADE);
        // game.world.enableBody = true;

    	this.trees = game.add.group();
    	this.rabbits = game.add.group();

    	for(var i = 0; i < config.world_width * config.world_height * config.rabbit_density; i++)
    		this.spawnRabbit(game.rnd.integerInRange(0, config.world_width), game.rnd.integerInRange(0, config.world_height));

    	for(var i = 0; i < config.world_width * config.world_height * config.rabbit_density; i++)
    		this.plantTree(game.rnd.integerInRange(0, config.world_width), game.rnd.integerInRange(0, config.world_height));
    },

    spawnRabbit(x, y){
    	var rabbit = this.rabbits.add(game.add.sprite(x, y, 'rabbit'));
    	return rabbit;
    },

    plantTree(x, y){
    	var tree = this.trees.add(game.add.sprite(x, y, 'tree'));
    	return tree;
    },

    update: function() {
    	//...
    }
};

//////////////////////////
// MAIN
//////////////////////////

var game = new Phaser.Game(1024, 768);  
game.state.add('main', mainState);  
game.state.start('main');