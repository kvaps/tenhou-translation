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
  {
    element:   'div#pane1 button[name=regid]',
    orig:      '新規ID登録',
    translate: 'Register',
  },
  {
    element:   'div#pane1 button[name=idcont]',
    orig:      'IDで続きから',
    translate: 'Login',
  },
  {
    element:   'div#pane1 button[name=cfg]',
    orig:      '設定',
    translate: 'Setting',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      'プレーヤ名を8文字以内で入力してください',
    translate: 'Please enter player name up to 8 characters',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      'プレーヤID(半角19文字)を入力してください',
    translate: 'Please enter Player ID (19 half-width characters)',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      '※アプリ版以外で作成したIDも使用可能です。',
    translate: '* IDs created with application version can also be used.',
  },
]

window.setInterval(function(){
  for (var key in data) {
    element =  data[key].element
    orig =  data[key].orig
    translate = data[key].translate    

    text = $(element + ':contains("' + orig + '")').html();
  try{
    $(element + ':contains(' + orig + ')').html( text.replace(orig, translate) )
  } catch (e) {}
  }
}, 500);