'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var finalScore = 0;
var clock;
var submit = true;
var scoreToShow = [];
var gameover  = false;



var SceneManager = function () {
    function SceneManager() {
        _classCallCheck(this, SceneManager);

        this.menuScene = document.getElementById('menu');
        this.gameScene = document.getElementById('game-canvas');
        this.gameScene2 = document.getElementById('game-canvas2');
        this.gameOverScene = document.getElementById('gameover');
        this.hud = document.getElementById('hud');

        this.scoreText = document.getElementById('score-text');
        this.startButton = document.getElementById('start-game-button');
        this.restartButton = document.getElementById('restart-game-button');
        this.exitButton = document.getElementById('exit-button');
        this.gameOverCounter = true;
        this.startGameMusic = true;
        this.startGameSound = new Audio("/Sounds/random silly chip song.ogg");
        this.finalScore = 0;

        this.handlePlayerClick();
    }

    _createClass(SceneManager, [{
        key: 'startGame',
        value: function startGame() {
            scoreToShow = [];
            this.menuScene.classList.remove('active');
            this.gameOverScene.classList.remove('active');
            this.startGameMusic = true;
            this.gameOverCounter = true;
            while(this.startGameMusic){
                finalScore = 0;
                this.startGameSound.loop = true;
                this.startGameSound.play();
                this.startGameMusic = false;
            }
            this.showHud();
            this.setGameScore(0);
            clock = setInterval(
                function scoreCount() {
                    finalScore += 1;
                    document.getElementById('score-text').textContent = finalScore;
                }, 1000);
            submit = true;
        }
    }, {
        key: 'showMenu',
        value: function showMenu() {
            this.gameOverScene.classList.remove('active');
            this.menuScene.classList.add('active');
        }
    }, {
        key: 'showHud',
        value: function showHud() {
            this.hud.classList.add('active');
        }
    }, {
        key: 'hideHud',
        value: function hideHud() {
            this.hud.classList.remove('active');
        }
    }, {
        key: 'setGameScore',
        value: function setGameScore(score) {
            finalScore += score;
            this.scoreText.textContent = finalScore;

        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            scoreToShow.push(finalScore);
            this.scoreText.textContent = scoreToShow[0];
            clearInterval(clock);
            document.getElementById("scoreInput").value = scoreToShow[0];
            document.getElementById("scoreValue").value = scoreToShow[0];
                while (submit) {
                    var request = $.ajax({
                        url: '/getScore/' + finalScore,
                        method: 'POST',
                        dataType: 'json',
                        data: $('#scoreForm').serialize()
                    });
                    request.done(function (html) {
                        $('.container').html(html);

                    });
                    submit = false;
                }

            this.startGameSound.pause();
            this.startGameMusic = false;
            while(this.gameOverCounter) {
                var gameOverSound = new Audio("/Sounds/gameover.wav");
                gameOverSound.play();
                this.gameOverCounter = false;
            }
            this.gameOverScene.classList.add('active');
            this.hideHud();
        }
    }, {
        key: 'handlePlayerClick',
        value: function handlePlayerClick() {
            var manager = this;
            this.startButton.onclick = function (e) {
                manager.startGame();
                game.restartGame();

                e.preventDefault();
                return false;
            };

            this.exitButton.onclick = function (e) {
                manager.showMenu();

                e.preventDefault();
                return false;
            };

            this.restartButton.onclick = function (e) {
                manager.startGame();
                game.restartGame();

                e.preventDefault();
                return false;
            };
        }
    }]);

    return SceneManager;
}();

var LevelData = function LevelData() {
    _classCallCheck(this, LevelData);

    this.levels = [{ gapX: 0, gapY: 0, widthDiff: 0, total: 15, coinChance: 0.3, enemyChance: 0.2, doubleCoinChance: 0.01 },
        { gapX: 30, gapY: 20, widthDiff: 10, total: 20, coinChance: 0.4, enemyChance: 0.2, doubleCoinChance: 0.05 },
        { gapX: 20, gapY: 30, widthDiff: 30, total: 22, coinChance: 0.6, enemyChance: 0.3, doubleCoinChance: 0.08 },
        { gapX: 40, gapY: 40, widthDiff: 50, total: 24, coinChance: 0.7, enemyChance: 0.4, doubleCoinChance: 0.09 },
        { gapX: 50, gapY: 50, widthDiff: 100, total: 50, coinChance: 0.8, enemyChance: 0.4, doubleCoinChance: 0.1 },
        { gapX: 0, gapY: 0, widthDiff: 0, total: 5, coinChance: 0, enemyChance: 0 },
        { gapX: 0, gapY: 0, widthDiff: 0, total: 1, coinChance: 0, enemyChance: 0 },
    ];

};

var ScoreCalculator = function () {
    function ScoreCalculator() {
        _classCallCheck(this, ScoreCalculator);

        this.score = 0;
    }

    _createClass(ScoreCalculator, [{
        key: 'increaseScore',
        value: function increaseScore(level) {
            // Note: level starts at 0. Expotential incremental.
            this.score = (level + 1) * (level + 1);
        }
    }]);

    return ScoreCalculator;
}();

var GameObject = function (_createjs$Container) {
    _inherits(GameObject, _createjs$Container);

    function GameObject(graphic) {
        _classCallCheck(this, GameObject);

        var _this = _possibleConstructorReturn(this, (GameObject.__proto__ || Object.getPrototypeOf(GameObject)).call(this));

        if (graphic !== undefined) {
            _this.graphic = graphic;
            _this.addChild(_this.graphic);

            var b = _this.graphic.nominalBounds;
            _this.setBounds(b.x, b.y, b.width, b.height);
        }
        return _this;
    }

    return GameObject;
}(createjs.Container);




var MovableGameObject = function (_GameObject) {
    _inherits(MovableGameObject, _GameObject);

    function MovableGameObject(graphic) {
        _classCallCheck(this, MovableGameObject);

        var _this2 = _possibleConstructorReturn(this, (MovableGameObject.__proto__ || Object.getPrototypeOf(MovableGameObject)).call(this, graphic));

        _this2.isOnGround = false;

        _this2.velocity = {
            x: 0,
            y: 0
        };
        _this2.on("tick", _this2.tick);
        return _this2;
    }

    _createClass(MovableGameObject, [{
        key: 'tick',
        value: function tick() {
            this.y += this.velocity.y;
            this.x += this.velocity.x;
        }
    }]);

    return MovableGameObject;
}(GameObject);

var DoubleCoin = function (_MovableGameObject18) {
    _inherits(DoubleCoin, _MovableGameObject18);

    function DoubleCoin() {
        _classCallCheck(this, DoubleCoin);

        var _this3 = _possibleConstructorReturn(this, (DoubleCoin.__proto__ || Object.getPrototypeOf(DoubleCoin)).call(this, new lib.CoinGraphic()));

        _this3.velocity.y = -50;
        _this3.directionY = -1;
        _this3.speed = 1;
        _this3.offsetY = 20;
        _this3.maxOffset = 30;

        _this3.on('tick', _this3.move);
        return _this3;
    }

    _createClass(DoubleCoin, [{
        key: 'move',
        value: function move() {
            this.velocity.y = this.speed * this.directionY;
            this.offsetY += this.velocity.y;
            if (Math.abs(this.offsetY) > this.maxOffset) {
                this.directionY *= -1;
            }
        }
    }]);

    return DoubleCoin;
}(MovableGameObject);


var Coin = function (_MovableGameObject) {
    _inherits(Coin, _MovableGameObject);

    function Coin() {
        _classCallCheck(this, Coin);

        var _this3 = _possibleConstructorReturn(this, (Coin.__proto__ || Object.getPrototypeOf(Coin)).call(this, new lib.GreenCupGraphic()));

        _this3.velocity.y = -30;
        _this3.directionY = -1;
        _this3.speed = 0.5;
        _this3.offsetY = 10;
        _this3.maxOffset = 15;

        _this3.on('tick', _this3.move);
        return _this3;
    }

    _createClass(Coin, [{
        key: 'move',
        value: function move() {
            this.velocity.y = this.speed * this.directionY;
            this.offsetY += this.velocity.y;
            if (Math.abs(this.offsetY) > this.maxOffset) {
                this.directionY *= -1;
            }
        }
    }]);

    return Coin;
}(MovableGameObject);



var Enemy = function (_MovableGameObject2) {
    _inherits(Enemy, _MovableGameObject2);

    function Enemy() {
        _classCallCheck(this, Enemy);

        var _this4 = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, new lib.EnemyHTML1()));

        _this4.directionX = -1;
        _this4.speed = 1;
        _this4.offsetX = 10;
        _this4.maxOffset = 15;

        _this4.on('tick', _this4.move);
        return _this4;
    }

    _createClass(Enemy, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy;
}(MovableGameObject);


var Enemy2 = function (_MovableGameObject4) {
    _inherits(Enemy2, _MovableGameObject4);

    function Enemy2() {
        _classCallCheck(this, Enemy2);

        var _this12 = _possibleConstructorReturn(this, (Enemy2.__proto__ || Object.getPrototypeOf(Enemy2)).call(this, new lib.EnemyHTML2()));

        _this12.directionX = 0;
        _this12.speed = 0;
        _this12.offsetX = 0;
        _this12.maxOffset = 0;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy2, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= 0;
            }
        }
    }]);

    return Enemy2;
}(MovableGameObject);

var Enemy3 = function (_MovableGameObject5) {
    _inherits(Enemy3, _MovableGameObject5);

    function Enemy3() {
        _classCallCheck(this, Enemy3);

        var _this12 = _possibleConstructorReturn(this, (Enemy3.__proto__ || Object.getPrototypeOf(Enemy3)).call(this, new lib.EnemyHTML3()));

        _this12.directionX = -1;
        _this12.speed = 1;
        _this12.offsetX = 0;
        _this12.maxOffset = 1;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy3, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy3;
}(MovableGameObject);

var Enemy4 = function (_MovableGameObject6) {
    _inherits(Enemy4, _MovableGameObject6);

    function Enemy4() {
        _classCallCheck(this, Enemy4);

        var _this12 = _possibleConstructorReturn(this, (Enemy4.__proto__ || Object.getPrototypeOf(Enemy4)).call(this, new lib.EnemyCSS1()));

        _this12.directionX = -1;
        _this12.speed = 1;
        _this12.offsetX = 5;
        _this12.maxOffset = 10;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy4, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy4;
}(MovableGameObject);

var Enemy5 = function (_MovableGameObject7) {
    _inherits(Enemy5, _MovableGameObject7);

    function Enemy5() {
        _classCallCheck(this, Enemy5);

        var _this12 = _possibleConstructorReturn(this, (Enemy5.__proto__ || Object.getPrototypeOf(Enemy5)).call(this, new lib.EnemyCSS2()));

        _this12.directionX = 0;
        _this12.speed = 0;
        _this12.offsetX = 0;
        _this12.maxOffset = 0;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy5, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= 0;
            }
        }
    }]);

    return Enemy5;
}(MovableGameObject);

var Enemy6 = function (_MovableGameObject8) {
    _inherits(Enemy6, _MovableGameObject8);

    function Enemy6() {
        _classCallCheck(this, Enemy6);

        var _this12 = _possibleConstructorReturn(this, (Enemy6.__proto__ || Object.getPrototypeOf(Enemy6)).call(this, new lib.EnemyCSS3()));

        _this12.directionX = -1;
        _this12.speed = 1;
        _this12.offsetX = 0;
        _this12.maxOffset = 1;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy6, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy6;
}(MovableGameObject);

var Enemy7 = function (_MovableGameObject9) {
    _inherits(Enemy7, _MovableGameObject9);

    function Enemy7() {
        _classCallCheck(this, Enemy7);

        var _this14 = _possibleConstructorReturn(this, (Enemy7.__proto__ || Object.getPrototypeOf(Enemy7)).call(this, new lib.EnemyJS1()));

        _this14.velocity.y = -60;
        _this14.directionY = -1;
        _this14.speed = 0.5;
        _this14.offsetY = 20;
        _this14.maxOffset = 40;

        _this14.on('tick', _this14.move);
        return _this14;
    }

    _createClass(Enemy7, [{
        key: 'move',
        value: function move() {
            this.velocity.y = this.speed * this.directionY;
            this.offsetY += this.velocity.y;
            if (Math.abs(this.offsetY) > this.maxOffset) {
                this.directionY *= -1;
            }
        }
    }]);

    return Enemy7;
}(MovableGameObject);

var Enemy8 = function (_MovableGameObject10) {
    _inherits(Enemy8, _MovableGameObject10);

    function Enemy8() {
        _classCallCheck(this, Enemy8);

        var _this12 = _possibleConstructorReturn(this, (Enemy8.__proto__ || Object.getPrototypeOf(Enemy8)).call(this, new lib.EnemyJS2()));

        _this12.directionX = -5;
        _this12.speed = 1.5;
        _this12.offsetX = 2;
        _this12.maxOffset = 8;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy8, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy8;
}(MovableGameObject);

var Enemy9 = function (_MovableGameObject11) {
    _inherits(Enemy9, _MovableGameObject11);

    function Enemy9() {
        _classCallCheck(this, Enemy9);

        var _this12 = _possibleConstructorReturn(this, (Enemy9.__proto__ || Object.getPrototypeOf(Enemy9)).call(this, new lib.EnemyJS3()));

        _this12.directionX = -1;
        _this12.speed = 0.1;
        _this12.offsetX = 0;
        _this12.maxOffset = 10;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy9, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy9;
}(MovableGameObject);

var Enemy10 = function (_MovableGameObject12) {
    _inherits(Enemy10, _MovableGameObject12);

    function Enemy10() {
        _classCallCheck(this, Enemy10);

        var _this12 = _possibleConstructorReturn(this, (Enemy10.__proto__ || Object.getPrototypeOf(Enemy10)).call(this, new lib.EnemyJava1()));

        _this12.directionX = -1;
        _this12.speed = 1;
        _this12.offsetX = 0;
        _this12.maxOffset = 1;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy10, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy10;
}(MovableGameObject);

var Enemy11 = function (_MovableGameObject13) {
    _inherits(Enemy11, _MovableGameObject13);

    function Enemy11() {
        _classCallCheck(this, Enemy11);

        var _this12 = _possibleConstructorReturn(this, (Enemy11.__proto__ || Object.getPrototypeOf(Enemy11)).call(this, new lib.EnemyJava2()));

        _this12.velocity.y = -60;
        _this12.directionY = -0.5;
        _this12.directionX = -0.5;
        _this12.speed = 0.5;
        _this12.offsetY = 60;
        _this12.offsetX = 60;
        _this12.maxOffset = 80;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy11, [{
        key: 'move',
        value: function move() {
            this.velocity.y = this.speed * this.directionY;
            this.offsetY += this.velocity.y;
            if (Math.abs(this.offsetY) > this.maxOffset) {
                this.directionY *= -1;
            }
        }
    }]);

    return Enemy11;
}(MovableGameObject);

var Enemy12 = function (_MovableGameObject14) {
    _inherits(Enemy12, _MovableGameObject14);

    function Enemy12() {
        _classCallCheck(this, Enemy12);

        var _this12 = _possibleConstructorReturn(this, (Enemy12.__proto__ || Object.getPrototypeOf(Enemy12)).call(this, new lib.EnemyJava3()));

        _this12.directionX = -0.5;
        _this12.speed = 1;
        _this12.offsetX = 10;
        _this12.maxOffset = 25;

        _this12.on('tick', _this12.move);
        return _this12;
    }

    _createClass(Enemy12, [{
        key: 'move',
        value: function move() {
            this.velocity.x = this.speed * this.directionX;
            this.offsetX += this.velocity.x;
            if (Math.abs(this.offsetX) > this.maxOffset) {
                this.directionX *= -1;
            }
        }
    }]);

    return Enemy12;
}(MovableGameObject);


var Hero = function (_MovableGameObject15) {
    _inherits(Hero, _MovableGameObject15);

    function Hero() {
        _classCallCheck(this, Hero);
        var heroSelect = document.getElementById("selectCharacter").value;

        var characterChoice;
        if (heroSelect == 1) {
            {
                characterChoice = new lib.HeroGraphic1();
            }
        } else if (heroSelect == 2) {
            {
                characterChoice = new lib.HeroGraphic2();
            }
        } else if (heroSelect == 3) {
            {
                characterChoice = new lib.HeroGraphic3();
            }
        }else if (heroSelect == 4) {
            {
                characterChoice = new lib.HeroGraphic4();
            }
        }else if (heroSelect == 5) {
            {
                characterChoice = new lib.HeroGraphic5();
            }
        }

        return _possibleConstructorReturn(this, (Hero.__proto__ || Object.getPrototypeOf(Hero)).call(this, characterChoice));
    }

    _createClass(Hero, [{
        key: 'run',
        value: function run() {
            if (!this.isOnGround) {
                this.velocity.x = 5;
                this.graphic.gotoAndPlay('run');
                this.isOnGround = true;
            }
        }
    }, {
        key: 'jump',
        value: function jump() {
            if (this.isOnGround) {
                var jumpSound = new Audio("/Sounds/jump_07.wav");
                jumpSound.play();
                this.velocity.y = -13;
                this.graphic.gotoAndPlay('jump');
                this.isOnGround = false;
            }
        }
    }, {
        key: 'stop',
        value: function stop() {
            if (!this.isOnGround) {
                this.velocity.y = 0;
                this.velocity.x = 0;
                this.isOnGround = true;
            }
        }
    }]);
    return Hero;
}(MovableGameObject);

var Powerup = function (_MovableGameObject16) {
    _inherits(Powerup, _MovableGameObject16);

    function Powerup() {
        _classCallCheck(this, Powerup);

        var _this16 = _possibleConstructorReturn(this, (Powerup.__proto__ || Object.getPrototypeOf(Powerup)).call(this, new lib.PowerupGraphic1()));

        _this16.velocity.y = -30;
        _this16.directionY = -1;
        _this16.speed = 0.5;
        _this16.offsetY = 10;
        _this16.maxOffset = 15;

        _this16.on('tick', _this16.move);
        return _this16;
    }

    _createClass(Powerup, [{
        key: 'move',
        value: function move() {
            this.velocity.y = this.speed * this.directionY;
            this.offsetY += this.velocity.y;
            if (Math.abs(this.offsetY) > this.maxOffset) {
                this.directionY *= -1;
            }
        }
    }]);

    return Powerup;
}(MovableGameObject);


var EndingItem = function (_MovableGameObject17) {
    _inherits(EndingItem, _MovableGameObject17);

    function EndingItem() {
        _classCallCheck(this, EndingItem);

        var _this16 = _possibleConstructorReturn(this, (EndingItem.__proto__ || Object.getPrototypeOf(EndingItem)).call(this, new lib.EndItem()));

        _this16.velocity.y = 0;
        _this16.directionY = 0;
        _this16.speed = 0;
        _this16.offsetY = 0;
        _this16.maxOffset = 0;

        _this16.on('tick', _this16.move);
        return _this16;
    }

    _createClass(EndingItem, [{
        key: 'move',
        value: function move() {
            this.velocity.y = this.speed * this.directionY;
            this.offsetY += this.velocity.y;
            if (Math.abs(this.offsetY) > this.maxOffset) {
                this.directionY *= 0;
            }
        }
    }]);

    return EndingItem;
}(MovableGameObject);

var Platform = function (_GameObject2) {
    _inherits(Platform, _GameObject2);

    function Platform() {
        _classCallCheck(this, Platform);

        return _possibleConstructorReturn(this, (Platform.__proto__ || Object.getPrototypeOf(Platform)).call(this, new lib.PlatformGraphic1()));
    }

    _createClass(Platform, [{
        key: 'setClippingWidth',
        value: function setClippingWidth(width) {
            this.graphic.instance.mask = new createjs.Shape(new createjs.Graphics().beginFill("#000").drawRect(0, 0, width, this.getBounds().height));
            this.setBounds(this.x, this.y, width, this.getBounds().height);
        }
    }]);

    return Platform;
}(GameObject);

var World = function (_createjs$Container2) {
    _inherits(World, _createjs$Container2);

    function World() {
        _classCallCheck(this, World);

        var _this7 = _possibleConstructorReturn(this, (World.__proto__ || Object.getPrototypeOf(World)).call(this));

        _this7.levelData = new LevelData();
        _this7.scoreCalculator = new ScoreCalculator();
        _this7.currentLevel = 0;

        _this7.on("tick", _this7.tick);

        // store all platforms
        _this7.platforms = [];
        _this7.powerups = [];
        _this7.enemies = [];
        _this7.coins = [];
        _this7.doublecoins = [];
        _this7.endingitems = [];

        _this7.generatePlatforms();
        _this7.generateEnemies();
        _this7.generatePowerups();
        _this7.generateEndingItem();
        _this7.generateCoins();
        _this7.generateDoubleCoins();
        _this7.addHero();
        if (!gameover) {
            _this7.hero.run();
        }
        else _this7.hero.stop();

        return _this7;
    }

    _createClass(World, [{
        key: 'tick',
        value: function tick() {
            this.applyGravity();

            var hitEnemy = this.targetHitTestObjects(this.hero, this.enemies);
            if (hitEnemy !== false) {
                game.gameOver();
            }

            var hitCoin = this.targetHitTestObjects(this.hero, this.coins);
            if (hitCoin !== false) {
                this.eatCoin(hitCoin);
                this.scoreCalculator.increaseScore(this.currentLevel);
                sceneManager.setGameScore(this.scoreCalculator.score);
            }

            var hitDoubleCoin = this.targetHitTestObjects(this.hero, this.doublecoins);
            if (hitDoubleCoin !== false) {
                this.eatDoubleCoin(hitDoubleCoin);
                this.scoreCalculator.increaseScore(this.currentLevel + 2);
                sceneManager.setGameScore(this.scoreCalculator.score);
            }

            var hitPowerup = this.targetHitTestObjects(this.hero, this.powerups);
            if (hitPowerup !== false) {
                this.eatPowerup(hitPowerup);
                this.hero.velocity.x = 10;
            }

            var hitEndItem = this.targetHitTestObjects(this.hero, this.endingitems);
            if (hitEndItem !== false) {
                this.eatEndItem(hitEndItem);
                this.scoreCalculator.increaseScore(this.currentLevel + 25);
                sceneManager.setGameScore(this.scoreCalculator.score);
                game.gameOver();

                this.hero.velocity.x = 0;
                this.hero.stop();
                gameover = true;
                scoreToShow.push(finalScore);
                this.scoreText.textContent = scoreToShow[0];
                clearInterval(clock);
                document.getElementById("scoreInput").value = scoreToShow[0];
                document.getElementById("scoreValue").value = scoreToShow[0];
                while (submit) {
                    var request = $.ajax({
                        url: '/getScore/' + finalScore,
                        method: 'POST',
                        dataType: 'json',
                        data: $('#scoreForm').serialize()
                    });
                    request.done(function (html) {
                        $('.container').html(html);

                    });
                    submit = false;
                }

                this.startGameSound.pause();
                this.startGameMusic = false;
                while(this.gameOverCounter) {
                    var gameOverSound = new Audio("/Sounds/gameover.wav");
                    gameOverSound.play();
                    this.gameOverCounter = false;
                }
               ;
            }


            // is hero falling outside of screen?
            if (this.hero.y > game.stage.height) {
                game.gameOver();
            }

            // Focus on the Hero.
            this.x -= this.hero.velocity.x;
        }
    }, {
        key: 'addHero',
        value: function addHero() {
            var hero = new Hero();
            this.addChild(hero);
            hero.x = 100;
            hero.y = 100;
            this.hero = hero;
        }
    }, {
        key: 'generatePlatforms',
        value: function generatePlatforms() {
            var nextX = 100;
            var nextY = 200;

            var levelNumber = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = this.levelData.levels[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var level = _step.value;

                    for (var i = 0; i < level.total; i++) {
                        var platform = new Platform();
                        platform.x = nextX;
                        platform.y = nextY;

                        var width = platform.getBounds().width;
                        platform.setClippingWidth(width - Math.random() * level.widthDiff);

                        platform.levelNumber = levelNumber;

                        this.platforms.push(platform);

                        nextX = platform.x + platform.getBounds().width + Math.random() * level.gapX;
                        nextY = platform.y + (Math.random() - 0.5) * level.gapY;

                        this.addChild(platform);
                    }
                    levelNumber += 1;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'generateEnemies',
        value: function generateEnemies() {
            // skip first 2 platforms.
            for (var i = 2; i < this.platforms.length; i++) {
                var platform = this.platforms[i];
                var levelNumber = platform.levelNumber;
                var chance = this.levelData.levels[levelNumber].enemyChance;
                // net every platform needs enemy.
                var enemy;
                var randomEnemy;
                if (Math.random() < chance) {
                    switch (levelNumber) {
                        case 0:
                            randomEnemy = Math.floor(Math.random() * 3) +1;
                            switch (randomEnemy){
                                case 1:
                                    enemy = new Enemy();
                                    break;
                                case 2:
                                    enemy = new Enemy2();
                                    break;
                                case 3:
                                    enemy = new Enemy3();
                                    break;
                                default:
                                    enemy = new Enemy();
                                    break;
                            }
                            break;
                        case 1:
                            randomEnemy = Math.floor(Math.random() * 3) +1;
                            switch (randomEnemy){
                                case 1:
                                    enemy = new Enemy4();
                                    break;
                                case 2:
                                    enemy = new Enemy5();
                                    break;
                                case 3:
                                    enemy = new Enemy6();
                                    break;
                                default:
                                    enemy = new Enemy4();
                                    break;
                            }
                            break;
                        case 2:
                            randomEnemy = Math.floor(Math.random() * 3) +1;
                            switch (randomEnemy){
                                case 1:
                                    enemy = new Enemy7();
                                    break;
                                case 2:
                                    enemy = new Enemy8();
                                    break;
                                case 3:
                                    enemy = new Enemy9();
                                    break;
                                default:
                                    enemy = new Enemy8();
                                    break;
                            }
                            break;
                        case 3:
                            randomEnemy = Math.floor(Math.random() * 3) +1;
                            switch (randomEnemy){
                                case 1:
                                    enemy = new Enemy10();
                                    break;
                                case 2:
                                    enemy = new Enemy11();
                                    break;
                                case 3:
                                    enemy = new Enemy12();
                                    break;
                                default:
                                    enemy = new Enemy10();
                                    break;
                            }
                            break;
                        case 4:
                            randomEnemy = Math.floor(Math.random() * 3) +1;
                            switch (randomEnemy){
                                case 1:
                                    enemy = new Enemy10();
                                    break;
                                case 2:
                                    enemy = new Enemy11();
                                    break;
                                case 3:
                                    enemy = new Enemy12();
                                    break;
                                default:
                                    enemy = new Enemy12();
                                    break;
                            }
                            break;
                    }

                    enemy.x = platform.x + platform.getBounds().width / 2;
                    enemy.y = platform.y - enemy.getBounds().height;

                    this.addChild(enemy);
                    this.enemies.push(enemy);
                }
            }
        }
    }, {
        key: 'generatePowerups',
        value: function generatePowerups() {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
                for (var _iterator6 = this.platforms[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var platform = _step6.value;
                    var levelNumber = platform.levelNumber;
                    if (Math.random() < 0.05) {
                        var powerup = new Powerup();
                        powerup.x = platform.x + Math.random() * platform.getBounds().width;
                        powerup.y = platform.y - powerup.getBounds().height;
                        this.addChild(powerup);
                        this.powerups.push(powerup);
                    }
                }
            } catch (err) {
                _didIteratorError6 = true;
                _iteratorError6 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                        _iterator6.return();
                    }
                } finally {
                    if (_didIteratorError6) {
                        throw _iteratorError6;
                    }
                }
            }
        }
    }, {
        key: 'generateEndingItem',
        value: function generateEndingItem() {
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
                for (var _iterator7 = this.platforms[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var platform = _step7.value;
                    var levelNumber = platform.levelNumber;
                    if (levelNumber == 6) {
                        var powerup = new EndingItem();
                        powerup.x = platform.x + Math.random() * platform.getBounds().width;
                        powerup.y = platform.y - powerup.getBounds().height;
                        this.addChild(powerup);
                        this.endingitems.push(powerup);
                    }
                }
            } catch (err) {
                _didIteratorError7 = true;
                _iteratorError7 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                        _iterator7.return();
                    }
                } finally {
                    if (_didIteratorError7) {
                        throw _iteratorError7;
                    }
                }
            }
        }
    },

        {
        key: 'generateCoins',
        value: function generateCoins() {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.platforms[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var platform = _step2.value;


                    var levelNumber = platform.levelNumber;
                    var chance = this.levelData.levels[levelNumber].coinChance;
                    if (Math.random() < chance) {
                        var coin = new Coin();
                        coin.x = platform.x + Math.random() * platform.getBounds().width;
                        coin.y = platform.y - coin.getBounds().height;
                        this.addChild(coin);
                        this.coins.push(coin);
                    }
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }
    },

        {
            key: 'generateDoubleCoins',
            value: function generateDoubleCoins() {
                var _iteratorNormalCompletion8 = true;
                var _didIteratorError8 = false;
                var _iteratorError8 = undefined;

                try {
                    for (var _iterator8 = this.platforms[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                        var platform = _step8.value;


                        var levelNumber = platform.levelNumber;
                        var chance = this.levelData.levels[levelNumber].doubleCoinChance;
                        if (Math.random() < chance) {
                            var coin = new DoubleCoin();
                            coin.x = platform.x + Math.random() * platform.getBounds().width;
                            coin.y = platform.y - coin.getBounds().height;
                            this.addChild(coin);
                            this.doublecoins.push(coin);
                        }
                    }
                } catch (err) {
                    _didIteratorError8 = true;
                    _iteratorError8 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion8 && _iterator8.return) {
                            _iterator8.return();
                        }
                    } finally {
                        if (_didIteratorError8) {
                            throw _iteratorError8;
                        }
                    }
                }
            }
        }, {
        key: 'eatPowerup',
        value: function eatPowerup(powerup) {
            for (var i = 0; i < this.powerups.length; i++) {
                if (powerup === this.powerups[i]) {
                    // var coinSound = new Audio("/Sounds/pickup_item.wav");
                    // coinSound.play();
                    this.powerups.splice(i, 1);
                }
            }
            powerup.parent.removeChild(powerup);
        }
    }, {
            key: 'eatEndItem',
            value: function eatEndItem(enditem) {
                for (var i = 0; i < this.endingitems.length; i++) {
                    if (enditem === this.endingitems[i]) {
                        this.endingitems.splice(i, 1);
                    }
                }
                enditem.parent.removeChild(enditem);
            }
        },
        {
        key: 'eatCoin',
        value: function eatCoin(coin) {
            for (var i = 0; i < this.coins.length; i++) {
                if (coin === this.coins[i]) {
                    var coinSound = new Audio("/Sounds/pickup_item.wav");
                    coinSound.play();
                    this.coins.splice(i, 1);
                }
            }
            coin.parent.removeChild(coin);
        }
    },
        {
            key: 'eatDoubleCoin',
            value: function eatDoubleCoin(coin) {
                for (var i = 0; i < this.doublecoins.length; i++) {
                    if (coin === this.doublecoins[i]) {
                        var coinSound = new Audio("/Sounds/pickup_item.wav");
                        coinSound.play();
                        this.doublecoins.splice(i, 1);
                    }
                }
                coin.parent.removeChild(coin);
            }
        }, {
        key: 'applyGravity',
        value: function applyGravity() {
            var gravity = 1;
            var terminalVelocity = 5;
            // TODO: loop all movable game objects
            var object = this.hero;
            object.velocity.y += gravity;
            object.velocity.y = Math.min(object.velocity.y, terminalVelocity);

            if (this.willObjectOnGround(object)) {
                object.velocity.y = 1;
            }
            var platform = this.isObjectOnGround(object);
            if (platform !== false && object.velocity.y > 0) {
                this.currentLevel = platform.levelNumber;
                object.velocity.y = 0;
                object.run();

            }
        }
    }, {
        key: 'targetHitTestObjects',
        value: function targetHitTestObjects(target, objects) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = objects[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var object = _step3.value;

                    if (this.objectsHitTest(target, object)) {
                        return object;
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'objectsHitTest',
        value: function objectsHitTest(object1, object2) {
            var x1 = object1.x;
            var y1 = object1.y;
            var w1 = object1.getBounds().width -5;
            var h1 = object1.getBounds().height -5;

            var x2 = object2.x;
            var y2 = object2.y;
            var w2 = object2.getBounds().width -5;
            var h2 = object2.getBounds().height -5;

            return Math.abs(x1 - x2) * 2 < w1 + w2 && Math.abs(y1 - y2) * 2 < h1 + h2;
        }
    }, {
        key: 'isObjectOnGround',
        value: function isObjectOnGround(object) {
            var objectWidth = object.getBounds().width;
            var objectHeight = object.getBounds().height;

            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = this.platforms[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var platform = _step4.value;

                    var platformWidth = platform.getBounds().width;
                    var platformHeight = platform.getBounds().height;

                    if (object.x >= platform.x && object.x < platform.x + platformWidth && object.y + objectHeight >= platform.y && object.y + objectHeight <= platform.y + platformHeight) {
                        return platform;
                    }
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                        _iterator4.return();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }

            return false;
        }
    }, {
        key: 'willObjectOnGround',
        value: function willObjectOnGround(object) {
            var objectWidth = object.getBounds().width;
            var objectHeight = object.getBounds().height;
            var objectNextY = object.y + objectHeight + object.velocity.y;

            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
                for (var _iterator5 = this.platforms[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var platform = _step5.value;

                    var platformWidth = platform.getBounds().width;
                    var platformHeight = platform.getBounds().height;

                    if (object.x >= platform.x && object.x < platform.x + platformWidth && objectNextY >= platform.y && objectNextY <= platform.y + platformHeight) {
                        return true;
                    }
                }
            } catch (err) {
                _didIteratorError5 = true;
                _iteratorError5 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                        _iterator5.return();
                    }
                } finally {
                    if (_didIteratorError5) {
                        throw _iteratorError5;
                    }
                }
            }

            return false;
        }
    }]);

    return World;
}(createjs.Container);



var Game = function () {
    function Game() {
        _classCallCheck(this, Game);

        console.log('Welcome to the game. Version ' + this.version());

        this.loadSound();

        this.canvas = document.getElementById("game-canvas");
        this.stage = new createjs.Stage(this.canvas);

        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;
        this.canvas2 = document.getElementById("game-canvas2");
        this.stage2 = new createjs.Stage(this.canvas2);

        this.stage.width = this.canvas.width;
        this.stage.height = this.canvas.height;

        this.stage2.width = this.canvas2.width;
        this.stage2.height = this.canvas2.height;

        // enable tap on touch device
        createjs.Touch.enable(this.stage);

        // enable retina screen
        this.retinalize();

        createjs.Ticker.setFPS(60);

        // keep re-drawing the stage.
        createjs.Ticker.on("tick", this.stage);
        createjs.Ticker.on("tick", this.stage2);

        this.gameLoaded = false;
        this.loadGraphics();
        setInterval(
            function scoreCount() {
                finalScore += 1;
                document.getElementById('score-text').textContent = finalScore;
            }, 1000);

        var fullscreen = document.getElementById("fullscreenbtn");


        fullscreen.addEventListener("click", function () {


            var charaterPanel = document.getElementById("character-panel");
            charaterPanel.style.display = "none";

            var gameContainerW = document.getElementById("game-container");
            var gameContainerH = document.getElementById("game-container");

            gameContainerW.style.width = window.innerWidth + 'px';
            gameContainerH.style.height = window.innerHeight + 'px';

            var gameH = document.getElementById("game");
            var gameW = document.getElementById("game");


            gameW.style.width = window.innerWidth + 'px';
            gameH.style.height = window.innerHeight + 'px';

            var gameCanvasW = document.getElementById("game-canvas");
            var gameCanvasH = document.getElementById("game-canvas");


            gameCanvasW.style.width = window.innerWidth + 'px';
            gameCanvasH.style.height = window.innerHeight + 'px';

            var gameCanvas2W = document.getElementById("game-canvas2");
            var gameCanvas2H = document.getElementById("game-canvas2");


            gameCanvas2W.style.width = window.innerWidth + 'px';
            gameCanvas2H.style.height = window.innerHeight + 'px';

            gameCanvasH.focus();

            var scoreText1 = document.getElementById("score-text-p");
            var scoreText2 = document.getElementById("score-text")

            scoreText1.style.fontSize = 60 + 'px';
            scoreText2.style.fontSize = 60 + 'px';
            this.retinalize()
        });
    }

    _createClass(Game, [{
        key: 'version',
        value: function version() {
            return '1.0.0';
        }
    }, {
        key: 'loadSound',
        value: function loadSound() {}
    }, {
        key: 'loadGraphics',
        value: function loadGraphics() {
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete.bind(this));
            loader.loadFile({ src: "images/RealGame_atlas_.json", type: "spritesheet", id: "RealGame_atlas_" }, true);
            loader.loadManifest(lib.properties.manifest);
            loader.loadFile({ src: "images/RealGame_atlas_.png", type: "spritesheet", id: "RealGame_atlas_" }, true);

            function handleFileLoad(evt) {
                if (evt.item.type == "image") {
                    images[evt.item.id] = evt.result;
                }
            }

            function handleComplete(evt) {
                var queue = evt.target;
                ss["RealGame_atlas_"] = queue.getResult("RealGame_atlas_");

                this.gameLoaded = true;
            }
        }
    }, {
        key: 'restartGame',
        value: function restartGame() {
            gameover = false;
            var test = this;
            this.stage.removeAllChildren();
            this.stage.update();
            this.stage2.removeAllChildren();
            this.stage2.update();
            // background
            var BG1 = new lib.BackgroundGraphic1();
            var BG2 = new lib.BackgroundGraphic2();
            var BG3 = new lib.BackgroundGraphic3();
            var BG4 = new lib.BackgroundGraphic4();
            this.stage2.addChild(BG1);

            this.world = new World();
            // createjs.Ticker.on("tick", this.world);
            this.stage.addChild(this.world);

            setInterval(function () {

                if (test.world.currentLevel == 1) {
                    test.stage2.removeChild(BG1);
                    test.stage2.addChild(BG2);
                    test.stage2.update();
                }else if (test.world.currentLevel == 2) {
                    test.stage2.removeChild(BG2);
                    test.stage2.addChild(BG3);
                    test.stage2.update();
                }else if (test.world.currentLevel == 3) {
                    test.stage2.removeChild(BG3);
                    test.stage2.addChild(BG4);
                    test.stage2.update();
                }
            }, 1000);

            var hero = this.world.hero;
            this.stage.on('stagemousedown', function () {
                if (!gameover)
                hero.jump();
            });

            this.stage.on('stagemousedown', function () {
                if (!gameover)
                    hero.jump();
            });
        }
    }, {
        key: 'gameOver',
        value: function gameOver() {
            sceneManager.gameOver();
        }
    }, {
        key: 'retinalize',
        value: function retinalize() {
            this.stage.width = this.canvas.width;
            this.stage.height = this.canvas.height;
            this.stage2.width = this.canvas2.width;
            this.stage2.height = this.canvas2.height;

            var ratio = window.devicePixelRatio;
            if (ratio === undefined) {
                return;
            }

            this.canvas.setAttribute('width', Math.round(this.stage.width * ratio));
            this.canvas.setAttribute('height', Math.round(this.stage.height * ratio));
            this.canvas2.setAttribute('width', Math.round(this.stage.width * ratio));
            this.canvas2.setAttribute('height', Math.round(this.stage.height * ratio));

            this.stage.scaleX = this.stage.scaleY = ratio;
            this.stage2.scaleX = this.stage2.scaleY = ratio;

            // Set CSS style
            this.canvas.style.width = this.stage.width + "px";
            this.canvas.style.height = this.stage.height + "px";
            this.canvas2.style.width = this.stage2.width + "px";
            this.canvas2.style.height = this.stage2.height + "px";
        }
    }]);

    return Game;
}();

// start the game

var game = new Game();

var sceneManager = new SceneManager();