"use strict";

function DoublyLinkedList() {
    this._head = null, this._tail = null, this._length = 0;
}

function BackendTail(t, e) {
    this.nodes = new DoublyLinkedList(), this.serverNodes = [], this.player = null, this.tickForwardCounter = 0, this.length = 5, this.scale = .35, this.boost = 1, this.frontNodeID = 0, this.serverFrontNodeID = 0, this.serverTickForwardCounter = 0, this.servernodesheadID = 0, this.isDoneSpawning = !1;
}

function Startbg(t) {
    this.game = t, this.mapGroup1 = null, this.mapGroup2 = null, this.bg1 = [], this.graphics = null, this.startfade = null, this.startcounter = 1;
}

function Client(t, e, s) {
    this.game = t, this.socket = null, this.isActive = !1, this.name = e, this.pingCounter = 50, this.customSnake = s;
}

function MsgManager(t, e) {
    this.game = t, this.inGame = e;
}

function InputController(t) {
    this.game = t, this.kickCounter = 0, this.kickWarning = !1, this.sendMove = !1, this.sendPreTargetAngle = 0, this.sendTargetAngle = 0, this.lastTargetAngle = 0, this.instaMoveCounter = 0, this.sendMoveCounter = 0, this.checkMoveNextFrame = !1, this.sendResize = !1, this.sendStartBoost = !1, this.sendStopBoost = !1, this.isBoosting = !1, this.originPoint = {
        x: 0,
        y: 0
    }, this.dragPointerID = 0, this.isDown = !1;
}

function CoinManager(t) {
    this.game = t, this.coins = [], this.counter = 0;
}

function GameMenu(t) {
    this.game = t, this.myLeaderboardID = -1, this.deathEffect = null, this.deathCounter = 0;
    var e = document.getElementById("playerNameInput"),
        s = this;
    e.addEventListener("keypress", function(t) {
        13 === (t.which || t.keyCode) && e.blur();
    }), document.getElementById("skinSelectButton").onclick = function() {
        s.game.toggleCustom(!0);
    };
}

function GameZoom(t) {
    this.game = t, this.maxScreenWidth = 2816, this.baseSize = 1200;
    var e = this.baseSize,
        s = window.innerWidth,
        i = window.innerHeight,
        a = e + window.innerWidth / 1.5,
        h = i * a / s;
    a > this.maxScreenWidth && (a = this.maxScreenWidth, h *= this.maxScreenWidth / (e + window.innerWidth / 1.5)), this.game.global.screenWidth = a, this.game.global.screenHeight = h, this.currentZoom = 0, this.heightWidthRatio = window.innerHeight / window.innerWidth, this.zoomlevel = 0, this.zoomAmount = 512, this.zoomReal = 0;
}

function HudManager(t) {
    this.game = t, this.hudGroup = null, this.minimapSpr = null, this.pinSpr = null, this.boostSpr = null, this.arrow = null, this.arrowCounter = 0, this.scale = 1, this.scaleb = 1, this.scalef = 1;
}

function InGame(t) {
    this.game = t, this.bgmap = null, this.coinManager = null, this.deadManager = null, this.sparkManager = null, this.hudManager = null, this.thisPlayer = null, this.otherPlayers = [], this.playerShadeGroup = null, this.playerGroup = null, this.playerHeadGroup = null, this.playerLightGroup = null, this.flagGroup = null, this.playersThatJustDied = [], this.inputController = new InputController(t), this.msgManager = new MsgManager(t, this);
}

function BgMap(t) {
    this.game = t, this.bg1 = [], this.yTiles = 0, this.xTiles = 0, this.screenWidth = 0, this.screenHeight = 0, this.isFiffling = !1, this.mapGroup1 = null, this.mapGroup2 = null, this.graphics = null;
}

function Player(t, e, s) {
    this.game = t, this.inGame = e, this.name = null, this.realPos = {
        x: 0,
        y: 0
    }, this.serverPos = {
        x: 0,
        y: 0
    }, this.angle = 0, this.rotDir = 0, this.powerup = {
        starC: 0,
        sboostC: 0
    }, this.isBoosting = !1, this.score = 0, this.length = 1, this.head = null, this.tail = null, this.scale = .35, this.tint = 0, this.tint2 = 0, this.thisPlayer = s, this.nameLabel = null, this.nameCounter = 1, this.outSideMapTime = 0, this.color1 = 1, this.color2 = 1, this.flag = 0, this.skin = 1, this.lightpulselevel = 0, this.lightpulselevelt = 0, this.lookAngle = 0;
}

function PlayerHead(t) {
    this.game = t, this.hitCounter = 10, this.skin = 1, this.sprHead = null, this.hat = null, this.eyes = null, this.flag = null, this.shield = null, this.shieldCounter = 1, this.hatBoostCounter = 1, this.visualAngle = 0;
}

function PlayerEyes(t) {
    this.game = t, this.sprWhiteR = null, this.sprColorR = null, this.sprWhiteL = null, this.sprColorL = null, this.rotR = 0, this.rotL = 0, this.rotSpeedR = 1, this.rotSpeedL = 1, this.hitCounterR = 0, this.hitCounterL = 0, this.boostCounter = -10;
}

function PlayerHat(t) {
    this.game = t, this.skin = 9, this.spr = null, this.hatBoostCounter = 1, this.dead = !1;
}

function PlayerFlag(t) {
    this.game = t, this.links = [], this.realAngles = [], this.flagAngle = 0;
}

function PlayerTail(t, e) {
    this.game = t, this.inGame = e, this.backendTail = null, this.visualTail = null, this.player = null, this.bskin = 0;
}

function PlayerVisualTail(t, e) {
    this.game = t, this.inGame = e, this.length = 5, this.playerlength = 5, this.bskin = 0, this.tint = 0, this.tint2 = 0, this.nodes = [], this.player = null, this.lightPulseCounter = 0, this.boostLight = 0;
}

function DeadManager(t) {
    this.game = t, this.dps = [], this.dpts = [];
}

function DeadPlayer(t) {
    this.game = t, this.rpos = null, this.sprHead = null, this.hat = null, this.tailNodes = [], this.isDead = !1, this.eyes = null, this.skin = 1;
}

function DeadPlayerTail(t) {
    this.game = t, this.tailNodes = [], this.isDead = !1, this.counter = 1, this.xcomp = 0, this.ycomp = 0;
}

function PlayerTailNode(t) {
    this.game = t, this.realPos = {
        x: 0,
        y: 0
    }, this.angle = 0, this.spr = null, this.sprShade = null, this.sprLight = null, this.sprStar = null, this.tint = 16777215, this.tintL = 16777215, this.scale = .35, this.vscale = .35, this.tscale = .35, this.index = 0, this.invertLight = !1, this.preTailIndex = -10, this.tailNodePre = null, this.tailNodeNext = null, this.nextAngle = 0, this.growCounter = 0, this.visible = !0, this.curlPos = {
        x: 0,
        y: 0
    }, this.storedNodePre = {
        x: 0,
        y: 0
    }, this.bkFNID = 0, this.outsideMap = !1, this.preStar = 0, this.doubleStar = !1, this.npn = 1;
}

function OtherPlayer(t, e, s) {
    Player.call(this, e, s, !1), this.id = t;
}

function SparkManager(t) {
    this.game = t, this.coins = [], this.sparks = [];
}

function ThisPlayer(t, e) {
    Player.call(this, t, e, !0);
}

function CustomMenu(t) {
    this.game = t, this.customPlayer = null, this.customSkins = null, this.flagList1 = [], this.flagList2 = [], this.flagList3 = [], this.existingFlags = [];
}

function CustomPlayer(t, e) {
    this.game = t, this.customMenu = e;
}

function CustomSkins(t, e) {
    this.game = t, this.customMenu = e;
}
DoublyLinkedList.prototype._createNewNode = function(t) {
        var e = this;
        return {
            data: t,
            next: null,
            prev: null,
            remove: function() {
                null !== this.prev && (this.prev.next = this.next), null !== this.next && (this.next.prev = this.prev), e._head === this && (e._head = this.next), e._tail === this && (e._tail = this.prev), e._length--;
            },
            prepend: function(t) {
                if (e._head === this) return e.prepend(t);
                var s = e._createNewNode(t);
                return s.prev = this.prev, s.next = this, this.prev.next = s, this.prev = s, e._length++, s;
            },
            append: function(t) {
                if (e._tail === this) return e.append(t);
                var s = e._createNewNode(t);
                return s.prev = this, s.next = this.next, this.next.prev = s, this.next = s, e._length++, s;
            }
        };
    }, DoublyLinkedList.prototype.append = function(t) {
        var e = this._createNewNode(t);
        return 0 === this._length ? (this._head = e, this._tail = e) : (this._tail.next = e, e.prev = this._tail, this._tail = e), this._length++, e;
    }, DoublyLinkedList.prototype.prepend = function(t) {
        var e = this._createNewNode(t);
        return null === this._head ? this.append(t) : (this._head.prev = e, e.next = this._head, this._head = e, this._length++, e);
    }, DoublyLinkedList.prototype.item = function(t) {
        if (t >= 0 && t < this._length) {
            for (var e = this._head; t--;) e = e.next;
            return e;
        }
    }, DoublyLinkedList.prototype.head = function() {
        return this._head;
    }, DoublyLinkedList.prototype.tail = function() {
        return this._tail;
    }, DoublyLinkedList.prototype.size = function() {
        return this._length;
    }, DoublyLinkedList.prototype.remove = function(t) {
        throw "Not implemented";
    },
    function() {
        function t() {}
        t.prototype = {
            preload: function() {
                this.stage.backgroundColor = "#000000";
            },
            create: function() {
                this.game.input.maxPointers = 3, this.game.stage.disableVisibilityChange = !0, this.game.state.start("preloader");
            }
        }, window.phaser = window.phaser || {}, window.phaser.Boot = t;
    }(), BackendTail.prototype = {
        spawn: function(t, e, s, i) {
            this.player = i, this.scale = i.scale, this.length = s.nodes.length, this.tickForwardCounter = s.tickForwardCounter, this.frontNodeID = s.frontNodeID, this.serverFrontNodeID = s.frontNodeID, this.servernodesheadID = this.serverFrontNodeID;
            for (var a = 0; a < this.length; a++) s.nodes[a] && (this.nodes.prepend({
                x: s.nodes[a].x,
                y: s.nodes[a].y,
                id: this.frontNodeID - this.length + a + 1
            }), this.serverNodes[a] = {
                id: this.frontNodeID - this.length + a + 1,
                x: s.nodes[a].x,
                y: s.nodes[a].y
            });
            this.isDoneSpawning = !0;
        },
        setServerFrontNodeID: function(t, e, s, i) {
            this.serverFrontNodeID = t;
            var a = i + 300 * e * this.boost,
                h = Math.floor(a / (69 * this.scale));
            h > 0 && (this.serverFrontNodeID += h), this.serverTickForwardCounter = a - 69 * h * this.scale, this.servernodesheadID = t;
            for (var n = 0; n < s.length; n++) this.serverNodes.push({
                id: t - s.length + n + 1,
                x: s[n].x,
                y: s[n].y
            });
        },
        update: function(t, e, s, i) {
            this.boost = i, this.scale = this.player.scale;
            for (var a = this.nodes.head(), h = this.serverNodes.length - 1; null != a;) {
                if (a.data.id <= this.servernodesheadID && h >= 0 && this.serverNodes[h].id == a.data.id) {
                    var n = this.serverNodes[h].x - a.data.x,
                        r = this.serverNodes[h].y - a.data.y,
                        o = 1 - 1 / (1.2 + .5 * Math.max(0, this.servernodesheadID - a.data.id));
                    a.data.x += t * n * o, a.data.y += t * r * o, h--;
                }
                a = a.next;
            }
            for (this.serverTickForwardCounter += 300 * t * i; this.serverTickForwardCounter >= 69 * this.scale;) this.serverFrontNodeID++, this.serverTickForwardCounter -= 69 * this.scale;
            var l = this.frontNodeID - this.serverFrontNodeID;
            for (this.tickForwardCounter += 300 * t * i * (1 - l / 30); this.tickForwardCounter >= 69 * this.scale && this.isDoneSpawning;) {
                for (; this.player.length <= this.length;) this.nodes.tail().remove(), this.serverNodes[0] && this.serverNodes[0].id < this.frontNodeID - this.length && this.serverNodes.shift(), this.length--;
                this.length++, this.frontNodeID++;
                var d = this.nodes.head().data;
                this.nodes.prepend({
                    x: d.x + 64 * (e - d.x) * this.scale / this.tickForwardCounter,
                    y: d.y + 64 * (s - d.y) * this.scale / this.tickForwardCounter,
                    id: this.frontNodeID
                }), this.tickForwardCounter -= 69 * this.scale;
            }
        },
        getFNID: function() {
            return this.frontNodeID;
        },
        getNodes: function() {
            return this.nodes;
        },
        getPreNode: function(t) {
            for (var e = this.nodes.head(); null != e;) {
                if (e.data.id == t) return e.data;
                e = e.next;
            }
            return null;
        },
        getNextNode: function(t) {
            for (var e = this.nodes.head(); null != e;) {
                if (e.data.id == t + 1) return e.data;
                e = e.next;
            }
            return null;
        },
        getNextAndPreNode: function(t) {
            for (var e = {
                    p: null,
                    n: null
                }, s = this.nodes.head(); null != s;) {
                if (s.data.id == t + 1) return e.n = s.data, null != (s = s.next) && (e.p = s.data), e;
                s = s.next;
            }
            return e;
        },
        getNextAndPreNodeAtHead: function(t) {
            for (var e = {
                    p: null,
                    n: null
                }, s = this.nodes.head(); null != s;) {
                if (s.data.id == t + 1) e.n = s.data;
                else if (s.data.id == t) return e.p = s.data, e;
                s = s.next;
            }
            return e;
        },
        getTickForwardPercent: function() {
            return this.tickForwardCounter / (69 * this.scale);
        },
        getLength: function() {
            return this.length;
        }
    }, Startbg.prototype = {
        create: function() {
            this.graphics = this.game.add.graphics(0, 0), this.mapGroup1 = this.game.add.group(), this.mapGroup2 = this.game.add.group(), this.graphics.beginFill(0), this.graphics.fillAlpha = 1, this.graphics.drawRect(0, 0, this.game.global.screenWidth, this.game.global.screenHeight), this.graphics.endFill(), this.startfade = this.game.add.sprite(0, 0, "pixel"), this.startfade.scale.x = this.game.global.screenWidth, this.startfade.scale.y = this.game.global.screenHeight, this.startfade.alpha = 1, this.startfade.tint = 0, this.startcounter = 1, this.mapGroup2.add(this.startfade);
        },
        resize: function(t, e) {
            this.graphics.beginFill(0), this.graphics.fillAlpha = 1, this.graphics.drawRect(0, 0, t, e), this.graphics.endFill(), this.startfade.scale.x = t, this.startfade.scale.y = e, 0 != this.yTiles && this.mapGroup1.removeAll(!0), this.xTiles = Math.floor(t / 800) + 4, this.yTiles = Math.floor(e / 616) + 4;
            for (var s = 0; s < this.yTiles; s++) {
                this.bg1[s] = [];
                for (var i = 0; i < this.xTiles; i++) {
                    var a = this.game.add.sprite(0, 0, "bg");
                    this.bg1[s][i] = a, this.bg1[s][i].x = 800 * i - 648, this.bg1[s][i].y = 616 * s - 384, this.bg1[s][i].scale.x = 2, this.bg1[s][i].scale.y = 2, this.mapGroup1.add(a);
                }
            }
        },
        update: function(t) {
            this.startcounter -= t, this.startcounter = Math.max(this.startcounter, 0), this.startfade.alpha = this.startcounter, document.getElementById("startMenuWrapper").style.opacity = (1 - this.startcounter).toString();
        },
        destroy: function() {
            this.mapGroup1.destroy(), this.mapGroup2.destroy(), this.graphics.destroy();
        }
    }, Client.prototype = {
        create: function() {
            this.socket = io.connect(window.serverurl);
            var t = this.game,
                e = this.socket,
                s = this.name,
                i = {
                    color1: this.customSnake.color1,
                    color2: this.customSnake.color2,
                    flag: this.customSnake.flag,
                    skin: this.customSnake.skin
                };
            e.on("youConnected", function(a) {
                t.thisID = a.id, e.emit("gotit", {
                    name: s,
                    skindata: i,
                    width: t.global.screenWidth,
                    height: t.global.screenHeight
                });
            }), e.on("worldInfo", function(e) {
                t.global.worldWidth = e.gameWidth, t.global.worldHeight = e.gameHeight;
            }), e.on("q", function(e) {
                t.inGame.msgManager.playersJoined(e);
            }), e.on("w", function(e) {
                t.inGame.msgManager.playerMoved(e);
            }), e.on("e", function(e) {
                t.inGame.msgManager.playerMovedStop(e);
            }), e.on("t", function(e) {
                t.inGame.msgManager.serverPos(e);
            }), e.on("playerDied", function(e) {
                t.inGame.msgManager.playerDied(e);
            }), e.on("a", function(e) {
                t.inGame.msgManager.removePlayer(e);
            }), e.on("p1", function(e) {
                t.inGame.msgManager.startPowerUp1(e);
            }), e.on("p2", function(e) {
                t.inGame.msgManager.startPowerUp2(e);
            }), e.on("s", function(e) {
                _.each(e, function(e) {
                    t.inGame.coinManager.removeCoin(e, !0);
                });
            }), e.on("d", function(e) {
                _.each(e, function(e) {
                    t.inGame.coinManager.addCoin(e.id, e.x, e.y, e.value, e.color);
                });
            }), e.on("f", function(e) {
                _.each(e, function(e) {
                    t.inGame.coinManager.removeCoin(e, !1);
                });
            }), e.on("z", function(e) {
                t.inGame.msgManager.setScore(e, !1);
            }), e.on("x", function(e) {
                t.inGame.msgManager.setScore(e, !0);
            }), e.on("m", function(e) {
                t.setLeaderBoard(e);
            }), e.on("k", function(e) {
                t.inGame.msgManager.setBoost(e, !0);
            }), e.on("l", function(e) {
                t.inGame.msgManager.setBoost(e, !1);
            }), e.on("connect_failed", function() {
                console.log("received connect_failed"), e.close(), t.global.disconnected = !0;
            }), e.on("disconnect", function() {
                !t.global.died && t.inGame && t.inGame.msgManager.playerDied({
                    id: t.thisID
                }), e.close();
            }), e.on("o", function() {
                var e = Date.now() - t.global.startPingTime;
                console.log("ping: " + e);
                var s = e / 1e3;
                s < .6 && (t.global.pingTime = s);
            });
        },
        update: function(t) {
            this.pingCounter += t, this.pingCounter >= 60 && (this.pingCounter = 0, this.socket.emit("i"), this.game.global.startPingTime = Date.now()), this.game.inGame.inputController.sendResize && 0 != this.game.global.worldWidth && (this.socket.emit("1", {
                screenWidth: this.game.global.screenWidth,
                screenHeight: this.game.global.screenHeight
            }), this.game.inGame.inputController.sendResize = !1), this.game.inGame.inputController.sendMove && (this.socket.emit("2", {
                angle: this.game.inGame.inputController.sendTargetAngle
            }), this.game.inGame.inputController.sendMove = !1, this.game.inGame.inputController.kickCounter = 0), this.game.inGame.inputController.sendStartBoost && (this.socket.emit("4"), this.game.inGame.inputController.sendStartBoost = !1, this.game.inGame.inputController.kickCounter = 0), this.game.inGame.inputController.sendStopBoost && (this.socket.emit("5"), this.game.inGame.inputController.sendStopBoost = !1, this.game.inGame.inputController.kickCounter = 0);
        }
    }, MsgManager.prototype = {
        playersJoined: function(t) {
            var e = this.inGame;
            _.each(t, function(t) {
                var s;
                t.id !== e.game.thisID ? (s = _.find(e.otherPlayers, function(e) {
                    return e.id === t.id;
                })) || ((s = new OtherPlayer(t.id, e.game, e)).spawn(t.x, t.y, t.name, t.angle, t.score, t.rotDir, t.isBoosting, t.skindata, t.taildata, t.pu), e.otherPlayers.push(s)) : null == e.thisPlayer.head && (document.getElementById("deathMSG").innerHTML = "", document.getElementById("endMenu").style.display = "none", e.thisPlayer.spawn(t.x, t.y, t.name, t.angle, t.score, t.rotDir, t.isBoosting, t.skindata, t.taildata, t.pu));
            });
        },
        playerMoved: function(t) {
            if (t.id != this.game.thisID) {
                var e = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!e) return void console.log("MOVE no player with id: " + t.id);
                e.setRotDir(t.dir);
            } else this.inGame.thisPlayer && this.inGame.thisPlayer.setRotDir(t.dir);
        },
        playerMovedStop: function(t) {
            if (t.id != this.game.thisID) {
                var e = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!e) return void console.log("MOVESTOP no player with id: " + t.id);
                e.stopRot(t.angle);
            } else this.inGame.thisPlayer && this.inGame.thisPlayer.stopRot(t.angle);
        },
        setBoost: function(t, e) {
            if (t.id != this.game.thisID) {
                var s = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!s) return void console.log("SETBOOST no player with id: " + t.id);
                s.setBoost(e);
            } else this.inGame.thisPlayer && this.inGame.thisPlayer.setBoost(e);
        },
        serverPos: function(t) {
            if (t.id != this.game.thisID) {
                var e = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!e) return void console.log("SERVERPOS no player with id: " + t.id);
                e.setServerPos(t.x, t.y, t.fnid, t.tfc, t.corrtail);
            } else this.inGame.thisPlayer && this.inGame.thisPlayer.setServerPos(t.x, t.y, t.fnid, t.tfc, t.corrtail);
        },
        startPowerUp1: function(t) {
            if (t.id != this.game.thisID) {
                var e = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!e) return void console.log("PU1 no player with id: " + t.id);
                e.startP1();
            } else this.inGame.thisPlayer.startP1();
        },
        startPowerUp2: function(t) {
            if (t.id != this.game.thisID) {
                var e = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!e) return void console.log("PU2 no player with id: " + t.id);
                e.startP2();
            } else this.inGame.thisPlayer.startP2();
        },
        playerDied: function(t) {
            if (t.id == this.game.thisID && this.inGame.thisPlayer) this.game.global.died = !0, this.inGame.thisPlayer.destroy(!0), this.inGame.thisPlayer = null;
            else {
                var e = this.inGame,
                    s = _.remove(this.inGame.otherPlayers, function(e) {
                        return e.id === t.id;
                    });
                _.each(s, function(t) {
                    e.playersThatJustDied.push({
                        id: t.id,
                        x: t.realPos.x,
                        y: t.realPos.y,
                        timeAdded: Date.now()
                    }), t.destroy(!0), t = null;
                }), _.remove(this.inGame.playersThatJustDied, function(t) {
                    return Date.now() - t.timeAdded > 3e3;
                });
            }
        },
        removePlayer: function(t) {
            var e = this.inGame;
            _.each(t, function(t) {
                var s = _.remove(e.otherPlayers, function(e) {
                    return e.id == t.id;
                });
                _.each(s, function(t) {
                    t.destroy(!1);


                });
            });
        },
        setScore: function(t, e) {
            if (t.id != this.game.thisID) {
                var s = _.find(this.inGame.otherPlayers, function(e) {
                    return e.id === t.id;
                });
                if (!s) return void console.log("SETSCORE no player with id: " + t.id);
                s.setScore(t.amount, e);
            } else this.inGame.thisPlayer && (this.inGame.thisPlayer.setScore(t.amount, e), this.game.setScore(t.amount));
        }
    }, InputController.prototype = {
        create: function() {
            if (window.isOnMobile) this.game.input.onDown.add(this.setOriginPoint, this);
            else {
                this.game.input.onDown.add(this.resolveClick, this), this.game.input.onUp.add(this.resolveClickUp, this);
                var t = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                t.onDown.add(this.resolveClick, this), t.onUp.add(this.resolveClickUp, this);
            }
        },
        update: function(t) {
            this.kickCounter += t, this.kickCounter > 20 ? (document.getElementById("endMenu").style.display = "block", document.getElementById("deathMSG").innerHTML = "You will be kicked in : " + (30 - Math.floor(this.kickCounter)) + " seconds", this.kickWarning = !0) : this.kickWarning && (document.getElementById("endMenu").style.display = "none", this.kickWarning = !1), window.isOnMobile ? this.updateInputMobile(t) : this.updateInput(t), (Math.abs(this.sendPreTargetAngle - this.sendTargetAngle) > .1 && this.sendMoveCounter > .1 || this.checkMoveNextFrame) && (this.checkMoveNextFrame ? (this.lastTargetAngle != this.sendTargetAngle && (this.lastTargetAngle > this.sendTargetAngle ? this.sendTargetAngle < -Math.PI && (this.sendTargetAngle = 2 * Math.PI + this.sendTargetAngle) : this.sendTargetAngle > Math.PI && (this.sendTargetAngle = 2 * -Math.PI + this.sendTargetAngle)), this.sendPreTargetAngle = this.sendTargetAngle, this.lastTargetAngle = this.sendTargetAngle, this.sendMove = !0, this.sendMoveCounter = 0, this.checkMoveNextFrame = !1) : (this.checkMoveNextFrame = !0, this.lastTargetAngle = this.sendTargetAngle)), window.isOnMobile && this.updateInputMobile2();
        },
        updateInput: function(t) {
            var e = this.game.input.x,
                s = this.game.input.y;
            this.sendMoveCounter += t;
            var i = e - this.game.global.screenWidth / 2,
                a = s - this.game.global.screenHeight / 2;
            this.instaMoveCounter -= t, this.instaMoveCounter < 0 && (this.instaMoveCounter = 1, this.sendMoveCounter = 1), this.sendTargetAngle = Math.atan2(a, i);
        },
        updateInputMobile: function(t) {
            if (this.isDown && this.game.input.pointers[this.dragPointerID - 1]) {
                this.sendMoveCounter += t;
                var e = this.game.input.pointers[this.dragPointerID - 1].x - this.originPoint.x,
                    s = this.game.input.pointers[this.dragPointerID - 1].y - this.originPoint.y;
                0 == e && 0 == s || (this.instaMoveCounter -= t, this.instaMoveCounter < 0 && (this.instaMoveCounter = 1, this.sendMoveCounter = 1), this.sendTargetAngle = Math.atan2(s, e));
            }
        },
        updateInputMobile2: function() {
            this.game.input.pointers[this.dragPointerID - 1] && (this.game.input.pointers[this.dragPointerID - 1].active || (this.isDown = !1));
        },
        setOriginPoint: function(t) {
            var e = t.x,
                s = t.y,
                i = !0;
            this.game.inGame.hudManager.isOnButton(e, s) && (i = !1), this.isDown || i && (this.isDown = !0, this.dragPointerID = t.id, this.originPoint.x = e, this.originPoint.y = s);
        },
        resolveClick: function(t) {
            this.clickedBoost();
        },
        resolveClickUp: function(t) {
            this.clickedBoostUp();
        },
        clickedBoost: function() {
            this.game.inGame.thisPlayer && (this.sendStartBoost = !0, this.isBoosting = !0);
        },
        clickedBoostUp: function() {
            this.game.inGame && this.game.inGame.thisPlayer && this.isBoosting && (this.sendStopBoost = !0, this.isBoosting = !1);
        }
    }, CoinManager.prototype = {
        create: function() {
            this.coinGroup = this.game.add.group();
        },
        destroy: function() {
            _.each(this.coins, function(t) {
                t.spr && t.spr.destroy(), t.spr2 && t.spr2.destroy();
            });
        },
        update: function(t) {
            this.counter += 2 * t;
            var e = this,
                s = [];
            if (this.game.inGame.thisPlayer) var i = this.game.inGame.thisPlayer.serverPos,
                a = this.game.inGame.thisPlayer.scale;
            _.each(this.coins, function(t) {
                var h = t.x + 16 * Math.cos(e.counter + 4 * t.animationSpeed) * Math.cos(e.counter * t.animationSpeed2) * t.animationSpeed4,
                    n = t.y + 16 * Math.sin(e.counter + 4 * t.animationSpeed) * Math.cos(e.counter * t.animationSpeed3) * t.animationSpeed5;
                if (t.spr.rotation = e.counter * (2 * t.animationSpeed - 1), t.spr.x = h - e.game.global.xOffset + e.game.global.screenWidth / 2, t.spr.y = n - e.game.global.yOffset + e.game.global.screenHeight / 2, t.spr2) {
                    t.spr2.x = t.spr.x, t.spr2.y = t.spr.y;
                    var r = 2 * t.spr.scale.x * (4 * t.spr.scale.x + .5 * Math.cos(e.counter * t.animationSpeed / 2 + t.animationSpeed));
                    t.spr2.scale.x = 2 * r, t.spr2.scale.y = 2 * r;
                }
                i && a && t.val < 10 && (i.x - t.x) * (i.x - t.x) + (i.y - t.y) * (i.y - t.y) < 320 * a * (320 * a) && s.push(t.id);
            }), _.each(s, function(t) {
                e.removeCoin(t, !0);
            });
        },
        addCoin: function(t, e, s, i, a) {
            var h,
                n = 1 == i ? .4 + .35 * Math.random() : .75 + Math.random() / 4,
                r = e - this.game.global.xOffset + this.game.global.screenWidth / 2 > 0 && e - this.game.global.xOffset + this.game.global.screenWidth / 2 < this.game.global.screenWidth && s - this.game.global.yOffset + this.game.global.screenHeight / 2 > 0 && s - this.game.global.yOffset + this.game.global.screenHeight / 2 < this.game.global.screenHeight;
            i < 10 ? h = this.game.add.sprite(e - this.game.global.xOffset + this.game.global.screenWidth / 2, s - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "gem") : (a = 11 == i ? 6 : 12 == i ? 7 : 13 == i ? 8 : 0, h = this.game.add.sprite(e - this.game.global.xOffset + this.game.global.screenWidth / 2, s - this.game.global.yOffset + this.game.global.screenHeight / 2, "pu", i - 11)), h.anchor.x = .5, h.anchor.y = .5, h.tint = this.getColor(a), h.blendMode = 1, r ? (h.alpha = 0, h.scale.x = 0, h.scale.y = 0, this.game.add.tween(h).to({
                alpha: 1
            }, 1e3, Phaser.Easing.Linear.None, !0), this.game.add.tween(h.scale).to({
                x: n,
                y: n
            }, 1e3, Phaser.Easing.Linear.None, !0)) : (h.alpha = 1, h.scale.x = n, h.scale.y = n);
            var o = null;
            window.lowGraphics || ((o = this.game.add.sprite(e - this.game.global.xOffset + this.game.global.screenWidth / 2, s - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "shine")).anchor.x = .5, o.anchor.y = .5, o.tint = this.getColor(a), o.blendMode = 1, r ? (o.alpha = 1, o.scale.x = 0, o.scale.y = 0) : (o.scale.x = 12 * n, o.scale.y = 12 * n), o.alpha = i > 10 || 5 == a || 1 == a ? .5 : 1, this.game.add.tween(o).to({
                alpha: .75
            }, 1e3 + 3e3 * Math.random(), Phaser.Easing.Sinusoidal.InOut, !0, 2e3 * Math.random()).loop(!0).yoyo(!0));
            var l = Math.random() * (i > 1 ? 3 : 1.3),
                d = {
                    id: t,
                    spr: h,
                    spr2: o,
                    x: e,
                    y: s,
                    val: i,
                    scale: n,
                    tint: h.tint,
                    animationSpeed: Math.random() * l,
                    animationSpeed2: Math.random() * l,
                    animationSpeed3: Math.random() * l,
                    animationSpeed4: Math.random() * l,
                    animationSpeed5: Math.random() * l
                };
            this.coins.push(d), o && this.coinGroup.add(o), this.coinGroup.add(h);
        },
        removeCoin: function(t, e) {
            var s = _.remove(this.coins, function(e) {
                    return e.id == t;
                }),
                i = this;
            _.each(s, function(t) {
                if (e) {
                    var s = t.spr.x + i.game.global.xOffset - i.game.global.screenWidth / 2,
                        a = t.spr.y + i.game.global.yOffset - i.game.global.screenHeight / 2,
                        h = null;
                    if (t.spr) {
                        h = {
                            alpha: t.spr.alpha,
                            scale: t.spr.scale.x,
                            rot: t.spr.rotation
                        };
                        t.spr.destroy();
                    }
                    var n = null;
                    t.spr2 && (n = {
                        alpha: t.spr2.alpha,
                        scale: t.spr2.scale.x
                    }, t.spr2.destroy()), i.game.inGame.sparkManager.addCoinSpark(s, a, t.tint, h, n, t.val);
                } else t.spr.destroy(), t.spr2 && t.spr2.destroy();
            });
        },
        getColor: function(t) {
            switch (t) {
                case 0:
                    return 16711680;
                case 1:
                    return 65280;
                case 2:
                    return 255;
                case 3:
                    return 16776960;
                case 4:
                    return 16711935;
                case 5:
                    return 65535;
                case 6:
                    return 16763904;
                case 7:
                    return 52479;
                case 8:
                    return 16711884;
            }
            return 16711680;
        }
    },
    function() {
        function t() {
            this.firstTime = !0, this.thisID = null, this.score = 0, this.maxScore = 0, this.receivedIP = !1, this.startbg = null, this.client = null, this.lastframe = Date.now();
            var t = Math.floor(27 * Math.random()) + 1;
            this.customData = {
                color1: t,
                color2: t,
                flag: 0,
                skin: 1
            }, this.global = {
                screenWidth: 1920,
                screenHeight: 1080,
                worldWidth: 0,
                worldHeight: 0,
                xOffset: 0,
                yOffset: 0,
                nodeMargin: 600,
                isInGame: !1,
                died: !1,
                hasStartedDeathAnim: !1,
                kicked: !1,
                startPingTime: 0,
                pingTime: .02
            }, this.inGame = null, this.customMenu = null, this.gameMenu = null, this.gameZoom = null, window.game = this;
        }
        t.prototype = {
            init: function(t) {
                this.firstTime = t;
            },
            create: function() {
                this.gameZoom = new GameZoom(this), this.gameZoom.create(), this.game.stage.backgroundColor = "#000000", this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT, this.game.scale.setGameSize(this.global.screenWidth, this.global.screenHeight), this.gameMenu = new GameMenu(this), this.gameMenu.create(), this.startbg = new Startbg(this), this.startbg.create(), this.startbg.resize(this.game.width, this.game.height), this.firstTime && (this.customMenu = new CustomMenu(this), this.customMenu.create()), this.toggleCustom(!1);
            },
            toggleCustom: function(t) {
                document.getElementById("skinSelector").style.display = t ? "block" : "none";
            },
            isReadyToStart: function() {
                var t = document.getElementById("playerNameInput"),
                    e = document.querySelector("#startMenu .input-error");
                    t.value = FBInstant.player.getName();
                return 0 == t.length ? (e.style.opacity = 0, window.sendname = "Unnamed", !0) : null !== /^[a-zA-ZäöåÄÖÅ0-9 _]+$/.exec(t.value) ? (e.style.opacity = 0, window.sendname = t.value, !0) : (e.style.opacity = 1, !1);
            },
            startGame: function(t) {
            t = window.sendname;
            this.global.isInGame ? console.log("returning") : (this.global.isInGame = !0, this.startbg.destroy(), this.gameMenu.startGame(t), this.game.stage.backgroundColor = "#000000", window.topplace = -1, this.game.world.alpha = 1, this.global.died = !1, this.global.hasStartedDeathAnim = !1, this.global.kicked = !1, this.global.startPingTime = 0, this.global.pingTime = 0, null != this.client && (this.client = null), null != this.inGame && (this.inGame.destroy(), this.inGame = null), this.client = new Client(this, t, this.customData), this.client.create(), this.global.xOffset = 5e3, this.global.yOffset = 5e3, this.inGame = new InGame(this), this.inGame.create(), this.inGame.resize(this.game.width, this.game.height));
},
            endGame: function() {
                this.maxScore = 0, this.global.died = !1, this.inGame = null, this.gameZoom = null, this.gameMenu = null, this.startbg = null, this.client = null, this.global.isInGame = !1, document.getElementById("startMenuWrapper").style.display = "block", document.getElementById("startMenuWrapper").style.opacity = "0", this.state.restart(!0, !1, !1);
            },
            update: function() {
                var t = Date.now(),
                    e = (t - this.lastframe) / 1e3;
                this.lastframe = t, this.inGame ? this.global.died ? (this.inGame.update(e, !0), this.gameMenu.update(e)) : null != this.inGame && null != this.client && (this.inGame.update(e, !1), this.client.update(e)) : this.startbg && this.startbg.update(e);
            },
            setScore: function(t) {
                if (this.score = t, this.maxScore = Math.max(this.maxScore, this.score), this.inGame.thisPlayer && -1 != this.gameMenu.myLeaderboardID) {
                    var e = "scoreline" + (this.gameMenu.myLeaderboardID + 1);
                    document.getElementById(e).innerHTML = this.inGame.thisPlayer.name + " : " + t;
                }
                document.getElementById("kills").innerHTML = "Length: " + t;
            },
            setLeaderBoard: function(t) {
                this.gameMenu.setLeaderBoard(t);
            }
        }, window.phaser = window.phaser || {}, window.phaser.Game = t;
    }(), GameMenu.prototype = {
        create: function() {
            document.getElementById("startMenuWrapper").style.display = "block", document.getElementById("endMenu").style.display = "block", "M" != document.getElementById("deathMSG").innerHTML.substring(0, 1) && (document.getElementById("deathMSG").innerHTML = "", document.getElementById("logo").style.display = "block");
        },
        update: function(t) {
            if (0 == this.deathCounter && (this.deathEffect = this.game.add.sprite(0, 0, "pixel"), this.deathEffect.scale.x = this.game.global.screenWidth, this.deathEffect.scale.y = this.game.global.screenHeight, this.deathEffect.alpha = 0, this.deathEffect.tint = 0, document.getElementById("logo").style.display = "block", document.getElementById("logo").style.opacity = "0", document.getElementById("endScreen").style.display = "block", document.getElementById("endScreen").style.opacity = "0", document.getElementById("endMenu").style.display = "block", document.getElementById("deathMSG").innerHTML = "", document.getElementById("lengthEnd").innerHTML = this.game.maxScore.toString(), document.getElementById("status").style.display = "none", document.getElementById("kills").style.display = "none"), this.deathCounter < 1) {
                this.deathEffect.scale.x = this.game.global.screenWidth, this.deathEffect.scale.y = this.game.global.screenHeight, this.deathCounter += t / 2, this.deathCounter > 1 ? this.deathEffect.alpha = 1 : this.deathEffect.alpha = this.deathCounter;
                var e = Math.max(0, 3 * this.deathCounter - 2);
                document.getElementById("logo").style.opacity = e.toString(), document.getElementById("endScreen").style.opacity = e.toString(), this.deathCounter >= 1 && this.endGame();
            }
        },
        startGame: function(t) {
            this.deathCounter > 0 && (this.deathEffect.destroy(), this.game.inGame.destroy(), this.game.inGame = null, this.deathCounter = 0, this.game.global.died = !1), document.getElementById("endMenu").style.display = "block", document.getElementById("startMenuWrapper").style.opacity = "1", document.getElementById("startMenuWrapper").style.display = "none", document.getElementById("logo").style.display = "none", document.getElementById("status").style.display = "block", document.getElementById("kills").style.display = "block", document.getElementById("kills").innerHTML = "Length: 0", t = t.replace(/(<([^>]+)>)/gi, "").substring(0, 25), document.getElementById("deathMSG").innerHTML = "Connecting";
        },
        endGame: function() {
            document.getElementById("startMenuWrapper").style.display = "block", document.getElementById("startMenuWrapper").style.opacity = "1", document.getElementById("logo").style.display = "block", document.getElementById("logo").style.opacity = "1", document.getElementById("endScreen").style.display = "block", document.getElementById("endScreen").style.opacity = "1", document.getElementById("endMenu").style.display = "block", this.game.gameZoom.resizeEnd(), window.updateNameAndScore(document.getElementById("playerNameInput").value, this.game.maxScore), this.deathCounter = 0, this.game.endGame();
        },
        setLeaderBoard: function(t) {
            for (var e = -1, s = window.isOnMobile ? 5 : 10, i = 0; i < s; i++) {
                var a = "scoreline" + (i + 1);
                if (i < t.length) {
                    var h = t[i].name;
                    h = h.substring(0, 25), document.getElementById(a).innerHTML = h + " : " + t[i].score, t[i].id == this.game.thisID ? (e = i, 0 != i && (document.getElementById(a).className = "scorelineme")) : 0 != i && (document.getElementById(a).className = "scoreline");
                } else "" != document.getElementById(a).innerHTML && (document.getElementById(a).innerHTML = "");
            }
            this.myLeaderboardID = e, -1 != this.myLeaderboardID && this.myLeaderboardID + 1 < (window.topplace < 0 ? 100 : window.topplace) && (window.topplace = this.myLeaderboardID + 1);
        }
    }, GameZoom.prototype = {
        create: function() {
            var t = this;
            window.addEventListener("resize", function() {
                t.resizeRegular();
            }), this.game.game.scale.refresh();
        },
        resizeRegular: function() {
            this.baseSize + this.currentZoom * this.zoomAmount + window.innerWidth / 1.5 > this.maxScreenWidth ? this.zoomReal = Math.max(0, Math.min(1, (this.maxScreenWidth - this.baseSize - window.innerWidth / 1.5) / this.zoomAmount)) : this.zoomReal = this.currentZoom;
            var t = this.baseSize + this.currentZoom * this.zoomAmount,
                e = window.innerWidth,
                s = window.innerHeight,
                i = t + window.innerWidth / 1.5,
                a = s * i / e;
            i > this.maxScreenWidth && (i = this.maxScreenWidth, a *= this.maxScreenWidth / (t + window.innerWidth / 1.5)), this.heightWidthRatio = window.innerHeight / window.innerWidth, this.game.global.screenWidth = i, this.game.global.screenHeight = a, this.game.game.scale.setGameSize(i, a), null != this.game.inGame ? this.game.inGame.resize(this.game.game.width, this.game.game.height) : this.game.startbg && this.game.startbg.resize(this.game.game.width, this.game.game.height), window.resizeMenus();
        },
        resizeEnd: function() {
            var t = this.baseSize + this.currentZoom * this.zoomAmount,
                e = window.innerWidth,
                s = window.innerHeight,
                i = t + window.innerWidth / 1.5,
                a = s * i / e;
            i > this.maxScreenWidth && (i = this.maxScreenWidth, a *= this.maxScreenWidth / (t + window.innerWidth / 1.5)), this.game.global.screenWidth = i, this.game.global.screenHeight = a, this.game.game.scale.setGameSize(i, a), null != this.game.inGame && this.game.inGame.resize(this.game.game.width, this.game.game.height);
        }
    }, HudManager.prototype = {
        create: function() {
            this.hudGroup = this.game.add.group(), this.minimapSpr = this.game.add.sprite(this.game.global.screenWidth - 16, this.game.global.screenHeight - 16, "stuff", "minimap"), this.minimapSpr.anchor.x = .5, this.minimapSpr.anchor.y = .5, this.minimapSpr.alpha = .3, this.hudGroup.add(this.minimapSpr), this.pinSpr = this.game.add.sprite(this.game.global.screenWidth - 16, this.game.global.screenHeight - 16, "stuff", "shine2"), this.pinSpr.anchor.x = .5, this.pinSpr.anchor.y = .5, this.pinSpr.scale.x = .3, this.pinSpr.scale.y = .3, this.hudGroup.add(this.pinSpr), window.isOnMobile && (this.boostSpr = this.game.add.sprite(0, 0, "bullet"), this.boostSpr.anchor.x = .5, this.boostSpr.anchor.y = .5, this.boostSpr.inputEnabled = !0, this.boostSpr.events.onInputDown.add(this.clickBoost, this), this.boostSpr.events.onInputUp.add(this.clickBoostUp, this), this.hudGroup.add(this.boostSpr), this.arrow = this.game.add.sprite(0, 0, "arrow"), this.arrow.anchor.x = .5, this.arrow.anchor.y = 0, this.arrow.alpha = 0, this.hudGroup.add(this.arrow)), this.resize();
        },
        destroy: function() {
            this.boostSpr && (this.boostSpr.destroy(), this.arrow.destroy()), this.minimapSpr.destroy(), this.pinSpr.destroy();
        },
        resize: function() {
            this.scale = 1, window.isOnMobile ? (this.scale = Math.floor(2 + window.innerHeight / 1e3), this.minimapSpr.scale.x = this.scale, this.minimapSpr.scale.y = this.scale, this.boostSpr.scale.x = this.scale, this.boostSpr.scale.y = this.scale, this.minimapSpr.x = 16 + 48 * this.minimapSpr.scale.x, this.minimapSpr.y = 16 + 48 * this.minimapSpr.scale.y, this.boostSpr.x = this.game.global.screenWidth - 64 - 64 * this.boostSpr.scale.x, this.boostSpr.y = this.game.global.screenHeight - 64 - 64 * this.boostSpr.scale.y) : (this.minimapSpr.x = this.game.global.screenWidth - 16 - 48 * this.minimapSpr.scale.x, this.minimapSpr.y = this.game.global.screenHeight - 16 - 48 * this.minimapSpr.scale.y);
        },
        update: function(t) {
            if (this.pinSpr.x = this.minimapSpr.x - 48 * this.minimapSpr.scale.x + 96 * this.minimapSpr.scale.x * this.game.inGame.thisPlayer.realPos.x / this.game.global.worldWidth, this.pinSpr.y = this.minimapSpr.y - 48 * this.minimapSpr.scale.x + 96 * this.minimapSpr.scale.y * this.game.inGame.thisPlayer.realPos.y / this.game.global.worldHeight, window.isOnMobile) {
                if (this.scalef < 1 && (this.scalef += t / 2, this.scalef > 1 && (this.scalef = 1)), this.boostSpr.scale.x = this.scaleb * this.scale, this.boostSpr.scale.y = this.scaleb * this.scale, Date.now() < this.game.inGame.inputController.boostStopTime + 5e3 ? this.boostSpr.alpha = .3 : this.boostSpr.alpha = 1, this.game.inGame.inputController.isDown ? (this.arrowCounter += 4 * t, this.arrowCounter > 1 && (this.arrowCounter = 1)) : (this.arrowCounter -= 4 * t, this.arrowCounter < 0 && (this.arrowCounter = 0)), this.arrowCounter > 0) {
                    this.arrow.x = this.game.global.screenWidth / 2, this.arrow.y = this.game.global.screenHeight / 2;
                    var e = Math.max(.7, this.game.global.screenHeight / 1920);
                    this.arrow.scale.x = e, this.arrow.scale.y = e, this.arrow.anchor.y = this.arrowCounter * this.game.global.screenWidth / 300, this.arrow.rotation = this.game.inGame.inputController.sendTargetAngle + Math.PI / 2;
                }
                this.arrow.alpha = this.arrowCounter;
            }
        },
        clickBoost: function() {
            this.game.inGame.inputController && (window.isOnMobile && (this.scaleb = .9), this.game.inGame.inputController.clickedBoost());
        },
        clickBoostUp: function() {
            this.game.inGame.inputController && (window.isOnMobile && (this.scaleb = 1), this.game.inGame.inputController.clickedBoostUp());
        },
        isOnButton: function(t, e) {
            return !!this.boostSpr && t > this.boostSpr.x - 64 * this.boostSpr.scale.x && t < this.boostSpr.x + 64 * this.boostSpr.scale.x && e > this.boostSpr.y - 64 * this.boostSpr.scale.y && e < this.boostSpr.y + 64 * this.boostSpr.scale.y;
        }
    }, InGame.prototype = {
        create: function() {
            this.bgmap = new BgMap(this.game), this.bgmap.create(), this.coinManager = new CoinManager(this.game), this.coinManager.create(), this.sparkManager = new SparkManager(this.game), this.sparkManager.create(), this.deadManager = new DeadManager(this.game), this.deadManager.create(), this.playerShadeGroup = this.game.add.group(), this.playerGroup = this.game.add.group(), this.playerHeadGroup = this.game.add.group(), this.playerLightGroup = this.game.add.group(), this.flagGroup = this.game.add.group(), this.sparkManager.createTopLayer(), this.hudManager = new HudManager(this.game), this.hudManager.create(), this.thisPlayer = new ThisPlayer(this.game, this), this.otherPlayers = [], this.inputController.create();
        },
        destroy: function() {
            this.thisPlayer && (this.thisPlayer.destroy(!1), this.thisPlayer = null), _.each(this.otherPlayers, function(t) {
                t.destroy(!1);
            });
        },
        update: function(t, e) {
            if (!e) {
                if (!this.thisPlayer) return;
                null == this.thisPlayer.head || this.game.global.died || (this.thisPlayer.update(t), this.inputController.update(t));
            }
            _.each(this.otherPlayers, function(e) {
                e.update(t);
            }), this.bgmap.update(t), this.coinManager.update(t), this.deadManager.update(t), this.sparkManager.update(t), e || this.hudManager.update(t);
        },
        resize: function(t, e) {
            this.game.global.died || (this.bgmap.resize(t, e), this.hudManager.resize(), this.inputController.sendResize = !0);
        },
        resizeLight: function(t, e) {
            this.game.global.died || (this.bgmap.resizeLight(t, e), this.hudManager.resize());
        }
    }, window.onload = function() {
        FBInstant.initializeAsync().then(function() {
        
        FBInstant.startGameAsync().then(function() {
        var t;
        document.getElementById("status").style.display = "none";
        var e = window.phaser;
        (t = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, "game")).state.add("boot", e.Boot), t.state.add("preloader", e.Preloader), t.state.add("game", e.Game), t.state.start("boot");
   })

            })
 }, BgMap.prototype = {
        create: function() {
            this.mapGroup1 = this.game.add.group(), this.mapGroup2 = this.game.add.group(), this.graphics = this.game.add.graphics(0, 0), this.mapGroup2.add(this.graphics), this.mapGroup2.alpha = .5;
        },
        resize: function(t, e) {
            this.isFiffling = !0, 0 != this.yTiles && this.mapGroup1.removeAll(!0);
            var s = -this.game.global.xOffset % 800,
                i = -this.game.global.yOffset % 616;
            this.screenWidth = t, this.screenHeight = e, this.xTiles = Math.floor(t / 800) + 4, this.yTiles = Math.floor(e / 616) + 4;
            for (var a = 0; a < this.yTiles; a++) {
                this.bg1[a] = [];
                for (var h = 0; h < this.xTiles; h++) {
                    var n = this.game.add.sprite(0, 0, "bg");
                    this.bg1[a][h] = n, this.mapGroup1.add(n), this.bg1[a][h].scale.x = 2, this.bg1[a][h].scale.y = 2, this.bg1[a][h].x = 800 * h + s - 1296 + this.game.gameZoom.zoomAmount * this.game.gameZoom.zoomReal / 2, this.bg1[a][h].y = 616 * a + i - 768 + this.game.gameZoom.zoomAmount * this.game.gameZoom.zoomReal * this.game.gameZoom.heightWidthRatio / 2;
                }
            }
            this.isFiffling = !1;
        },
        resizeLight: function(t, e) {
            this.screenWidth = t, this.screenHeight = e;
        },
        destroy: function() {
            this.graphics.destroy(), this.mapGroup1.destroy(), this.mapGroup2.destroy();
        },
        update: function(t) {
            if (!this.isFiffling)
                for (var e = -this.game.global.xOffset % 800, s = -this.game.global.yOffset % 616, i = 0; i < this.yTiles; i++)
                    for (var a = 0; a < this.xTiles; a++) this.bg1[i][a].x = 800 * a + e - 1296 + this.game.gameZoom.zoomAmount * this.game.gameZoom.zoomReal / 2, this.bg1[i][a].y = 616 * i + s - 768 + this.game.gameZoom.zoomAmount * this.game.gameZoom.zoomReal * this.game.gameZoom.heightWidthRatio / 2;
            this.graphics.clear();
            this.graphics.lineStyle(2e3, 0, 1), this.game.global.xOffset < this.game.global.worldWidth / 2 ? (this.graphics.moveTo(this.screenWidth / 2 - this.game.global.xOffset - 1e3, Math.max(0, this.screenHeight / 2 - this.game.global.yOffset)), this.graphics.lineTo(this.screenWidth / 2 - this.game.global.xOffset - 1e3, Math.min(this.screenHeight, this.screenHeight / 2 + (this.game.global.worldHeight - this.game.global.yOffset)))) : (this.graphics.moveTo(this.screenWidth / 2 + (this.game.global.worldWidth - this.game.global.xOffset) + 1e3, Math.max(0, this.screenHeight / 2 - this.game.global.yOffset)), this.graphics.lineTo(this.screenWidth / 2 + (this.game.global.worldWidth - this.game.global.xOffset) + 1e3, Math.min(this.screenHeight, this.screenHeight / 2 + (this.game.global.worldHeight - this.game.global.yOffset)))), this.game.global.yOffset < this.game.global.worldHeight / 2 ? (this.graphics.moveTo(Math.max(0, this.screenWidth / 2 - this.game.global.xOffset - 2e3), this.screenHeight / 2 - this.game.global.yOffset - 1e3), this.graphics.lineTo(Math.min(this.screenWidth, this.screenWidth / 2 + (this.game.global.worldWidth - this.game.global.xOffset) + 2e3), this.screenHeight / 2 - this.game.global.yOffset - 1e3)) : (this.graphics.moveTo(Math.max(0, this.screenWidth / 2 - this.game.global.xOffset - 2e3), this.screenHeight / 2 + (this.game.global.worldHeight - this.game.global.yOffset) + 1e3), this.graphics.lineTo(Math.min(this.screenWidth, this.screenWidth / 2 + (this.game.global.worldWidth - this.game.global.xOffset) + 2e3), this.screenHeight / 2 + (this.game.global.worldHeight - this.game.global.yOffset) + 1e3)), this.graphics.endFill();
        }
    }, Player.prototype = {
        destroy: function(t) {
            if (this.head && (this.head.destroy(), this.nameLabel.destroy(), this.tail.destroy(), t)) {
                var e = {
                    rot: this.angle,
                    scale: this.scale,
                    skin: this.skin,
                    bskin: this.tail.bskin,
                    tail: this.tail.getTailDeath()
                };
                this.game.inGame.deadManager.addDP(this.realPos, this.tint, this.tint2, e), this.game.inGame.sparkManager.addShockWave(this.realPos.x, this.realPos.y, 2, this.tint, .7);
            }
        },
        spawn: function(t, e, s, i, a, h, n, r, o, l) {
            this.name = s.substring(0, 25), this.serverPos.x = t, this.serverPos.y = e, this.realPos.x = t, this.realPos.y = e, this.angle = i, this.rotDir = h, this.isBoosting = n, this.powerup.starC = l.p1, this.powerup.sboostC = l.p2, this.color1 = r.color1, this.color2 = r.color2, this.flag = r.flag, this.flag > 96 && (this.flag = 0), this.skin = r.skin, this.score = a, this.scale = 1 - .65 / (a / 1e3 + 1), this.length = 5 + Math.floor(100 - 100 / (a / 1e3 + 1));
            var d,
                g = {
                    x: this.thisPlayer ? this.game.global.screenWidth / 2 : t - this.game.global.xOffset + this.game.global.screenWidth / 2,
                    y: this.thisPlayer ? this.game.global.screenHeight / 2 : e - this.game.global.yOffset + this.game.global.screenHeight / 2
                };
            d = 0 == a && this.isInScreen(g, 400), this.tint = this.game.customMenu.getColor(this.color1), this.tint2 = this.game.customMenu.getColor(this.color2), this.head = new PlayerHead(this.game), this.head.spawn(g.x, g.y, this.angle, this.skin, this.tint, this.flag, this.scale, this.tint2, d), this.tail = new PlayerTail(this.game), this.tail.spawn(this.realPos.x, this.realPos.y, this.skin, this.tint, this.tint2, o, this), this.nameLabel = this.game.add.bitmapText(this.head.sprHead.x, this.head.sprHead.y - 128 * this.scale, "font", this.name, 24), this.nameLabel.tint = 16772812, this.nameLabel.anchor.set(.5), this.game.inGame.playerGroup.add(this.nameLabel), this.nameCounter = 1;
        },
        isInScreen: function(t, e) {
            var s = t.x > -e && t.x < this.game.global.screenWidth + e,
                i = t.y > -e && t.y < this.game.global.screenHeight + e;
            return s && i;
        },
        hit: function() {
            this.head.hit();
        },
        setRotDir: function(t) {
            this.rotDir = t;
        },
        stopRot: function(t) {
            this.angle = t, this.rotDir = 0;
        },
        setBoost: function(t) {
            this.isBoosting = t;
        },
        startP1: function() {
            this.powerup.starC = 10;
        },
        startP2: function() {
            this.powerup.sboostC = 3;
        },
        setScore: function(t, e) {
            var s = this.score;
            if (this.score = t, this.scale = 1 - .65 / (t / 1e3 + 1), this.length = 5 + Math.floor(100 - 100 / (t / 1e3 + 1)), this.head.setScale(this.scale), this.lightpulselevelt = Math.min(.2, Math.max(.1, this.lightpulselevel + (this.score - s) / 20)), t < s && e) {
                var i = this.tail.bskin,
                    a = this.tail.getCutTailDeath(this.length);
                if (a && a[0]) {
                    var h = a[0].pos;
                    if (h) {
                        var n = 0,
                            r = -1;
                        if ((r = this.thisPlayer ? this.game.inGame.sparkManager.getIdClosestToPos(h.x, h.y, this.game.thisID) : this.game.inGame.sparkManager.getIdClosestToPos(h.x, h.y, this.id)) != this.game.thisID) {
                            var o = _.find(this.game.inGame.otherPlayers, function(t) {
                                return t.id == r;
                            });
                            o && (n = o.angle);
                        } else r == this.game.thisID && this.game.inGame.thisPlayer && (n = this.game.inGame.thisPlayer.angle);
                        this.game.inGame.deadManager.addDPT(this.tint, i, a, n), this.game.inGame.sparkManager.addShockWave(h.x, h.y, 2, this.tint, .7);
                    }
                }
            }
        },
        setServerPos: function(t, e, s, i, a) {
            var h = this.game.global.pingTime / 2;
            this.serverPos.x = t + 300 * h * Math.cos(this.angle), this.serverPos.y = e + 300 * h * Math.sin(this.angle), this.tail.setServerFNID(s, h, a, i);
        },
        update: function(t) {
            if (this.powerup.starC -= t, this.powerup.starC < 0 && (this.powerup.starC = 0), this.powerup.sboostC -= t, this.powerup.sboostC < 0 && (this.powerup.sboostC = 0), 0 != this.rotDir && (this.angle += this.rotDir * t * 6 * (1.5 - this.scale), this.thisPlayer)) {
                var e = this.angle,
                    s = this.game.inGame.inputController.lastTargetAngle - e;
                s > Math.PI ? e += 2 * Math.PI : s < -Math.PI ? e -= 2 * Math.PI : Math.abs(s) < .3 && (this.rotDir > 0 && e > this.game.inGame.inputController.lastTargetAngle ? (this.angle = this.game.inGame.inputController.lastTargetAngle, this.rotDir = 0) : this.rotDir < 0 && e < this.game.inGame.inputController.lastTargetAngle && (this.angle = this.game.inGame.inputController.lastTargetAngle, this.rotDir = 0));
            }
            var i = (this.isBoosting ? 1.8 : 1) * (1 + this.powerup.sboostC / 3),
                a = Math.cos(this.angle) * i,
                h = Math.sin(this.angle) * i;
            this.serverPos.x += 300 * t * a, this.serverPos.y += 300 * t * h, this.serverPos.x < -500 ? this.serverPos.x = -500 : this.serverPos.x > this.game.global.worldWidth + 500 && (this.serverPos.x = this.game.global.worldWidth + 500), this.serverPos.y < -500 ? this.serverPos.y = -500 : this.serverPos.y > this.game.global.worldHeight + 500 && (this.serverPos.y = this.game.global.worldHeight + 500), this.thisPlayer && (this.serverPos.x < 0 || this.serverPos.y < 0 || this.serverPos.x > this.game.global.worldWidth || this.serverPos.y > this.game.global.worldHeight ? (this.outSideMapTime += t, this.outSideMapTime >= 1 && (document.getElementById("endMenu").style.display = "block", document.getElementById("deathMSG").innerHTML = "You have " + Math.max(0, 5 - Math.floor(this.outSideMapTime + 1)) + " second" + (5 - Math.floor(this.outSideMapTime + 1) != 1 ? "s" : "") + " to get back!")) : (this.outSideMapTime = 0, this.game.inGame.kickWarning || (document.getElementById("endMenu").style.display = "none", document.getElementById("deathMSG").innerHTML = ""))), this.realPos.x += 300 * t * a, this.realPos.y += 300 * t * h, this.realPos.x < -500 ? this.realPos.x = -500 : this.realPos.x > this.game.global.worldWidth + 500 && (this.realPos.x = this.game.global.worldWidth + 500), this.realPos.y < -500 ? this.realPos.y = -500 : this.realPos.y > this.game.global.worldHeight + 500 && (this.realPos.y = this.game.global.worldHeight + 500), this.realPos.x += (this.serverPos.x - this.realPos.x) * t, this.realPos.y += (this.serverPos.y - this.realPos.y) * t, this.thisPlayer && (this.game.global.xOffset = this.realPos.x, this.game.global.yOffset = this.realPos.y), this.lookAngle < this.rotDir ? (this.lookAngle += t, this.lookAngle > this.rotDir && (this.lookAngle = this.rotDir)) : this.lookAngle > this.rotDir && (this.lookAngle -= t, this.lookAngle < this.rotDir && (this.lookAngle = this.rotDir)), this.head.update(t, this.realPos.x, this.realPos.y, this.angle, this.thisPlayer, this.scale, this.thisPlayer ? this.game.inGame.inputController.sendTargetAngle : this.angle + this.lookAngle, i, this.powerup), this.lightpulselevelt > this.lightpulselevel && (this.lightpulselevel += .4 * t, this.lightpulselevel > this.lightpulselevelt && (this.lightpulselevel = this.lightpulselevelt)), this.lightpulselevelt -= t / 10, this.lightpulselevelt < 0 && (this.lightpulselevelt = 0), this.lightpulselevel -= t / 10, this.lightpulselevel < 0 && (this.lightpulselevel = 0), this.tail.update(t, this.realPos.x, this.realPos.y, this.lightpulselevel, i, this.powerup.starC), this.nameCounter > 0 && (this.nameCounter -= t / 30, this.nameCounter < 0 && (this.nameCounter = 0), this.nameLabel.alpha = this.nameCounter, this.nameLabel.x = this.head.sprHead.x, this.nameLabel.y = this.head.sprHead.y + 128 * this.scale);
        }
    }, PlayerHead.prototype = {
        destroy: function() {
            this.sprHead && this.sprHead.destroy(), this.eyes && this.eyes.destroy(), this.flag && this.flag.destroy(), this.shield && this.shield.destroy(), this.hat && this.hat.destroy();
        },
        spawn: function(t, e, s, i, a, h, n, r, o) {
            this.visualAngle = s, this.skin = i, this.sprHead = this.game.add.sprite(t, e, "player", i > 8 ? 16 == i ? 4 : 0 : i - 1), this.sprHead.anchor.x = .5, this.sprHead.anchor.y = .5, this.sprHead.rotation = s, this.sprHead.tint = a, this.sprHead.scale.x = n, this.sprHead.scale.y = n, this.game.inGame.playerHeadGroup.add(this.sprHead), this.eyes = new PlayerEyes(this.game), this.eyes.create(t, e, n, r), h > 0 && (this.flag = new PlayerFlag(this.game), this.flag.create(t, e, n, h, a)), o && (this.shieldCounter = 0, this.shield = this.game.add.sprite(t, e, "stuff", "shockwave"), this.shield.anchor.x = .5, this.shield.anchor.y = .5, this.shield.tint = a, this.shield.scale.x = 4 * n, this.shield.scale.y = this.shield.scale.x, this.game.inGame.playerHeadGroup.add(this.shield)), i > 8 && (this.hat = new PlayerHat(this.game), this.hat.create(t, e, s, i, n, !1));
        },
        setScale: function(t) {
            this.sprHead.scale.x = t, this.sprHead.scale.y = t, this.hat && this.hat.setScale(t);
        },
        hit: function() {
            this.hitCounter = 0;
        },
        update: function(t, e, s, i, a, h, n, r) {
            var o = i;
            o < 0 && (o += 2 * Math.PI);
            var l = o - this.visualAngle,
                d = Math.abs(l);
            if (d > .001) {
                d > Math.PI && (this.visualAngle < Math.PI ? this.visualAngle += 2 * Math.PI : this.visualAngle -= 2 * Math.PI, l = o - this.visualAngle, d = Math.abs(l));
                var g = l > 0 && d > Math.PI || l < 0 && d <= Math.PI ? -1 : 1,
                    c = (5.5 + Math.min(d, .5)) * (1.5 - h);
                d < .2 && (c *= 5 * d), this.visualAngle += c * t * g, -1 == g && this.visualAngle < o ? this.visualAngle = o : 1 == g && this.visualAngle > o && (this.visualAngle = o);
            } else this.visualAngle = o;
            if (this.hitCounter += 4 * t, this.hitCounter < 3) {
                var p = Math.max(1, 1 + .3 * Math.sin(1 / (this.hitCounter + .32)) - .1 * this.hitCounter),
                    m = 1 + .3 * (p - 1);
                this.sprHead.scale.y = h * p, this.sprHead.scale.x = h * m;
            } else this.sprHead.scale.y = h, this.sprHead.scale.x = h;
            if (this.sprHead.rotation = this.visualAngle, a ? (this.sprHead.x = this.game.global.screenWidth / 2, this.sprHead.y = this.game.global.screenHeight / 2) : (this.sprHead.x = e - this.game.global.xOffset + this.game.global.screenWidth / 2, this.sprHead.y = s - this.game.global.yOffset + this.game.global.screenHeight / 2), this.eyes.update(t, e, s, h, this.sprHead.scale.y / h, this.visualAngle, n, r > 1, this.skin), this.flag && this.flag.update(t, e - 10 * Math.cos(this.visualAngle), s - 10 * Math.sin(this.visualAngle), h, this.visualAngle, r), this.shieldCounter += t / 2, this.shield)
                if (this.shieldCounter >= 1) this.shield.destroy(), this.shield = null;
                else {
                    var u = .8 * Math.sin(this.shieldCounter * Math.PI);
                    this.shield.alpha = u, this.shield.scale.x = 4 * (h + .05 * Math.sin(8 * this.shieldCounter)), this.shield.scale.y = this.shield.scale.x, this.shield.x = this.sprHead.x, this.shield.y = this.sprHead.y;
                }
            this.hat && this.sprHead && this.hat.update(t, this.sprHead.x, this.sprHead.y, this.sprHead.rotation, this.sprHead.scale.x, this.sprHead.scale.y, r, this.shieldCounter);
        }
    }, PlayerEyes.prototype = {
        create: function(t, e, s, i) {
            this.sprWhiteR = this.game.add.sprite(t - this.game.global.xOffset + this.game.global.screenWidth / 2, e - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "eye"), this.sprWhiteR.anchor.x = .5, this.sprWhiteR.anchor.y = .5, this.sprWhiteR.scale.x = s, this.sprWhiteR.scale.y = s, this.sprColorR = this.game.add.sprite(t - this.game.global.xOffset + this.game.global.screenWidth / 2, e - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "eyecolor"), this.sprColorR.anchor.x = .3, this.sprColorR.anchor.y = .5, this.sprColorR.scale.x = s, this.sprColorR.scale.y = s, this.sprColorR.tint = i, this.sprWhiteL = this.game.add.sprite(t - this.game.global.xOffset + this.game.global.screenWidth / 2, e - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "eye"), this.sprWhiteL.anchor.x = .5, this.sprWhiteL.anchor.y = .5, this.sprWhiteL.scale.x = s, this.sprWhiteL.scale.y = s, this.sprColorL = this.game.add.sprite(t - this.game.global.xOffset + this.game.global.screenWidth / 2, e - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "eyecolor"), this.sprColorL.anchor.x = .3, this.sprColorL.anchor.y = .5, this.sprColorL.scale.x = s, this.sprColorL.scale.y = s, this.sprColorL.tint = i, this.game.inGame.playerHeadGroup.add(this.sprWhiteR), this.game.inGame.playerHeadGroup.add(this.sprWhiteL), this.game.inGame.playerHeadGroup.add(this.sprColorR), this.game.inGame.playerHeadGroup.add(this.sprColorL);
        },
        destroy: function() {
            this.sprWhiteR.destroy(), this.sprColorR.destroy(), this.sprWhiteL.destroy(), this.sprColorL.destroy();
        },
        update: function(t, e, s, i, a, h, n, r, o) {
            this.sprWhiteR.scale.x = i, this.sprWhiteR.scale.y = i, this.sprWhiteL.scale.x = i, this.sprWhiteL.scale.y = i;
            var l = 6 == o,
                d = (l ? 64 : 24) * i * a,
                g = l ? Math.cos(h) * i * 64 : 0,
                c = l ? Math.sin(h) * i * 64 : 0,
                p = Math.cos(h + Math.PI / 2) * d,
                m = Math.sin(h + Math.PI / 2) * d,
                u = e - this.game.global.xOffset + this.game.global.screenWidth / 2 - p + g,
                y = s - this.game.global.yOffset + this.game.global.screenHeight / 2 - m + c,
                f = e - this.game.global.xOffset + this.game.global.screenWidth / 2 + p + g,
                b = s - this.game.global.yOffset + this.game.global.screenHeight / 2 + m + c;
            this.sprWhiteR.x = u, this.sprWhiteR.y = y, this.sprColorR.x = u, this.sprColorR.y = y, this.sprWhiteL.x = f, this.sprWhiteL.y = b, this.sprColorL.x = f, this.sprColorL.y = b, this.rotR = n, this.rotL = n, this.hitCounterR > 0 || this.hitCounterR > 0 ? (this.hitCounterR -= t * this.rotSpeedR, this.hitCounterR < 0 && (this.hitCounterR = 0), this.sprColorR.rotation = this.rotR + this.hitCounterR * Math.PI * 4, this.hitCounterL -= t * this.rotSpeedL, this.hitCounterL < 0 && (this.hitCounterL = 0), this.sprColorL.rotation = this.rotL - this.hitCounterL * Math.PI * 4) : (this.sprColorR.rotation = this.rotR, this.sprColorL.rotation = this.rotL);
            var x = i,
                v = i,
                M = .3;
            r ? (this.boostCounter < 0 && (this.boostCounter = 0), this.boostCounter += 3 * t, v = x = i, M = .3 + Math.min(.1, x / i - 1)) : this.boostCounter > -5.8 && (this.boostCounter > 0 && (this.boostCounter = 0), this.boostCounter -= t, (x = i + this.boostCounter) < .2 * i && (x = .2 * i), (v -= t) < i && (v = i), this.boostCounter < -5 && (x = .2 * i - i * (this.boostCounter + 5)), M = .4 - Math.min(.1, -this.boostCounter / 20)), this.sprColorR.scale.x = x, this.sprColorR.scale.y = v, this.sprColorR.anchor.x = M, this.sprColorL.scale.x = x, this.sprColorL.scale.y = v, this.sprColorL.anchor.x = M;
        },
        getHit: function() {
            this.hitCounterR = 1, this.rotSpeedR = Math.random() + .5, this.hitCounterL = 1, this.rotSpeedL = Math.random() + .5;
        },
        setalpha: function(t) {
            this.sprWhiteR.alpha = t, this.sprColorR.alpha = t, this.sprWhiteL.alpha = t, this.sprColorL.alpha = t;
        }
    }, PlayerHat.prototype = {
        destroy: function() {
            this.spr.destroy();
        },
        create: function(t, e, s, i, a, h) {
            this.skin = i, this.dead = h, this.spr = this.game.add.sprite(t, e, "player", i - 1), this.spr.anchor.x = 1.2, this.spr.anchor.y = .5, this.spr.rotation = s, this.spr.scale.x = a, this.spr.scale.y = a, this.game.inGame.flagGroup.add(this.spr);
        },
        setScale: function(t) {
            this.spr.scale.x = t, this.spr.scale.y = t;
        },
        setAlpha: function(t) {
            this.spr.alpha = t;
        },
        update: function(t, e, s, i, a, h, n, r) {
            this.spr.x = e, this.spr.y = s, this.spr.rotation = i, this.spr.scale.x = a, this.spr.scale.y = h, n > 1 ? this.hatBoostCounter += 3 * t : this.hatBoostCounter = 0;
            var o = .4 * Math.sin(Math.min(this.hatBoostCounter, Math.PI));
            9 == this.skin ? this.spr.anchor.x = 1.2 + .1 * Math.cos(4 * r) + o : this.skin > 12 ? this.spr.anchor.x = 1.2 + o : this.spr.anchor.x = 1 + o;
        }
    }, PlayerFlag.prototype = {
        create: function(t, e, s, i, a) {
            for (var h = i < 33 ? 1 : i < 65 ? 2 : 3, n = i < 33 ? 1 : i < 65 ? 33 : 65, r = t - this.game.global.xOffset + this.game.global.screenWidth / 2, o = e - this.game.global.yOffset + this.game.global.screenHeight / 2, l = this.game.add.sprite(r, o, "flag" + h.toString(), i - n), d = 0; d < 5; d++)
                if (this.realAngles[d] = 0, 4 == d) l.rotation = 0 + Math.PI / 2, l.anchor.x = .5, l.anchor.y = .1, l.x = r - 30 * Math.cos(0) * d * s, l.y = o - 30 * Math.sin(0) * d * s, l.scale.x = 2 * s, l.scale.y = 2 * s, this.links.push({
                    spr: l,
                    x: 0,
                    y: 0
                }), this.game.inGame.flagGroup.add(l);
                else {
                    var g = this.game.add.sprite(0, 0, "stuff", "shine2");
                    g.rotation = 0, g.tint = this.getdarktint(a, -.7), g.anchor.x = .5, g.anchor.y = .5, g.scale.x = 2 * s, g.scale.y = s, g.x = r - 30 * Math.cos(0) * d, g.y = o - 30 * Math.sin(0) * d, 0 == d && (g.alpha = 0), this.links.push({
                        spr: g,
                        x: 0,
                        y: 0
                    }), this.game.inGame.flagGroup.add(g);
                }
        },
        destroy: function() {
            for (var t = 0; t < 5; t++) this.links[t].spr.destroy();
            this.links = null, this.realAngles = null;
        },
        update: function(t, e, s, i, a, h) {
            var n = a;
            n < 0 && (n += 2 * Math.PI);
            for (var r = 1; r < 5; r++) {
                var o = n - this.realAngles[r],
                    l = Math.abs(o);
                if (l > 0) {
                    l > Math.PI && (this.realAngles[r] < Math.PI ? this.realAngles[r] += 2 * Math.PI : this.realAngles[r] -= 2 * Math.PI, o = n - this.realAngles[r], l = Math.abs(o));
                    var d = !1;
                    o > 0 && l <= Math.PI ? d = !1 : o > 0 && l > Math.PI ? d = !0 : o < 0 && l <= Math.PI ? d = !0 : o < 0 && l > Math.PI && (d = !1), l = Math.min(l, 2), d ? this.realAngles[r] -= l * t * (18 / r) * h : this.realAngles[r] += l * t * (18 / r) * h;
                }
                if (this.links[r].x = e - 30 * Math.cos(this.realAngles[r]) * r * i, this.links[r].y = s - 30 * Math.sin(this.realAngles[r]) * r * i, 4 == r) {
                    var g = this.links[r].y - this.links[r - 1].y,
                        c = this.links[r].x - this.links[r - 1].x,
                        p = Math.atan2(g, c),
                        m = p - this.flagAngle;
                    m > Math.PI ? this.flagAngle += 2 * Math.PI : m < -Math.PI && (this.flagAngle -= 2 * Math.PI), this.flagAngle += (p - this.flagAngle) * t * 10 * h, this.links[r].spr.rotation = this.flagAngle - Math.PI / 2, this.links[r].spr.scale.x = 2 * i, this.links[r].spr.scale.y = 2 * i;
                } else {
                    if (3 == r) {
                        var u = Math.atan2(Math.sin(this.realAngles[r]) / 2 + Math.sin(this.flagAngle) / 2, Math.cos(this.realAngles[r]) / 2 + Math.cos(this.flagAngle) / 2);
                        this.links[r].spr.rotation = u + Math.PI / 2;
                    } else this.links[r].spr.rotation = this.realAngles[r];
                    this.links[r].spr.scale.x = 2 * i, this.links[r].spr.scale.y = i;
                }
                this.links[r].spr.x = this.links[r].x - this.game.global.xOffset + this.game.global.screenWidth / 2, this.links[r].spr.y = this.links[r].y - this.game.global.yOffset + this.game.global.screenHeight / 2;
            }
        },
        getdarktint: function(t, e) {
            var s = e < 0 ? 0 : 255,
                i = e < 0 ? -1 * e : e,
                a = t >> 16,
                h = t >> 8 & 255,
                n = 255 & t;
            return 16777216 + 65536 * (Math.round((s - a) * i) + a) + 256 * (Math.round((s - h) * i) + h) + (Math.round((s - n) * i) + n);
        }
    }, PlayerTail.prototype = {
        destroy: function() {
            this.visualTail.destroy();
        },
        spawn: function(t, e, s, i, a, h, n) {
            this.backendTail = new BackendTail(this.game, this.inGame), this.backendTail.spawn(t, e, h, n), this.bskin = 0, s > 1 && (2 == s ? this.bskin = 3 : 3 == s ? this.bskin = 1 : 4 == s ? this.bskin = 2 : 8 == s && (this.bskin = 4)), this.visualTail = new PlayerVisualTail(this.game, this.inGame), this.visualTail.spawn(t, e, this.backendTail.getNodes(), this.bskin, i, a, n), this.player = n;
        },
        setServerFNID: function(t, e, s, i) {
            this.backendTail.setServerFrontNodeID(t, e, s, i);
        },
        update: function(t, e, s, i, a, h) {
            this.backendTail.update(t, e, s, a), this.visualTail.update(t, this.backendTail, this.backendTail.getTickForwardPercent(), e, s, this.backendTail.getFNID(), this.backendTail.getLength(), i, a, h);
        },
        getTailDeath: function() {
            return this.visualTail.getTailDeath();
        },
        getCutTailDeath: function(t) {
            return this.visualTail.getCutTailDeath(t);
        }
    }, PlayerVisualTail.prototype = {
        destroy: function() {
            for (var t = 0; t < this.nodes.length; t++) this.nodes[t] && this.nodes[t].destroy();
        },
        spawn: function(t, e, s, i, a, h, n) {
            this.length = s.size(), this.bskin = i, this.tint = a, this.tint2 = h, this.player = n;
            var r = 0,
                o = s.head();
            for (this.npn = window.lowGraphics ? 1 : 2; null != o;) {
                for (var l = 0; l < this.npn; l++) this.nodes[r + l] = new PlayerTailNode(this.game), this.nodes[r + l].spawn(i, a, h, n.scale, r + l, this.npn);
                r += this.npn, o = o.next;
            }
        },
        addNode: function(t) {
            t *= this.npn;
            for (var e = 0; e < this.npn; e++) this.nodes[t + e] = new PlayerTailNode(this.game), this.nodes[t + e].spawn(this.bskin, this.tint, this.tint2, this.player.scale, t + e, this.npn);
            this.length++;
        },
        update: function(t, e, s, i, a, h, n, r, o, l) {
            this.lightPulseCounter += t, o > 1 && this.boostLight < 1 ? (this.boostLight += t, this.boostLight > 1 && (this.boostLight = 1)) : o <= 1 && this.boostLight > 0 && (this.boostLight -= t, this.boostLight < 0 && (this.boostLight = 0)), this.playerlength = n, n > this.length && this.addNode(this.length);
            for (var d = 0; d < this.length * this.npn; d += this.npn) {
                var g = this.playerlength > d / this.npn;
                if (d > 0)
                    for (var c = h - Math.floor(d / this.npn), p = 0; p < this.npn; p++)
                        if (this.nodes[d + p] && (g || this.nodes[d + p].growCounter > 0)) {
                            var m = s + (this.npn - 1 - p) % this.npn / this.npn;
                            this.nodes[d + p].update(t, m, s, e, c + Math.floor(m), i, a, r, this.lightPulseCounter, this.boostLight, this.nodes.length, h, g, this.player.scale, l);
                        }
            }
        },
        getTailDeath: function() {
            for (var t = [], e = 0; e < this.playerlength * this.npn; e += this.npn)
                if (e > 0)
                    for (var s = 0; s < this.npn; s++) this.nodes[e + s] && (t[e + s] = this.nodes[e + s].getDeath());
            return t;
        },
        getCutTailDeath: function(t) {
            for (var e = [], s = t * this.npn; s < this.playerlength * this.npn; s += this.npn)
                if (s > 0)
                    for (var i = 0; i < this.npn; i++) this.nodes[s + i] && e.push(this.nodes[s + i].getDeath());
            return e;
        }
    }, DeadManager.prototype = {
        create: function() {},
        destroy: function() {
            _.each(this.dps, function(t) {
                t.destroy();
            }), _.each(this.dpts, function(t) {
                t.destroy();
            });
        },
        update: function(t) {
            _.each(this.dps, function(e) {
                e.update(t);
            }), _.remove(this.dps, function(t) {
                return t.getDead();
            }), _.each(this.dpts, function(e) {
                e.update(t);
            }), _.remove(this.dpts, function(t) {
                return t.getDead();
            });
        },
        addDP: function(t, e, s, i) {
            var a = new DeadPlayer(this.game);
            a.create(t, i.rot, i.skin, i.bskin, e, s, i.scale, i.tail), this.dps.push(a);
        },
        addDPT: function(t, e, s, i) {
            var a = new DeadPlayerTail(this.game);
            a.create(t, e, s, i), this.dpts.push(a);
        }
    }, DeadPlayer.prototype = {
        destroy: function() {
            if (this.sprHead) {
                this.sprHead.destroy(), this.eyes.destroy();
                for (var t = 0; t < this.tailNodes.length; t++) this.tailNodes[t].spr1 && this.tailNodes[t].spr1.destroy(), this.tailNodes[t].spr2 && this.tailNodes[t].spr2.destroy();
            }
            this.hat && this.hat.destroy();
        },
        create: function(t, e, s, i, a, h, n, r) {
            this.rpos = t, this.skin = s, this.sprHead = this.game.add.sprite(t.x, t.y, "player", s > 8 ? 16 == s ? 4 : 0 : s - 1), this.sprHead.anchor.x = .5, this.sprHead.anchor.y = .5, this.sprHead.rotation = e, this.sprHead.tint = a, this.sprHead.scale.x = n, this.sprHead.scale.y = n, this.game.add.tween(this.sprHead).to({
                alpha: 0
            }, 1e3, Phaser.Easing.Linear.None, !0), this.game.inGame.playerHeadGroup.add(this.sprHead), this.eyes = new PlayerEyes(this.game), this.eyes.create(t.x, t.y, n, h), s > 8 && (this.hat = new PlayerHat(this.game), this.hat.create(this.sprHead.x, this.sprHead.y, e, s, n, !0));
            for (var o = 0, l = r.length - 1; l >= 0; l--)
                if (r[l] && r[l].alpha > 0) {
                    var d = r[l].pos.x,
                        g = r[l].pos.y,
                        c = d - this.game.global.xOffset + this.game.global.screenWidth / 2,
                        p = g - this.game.global.yOffset + this.game.global.screenHeight / 2,
                        m = this.game.add.sprite(c, p, "body", i);
                    m.anchor.x = .5, m.anchor.y = .5, m.rotation = r[l].angle, m.scale.x = r[l].scalex, m.scale.y = r[l].scaley, m.alpha = r[l].alpha, m.tint = r[l].tint;
                    var u = this.game.add.sprite(c, p, "stuff", "shine");
                    u.anchor.x = .5, u.anchor.y = .5, u.rotation = r[l].angle, u.tint = r[l].index % 3 == 0 ? 16777215 - a : a, u.blendMode = 1, u.alpha = r[l].alphaL, u.scale.x = 12 * r[l].scalex, u.scale.y = 12 * r[l].scaley, this.game.add.tween(m).to({
                        alpha: 0
                    }, 1e3, Phaser.Easing.Linear.None, !0), this.game.inGame.playerGroup.add(m), this.game.inGame.playerLightGroup.add(u), this.tailNodes[o] = {
                        pos: {
                            x: d,
                            y: g
                        },
                        spr1: m,
                        spr2: u,
                        alpha: r[l].alphaL,
                        scaley: r[l].scaley
                    }, o++;
                }
        },
        update: function(t) {
            this.sprHead.x = this.rpos.x - this.game.global.xOffset + this.game.global.screenWidth / 2, this.sprHead.y = this.rpos.y - this.game.global.yOffset + this.game.global.screenHeight / 2, this.eyes.update(t, this.rpos.x, this.rpos.y, this.sprHead.scale.x, this.sprHead.scale.y / this.sprHead.scale.x, this.sprHead.rotation, this.sprHead.rotation, !1, this.skin), this.eyes.setalpha(this.sprHead.alpha), this.hat && (this.hat.update(t, this.sprHead.x, this.sprHead.y, this.sprHead.rotation, this.sprHead.scale.x, this.sprHead.scale.y, 0, 0), this.hat.setAlpha(this.sprHead.alpha));
            for (var e = Math.min(1, 10 * (1 - this.sprHead.alpha)), s = 0; s < this.tailNodes.length; s++)
                if (this.tailNodes[s]) {
                    var i = this.tailNodes[s].scaley,
                        a = i + e * i * (.3 + .3 * Math.cos(s / 10 + 10 * this.sprHead.alpha));
                    this.tailNodes[s].spr1.scale.y = a, this.tailNodes[s].spr1.x = this.tailNodes[s].pos.x - this.game.global.xOffset + this.game.global.screenWidth / 2, this.tailNodes[s].spr1.y = this.tailNodes[s].pos.y - this.game.global.yOffset + this.game.global.screenHeight / 2, this.tailNodes[s].spr2.x = this.tailNodes[s].spr1.x, this.tailNodes[s].spr2.y = this.tailNodes[s].spr1.y, this.tailNodes[s].spr2.alpha = this.sprHead.alpha * Math.min(1, 2 * this.tailNodes[s].alpha), this.tailNodes[s].spr2.scale.y = Math.max(12 * a, a * (1 + a) * 12), this.tailNodes[s].spr2.scale.x = this.tailNodes[s].spr2.scale.x, s == this.tailNodes.length - 1 && (this.sprHead.scale.y = a);
                }
            this.sprHead.alpha <= 0 && (this.destroy(), this.isDead = !0);
        },
        getDead: function() {
            return this.isDead;
        }
    }, DeadPlayerTail.prototype = {
        destroy: function() {
            if (this.tailNodes.length > 0)
                for (var t = 0; t < this.tailNodes.length; t++) this.tailNodes[t].spr1 && this.tailNodes[t].spr1.destroy(), this.tailNodes[t].spr2 && this.tailNodes[t].spr2.destroy();
        },
        create: function(t, e, s, i) {
            this.xcomp = Math.cos(i), this.ycomp = Math.sin(i);
            for (var a = 0, h = s.length - 1; h >= 0; h--)
                if (s[h] && s[h].alpha > 0) {
                    var n = s[h].pos.x,
                        r = s[h].pos.y,
                        o = n - this.game.global.xOffset + this.game.global.screenWidth / 2,
                        l = r - this.game.global.yOffset + this.game.global.screenHeight / 2,
                        d = this.game.add.sprite(o, l, "body", e);
                    d.anchor.x = .5, d.anchor.y = .5, d.rotation = s[h].angle, d.scale.x = s[h].scalex, d.scale.y = s[h].scaley, d.alpha = s[h].alpha, d.tint = s[h].tint;
                    var g = this.game.add.sprite(o, l, "stuff", "shine");
                    g.anchor.x = .5, g.anchor.y = .5, g.rotation = s[h].angle, g.tint = s[h].index % 3 == 0 ? 16777215 - t : t, g.blendMode = 1, g.alpha = s[h].alphaL, g.scale.x = 12 * s[h].scalex, g.scale.y = 12 * s[h].scaley, this.game.add.tween(d).to({
                        alpha: 0
                    }, 1e3, Phaser.Easing.Linear.None, !0), this.game.inGame.playerGroup.add(d), this.game.inGame.playerLightGroup.add(g), this.tailNodes[a] = {
                        pos: {
                            x: n,
                            y: r
                        },
                        spr1: d,
                        spr2: g,
                        alpha: s[h].alphaL,
                        scaley: s[h].scaley
                    }, a++;
                }
        },
        update: function(t) {
            if (this.counter -= t, this.counter <= 0) return this.destroy(), void(this.isDead = !0);
            for (var e = Math.min(1, 10 * (1 - this.counter)), s = 0; s < this.tailNodes.length; s++)
                if (this.tailNodes[s]) {
                    var i = this.tailNodes[s].scaley,
                        a = i + e * i * (.3 + .3 * Math.cos(s / 10 + 10 * this.counter));
                    this.tailNodes[s].spr1.scale.y = a;
                    var h = (this.tailNodes.length - s) / 15,
                        n = Math.max(0, (1 - this.counter) * (1536 / (h * h + 5))),
                        r = this.tailNodes[s].pos.x + this.xcomp * n,
                        o = this.tailNodes[s].pos.y + this.ycomp * n;
                    this.tailNodes[s].spr1.x = r - this.game.global.xOffset + this.game.global.screenWidth / 2, this.tailNodes[s].spr1.y = o - this.game.global.yOffset + this.game.global.screenHeight / 2, this.tailNodes[s].spr2.x = this.tailNodes[s].spr1.x, this.tailNodes[s].spr2.y = this.tailNodes[s].spr1.y, this.tailNodes[s].spr2.alpha = this.counter * Math.min(1, 2 * this.tailNodes[s].alpha), this.tailNodes[s].spr2.scale.y = Math.max(12 * a, a * (1 + a) * 12), this.tailNodes[s].spr2.scale.x = this.tailNodes[s].spr2.scale.x;
                }
        },
        getDead: function() {
            return this.isDead;
        }
    }, PlayerTailNode.prototype = {
        destroy: function() {
            this.index < this.npn || this.spr && (this.spr.destroy(), this.sprShade.destroy(), this.sprLight.destroy(), this.sprStar.destroy());
        },
        spawn: function(t, e, s, i, a, h) {
            if (this.npn = h, !(a < h)) {
                this.realPos.x = -3e3, this.realPos.y = -3e3, this.angle = 0, this.index = a, this.scale = i, this.vscale = i, this.tscale = i;
                var n = {
                    x: this.realPos.x - this.game.global.xOffset + this.game.global.screenWidth / 2,
                    y: this.realPos.y - this.game.global.yOffset + this.game.global.screenHeight / 2
                };
                this.spr = this.game.add.sprite(n.x, n.y, "body", t), this.spr.anchor.x = .5, this.spr.anchor.y = .5, this.spr.rotation = 0, a < 2 * this.npn ? this.tint = e : this.tint = Math.floor(a / this.npn) % 2 ? e : s, this.spr.tint = this.tint, this.spr.scale.x = this.scale, this.spr.scale.y = this.scale, this.sprShade = this.game.add.sprite(n.x, n.y, "stuff", "shine"), this.sprShade.anchor.x = .5, this.sprShade.anchor.y = .5, this.sprShade.tint = 0, this.sprShade.scale.x = 8 * this.scale, this.sprShade.scale.y = 8 * this.scale, this.sprLight = this.game.add.sprite(n.x, n.y, "stuff", "shine"), this.sprLight.anchor.x = .5, this.sprLight.anchor.y = .5, this.invertLight = this.index % 3 == 0, this.tintL = this.invertLight ? 16777215 - this.tint : this.tint, this.sprLight.tint = this.tintL, this.sprLight.blendMode = 1, this.sprLight.scale.x = 12 * this.scale, this.sprLight.scale.y = 12 * this.scale, this.sprStar = this.game.add.sprite(n.x, n.y, "stuff", "shockwave"), this.sprStar.anchor.x = .5, this.sprStar.anchor.y = .5, this.sprStar.tint = this.getCS(Math.floor(this.index / 2) % 12), this.sprStar.blendMode = 1, this.sprStar.scale.x = 3 * this.scale, this.sprStar.scale.y = 3 * this.scale, this.game.inGame.playerShadeGroup.add(this.sprShade), this.game.inGame.playerGroup.add(this.spr, !1, 0), this.game.inGame.playerLightGroup.add(this.sprLight), this.game.inGame.playerLightGroup.add(this.sprStar);
            }
        },
        getCS: function(t) {
            switch (t) {
                case 0:
                    return 16711816;
                case 1:
                    return 16711680;
                case 2:
                    return 16711935;
                case 3:
                    return 16776960;
                case 4:
                    return 8978176;
                case 5:
                    return 65280;
                case 6:
                    return 65416;
                case 7:
                    return 65535;
                case 8:
                    return 35071;
                case 9:
                    return 255;
                case 10:
                    return 8913151;
                case 11:
                    return 16711935;
            }
            return 65280;
        },
        update: function(t, e, s, i, a, h, n, r, o, l, d, g, c, p, m) {
            this.scale = p, this.visible = c, e %= 1;
            var u = a != this.preTailIndex;
            if (this.bkFNID != g && (u = !0), u) {
                this.bkFNID = g, this.preTailIndex = a;
                var y = null;
                null == (y = this.index < 6 ? i.getNextAndPreNodeAtHead(a) : i.getNextAndPreNode(a)).p && (y.n == this.tailNodeNext ? null != this.tailNodePre && (this.storedNodePre = this.getPosOfNode(this.tailNodePre)) : null != this.tailNodeNext && (this.storedNodePre = this.getPosOfNode(this.tailNodeNext))), this.tailNodePre = y.p, this.tailNodeNext = y.n;
            }
            if (this.visible || !(this.growCounter <= 0)) {
                if (null == this.tailNodePre) {
                    if (null == this.tailNodeNext) return this.growCounter = 0, this.spr.alpha = 0, this.sprShade.alpha = 0, this.sprLight.alpha = 0, void(this.sprStar.alpha = 0);
                    if (this.updatePos(t, this.storedNodePre, this.tailNodeNext, e, u)) return;
                } else if (null == this.tailNodeNext) this.index < 6 && this.updatePosAtHead(t, this.tailNodePre, {
                    x: h,
                    y: n
                }, e, s);
                else if (this.updatePos(t, this.tailNodePre, this.tailNodeNext, e, u)) return;
                if (!this.updateGrowing(t)) {
                    var f = this.scale + this.scale * Math.min(this.index / 300, .05) * Math.cos(this.index / 10 + 5 * o);
                    this.spr.scale.y = f, this.sprShade.x = this.spr.x, this.sprShade.y = this.spr.y, this.sprShade.scale.x = 8 * this.vscale, this.sprShade.scale.y = 8 * this.spr.scale.y, this.sprShade.rotation = this.angle, r > 0 && (r *= 1 - Math.min(1, Math.max(0, this.index / (d / 5 + .1))));
                    var b = .25 + .25 * Math.cos(-3 * o + Math.PI * this.index / 10),
                        x = Math.min(.8, (this.invertLight ? .3 : 1) * (b + r) + (this.invertLight ? l / 4 : l) * (.4 - .3 * this.scale));
                    if (this.sprLight.x = this.spr.x, this.sprLight.y = this.spr.y, this.sprLight.scale.x = 12 * this.vscale * (this.index < 2 ? 2 : 1) * (1 + x) * (this.invertLight ? 1.5 : 1), this.sprLight.scale.y = 12 * this.spr.scale.y * (this.index < 2 ? 2 : 1) * (1 + x), this.sprLight.alpha = x * this.growCounter, this.sprLight.rotation = this.angle, window.lowGraphics && (this.sprLight.scale.x *= 1.2, this.sprLight.scale.y *= 1.2, this.sprShade.scale.x *= 1.5, this.sprShade.scale.y *= 1.5), Math.abs(this.preStar - m) > .5 && (this.preStar > 0 ? this.doubleStar = !0 : this.doubleStar = !1), this.preStar = m, m > 0) {
                        var v = Math.min(1, (this.index + this.npn) / (3 * this.npn)),
                            M = 3 * this.npn / (this.index / 5 + 3 * this.npn) * (this.doubleStar ? 1 : Math.min(1, 10 - 1 * m)),
                            P = Math.max(1, (2 - Math.abs(430 - 44 * m - this.index) / 10) * M * 1.5);
                        o *= 5, b = .25 + .25 * Math.cos(-3 * o + Math.PI * this.index / 10), x = Math.min(1, b + r), this.sprStar.x = this.spr.x, this.sprStar.y = this.spr.y, this.sprStar.scale.x = 2.5 * this.vscale * (1 + x * x * 4) * v, this.sprStar.scale.y = 2.5 * this.spr.scale.y * (1 + x) * v * P, this.sprStar.alpha = Math.min(1, this.growCounter * m * M), this.sprStar.rotation = this.angle;
                    } else this.sprStar.alpha = 0;
                }
            }
        },
        updateGrowing: function(t) {
            if (this.visible) this.growCounter < 1 ? (this.growCounter += t, this.growCounter > 1 && (this.growCounter = 1), this.spr.alpha = this.growCounter, this.sprShade.alpha = this.spr.alpha) : (this.spr.alpha = 1, this.sprShade.alpha = 1);
            else {
                if (!(this.growCounter > 0)) return !0;
                this.growCounter -= t, this.growCounter <= 0 && (this.growCounter = 0), this.spr.alpha = this.growCounter, this.sprShade.alpha = this.growCounter;
            }
            return !1;
        },
        updatePos: function(t, e, s, i, a) {
            var h = this.getPosOfNode(e),
                n = this.getPosOfNode(s);
            return this.isOutsideView(h) ? (this.spr.alpha = 0, this.sprShade.alpha = 0, this.sprLight.alpha = 0, this.sprStar.alpha = 0, this.outsideMap = !0, !0) : (this.outsideMap = !1, this.updatePosInner(t, h, n, i, a), !1);
        },
        updatePosInner: function(t, e, s, i, a) {
            if (a) {
                this.preAngle = this.nextAngle, this.nextAngle = Math.atan2(s.y - e.y, s.x - e.x), Math.abs(this.preAngle - this.nextAngle) > Math.PI && (this.preAngle > 0 ? this.preAngle -= 2 * Math.PI : this.preAngle += 2 * Math.PI);
                var h = 69 * this.scale;
                this.curlPos.x = e.x + Math.cos(this.preAngle) * h, this.curlPos.y = e.y + Math.sin(this.preAngle) * h;
            }
            this.angle = this.preAngle * (1 - i) + this.nextAngle * i, this.spr.rotation = this.angle;
            var n = e.x * (1 - i) + s.x * i,
                r = e.y * (1 - i) + s.y * i,
                o = e.x * (1 - i) + this.curlPos.x * i,
                l = e.y * (1 - i) + this.curlPos.y * i,
                d = .2 * Math.sin(i * Math.PI);
            this.realPos.x = n * (1 - d) + o * d, this.realPos.y = r * (1 - d) + l * d, this.spr.x = this.realPos.x - this.game.global.xOffset + this.game.global.screenWidth / 2, this.spr.y = this.realPos.y - this.game.global.yOffset + this.game.global.screenHeight / 2, this.tscale = this.scale * Math.max(1, Math.sqrt((e.x - s.x) * (e.x - s.x) + (e.y - s.y) * (e.y - s.y)) / (128 * this.scale)), this.vscale < this.tscale ? (this.vscale += (1 + Math.abs(this.vscale - this.tscale)) * t * 4, this.vscale > this.tscale && (this.vscale = this.tscale)) : this.vscale > this.tscale && (this.vscale -= (1 + Math.abs(this.vscale - this.tscale)) * t * 4, this.vscale < this.tscale && (this.vscale = this.tscale)), this.spr.scale.x = this.vscale;
        },
        updatePosAtHead: function(t, e, s, i, a) {
            if (null != e) {
                var h = this.getPosOfNode(e);
                this.angle = Math.atan2(s.y - h.y, s.x - h.x);
                var n = Math.sqrt((s.x - h.x) * (s.x - h.x) + (s.y - h.y) * (s.y - h.y)),
                    r = 0 == a ? 0 : n / a;
                this.realPos.x = h.x + r * Math.cos(this.angle) * i, this.realPos.y = h.y + r * Math.sin(this.angle) * i, this.spr.x = this.realPos.x - this.game.global.xOffset + this.game.global.screenWidth / 2, this.spr.y = this.realPos.y - this.game.global.yOffset + this.game.global.screenHeight / 2, this.spr.rotation = this.angle, this.tscale = this.scale * Math.max(1, r / (128 * this.scale)), this.vscale < this.tscale ? (this.vscale += (1 + Math.abs(this.vscale - this.tscale)) * t * 4, this.vscale > this.tscale && (this.vscale = this.tscale)) : this.vscale > this.tscale && (this.vscale -= (1 + Math.abs(this.vscale - this.tscale)) * t * 4, this.vscale < this.tscale && (this.vscale = this.tscale)), this.spr.scale.x = this.vscale;
            }
        },
        getPosOfNode: function(t) {
            return {
                x: t.x,
                y: t.y
            };
        },
        getDst: function(t, e, s) {
            var i = t - s.x,
                a = e - s.y;
            return Math.sqrt(i * i + a * a);
        },
        isOutsideView: function(t) {
            return t.x - this.game.global.xOffset + this.game.global.screenWidth / 2 < -this.game.global.nodeMargin || t.y - this.game.global.yOffset + this.game.global.screenHeight / 2 < -this.game.global.nodeMargin || t.x - this.game.global.xOffset - this.game.global.screenWidth / 2 > this.game.global.nodeMargin || t.y - this.game.global.yOffset - this.game.global.screenHeight / 2 > this.game.global.nodeMargin;
        },
        getDeath: function() {
            return {
                pos: this.realPos,
                scalex: this.spr.scale.x,
                scaley: this.spr.scale.y,
                angle: this.angle,
                alpha: this.spr.alpha,
                alphaL: this.sprLight.alpha,
                tint: this.spr.tint,
                index: this.index
            };
        }
    }, OtherPlayer.prototype = Object.create(Player.prototype),
    function() {
        function t() {
            this.ready = !1;
        }
        t.prototype = {
            preload: function() {
                this.game.time.advancedTiming = !0, this.stage.backgroundColor = "#000000", this.load.onLoadComplete.addOnce(this.onLoadComplete, this), this.game.load.bitmapFont("font", "img/font/font.png", "img/font/font.xml"), this.game.load.image("pixel", "img/pixel.png"), this.game.load.spritesheet("pu", "img/pu.png", 64, 64, 3), this.game.load.spritesheet("player", "img/skins.png", 128, 128, 16), this.game.load.spritesheet("body", "img/body.png", 128, 128, 5), this.game.load.spritesheet("flag1", "img/flags1.png", 64, 64, 32), this.game.load.spritesheet("flag2", "img/flags2.png", 64, 64, 32), this.game.load.spritesheet("flag3", "img/flags3.png", 64, 64, 32), this.game.load.image("bg", "img/bg.png", 599, 519), this.game.load.atlasJSONHash("stuff", "img/stuff.png", "img/stuffdata.json"), this.game.load.spritesheet("bullet", "img/bullet.png"), this.game.load.image("arrow", "img/pointer.png");
            },
            create: function() {},
            update: function() {
                this.ready && this.game.state.start("game", !0, !1, !0);
            },
            onLoadComplete: function() {
                this.ready = !0;
            }
        }, window.phaser = window.phaser || {}, window.phaser.Preloader = t;
    }(), SparkManager.prototype = {
        create: function() {
            this.sparkGroup = this.game.add.group();
        },
        createTopLayer: function() {
            this.sparkGroup2 = this.game.add.group();
        },
        destroy: function() {},
        update: function(t) {
            var e = this;
            _.each(this.coins, function(s) {
                if (s.closestPID != e.game.thisID) {
                    var i = _.find(e.game.inGame.otherPlayers, function(t) {
                        return t.id == s.closestPID;
                    });
                    if (i) {
                        var a = i.realPos.x - s.x,
                            h = i.realPos.y - s.y,
                            n = Math.atan2(h, a);
                        s.x += Math.cos(n) * t * ((i.isBoosting ? 448 : 340) + .5 * Math.abs(i.realPos.x - s.x)), s.y += Math.sin(n) * t * ((i.isBoosting ? 448 : 340) + .5 * Math.abs(i.realPos.y - s.y));
                    } else s.destroyed = !0;
                } else if (e.game.inGame.thisPlayer) {
                    a = e.game.inGame.thisPlayer.realPos.x - s.x, h = e.game.inGame.thisPlayer.realPos.y - s.y, n = Math.atan2(h, a);
                    s.x += Math.cos(n) * t * ((e.game.inGame.thisPlayer.isBoosting ? 448 : 340) + .5 * Math.abs(e.game.inGame.thisPlayer.realPos.x - s.x)), s.y += Math.sin(n) * t * ((e.game.inGame.thisPlayer.isBoosting ? 448 : 340) + .5 * Math.abs(e.game.inGame.thisPlayer.realPos.y - s.y));
                } else s.destroyed = !0;
                s.spr.x = s.x - e.game.global.xOffset + e.game.global.screenWidth / 2, s.spr.y = s.y - e.game.global.yOffset + e.game.global.screenHeight / 2, s.spr2 && (s.spr2.x = s.spr.x, s.spr2.y = s.spr.y), s.spr3 && (s.spr3.x = s.spr.x, s.spr3.y = s.spr.y), s.spr.alpha <= 0 && (s.spr.alpha = 0, s.spr.destroy(), s.spr2 && s.spr2.destroy(), s.spr3 && s.spr3.destroy(), s.destroyed = !0);
            }), _.remove(this.coins, function(t) {
                return t.destroyed;
            }), _.each(this.sparks, function(t) {
                t.spr.x = t.x - e.game.global.xOffset + e.game.global.screenWidth / 2, t.spr.y = t.y - e.game.global.yOffset + e.game.global.screenHeight / 2, t.spr2 && (t.spr2.x = t.x - e.game.global.xOffset + e.game.global.screenWidth / 2, t.spr2.y = t.y - e.game.global.yOffset + e.game.global.screenHeight / 2), t.spr.alpha <= 0 && (t.spr.alpha = 0, t.spr.destroy(), t.spr2 && (t.spr2.alpha = 0, t.spr2.destroy()), t.destroyed = !0), t.spr2 && t.spr2.alpha <= 0 && (t.spr.alpha = 0, t.spr.destroy(), t.spr2.alpha = 0, t.spr2.destroy(), t.destroyed = !0);
            }), _.remove(this.sparks, function(t) {
                return t.destroyed;
            });
        },
        addCoinSpark: function(t, e, s, i, a, h) {
            var n = this.getIdClosestToPos(t, e, -1),
                r = t - this.game.global.xOffset + this.game.global.screenWidth / 2,
                o = e - this.game.global.yOffset + this.game.global.screenHeight / 2,
                l = null;
            h < 10 ? l = this.game.add.sprite(r, o, "stuff", "gem") : (l = this.game.add.sprite(r, o, "pu", h - 11), this.addShockWave(t, e, 1.4, s, .7)), l.anchor.x = .5, l.anchor.y = .5, l.alpha = i.alpha, l.blendMode = 1, l.tint = s, l.scale.x = i.scale, l.scale.y = i.scale, this.game.add.tween(l).to({
                alpha: 0
            }, 500, Phaser.Easing.Linear.None, !0, 700), this.game.add.tween(l.scale).to({
                x: 0,
                y: 0
            }, 700, Phaser.Easing.Linear.None, !0);
            var d = null;
            a && ((d = this.game.add.sprite(r, o, "stuff", "shine")).anchor.x = .5, d.anchor.y = .5, d.tint = s, d.blendMode = 1, d.scale.x = a.scale, d.scale.y = a.scale, d.alpha = a.alpha, this.game.add.tween(d.scale).to({
                x: 0,
                y: 0
            }, 100, Phaser.Easing.Linear.None, !0, 100));
            var g = {
                spr: l,
                spr2: d,
                x: t,
                y: e,
                destroyed: !1,
                closestPID: n
            };
            this.coins.push(g), d && this.sparkGroup.add(d), this.sparkGroup.add(l);
        },
        addShockWave: function(t, e, s, i, a) {
            var h = this.game.add.sprite(t - this.game.global.xOffset + this.game.global.screenWidth / 2, e - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "shockwave");
            h.tint = i, h.anchor.x = .5, h.anchor.y = .5, h.blendMode = 1, h.scale.x = 0, h.scale.y = 0, h.alpha = 1, this.game.add.tween(h).to({
                alpha: 0
            }, 1e3 * a, Phaser.Easing.Cubic.None, !0), this.game.add.tween(h.scale).to({
                x: 8 * s,
                y: 8 * s
            }, 1e3 * a, Phaser.Easing.Cubic.None, !0);
            var n = {
                spr: h,
                x: t,
                y: e,
                destroyed: !1
            };
            this.sparks.push(n), this.sparkGroup2.add(h), this.addFire2(t, e, 1.4, i, Math.random() * Math.PI * 2, 1), this.addFire2(t, e, 1.4, i, Math.random() * Math.PI * 2, 1), this.addFire2(t, e, 1.4, i, Math.random() * Math.PI * 2, 1);
        },
        addFire2: function(t, e, s, i, a, h) {
            var n = t + 24 * Math.random() - 12,
                r = e + 24 * Math.random() - 12,
                o = this.game.add.sprite(n - this.game.global.xOffset + this.game.global.screenWidth / 2, r - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "shine");
            o.tint = i, o.anchor.x = .5, o.anchor.y = .5, o.blendMode = 1, o.scale.x = 3 * s + 3 * Math.random(), o.scale.y = o.scale.x, o.alpha = 1, this.game.add.tween(o).to({
                alpha: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0), this.game.add.tween(o.scale).to({
                x: 0,
                y: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0);
            var l = this.game.add.sprite(n - this.game.global.xOffset + this.game.global.screenWidth / 2, r - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "shard");
            l.anchor.x = .5, l.anchor.y = .5, l.rotation = 2 * Math.random() * Math.PI, l.blendMode = 1, l.scale.x = o.scale.x / 4, l.scale.y = o.scale.x / 4, l.alpha = 1, this.game.add.tween(l).to({
                alpha: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0), this.game.add.tween(l.scale).to({
                x: 0,
                y: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0);
            var d = {
                spr: o,
                spr2: l,
                x: t,
                y: e,
                destroyed: !1
            };
            this.game.add.tween(d).to({
                x: n + 256 * Math.cos(a) * h + 64 * Math.random() * s * 3 - 32,
                y: r + 256 * Math.sin(a) * h + 64 * Math.random() * s * 3 - 32
            }, 1200, Phaser.Easing.Cubic.None, !0), this.sparks.push(d), this.sparkGroup2.add(o), this.sparkGroup2.add(l);
            var g = this.game.add.sprite(n - this.game.global.xOffset + this.game.global.screenWidth / 2, r - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "shine");
            g.tint = i;
            var c = this.game.add.sprite(n - this.game.global.xOffset + this.game.global.screenWidth / 2, r - this.game.global.yOffset + this.game.global.screenHeight / 2, "stuff", "shard");
            g.anchor.x = .5, g.anchor.y = .5, g.blendMode = 1, g.scale.x = 3 * s + 3 * Math.random(), g.scale.y = g.scale.x, g.alpha = 1, this.game.add.tween(g).to({
                alpha: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0), this.game.add.tween(g.scale).to({
                x: 0,
                y: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0), c.anchor.x = .5, c.anchor.y = .5, c.rotation = 2 * Math.random() * Math.PI, c.blendMode = 1, c.scale.x = g.scale.x / 4, c.scale.y = g.scale.x / 4, c.alpha = 1, this.game.add.tween(c).to({
                alpha: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0), this.game.add.tween(c.scale).to({
                x: 0,
                y: 0
            }, 1e3, Phaser.Easing.Cubic.None, !0);
            var p = {
                spr: g,
                spr2: c,
                x: t,
                y: e,
                destroyed: !1
            };
            this.game.add.tween(p).to({
                x: n + 256 * Math.cos(a) * h + 64 * Math.random() * s * 3 - 32,
                y: r + 256 * Math.sin(a) * h + 64 * Math.random() * s * 3 - 32
            }, 1200, Phaser.Easing.Cubic.None, !0), this.sparks.push(p), this.sparkGroup2.add(g), this.sparkGroup2.add(c);
        },
        getIdClosestToPos: function(t, e, s) {
            var i = -1,
                a = 36e4;
            return _.each(this.game.inGame.otherPlayers, function(h) {
                (h.serverPos.x - t) * (h.serverPos.x - t) + (h.serverPos.y - e) * (h.serverPos.y - e) < a && h.id != s && (a = (h.serverPos.x - t) * (h.serverPos.x - t) + (h.serverPos.y - e) * (h.serverPos.y - e), i = h.id);
            }), this.game.inGame.thisPlayer && s != this.game.thisID && (this.game.inGame.thisPlayer.serverPos.x - t) * (this.game.inGame.thisPlayer.serverPos.x - t) + (this.game.inGame.thisPlayer.serverPos.y - e) * (this.game.inGame.thisPlayer.serverPos.y - e) < a && (a = (this.game.inGame.thisPlayer.serverPos.x - t) * (this.game.inGame.thisPlayer.serverPos.x - t) + (this.game.inGame.thisPlayer.serverPos.y - e) * (this.game.inGame.thisPlayer.serverPos.y - e), i = this.game.thisID), i;
        }
    }, ThisPlayer.prototype = Object.create(Player.prototype), CustomMenu.prototype = {
        create: function() {
            this.createFlagList(), this.customSkins = new CustomSkins(this.game, this), this.customSkins.spawn(), this.customPlayer = new CustomPlayer(this.game, this), this.customPlayer.spawn(500, 500, 0), this.setColorDemo1(this.game.customData.color1), this.setColorDemo2(this.game.customData.color2), this.setFlagDemo(this.game.customData.flag);
            for (var t = 1; t <= 27; t++) this.addColor1(t);
            for (t = 1; t <= 27; t++) this.addColor2(t);
            for (t = 1; t <= 96; t++) this.addFlag(t);
            document.getElementById("flagsearch").value = "", document.getElementById("flagsearch").t = this, document.getElementById("flagsearch").oninput = this.filterflags;
        },
        addColor1: function(t) {
            var e = document.createElement("button");
            e.id = "cColor1" + t, e.setAttribute("class", t == this.game.customData.color1 ? "selectcolorframe" : "colorframe"), e.i = t, e.t = this, e.style.top = (88 + 80 * Math.floor((t - 6) / 5)).toString() + "px", e.style.left = (10 + (t - 1) % 5 * 80).toString() + "px", e.addEventListener("click", this.selectColor1);
            var s = document.createElement("div");
            s.id = "cdemo1" + t, s.setAttribute("class", "colordemobig"), s.style.background = this.getColorString(t), e.appendChild(s), document.getElementById("color1SelectorList").appendChild(e);
        },
        addColor2: function(t) {
            var e = document.createElement("button");
            e.id = "cColor2" + t, e.setAttribute("class", t == this.game.customData.color2 ? "selectcolorframe" : "colorframe"), e.i = t, e.t = this, e.style.top = (88 + 80 * Math.floor((t - 6) / 5)).toString() + "px", e.style.left = (10 + (t - 1) % 5 * 80).toString() + "px", e.addEventListener("click", this.selectColor2);
            var s = document.createElement("div");
            s.id = "cdemo2" + t, s.setAttribute("class", "colordemobig"), s.style.background = this.getColorString(t), e.appendChild(s), document.getElementById("color2SelectorList").appendChild(e);
        },
        addFlag: function(t) {
            var e = "";
            if (t < 33) {
                if (!this.flagList1[t - 1]) return;
                e = this.flagList1[t - 1];
            } else if (t < 65) {
                if (!this.flagList2[t - 33]) return;
                e = this.flagList2[t - 33];
            } else {
                if (!this.flagList3[t - 65]) return;
                e = this.flagList3[t - 65];
            }
            this.existingFlags.push(e);
            var s = this.existingFlags.length,
                i = document.createElement("button");
            i.id = "cFlag" + t, i.setAttribute("class", t == this.game.customData.flag ? "selectcolorframe" : "colorframe"), i.i = t, i.name = e, i.t = this, i.style.top = (88 + 80 * Math.floor((s - 6) / 5)).toString() + "px", i.style.left = (10 + (s - 1) % 5 * 80).toString() + "px", i.addEventListener("click", this.selectFlag);
            var a = document.createElement("div");
            a.setAttribute("class", "spriteflag" + (t < 33 ? 1 : t < 65 ? 2 : 3).toString() + " sprite-flag" + (t < 33 ? 1 : t < 65 ? 2 : 3).toString());
            var h = t - (t < 33 ? 0 : t < 65 ? 32 : 64);
            a.style.backgroundPosition = (-64 * (h - 1)).toString() + "px 0", i.appendChild(a), document.getElementById("flagSelectorList").appendChild(i);
        },
        selectColor1: function() {
            var t = this.i;
            this.t.game.customData.color1 = t;
            for (var e = 1; e <= 27; e++) document.getElementById("cColor1" + e.toString()).setAttribute("class", "colorframe");
            document.getElementById("cColor1" + this.i.toString()).setAttribute("class", "selectcolorframe"), this.t.setColorDemo1(this.i);
        },
        selectColor2: function() {
            var t = this.i;
            this.t.game.customData.color2 = t;
            for (var e = 1; e <= 27; e++) document.getElementById("cColor2" + e.toString()).setAttribute("class", "colorframe");
            document.getElementById("cColor2" + this.i.toString()).setAttribute("class", "selectcolorframe"), this.t.setColorDemo2(this.i);
        },
        selectFlag: function() {
            for (var t = this.i, e = 1; e <= 96; e++) document.getElementById("cFlag" + e.toString()) && document.getElementById("cFlag" + e.toString()).setAttribute("class", "colorframe");
            this.t.game.customData.flag != this.i ? (document.getElementById("cFlag" + this.i.toString()).setAttribute("class", "selectcolorframe"), this.t.game.customData.flag = t) : (document.getElementById("cFlag" + this.i.toString()).setAttribute("class", "colorframe"), this.t.game.customData.flag = 0), this.t.setFlagDemo(this.t.game.customData.flag);
        },
        setColorDemo1: function(t) {
            document.getElementById("color1Demo").style.background = this.getColorString(t), document.getElementById("color1Selector").style.display = "none", document.getElementById("color1Button").setAttribute("class", "colorButton"), this.customPlayer.setColor1(t);
        },
        setColorDemo2: function(t) {
            document.getElementById("color2Demo").style.background = this.getColorString(t), document.getElementById("color2Selector").style.display = "none", document.getElementById("color2Button").setAttribute("class", "colorButton"), this.customPlayer.setColor2(t);
        },
        setFlagDemo: function(t) {
            document.getElementById("flagSelector").style.display = "none", document.getElementById("flagButton").setAttribute("class", "colorButton"), this.customPlayer.setFlag(t);
        },
        filterflags: function() {
            for (var t = 0; t < 96; t++) document.getElementById("cFlag" + t.toString()) && (document.getElementById("cFlag" + t.toString()).style.display = "none");
            var e = document.getElementById("flagsearch").value.toLowerCase(),
                s = 1;
            for (t = 1; t <= 96; t++) this.t.flagList1[t - 1] ? this.t.flagList1[t - 1].toLowerCase().includes(e) && this.t.putFlagWhenSearching(s, t) && s++ : this.t.flagList2[t - 33] ? this.t.flagList2[t - 33].toLowerCase().includes(e) && this.t.putFlagWhenSearching(s, t) && s++ : this.t.flagList3[t - 65] && this.t.flagList3[t - 65].toLowerCase().includes(e) && this.t.putFlagWhenSearching(s, t) && s++;
        },
        putFlagWhenSearching: function(t, e) {
            var s = document.getElementById("cFlag" + e.toString());
            return !!s && (s.style.top = (88 + 80 * Math.floor((t - 6) / 5)).toString() + "px", s.style.left = (10 + (t - 1) % 5 * 80).toString() + "px", s.style.display = "block", !0);
        },
        getColorString: function(t) {
            switch (t) {
                case 1:
                    return "#ffffff";
                case 2:
                    return "#ffaaaa";
                case 3:
                    return "#aaffaa";
                case 4:
                    return "#aaaaff";
                case 5:
                    return "#ffffaa";
                case 6:
                    return "#aaffff";
                case 7:
                    return "#ffaaff";
                case 8:
                    return "#aaaaaa";
                case 9:
                    return "#333333";
                case 10:
                    return "#ff7700";
                case 11:
                    return "#ff0000";
                case 12:
                    return "#00ff00";
                case 13:
                    return "#0000ff";
                case 14:
                    return "#ffff00";
                case 15:
                    return "#00ffff";
                case 16:
                    return "#ff00ff";
                case 17:
                    return "#0077ff";
                case 18:
                    return "#77ff00";
                case 19:
                    return "#883300";
                case 20:
                    return "#880000";
                case 21:
                    return "#008800";
                case 22:
                    return "#000088";
                case 23:
                    return "#888800";
                case 24:
                    return "#008888";
                case 25:
                    return "#880088";
                case 26:
                    return "#003399";
                case 27:
                    return "#338800";
            }
            return 16777215;
        },
        getColor: function(t) {
            switch (t) {
                case 1:
                    return 16777215;
                case 2:
                    return 16755370;
                case 3:
                    return 11206570;
                case 4:
                    return 11184895;
                case 5:
                    return 16777130;
                case 6:
                    return 11206655;
                case 7:
                    return 16755455;
                case 8:
                    return 11184810;
                case 9:
                    return 3355443;
                case 10:
                    return 16742144;
                case 11:
                    return 16711680;
                case 12:
                    return 65280;
                case 13:
                    return 255;
                case 14:
                    return 16776960;
                case 15:
                    return 65535;
                case 16:
                    return 16711935;
                case 17:
                    return 30719;
                case 18:
                    return 7864064;
                case 19:
                    return 8925952;
                case 20:
                    return 8912896;
                case 21:
                    return 34816;
                case 22:
                    return 136;
                case 23:
                    return 8947712;
                case 24:
                    return 34952;
                case 25:
                    return 8913032;
                case 26:
                    return 13209;
                case 27:
                    return 3377152;
            }
            return 16777215;
        },
        createFlagList: function() {
            this.flagList1 = ["Sweden", "UK", "USA", "Mexico", "Brazil", "Canada", "Russia", "Finland", "Germany", "Japan", "India", "Poland", "Croatia", "Denmark", "Czech", "Ukraine", "Spain", "France", "Italy", "Norway", "", "", "", "", "", "", "", "", "", "", "", ""], this.flagList2 = ["AbooT", "Slith", "Bodil40", "Jelly", "Godenot", "MasterOv", "Target", "Pumba", "Smash", "Fady", "Blitz", "MasterSp", "Kwebbelkop", "Jacksepticeye", "Markiplier", "Pewdiepie", "Jumbo", "Truebizcuit", "iHASYOU", "Duckio", "Baxtrix", "Enigma", "Nation", "Fortish", "CookieGuy", "Sample", "", "", "", "", "", ""], this.flagList3 = ["Anklagarn", "Trump", "Sparta", "Troll", "Polkagris", "YinYang", "Diamond", "Turtle", "Fidget", "Nerd", "Hoh", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];
        }
    }, CustomPlayer.prototype = {
        destroy: function() {},
        spawn: function(t, e, s) {
            for (var i = 9; i >= 0; i--) this.addNode(i);
            var a = document.createElement("div");
            a.id = "pdemoh", a.setAttribute("class", "colordemoh"), a.style.background = this.customMenu.getColorString(this.game.customData.color1), a.style.top = "44px", a.style.left = "57px", document.getElementById("demoplayer").appendChild(a);
            var h = document.createElement("div");
            h.id = "pdemone1", h.setAttribute("class", "colordemoeye"), h.style.background = this.customMenu.getColorString(this.game.customData.color2), h.style.top = "54px", h.style.left = "63px", document.getElementById("demoplayer").appendChild(h);
            var n = document.createElement("div");
            n.id = "pdemone2", n.setAttribute("class", "colordemoeye"), n.style.background = this.customMenu.getColorString(this.game.customData.color2), n.style.top = "54px", n.style.left = "90px", document.getElementById("demoplayer").appendChild(n);
            var r = document.createElement("div");
            r.id = "pdemof", r.setAttribute("class", "sprite sprite-skin" + this.game.customData.skin.toString()), r.style.top = "80px", r.style.left = "0px", document.getElementById("demoplayer").appendChild(r);
        },
        addNode: function(t) {
            var e = document.createElement("div");
            e.id = "pdemon" + t, e.setAttribute("class", "colordemobig"), Math.floor(t / 2) % 2 == 0 ? e.style.background = this.customMenu.getColorString(this.game.customData.color1) : e.style.background = this.customMenu.getColorString(this.game.customData.color2), e.style.top = (64 + 16 * t).toString() + "px", e.style.left = (64 + t / 10 * 16 * Math.sin(2 * Math.PI - 2 * Math.PI * (t / 10))).toString() + "px", document.getElementById("demoplayer").appendChild(e);
        },
        setColor1: function(t) {
            for (var e = this.customMenu.getColorString(this.game.customData.color1), s = 0; s < 10; s++) Math.floor(s / 2) % 2 == 0 && (document.getElementById("pdemon" + s.toString()).style.background = e);
            document.getElementById("pdemoh").style.background = e;
        },
        setColor2: function(t) {
            for (var e = this.customMenu.getColorString(this.game.customData.color2), s = 0; s < 10; s++) Math.floor(s / 2) % 2 == 1 && (document.getElementById("pdemon" + s.toString()).style.background = e);
            document.getElementById("pdemone1").style.background = e, document.getElementById("pdemone2").style.background = e;
        },
        setFlag: function(t) {
            document.getElementById("pdemof").setAttribute("class", "spriteflag" + (t < 33 ? 1 : t < 65 ? 2 : 3).toString() + " sprite-flag" + (t < 33 ? 1 : t < 65 ? 2 : 3).toString());
            var e = t - (t < 33 ? 0 : t < 65 ? 32 : 64);
            document.getElementById("pdemof").style.backgroundPosition = (-64 * (e - 1)).toString() + "px 0";
        }
    }, CustomSkins.prototype = {
        destroy: function() {},
        spawn: function() {
            this.updateSkins();
        },
        updateSkins: function() {
            document.getElementById("skinSelector").style.display = "block";
            for (var t = document.getElementById("skinList"); t.firstChild;) t.removeChild(t.firstChild);
            for (var e = 1; e < 17; e++) {
                var s = !(e > 4);
                s || (e < 13 ? s = !0 : window.crownsowned.includes(e - 13) && (s = !0));
                var i = document.createElement("div");
                i.id = "skin" + e, i.style.display = "block", i.setAttribute("class", "skinframe"), e == this.game.customData.skin && i.setAttribute("class", "skinframeselected"), i.style.top = (180 + 180 * Math.floor((e - 5) / 4)).toString() + "px", i.style.left = ((e - 1) % 4 * 120).toString() + "px";
                var a = e < 13 ? "Subscribe" : 13 == e ? "Top 10" : 14 == e ? "Top 5" : 15 == e ? "Top 3" : "Top 1",
                    h = document.createElement("a"),
                    n = document.createElement("button");
                n.id = "skinb" + e, n.textContent = s ? "Select" : a, n.setAttribute("class", s ? "skinSelectButton" : "skinLockedButton"), n.i = e, n.t = this, n.addEventListener("click", s ? this.skinOnClick : null), h.appendChild(n);
                var r = document.createElement("div");
                r.setAttribute("class", "sprite sprite-skin"), r.style.backgroundPosition = (-96 * (e - 1)).toString() + "px 0", i.appendChild(r), i.appendChild(h), document.getElementById("skinList").appendChild(i);
            }
        },
        skinOnClick: function() {
            if (this.t.game.customData.skin != this.i) {
                for (var t = 1; t < 17; t++) document.getElementById("skin" + t.toString()).setAttribute("class", "skinframe");
                document.getElementById("skin" + this.i.toString()).setAttribute("class", "skinframeselected"), this.t.game.customData.skin = this.i;
            }
        }
    };