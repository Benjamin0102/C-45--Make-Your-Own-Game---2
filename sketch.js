var bg, bgImg
var runner, runner_jumping, runner_right, runner_left
var platform, platformImg, platformGroup
var coin, coinImg, coinGroup
var laser, laserImg, laserGroup
var gem, gemImg, gemGroup
var rock, rockImg, rockGroup
var gameState = "play"
var score = 0
var life = 3

function preload () {
bgImg = loadImage("Assets/bg.png")
runner_right = loadAnimation("Assets/boyRight1.png", "Assets/boyRight2.png", "Assets/boyRight3.png", "Assets/boyRight4.png")
runner_left = loadAnimation("Assets/boyleft1.png", "Assets/boyLeft2.png", "Assets/boyLeft3.png", "Assets/boyLeft4.png")
runner_jumping = loadImage("Assets/boyRight2.png")
platformImg = loadImage("Assets/platform1.png")
coinImg = loadAnimation("Assets/coin1.png", "Assets/coin2.png", "Assets/coin3.png", "Assets/coin4.png", "Assets/coin5.png", "Assets/coin6.png", )
laserImg = loadImage("Assets/laser.png")
rockImg = loadImage("Assets/rock.png")
gemImg = loadImage("Assets/gem.png")
}

function setup () {

}

function draw () {

}