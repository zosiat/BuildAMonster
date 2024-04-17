class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        //legs
        my.sprite.legR = this.add.sprite(this.bodyX + 50, this.bodyY + 120, "monsterParts", "leg_darkC.png");
        my.sprite.legL = this.add.sprite(this.bodyX - 50, this.bodyY + 120, "monsterParts", "leg_darkC.png");
        my.sprite.legL.flipX = true;

        //ears
        my.sprite.earR = this.add.sprite(this.bodyX + 50, this.bodyY -100, "monsterParts", "detail_dark_ear.png");
        my.sprite.earL = this.add.sprite(this.bodyX - 50, this.bodyY -100, "monsterParts", "detail_dark_ear.png");
        my.sprite.earL.flipX = true;
        my.sprite.earR.setScale(1.5);
        my.sprite.earL.setScale(1.5);
        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_darkF.png");
        
        //arms
        my.sprite.armR = this.add.sprite(this.bodyX + 80, this.bodyY + 50, "monsterParts", "arm_darkE.png");
        my.sprite.armL = this.add.sprite(this.bodyX - 80, this.bodyY + 50, "monsterParts", "arm_darkE.png");
        my.sprite.armL.flipX = true;
        //rotating the arms
        my.sprite.armR.setRotation(-1);
        my.sprite.armL.setRotation(1);

        //face
        my.sprite.eyeR = this.add.sprite(this.bodyX + 30, this.bodyY - 20, "monsterParts", "eye_cute_light.png");
        my.sprite.eyeL = this.add.sprite(this.bodyX - 30, this.bodyY - 20, "monsterParts", "eye_cute_light.png");
        my.sprite.eyeR.setScale(3/4);
        my.sprite.eyeL.setScale(3/4);
        //nose
        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY + 2, "monsterParts", "nose_brown.png");
        my.sprite.nose.setScale(1/3);

        //mouth and expressions
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.smile.flipY = true;

        //my.sprite.frown = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 27, "monsterParts", "mouthB.png");
        
        //starts invisible
        my.sprite.smile.visible = true;
        my.sprite.fangs.visible = false;
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        //check for input
        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('S'), 500)) {
            // 'S' key is pressed, make smile visible and fangs invisible
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        }

        if (this.input.keyboard.checkDown(this.input.keyboard.addKey('F'), 500)) {
            // 'F' key is pressed, make fangs visible and smile invisible
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;

        }



    }

}