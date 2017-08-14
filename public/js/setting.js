'use strict'

const SETTING_FOR_BREATH = function() {
    return {
        0: [
            {
                name: 'Вдох',
                time: 5000,
                id: 0
            }, {
                name: 'Задержка',
                time: 2000,
                id: 1
            }, {
                name: 'Выдох',
                time: 4000,
                id: 2
            },
        ], 
        1: [
            {
                name: 'Вдох',
                time: 100,
                id: 0
            }, {
                name: 'Задержка',
                time: 100,
                id: 1
            }, {
                name: 'Выдох',
                time: 100,
                id: 2
            },
        ],
        2: [
            {
                name: 'Вдох',
                time: 6000,
                id: 0
            }, {
                name: 'Задержка',
                time: 2000,
                id: 1
            }, {
                name: 'Выдох',
                time: 6000,
                id: 2
            },
        ]
    }
}();