
// You can write more code here

/* START OF COMPILED CODE */

class Physics {
	
	constructor(gameObject) {
		gameObject["__Physics"] = this;
		
		/** @type {Phaser.GameObjects.Image} */
		this.gameObject = gameObject;
		/** @type {boolean} */
		this.static = false;
		
		/* START-USER-CTR-CODE */
		this.scene = this.gameObject.scene;

		this.scene.events.once(Phaser.Scenes.Events.UPDATE, this.start, this);
		
		/* END-USER-CTR-CODE */
	}
	
	/** @returns {Physics} */
	static getComponent(gameObject) {
		return gameObject["__Physics"];
	}
	
	/* START-USER-CODE */

	start(){
		this.scene.physics.add.existing(this.gameObject, this.static);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
