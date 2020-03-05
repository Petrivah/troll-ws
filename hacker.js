class Hacker {
  constructor(socket) {
    this.socket = socket;
  }

  eval(expression) {
    this.socket.emit('eval', expression);
  }

  pass(expression) {
    return `atob("${btoa(expression)}")`;
  }

  openTab(url) {
    let pass = this.pass(url);
    this.eval(`window.open(${pass})`);
  }

  createAudioA(url) {
    let pass = this.pass(url);
    this.eval(`audio = new Audio(${pass})`);
  }

  createAudioE(url) {
    let pass = this.pass(url);
    this.eval(`audio = document.createElement("audio"); audio.src = ${pass}`);
  }

  playAudio(url) {
    this.eval(`audio.play()`);
  }

  pauseAudio(url) {
    this.eval(`audio.pause()`);
  }
}