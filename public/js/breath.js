;(function() {
    'use strict'

    //conflict comment
    
    function Breath() {
        this._state = {
            isStart: false,
            currentSetting: 0,
            currentBreath: null,
            currentTimerId: 0,
            currentAnimate: null
        }
        this._settings = SETTING_FOR_BREATH;
    }

    var breathMixin = {
        tumbler: function() {
            /*
                Branch test
                Проверка значения isStart.
                    -> true завершить таймер
                    -> false создать таймер
            */

            if(this._state.isStart) {
                this.stopBreath();
            } else {
                this.startBreath();
            }

            /*
                В момент запуска, меняет значение isStart на противоположное
                Обноление содержимого DOM
            */

            this._state.isStart = !this._state.isStart;
        },
        setTimer: function() {
            /*
                Запустить анимацию
                Запустить таймер со значением currentBreath.time
                И записать значение setTimeout в _state.currentTimerId
                В коллбек функции, запустить startBreath
            */
            this._state.currentAnimate = this.animateBreath();
            this._state.currentTimerId = setTimeout(function() {
                return this.startBreath();
            }.bind(this), this._state.currentBreath.time)
        },
        startBreath: function() {
            /*
                Если это первый запуск, то проинициализировать currentBreath
                Иначе
                    Поменять значение currentBreath на следующее
                    Запустить setTimer
            */

            if(this._state.currentBreath === null) {
                this._state.currentBreath = this._settings[this._state.currentSetting][0];
            } else {
                let currentSetting = this._state.currentSetting;
                let nextIdBreath = (this._state.currentBreath.id + 1) % 3;

                this._state.currentBreath = this._settings[currentSetting][nextIdBreath];
            }

            document.querySelector('.main-status').innerHTML = this._state.currentBreath.name;
            return this.setTimer();
        },
        stopBreath: function() {
            this._state.currentBreath = null;
            this._state.currentAnimate.pause();

            clearTimeout(this._state.currentTimerId)

            document.querySelector('.main-status').innerHTML = 'Начать';

            anime({
                targets: '.circle',
                scale: 1,
                duration: 1000,
                backgroundColor: '#DBDBDB',
                easing: 'linear'
            })
        },
        setSetting: function(i) {
            this._state.currentSetting = i;
        },
        animateBreath: function() {
            switch(this._state.currentBreath.id){
                case 0:
                    return anime({
                        targets: '.circle',
                        scale: [0, 1],
                        backgroundColor: '#DBDBDB',
                        duration: this._state.currentBreath.time,
                        easing: 'linear'
                    })
                case 1:
                    return anime({
                        targets: '.circle',
                        backgroundColor: '#0056FB',
                        duration: this._state.currentBreath.time,
                        easing: 'linear'
                    })
                case 2:
                    return anime({
                        targets: '.circle',
                        scale: 0,
                        backgroundColor: '#DBDBDB',
                        duration: this._state.currentBreath.time,
                        easing: 'linear'
                    })
            }
        }
    }

    for(var key in breathMixin) {
        Breath.prototype[key] = breathMixin[key]
    }

    window.Breath = Breath;
})(window);