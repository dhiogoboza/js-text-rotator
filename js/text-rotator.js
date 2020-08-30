"use strict";

let TextRotator = class {
    constructor(element, options) {
        this.settings = {
            animation: "bounceIn",
            separator: ",",
            speed: 2000,
            complete: undefined
        };

        this.element = element;

        for (var key in options) {
            if (options.hasOwnProperty(key)) {
                this.settings[key] = options[key];
            }
        }       

        this.init();
    }

    init() {
        this.element.classList.add("textrotator");

        let splitted = this.element.innerHTML.split(this.settings.separator);
        this.phrases = [];
        for (let i = 0; i < splitted.length; i++) {
            this.phrases.push(splitted[i].trim());
        }

        this.index = -1;
        this.animate();
    }

    animate() {
        this.index = ++this.index % this.phrases.length;
        this.element.innerHTML = "<span class=\"animated " + this.settings.animation + "\">" + this.phrases[this.index] + "</span>";

        if (this.settings.complete != undefined) {
            this.settings.complete.call(this);
        }
    }

    start() {
        var that = this;
        this._interval = setInterval(function () {
            that.animate();
        }, this.settings.speed);
    }

    stop() {
        this._interval = clearInterval(this._interval);
    }
}
