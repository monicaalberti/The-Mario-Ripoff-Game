let context;
let canvas;
let request_id;

let fpsInterval = 100/30;
let now;
let then = Date.now()

let platforms = [];

let score = 0;
let outcome;

let player = {
    x : 0,
    y : 0,
    width : 43,
    height : 43,
    frameX : 0,
    frameY : 0,
    frameWidth : 50,
    frameHeight : 50,
    xChange : 0,
    yChange : 0,
    in_air : false
};

let crocodile = {
    x : 0,
    y : 0,
    xChange : 0,
    yChange : 0,
    width: 55,
    height: 20,
    frameX : 0,
    frameY : 0,
    frameWidth : 128,
    frameHeight : 96
};

let platform1 = {
    x : 100,
    y : 140,
    width: 150,
    height: 20,
    xChange : 0
};
platforms.push(platform1);

let platform2 = {
    x : 180,
    y : 290,
    width: 150,
    height: 20,
    xChange : 0
};
platforms.push(platform2);

let platform3 = {
    x : 440,
    y : 200,
    width: 150,
    height: 20,
    xChange : 0
};
platforms.push(platform3);

let step1 = {
    x : 1000,
    y : 300,
    width: 90,
    height: 30,
    xChange : 0
};
let step2 = {
    x : 1070,
    y : 250,
    width: 90,
    height: 30,
    xChange : 0
};

let enemy = {
    x : 0,
    y : 0,
    width : 60,
    height : 30,
    xChange : 0,
    yChange : 0
}
let enemy2 = {
    x : 0,
    y : 0,
    width : 60,
    height : 40,
    xChange : 0,
    yChange : 0,
    frameX : 0,
    frameY : 0,
    frameWidth : 817,
    frameHeight : 679
}
let enemy3 = {
    x : 0,
    y : 0,
    width : 60,
    height : 30,
    xChange : 0,
    yChange : 0
}
let enemy4 = {
    x : 0,
    y : 0,
    width : 60,
    height : 30,
    xChange : 0,
    yChange : 0
}
let asteroid = {
    x : 0,
    y : 0,
    width : 35,
    height : 35,
    xChange : 0
}
let star = {
    x : 0,
    y : 0,
    width : 70,
    height : 70,
    xChange : 0
}
let plant = {
    x : 0,
    y : 0,
    width : 115,
    height : 115,
    xChange : 0,
    frameY : 0,
    frameX : 0,
    frameWidth : 120,
    frameHeight : 120
}
let asteroid2 = {
    x : 0,
    y : 0,
    width : 30,
    height : 30,
    xChange : 0
}
let sun = {
    x : 500,
    y : 5,
    width : 90,
    height : 90,
    xChange : 0
}
let flower = {
    x : 0,
    y : 0,
    width : 50,
    height : 66,
    frameX : 0,
    frameY : 0,
    frameWidth : 386,
    frameHeight : 500,
    xChange : 0
}
let bird1 = {
    x : 0,
    y : 0,
    width: 40,
    height : 42,
    frameX : 0,
    frameY : 0,
    frameWidth : 800,
    frameHeight : 812,
    xChange : 0
}
let bird2 = {
    x : 0,
    y : 0,
    width: 40,
    height : 42,
    frameX : 0,
    frameY : 0,
    frameWidth : 800,
    frameHeight : 812,
    xChange : 0
}
let coins = [];
let coin1 = {
    x : 150,
    y : 115,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin1);
let coin2 = {
    x : 180,
    y : 115,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin2);
let coin3 = {
    x : 230,
    y : 265,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin3);
let coin4 = {
    x : 260,
    y : 265,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin4);
let coin5 = {
    x : 490,
    y : 175,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin5);
let coin6 = {
    x : 520,
    y : 175,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin6);
let coin7 = {
    x : 760,
    y : 400,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin7);
let coin8 = {
    x : 785,
    y : 400,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin8);
let coin9 = {
    x : 810,
    y : 400,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin9);
let coin10 = {
    x : 1035,
    y : 280,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin10);
let coin11 = {
    x : 1035,
    y : 255,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin11);
let coin12 = {
    x : 1105,
    y : 220,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin12);
let coin13 = {
    x : 1105,
    y : 190,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin13);
let coin14 = {
    x : 1770,
    y : 420,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin14);
let coin15 = {
    x : 1795,
    y : 420,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin15);
let coin16 = {
    x : 130,
    y : 115,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin16);
let coin17 = {
    x : 210,
    y : 115,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin17);
let coin18 = {
    x : 290,
    y : 265,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin18);
let coin19 = {
    x : 460,
    y : 175,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin19);
let coin20 = {
    x : 550,
    y : 175,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin20);
let coin21 = {
    x : 200,
    y : 265,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin21);
let coin22 = {
    x : 1035,
    y : 225,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin22);
let coin23 = {
    x : 1035,
    y : 195,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin23);
let coin24 = {
    x : 1105,
    y : 160,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin24);
let coin25 = {
    x : 1105,
    y : 130,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin25);
let coin26 = {
    x : 835,
    y : 400,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin26);
let coin27 = {
    x : 860,
    y : 400,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin27);
let coin28 = {
    x : 1745,
    y : 420,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin28);
let coin29 = {
    x : 1820,
    y : 420,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin29);
let coin30 = {
    x : 1845,
    y : 420,
    width : 15,
    height : 15,
    frameX : 0,
    frameY : 0,
    frameWidth : 170,
    frameHeight : 165,
    xChange : 0
}
coins.push(coin30);

let floor;
let floor2;
let floor3;
let floor4;
let floor5;
let ditch;
let background;

let moveLeft = false;
let jump = false;
let moveRight = false;

let audio = new Audio('media/bg_music.mp3');
let jumpSound = new Audio('media/jumpSound.wav');
let pickedCoin = new Audio('media/pickedCoinSound.wav');
let win = new Audio('media/win.wav');
let gameOver = new Audio('media/gameOverSound.wav');
let jumpSoundPlayed = false;

let playerImage = new Image();
let platformImage = new Image();
let grassImage = new Image();
let waterImage = new Image();
let clouds = new Image();
let alligator = new Image();
let alligator2 = new Image();
let starPic = new Image();
let steps = new Image();
let enemies = new Image();
let fireball = new Image();
let dragon = new Image();
let dangerousPlant = new Image();
let sunImage = new Image();
let flowerImage = new Image();
let grumpyBat = new Image();
let coinSprite = new Image();

let gameFrames = 0;
let gameFrames2 = 0;
let gameFrames3 = 0;
let gameFrames4 = 0;

document.addEventListener("DOMContentLoaded", init, false);

function init(){
    canvas = document.querySelector("canvas");
    context = canvas.getContext("2d");

    let scoreFont = 20 + "px serif"; 
    context.font = scoreFont;

    floor = {
        x: 0,
        y: canvas.height - 50,
        width: canvas.width - (canvas.width/2),
        height: 50,
        xChange : 0
    };
    floor2 = {
        x : canvas.width/2+300,
        y : canvas.height - 50,
        width: 500,
        height: 50,
        xChange : 0
    }
    floor3 = {
        x : floor2.x + floor2.width,
        y : canvas.height - 50,
        width:500,
        height: 50,
        xChange : 0
    }
    floor4 = {
        x : floor3.x + floor3.width,
        y : canvas.height - 50,
        width: 500,
        height: 50,
        xChange : 0
    }
    floor5 = {
        x : floor4.x + floor4.width,
        y : canvas.height - 50,
        width: 500,
        height: 50,
        xChange : 0
    }    
    ditch = {
        x : canvas.width/2,
        y : floor.y + 10,
        width : 300,
        height : floor.height,
        xChange : 0,
    }
    background = {
        x : 0,
        y : 0,
        width : canvas.width,
        height : canvas.height,
        xChange : 0
    }
    player.x = canvas.width / 5;
    player.y = floor.y - player.height;

    flower.y = floor.y - flower.height;
    flower.x = 1600;

    crocodile.x = ditch.x+150;
    crocodile.y = 450;
    crocodile.xChange += 1;

    enemy.x = canvas.width+1200;
    enemy.y = 170;
    enemy.xChange = -7;

    enemy2.x = canvas.width+400;
    enemy2.y = 400;
    enemy2.xChange = -6

    enemy3.x = canvas.width+1000;
    enemy3.y = 250;
    enemy3.xChange = -7;

    enemy4.x = canvas.width + 800;
    enemy4.y = 100;
    enemy4.xChange = -7;

    bird1.x = 2100;
    bird2.x = 2200;
    bird1.y = 270;
    bird2.y = 320;
    bird1.xChange = -11;
    bird2.xChange = -11;

    asteroid.x = 1000;
    asteroid.y = 400;
    asteroid.xChange -= 10;

    asteroid2.x = 2700;
    asteroid2.y = 190;

    star.x = 1900;
    star.y = floor.y - star.height - 10;

    plant.x = 1155;
    plant.y = floor.y - plant.height;

    playerImage.src = "media/boySprite.png"
    platformImage.src = "media/dirt_and_grass.png";
    grassImage.src = "media/grassLongPlatform.png";
    waterImage.src = "media/Water.png";
    clouds.src = "media/clouds.png";
    alligator.src = "media/crocodile.png";
    alligator2.src = "media/crocodile2.png";
    starPic.src = "media/star.png";
    steps.src = "media/blocks.png";
    enemies.src = "media/ufo.png";
    fireball.src = "media/fireball.png";
    dragon.src = "media/grumpyDragonSprite.png";
    dangerousPlant.src = "media/dangerousPlant.png";
    sunImage.src = "media/sun_shiny.png";
    flowerImage.src = "media/spritesheet.png";
    grumpyBat.src = "media/grumpyBat.png";
    coinSprite.src = "media/coins.png";

    window.addEventListener("keydown", activate, false);
    window.addEventListener("keyup", deactivate, false);
    
    draw();
}

function draw(){
    request_id = window.requestAnimationFrame(draw);
    let now = Date.now();
    let elapsed = now - then;
    if (elapsed <= fpsInterval) {
        return;
    }
    then = now - (elapsed % fpsInterval);

    context.clearRect(0, 0, canvas.width, canvas.height);

    background.x += background.xChange;
    context.drawImage(clouds, background.x, background.y, background.width, background.height);
    context.drawImage(clouds, background.x+background.width-1, background.y, 2000, background.height);

    sun.x += sun.xChange;
    context.drawImage(sunImage, sun.x, sun.y, sun.width, sun.height);

    for (let i = 0; i < platforms.length; i+=1) {
        let platform = platforms[i];
        platform.x = platform.x + platform.xChange;
        if (player.x + player.width >= platform.x + 10 && player.x <= platform.x + platform.width - 10){
            if (player.y + player.height > platform.y && player.y < platform.y + platform.height){
                if (player.y + player.height < platform.y + player.yChange && player.y + player.height + player.yChange > platform.y){
                    player.y = platform.y - player.height;
                    player.yChange = 0;
                    player.in_air = false;
            }
        }
        }
        context.drawImage(platformImage, platform.x, platform.y, platform.width, platform.height);
    }
    
    enemy2.x += enemy2.xChange;
    context.drawImage(dragon, enemy2.frameX * enemy2.frameWidth, enemy2.frameY * enemy2.frameHeight, enemy2.frameWidth, enemy2.frameHeight, enemy2.x, enemy2.y, enemy2.width, enemy2.height);
    if (enemy2.frameX < 23){
        enemy2.frameX += 1;
    }else {
        enemy2.frameX = 0;
    }

    enemy.x += enemy.xChange;
    context.drawImage(enemies, enemy.x, enemy.y, enemy.width, enemy.height);

    enemy3.x += enemy3.xChange;
    context.drawImage(enemies, enemy3.x, enemy3.y, enemy3.width, enemy3.height);

    enemy4.x += enemy4.xChange;
    context.drawImage(enemies, enemy4.x, enemy4.y, enemy4.width, enemy4.height);

    step1.x += step1.xChange;
    context.drawImage(steps, step1.x, step1.y, step1.width, step1.height);

    step2.x += step2.xChange;
    context.drawImage(steps, step2.x, step2.y, step2.width, step2.height);

    if (player.x + player.width >= enemy.x && 
        enemy.x + enemy.width > player.x &&
        player.y < enemy.y + enemy.height &&
        player.y + player.height > enemy.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }
    if (player.x + player.width >= enemy2.x && 
        enemy2.x + enemy2.width > player.x &&
        player.y < enemy2.y + enemy2.height &&
        player.y + player.height > enemy2.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }
    if (player.x + player.width >= enemy3.x && 
        enemy3.x + enemy3.width > player.x &&
        player.y < enemy3.y + enemy3.height &&
        player.y + player.height > enemy3.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }
    if (player.x + player.width >= enemy4.x && 
        enemy4.x + enemy4.width > player.x &&
        player.y < enemy4.y + enemy4.height &&
        player.y + player.height > enemy4.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }

    player.x = player.x + player.xChange;
    player.y = player.y + player.yChange;

    player.yChange = player.yChange + 1.5;
    player.xChange = player.xChange * 0.9;
    player.yChange = player.yChange * 0.9;

    if (player.x < 10){
        player.x = 10;
        player.xChange = 0;
    }

    if (player.y < 0){
        player.y = 0;
        player.yChange = 0;
    }
    
    if (player.y > floor.y - player.height){
        player.y = floor.y - player.height;
        player.yChange = 0;
        player.in_air = false;
    }
    if (player.y + player.height >= floor.y){
        if (player.x + 10 >= floor.x + floor.width  && player.x + player.width - 10 <= ditch.x + ditch.width){
            player.y = 450;
            player.yChange = 0; 
            outcome = "YOU LOSE!";
            audio.pause();
            stop();   
        }
    }
    if (crocodile.x < ditch.x + 50 || crocodile.x + crocodile.width > ditch.x + ditch.width - 50){
        crocodile.xChange *= -1;
    }  
    if (player.x >= (ditch.x+ditch.width)/1.5 || player.x <= 40){
        crocodile.yChange +=1;
    }
    crocodile.x += crocodile.xChange ;
    crocodile.y += crocodile.yChange
    if (crocodile.xChange > 0){
        context.drawImage(alligator, crocodile.x, crocodile.y, crocodile.width, crocodile.height)
    } else {
        context.drawImage(alligator2, crocodile.x, crocodile.y, crocodile.width, crocodile.height)
    }

    for (let coin of coins){
        coin.x += coin.xChange;
        context.drawImage(coinSprite, coin.frameX * coin.frameWidth, coin.frameY * coin.frameHeight, coin.frameWidth, coin.frameHeight, coin.x, coin.y, coin.width, coin.height);
        //I saw this trick to slow down the animation on youtube video https://www.youtube.com/watch?v=CY0HE277IBM&t=1445s by Franks laboratory.
        if (gameFrames % 10 == 0){
            if (coin.frameX < 5){
                coin.frameX += 1;
            } else{
                coin.frameX = 0;
            }
        }
        gameFrames += 1;
    }
    for (let i = 0; i < coins.length; i++) {
        let coin = coins[i];
        if (player.x + player.width >= coin.x && 
            coin.x + coin.width > player.x &&
            player.y < coin.y + coin.height &&
            player.y + player.height > coin.y) {
                pickedCoin.play();
                coins.splice(i, 1);
                context.clearRect(coin.x, coin.y, coin.width, coin.height);
                score += 1;
                break;
            }
    }

    if (player.x > plant.x + plant.width){
        bird1.x += bird1.xChange;
        bird2.x += bird2.xChange;
        context.drawImage(grumpyBat, bird1.frameX * bird1.frameWidth, bird1.frameY * bird1.frameHeight, bird1.frameWidth, bird1.frameHeight, bird1.x, bird1.y, bird1.width, bird1.height);
        if (gameFrames2 % 5 == 0){
            if (bird1.frameX < 3){
                bird1.frameX += 1;
            }else {
                bird1.frameX = 0;
            }
        }
        gameFrames2 += 1;
        context.drawImage(grumpyBat, bird2.frameX * bird2.frameWidth, bird2.frameY * bird2.frameHeight, bird2.frameWidth, bird2.frameHeight, bird2.x, bird2.y, bird2.width, bird2.height);
        if (gameFrames3 % 5 == 0){
            if (bird2.frameX < 3){
                bird2.frameX += 1;
            }else {
                bird2.frameX = 0;
            }
        }
        gameFrames3 += 1;
    }


    floor.x += floor.xChange;
    floor2.x += floor2.xChange;
    floor3.x += floor3.xChange;
    floor4.x += floor4.xChange;
    floor5.x += floor5.xChange;
    context.drawImage(grassImage, floor.x, floor.y, floor.width, floor.height);
    context.drawImage(grassImage, floor2.x, floor2.y, floor2.width, floor2.height);
    context.drawImage(grassImage, floor3.x, floor3.y, floor3.width, floor3.height);
    context.drawImage(grassImage, floor4.x, floor4.y, floor4.width, floor4.height);
    context.drawImage(grassImage, floor5.x, floor5.y, floor5.width, floor5.height);

    flower.x += flower.xChange;
    context.drawImage(flowerImage,flower.frameX * flower.frameWidth, flower.frameY * flower.frameHeight, flower.frameWidth, flower.frameHeight, flower.x, flower.y, flower.width, flower.height);
    if (gameFrames % 5 == 0){
        if (flower.frameX < 5){
            flower.frameX += 1;
        }else {
            flower.frameX = 0;
        }
    } 
    gameFrames += 1;

    if (player.x + player.width >= bird1.x && 
        bird1.x + bird1.width > player.x &&
        player.y < bird1.y + bird1.height &&
        player.y + player.height > bird1.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }
    if (player.x + player.width >= bird2.x && 
        bird2.x + bird2.width > player.x &&
        player.y < bird2.y + bird2.height &&
        player.y + player.height > bird2.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }

    if (player.x > floor2.x){
        asteroid.x += asteroid.xChange;
        context.drawImage(fireball, asteroid.x,asteroid.y,asteroid.width,asteroid.height);
    }
    
    if (player.x + player.width >= asteroid.x && 
        asteroid.x + asteroid.width > player.x &&
        player.y < asteroid.y + asteroid.height &&
        player.y + player.height > asteroid.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }

    if (player.x + player.width >= step1.x + 30 && player.x <= step1.x + step1.width - 30){
        if (player.y + player.height > step1.y && player.y < step1.y + step1.height){
            if (player.y + player.height < step1.y + player.yChange && player.y + player.height + player.yChange > step1.y){
                player.y = step1.y - player.height;
                player.yChange = 0;
                player.in_air = false;
        }
    }
    }
    if (player.x + player.width >= step2.x + 30 && player.x <= step2.x + step2.width - 30){
        if (player.y + player.height > step2.y && player.y < step2.y + step2.height){
            if (player.y + player.height < step2.y + player.yChange && player.y + player.height + player.yChange > step2.y){
                player.y = step2.y - player.height;
                player.yChange = 0;
                player.in_air = false;
                }
    }
    }

    if (player.x >= ditch.x + ditch.width + 50) {
        asteroid2.xChange = -10; 
    } else asteroid2.xChange = 0;
    asteroid2.x += asteroid2.xChange;
    context.drawImage(fireball, asteroid2.x, asteroid2.y, asteroid2.width, asteroid2.height);

    if (player.x + player.width >= asteroid2.x && 
        asteroid2.x + asteroid2.width > player.x &&
        player.y < asteroid2.y + asteroid2.height &&
        player.y + player.height > asteroid2.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }

    if (player.x + player.width >= plant.x && 
        plant.x + plant.width > player.x &&
        player.y < plant.y + plant.height &&
        player.y + player.height > plant.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }

    if (player.x + player.width >= star.x ){
            outcome = "YOU WIN!";
            stop();
            audio.pause();
    }
    if (player.x + player.width >= flower.x && 
        flower.x + flower.width > player.x &&
        player.y < flower.y + flower.height &&
        player.y + player.height > flower.y){
            outcome = "YOU LOSE!";
            stop();
            audio.pause();
    }

    star.x += star.xChange;
    context.drawImage(starPic, star.x, star.y, star.width, star.height);

    plant.x += plant.xChange;
    context.drawImage(dangerousPlant, plant.frameX * plant.frameWidth, plant.frameY * plant.frameHeight, plant.frameWidth, plant.frameHeight, plant.x, plant.y, plant.width, plant.height);
    if (gameFrames4 % 15 == 0){
        if (plant.frameX < 2){
            plant.frameX += 1;
        }else {
            plant.frameX = 0;
        }
    }
    gameFrames4 += 1;

    if (moveLeft){
        player.xChange = player.xChange - 0.5;
    }
    if (moveRight){
        player.xChange = player.xChange + 0.5;
    }
    context.drawImage(playerImage, player.frameX * player.frameWidth, player.frameY * player.frameHeight, player.frameWidth, player.frameHeight, player.x, player.y, player.width, player.height)

    ditch.x += ditch.xChange;
    context.drawImage(waterImage, ditch.x, ditch.y, ditch.width, ditch.height );

    context.fillText("Score: " + score, 20, 30);
};

function activate(event){
    let key = event.key;
    if (key === "ArrowLeft"){
        if (player.x > 100){
            moveLeft = true;
            player.frameY = 2;
            if (player.frameX > 2){
                player.frameX = 0;
            } else{
                player.frameX += 1;
            }
            audio.play();
            player.frameY = 2;
        } else{
            if (floor.x != 0){
                moveLeft = false;
                audio.play();
                player.frameY = 2;
                if (player.frameX > 2){
                    player.frameX = 0;
                } else{
                    player.frameX += 1;
                }
                
                for (let i = 0; i < platforms.length; i+=1) {
                    platforms[i].xChange += 1;
                }
                for (let coin of coins){
                    coin.xChange += 1;
                }
                player.xChange = 0;
                floor.xChange += 1;
                floor2.xChange += 1;
                floor3.xChange += 1;
                floor4.xChange += 1;
                floor5.xChange += 1;
                ditch.xChange += 1;
                star.xChange += 1;
                plant.xChange += 1;
                step1.xChange += 1;
                step2.xChange += 1;
                flower.xChange += 1;
                background.xChange += 0.5;
                sun.xChange += 0.5;
            } else{
                moveLeft = false;
                for (let i = 0; i < platforms.length; i+=1) {
                    platforms[i].xChange = 0;
                }
                for (let coin of coins){
                    coin.xChange = 0;
                }
                floor.xChange = 0;
                floor2.xChange = 0;
                floor3.xChange = 0;
                floor4.xChange = 0;
                floor5.xChange = 0;
                background.xChange = 0;
                ditch.xChange = 0;
                star.xChange = 0;
                plant.xChange = 0;
                step1.xChange = 0;
                step2.xChange = 0;
                sun.xChange = 0;
                flower.xChange = 0;   
            }
        }
    } else if (key === "ArrowRight"){
        if (player.x < canvas.width/2){
            moveRight = true;
            audio.play();
            player.frameY = 1;
            if (player.frameX > 2){
                player.frameX = 0;
            } else{
                player.frameX += 1;
            }
        } else{
            moveRight = false;
            player.frameY = 1;
            if (player.frameX > 2){
                player.frameX = 0;
            } else{
                player.frameX += 1;
            }
            audio.play();
            for (let i = 0; i < platforms.length; i+=1) {
                platforms[i].xChange -= 1;
            }
            for (let coin of coins){
                coin.xChange -= 1;
            }
            player.xChange = 0;
            floor.xChange -= 1;
            floor2.xChange -= 1;
            floor3.xChange -= 1;
            floor4.xChange -= 1;
            floor5.xChange -= 1;
            ditch.xChange -= 1;
            star.xChange -= 1;
            plant.xChange -= 1;
            step1.xChange -= 1;
            step2.xChange -= 1;
            flower.xChange -= 1;
            background.xChange -= 0.5;
            sun.xChange -= 0.5;
        }
    }else if (key === "ArrowUp" && !player.in_air){
        audio.play();
        jump = true;
        player.yChange = player.yChange - 35;
        player.in_air = true;
        jumpSound.play();
        jumpSoundPlayed = true;
    }  
}
function deactivate(event){
    let key = event.key;
    if (key === "ArrowLeft"){
        moveLeft = false;
        for (let i = 0; i < platforms.length; i+=1) {
            platforms[i].xChange = 0;
        }
        for (let coin of coins){
            coin.xChange = 0;
        }
        floor.xChange = 0;
        floor2.xChange = 0;
        floor3.xChange = 0;
        floor4.xChange = 0;
        floor5.xChange = 0;
        background.xChange = 0;
        ditch.xChange = 0;
        star.xChange = 0;
        plant.xChange = 0;
        step1.xChange = 0;
        step2.xChange = 0;
        sun.xChange = 0;
        flower.xChange = 0;
    } else if (key === "ArrowRight"){
        moveRight = false;
        for (let i = 0; i < platforms.length; i+=1) {
            platforms[i].xChange = 0;
        }
        for (let coin of coins){
            coin.xChange = 0;
        }
        floor.xChange = 0;
        floor2.xChange = 0;
        floor3.xChange = 0;
        floor4.xChange = 0;
        floor5.xChange = 0;
        background.xChange = 0;
        ditch.xChange = 0;
        star.xChange = 0;
        plant.xChange = 0;
        step1.xChange = 0;
        step2.xChange = 0;
        sun.xChange = 0;
        flower.xChange = 0;
    } else if (key === "ArrowUp"){
        jump = false;
        jumpSoundPlayed = false;
    }
}

function stop(){ 
    window.cancelAnimationFrame(request_id);
    window.removeEventListener("keydown", activate);
    window.removeEventListener("keyup", deactivate);
    let outcome_element = document.querySelector("#outcome");
    outcome_element.innerHTML = outcome + " " + "<br/>Score: " + score;
    if (outcome === "YOU WIN!"){
        win.play();
    } else if (outcome === "YOU LOSE!"){
        gameOver.play();
    }
}
