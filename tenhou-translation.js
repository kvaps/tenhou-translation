
var data = [
  {
    element:   'a[href="http://tenhou.net/3/tr/"]',
    orig:      '【新機能】天鳳トレーニングβ(アプリ版Web版のみ)',
    translate: '[New] Tianfeng Training β (Application version only for Web version)',
  },
  {
    element:   '#_tenhou_hid_d a',
    orig:      'Flash版で開く',
    translate: 'Flash version',
  },
  {
    element:   '#_tenhou_hid_d a',
    orig:      'Web版で開く',
    translate: 'Web version',
  },
  {
    element:   '#_tenhou_hid_d  a',
    orig:      'アプリ版で開く',
    translate: 'Application',
  },
  {
    element:   'div#pane1 button[name=ok]',
    orig:      'お試しゲストログイン',
    translate: 'Guest Login',
  },
]

window.setInterval(function(){
  for (var key in data) {
    orig =  data[key].orig
    translate = data[key].translate    
    text = $(data[key].element + ':contains(' + orig + ')').text()
    $(data[key].element + ':contains(' + orig + ')').text( text.replace(orig, translate) )
  }
}, 500);