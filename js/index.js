var rgbled;
var ledR, ledG, ledB;


function colour_rgb(r, g, b) {
  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}


boardReady({board: 'Smart', device: '10yRDvjQ', transport: 'mqtt'}, function (board) {
  board.samplingInterval = 50;
  rgbled = getRGBLedCathode(board, 15, 12, 13);
  
  /* 已在 HTML 中指定，可省略
  document.getElementById('demo-area-06-input').setAttribute('min', 0);
  document.getElementById('demo-area-06-input').setAttribute('max', 100);
  document.getElementById('demo-area-06-input').setAttribute('step', 1);
  document.getElementById('demo-area-06-input').setAttribute('value', 50);
  */
  
  // R
  document.getElementById('barR').oninput = function (_value) {
    _value = this.value;
    ledR = _value;
    document.getElementById('valueR').innerHTML = _value;
    rgbled.setColor(colour_rgb(ledR, ledG, ledB));
  };
  
  // G
  document.getElementById('barG').oninput = function (_value) {
    _value = this.value;
    ledG = _value;
    document.getElementById('valueG').innerHTML = _value;
    rgbled.setColor(colour_rgb(ledR, ledG, ledB));
  };
  
  // B
  document.getElementById('barB').oninput = function (_value) {
    _value = this.value;    
    ledB = _value;
    document.getElementById('valueB').innerHTML = _value;
    rgbled.setColor(colour_rgb(ledR, ledG, ledB));
  };
  
});