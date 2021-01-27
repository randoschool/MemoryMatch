
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {
	
	constructor() {
		super("Level");
		
		/** @type {Phaser.GameObjects.Sprite} */
		this.player;
		/** @type {Phaser.GameObjects.Image[]} */
		this.boxes;
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	editorCreate() {
		
		// player
		const player = this.add.sprite(391, 287, "player_23");
		
		// crate_06
		const crate_06 = this.add.image(395, 429, "crate_06");
		
		// lists
		const boxes = [crate_06]
		
		// player (components)
		new Physics(player);
		new Movement(player);
		
		// crate_06 (components)
		const crate_06Physics = new Physics(crate_06);
		crate_06Physics.static = true;
		
		this.player = player;
		this.boxes = boxes;
	}
	
	/* START-USER-CODE */

	create(){
		this.editorCreate();

		this.player.play('down-walk');

		this.physics.add.collider(this.player, this.boxes);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
