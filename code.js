var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2c85fac2-c08f-472f-8134-c7fc68443f16","a014302c-6f25-4207-9f9e-10c69514a9da","72853430-e615-4b61-9cef-168d6e0921b8"],"propsByKey":{"2c85fac2-c08f-472f-8134-c7fc68443f16":{"name":"umbrella","sourceUrl":null,"frameSize":{"x":400,"y":340},"frameCount":1,"looping":true,"frameDelay":12,"version":"ltedLbWbjjX1wvJPvM7kPp5aXjq9XYmB","categories":["stickers"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":340},"rootRelativePath":"assets/2c85fac2-c08f-472f-8134-c7fc68443f16.png"},"a014302c-6f25-4207-9f9e-10c69514a9da":{"name":"rain","sourceUrl":"assets/api/v1/animation-library/gamelab/d.ppQGqzBGsDlQnp2FB6uWg8HwYVmBt8/category_fantasy/gameplayadventure_04.png","frameSize":{"x":271,"y":396},"frameCount":1,"looping":true,"frameDelay":2,"version":"d.ppQGqzBGsDlQnp2FB6uWg8HwYVmBt8","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":271,"y":396},"rootRelativePath":"assets/api/v1/animation-library/gamelab/d.ppQGqzBGsDlQnp2FB6uWg8HwYVmBt8/category_fantasy/gameplayadventure_04.png"},"72853430-e615-4b61-9cef-168d6e0921b8":{"name":"player","sourceUrl":"assets/api/v1/animation-library/gamelab/gRkbtTgvCsmePRu91w1GuwVEnFFFNCR2/category_faces/kidportrait_11.png","frameSize":{"x":264,"y":362},"frameCount":1,"looping":true,"frameDelay":2,"version":"gRkbtTgvCsmePRu91w1GuwVEnFFFNCR2","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":362},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gRkbtTgvCsmePRu91w1GuwVEnFFFNCR2/category_faces/kidportrait_11.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//player sprite
var player= createSprite(200,200,40,40);
player.setAnimation("player");
player.scale = 0.1;

//umbrella
var umbrella = createSprite(30,30,50,50);
umbrella.setAnimation("umbrella");
umbrella.scale = 0.15;


//balls 
var ball1 = createSprite(100,0,10,10);
  ball1.shapeColor = "blue";
  
  var ball2 = createSprite(215,0,10,10);
  ball2.shapeColor = "blue";
  
  var ball3 = createSprite(165,0,10,10);
  ball3.shapeColor = "blue";
  
  var ball4 = createSprite(270,0,10,10);
  ball4.shapeColor = "blue";
  
  //what state game is in
 var  gameState= "play";
  
  
  ball1.velocityY = 5;
  ball2.velocityY = 5;
  ball3.velocityY = 5;
  ball4.velocityY = 5;

function draw() {
  createEdgeSprites();
  background(255,255,255);
  drawSprites();
  textSize(25);
  text("Help this girl get to the umbrella \n without getting hit by the raindrops.",10,100)
  //move
  
  //right 
  if(keyDown("right")){
    player.x = player.x + 3;
  }
  //left
  if(keyDown("left")){
    player.x = player.x - 3;
  }
  //down
  if(keyDown("down")) {
    player.y = player.y + 2;
  }
  //up
  if(keyDown("up")) {
    player.y = player.y - 2;
  } 
  
  if(player.isTouching(ball1) ||
     player.isTouching(ball2) ||
     player.isTouching(ball3) ||
     player.isTouching(ball4)){
    gameState = "lose";
  }
  if(gameState==="lose"){
    background(255,255,255);
    textSize(30);
    text("You Lost!",145,200);
  }
   
   if(player.isTouching(umbrella)) {

     background("yellow");
     text("Yay! You got the umbrella!");
   }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
