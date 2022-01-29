var juego=new Phaser.Game(420,472,Phaser.CANVAS, 'bloque_juego');
var fondoJuego;
var flappy;
var teclaDerecha;
var teclaIzquierda;
var teclaArriba;
var teclaAbajo;
var persona;
var per;
var persona1;

var estadoPrincipal={
	preload:function(){
		juego.load.image('fondo','img/bg.jpeg');
		//juego.load.spritesheet('pajaros','img/pajaro.png',43,30);
		//juego.load.spritesheet('personas','img/persona.png',64,64);
		juego.load.spritesheet('persona1','img/per.png',95.16,158.75);
	},
	create: function(){
		fondoJuego=juego.add.tileSprite(0,0,420,472,'fondo');
		//flappy=juego.add.sprite(juego.width/2,juego.height/2,'pajaros');
		/*persona=juego.add.sprite(juego.width/2,juego.height/2,'personas');
		persona.anchor.setTo(0.5);
		persona.animations.add('arriba',[0,1,2,3,4,5,6,7,8],10,true);//arriba
		persona.animations.add('izquierda',[9,10,11,12,13,14,15,16,17],10,true);//izquierda
		persona.animations.add('abajo',[18,19,20,21,22,23,24,25,26],10,true);//abajo
		persona.animations.add('derecha',[27,28,29,30,31,32,33,34,35],10,true);//derecha
*/
		per=juego.add.sprite(juego.width/2,juego.height/2,'persona1');
		per.anchor.setTo(0.5);
		per.animations.add('arriba',[36,37,38,39,40,41,42,43,44,45,46,47],13,true);//arriba
		per.animations.add('izquierda',[12,13,14,15,16,17,18,19,20,21,22,23],13,true);//izquierda
		per.animations.add('abajo',[0,1,2,3,4,5,6,7,8,9,10,11],13,true);//abajo
		per.animations.add('derecha',[24,25,26,27,28,29,30,31,32,33,34,35],13,true);//derecha

		
		//flappy.frame=1;
		//flappy.animations.add('vuelo',[0,1,2],10,true);
		teclaDerecha=juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		teclaIzquierda=juego.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		teclaArriba=juego.input.keyboard.addKey(Phaser.Keyboard.UP);
		teclaAbajo=juego.input.keyboard.addKey(Phaser.Keyboard.DOWN);
		juego.physics.startSystem(Phaser.Physics.ARCADE);
	},
	update: function (){
		fondoJuego.tilePosition.x-=1;
		if (teclaDerecha.isDown){
			per.position.x+=2;
			per.animations.play('derecha');
		}else
		if(teclaIzquierda.isDown){
			per.position.x-=2;
			per.animations.play('izquierda');
		}else if(teclaAbajo.isDown){
			per.position.y+=2;
			per.animations.play('abajo');
		}else if(teclaArriba.isDown){
			per.position.y-=2;
			per.animations.play('arriba');
		}

		/*
		if (teclaDerecha.isDown){
			persona.position.x+=2;
			persona.animations.play('derecha');
		}else
		if(teclaIzquierda.isDown){
			persona.position.x-=2;
			persona.animations.play('izquierda');
		}else if(teclaAbajo.isDown){
			persona.position.y+=2;
			persona.animations.play('abajo');
		}else if(teclaArriba.isDown){
			persona.position.y-=2;
			persona.animations.play('arriba');
		}*/

		/*//flappy.animations.play('vuelo');
		if (teclaDerecha.isDown){
			flappy.x++;
		}else
		if (teclaIzquierda.isDown){
			flappy.x--;
		}else
		if (teclaArriba.isDown){
			flappy.y--;
		}else
		if (teclaAbajo.isDown){
			flappy.y++;
		}*/
	},
};


juego.state.add('principal',estadoPrincipal);
juego.state.start('principal');