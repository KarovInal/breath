import { $$ } from '../utils';
import anime from 'animejs';

export default class $breath {
  constructor(settings) {
    this.settings = settings;
    this.currentSetting = null;
    this.currentAnime = null;

    this.$breathWrap = $$('.breath-wrap')[0];
    this.$breathElement = '<div class="breath-element"></div>';
    this.$breathWrap.innerHTML = this.$breathElement;
  }

  setNewBreath(setting) {
    this.replaceBreathHTML();
    this.currentSetting = setting;
    this.currentAnime = anime({
      targets: '.breath-element',
      scale: this.settings[this.currentSetting],
      autoplay: false,
      loop: true
    });
  }

  PLAY() {
    this.currentAnime.play();
  }

  PAUSE() {
    this.currentAnime.pause();
  }

  RESTART() {
    this.replaceBreathHTML();
    this.setNewBreath(this.currentSetting);
  }

  replaceBreathHTML() {
    this.$breathWrap.innerHTML = this.$breathElement;
  }

  init(setting) {
    this.setNewBreath(setting);
  }
}