var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component } from '@angular/core';
import { Grid } from './model/grid';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'catchtheramu';
        this.grid = new Grid();
        this.waitDuration = 500;
        this.isShuffling = false;
    }
    AppComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    AppComponent.prototype.moveLeftCardToRightClockWise = function (fn) {
        var _this = this;
        var mat = this.move({ x: 1, y: 0 }, { x: 0, y: 0, });
        this.sleep(this.waitDuration).then(function () {
            var mat = _this.move({ x: 0, y: 0 }, { x: 0, y: 1, });
            _this.sleep(_this.waitDuration).then(function () {
                _this.move({ x: 0, y: 1 }, { x: 0, y: 2, });
                _this.sleep(_this.waitDuration).then(function () {
                    var mat = _this.move({ x: 1, y: 2 }, { x: 2, y: 2, });
                    _this.sleep(_this.waitDuration).then(function () {
                        var mat = _this.move({ x: 0, y: 2 }, { x: 1, y: 2, });
                        _this.sleep(_this.waitDuration).then(function () {
                            var mat = _this.move({ x: 2, y: 2 }, { x: 2, y: 1, });
                            _this.sleep(_this.waitDuration).then(function () {
                                var mat = _this.move({ x: 2, y: 1 }, { x: 2, y: 0, });
                                _this.sleep(_this.waitDuration).then(function () {
                                    var mat = _this.move({ x: 2, y: 0 }, { x: 1, y: 0, });
                                    if (fn)
                                        fn();
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    AppComponent.prototype.moveCenterCardToleft = function (fn) {
        var _this = this;
        var mat = this.move({ x: 1, y: 0 }, { x: 0, y: 0, });
        this.sleep(this.waitDuration).then(function () {
            var mat = _this.move({ x: 0, y: 0 }, { x: 0, y: 1, });
            _this.sleep(_this.waitDuration).then(function () {
                _this.move({ x: 1, y: 1 }, { x: 2, y: 1, });
                _this.sleep(_this.waitDuration).then(function () {
                    var mat = _this.move({ x: 0, y: 1 }, { x: 1, y: 1, });
                    _this.sleep(_this.waitDuration).then(function () {
                        var mat = _this.move({ x: 2, y: 1 }, { x: 2, y: 0, });
                        _this.sleep(_this.waitDuration).then(function () {
                            var mat = _this.move({ x: 2, y: 0 }, { x: 1, y: 0, });
                            if (fn)
                                fn();
                        });
                    });
                });
            });
        });
    };
    AppComponent.prototype.moveCenterCardToLeftAntiClickWise = function (fn) {
        var _this = this;
        var mat = this.move({ x: 1, y: 1 }, { x: 0, y: 1, });
        this.sleep(this.waitDuration).then(function () {
            var mat = _this.move({ x: 0, y: 0 }, { x: 0, y: 0, });
            _this.sleep(_this.waitDuration).then(function () {
                _this.move({ x: 1, y: 0 }, { x: 2, y: 0, });
                _this.sleep(_this.waitDuration).then(function () {
                    var mat = _this.move({ x: 2, y: 0 }, { x: 2, y: 1, });
                    _this.sleep(_this.waitDuration).then(function () {
                        var mat = _this.move({ x: 2, y: 1 }, { x: 1, y: 1, });
                        _this.sleep(_this.waitDuration).then(function () {
                            var mat = _this.move({ x: 0, y: 1 }, { x: 0, y: 0, });
                            _this.sleep(_this.waitDuration).then(function () {
                                var mat = _this.move({ x: 0, y: 0 }, { x: 1, y: 0, });
                                if (fn)
                                    fn();
                            });
                        });
                    });
                });
            });
        });
    };
    AppComponent.prototype.moveCardRightToLeft = function (fn) {
        var _this = this;
        var mat = this.move({ x: 1, y: 2 }, { x: 0, y: 2, });
        this.sleep(this.waitDuration).then(function () {
            var mat = _this.move({ x: 0, y: 2 }, { x: 0, y: 1, });
            _this.sleep(_this.waitDuration).then(function () {
                _this.move({ x: 0, y: 1 }, { x: 0, y: 0, });
                _this.sleep(_this.waitDuration).then(function () {
                    var mat = _this.move({ x: 1, y: 0 }, { x: 2, y: 0, });
                    _this.sleep(_this.waitDuration).then(function () {
                        var mat = _this.move({ x: 2, y: 0 }, { x: 2, y: 1, });
                        _this.sleep(_this.waitDuration).then(function () {
                            var mat = _this.move({ x: 2, y: 1 }, { x: 2, y: 2, });
                            _this.sleep(_this.waitDuration).then(function () {
                                var mat = _this.move({ x: 2, y: 2 }, { x: 1, y: 2, });
                                _this.sleep(_this.waitDuration).then(function () {
                                    var mat = _this.move({ x: 0, y: 0 }, { x: 1, y: 0, });
                                    if (fn)
                                        fn();
                                });
                            });
                        });
                    });
                });
            });
        });
    };
    AppComponent.prototype.moveCenterToRight = function (fn) {
        var _this = this;
        var mat = this.move({ x: 1, y: 1 }, { x: 2, y: 1, });
        this.sleep(this.waitDuration).then(function () {
            var mat = _this.move({ x: 2, y: 1 }, { x: 2, y: 2, });
            _this.sleep(_this.waitDuration).then(function () {
                _this.move({ x: 1, y: 2 }, { x: 0, y: 2, });
                _this.sleep(_this.waitDuration).then(function () {
                    var mat = _this.move({ x: 2, y: 2 }, { x: 1, y: 2, });
                    _this.sleep(_this.waitDuration).then(function () {
                        var mat = _this.move({ x: 0, y: 2 }, { x: 0, y: 1, });
                        _this.sleep(_this.waitDuration).then(function () {
                            var mat = _this.move({ x: 0, y: 1 }, { x: 1, y: 1, });
                            if (fn)
                                fn();
                        });
                    });
                });
            });
        });
    };
    AppComponent.prototype.startShuffle = function () {
        var _this = this;
        this.sleep(this.waitDuration).then(function () {
            if (_this.isShuffling)
                return;
            _this.isShuffling = true;
            var r = Math.floor(Math.random() * 5);
            var fn = function () {
                var r = Math.floor(Math.random() * 4);
                _this.isShuffling = false;
                if (r != 0)
                    _this.startShuffle();
            };
            switch (r) {
                case 0:
                    _this.moveCenterCardToleft(fn);
                    break;
                case 1:
                    _this.moveLeftCardToRightClockWise(fn);
                    break;
                case 2:
                    _this.moveCenterCardToLeftAntiClickWise(fn);
                    break;
                case 3:
                    _this.moveCardRightToLeft(fn);
                    break;
                case 4:
                    _this.moveCenterToRight(fn);
                    break;
            }
            _this.waitDuration -= 5;
        });
    };
    AppComponent.prototype.move = function (a, b) {
        var mat = this.grid.state;
        console.log(mat);
        var temp = mat[a.x][a.y];
        mat[a.x][a.y] = mat[b.x][b.y];
        mat[b.x][b.y] = temp;
        this.grid.state = mat;
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map