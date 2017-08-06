'use strict'

;(function() {
    function Breath() {
        this._state = {
            isStart: false,
            currentSetting: 0,
            currentBreath: null,
            currentTimerId: 0
        }
        this._settings = SETTING_FOR_BREATH;
    }

    var breathMixin = {
        tubler: function() {
            /*
                Проверка значения isStart.
                    true то завершить таймер
                    false создать таймер
            */
            if(this._state.isStart) {
                clearTimeout(this._state.currentTimerId)
            } else {
                this.setBreath();
            }

            /*
                В момент запуска, меняет значение isStart на противоположное
                Обноление содержимого DOM
            */
            this._state.isStart = !this._state.isStart;
            document.querySelector('#start').innerHTML = this._state.isStart ? 'Стоп' : 'Старт'
        },
        setTimer: function() {
            /*
                Запустить таймер со значением currentBreath.time
                И записать значение setTimeout в _state.currentTimerId
                В коллбек функции, запустить setBreath
            */
            console.log(this._state.currentBreath.name);
            this._state.currentTimerId = setTimeout(function() {
                return this.setBreath();
            }.bind(this), this._state.currentBreath.time)
        },
        setBreath: function() {
            /*
                Если это первый запуск, то проинициализировать currentBreath
                Иначе
                    Поменять значение currentBreath на следующее
                    Запустить setTimerw
            */

            if(this._state.currentBreath === null) {
                this._state.currentBreath = this._settings[this._state.currentSetting][0];
                return this.setTimer();
            }
            
            let currentSetting = this._state.currentSetting;
            let nextIdBreath = (this._state.currentBreath.id + 1) % 3;

            this._state.currentBreath = this._settings[currentSetting][nextIdBreath];
            return this.setTimer();
        }
    }

    for(var key in breathMixin) {
        Breath.prototype[key] = breathMixin[key]
    }

    window.Breath = Breath;
})(window);