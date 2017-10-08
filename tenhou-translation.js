var data = [
  {
    element:   'head title',
    orig:      '天鳳 / Web版',
    translate: 'Tenhou / Web version',
  },
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
    translate: 'Settings',
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
  {
    element:   'div#panes div.select-wrapper button[name="testplay"]',
    orig:      'テストプレイ',
    translate: 'Test game'
  },
  {
    element:   'div#hdr span[class="gray"]',
    orig:      '接続:',
    translate: 'Online:'
  }, 
  {
    element:   'div#hdr span[class="gray"]',
    orig:      '待機:',
    translate: 'Wait:'
  },
  {
    element:   'div#hdr span[class="gray"]',
    orig:      '終局:',
    translate: 'Out:'
  },
  {
    element:   'div#hdr span[class="gray"]',
    orig:      '有効期限:',
    translate: 'Expire:'
  },
  {
    element:   'div#hdr td[class="gray"]',
    orig:      '段級位を取得するには',
    translate: 'To acquire the stage grade position'
  },
  {
    element:   'div#hdr td[class="gray"]',
    orig:      '「新規ID」登録が必要です',
    translate: '"New ID" registration is required'
  },
  {
    element:   'div#panes div#lbinfo span[class="gray"]',
    orig:      '●アドレスバーを小さくするには下にスクロールしてからゆっくり上にスクロールします(機種依存あり)',
    translate: '●To make the address bar smaller Scroll down and then slowly scroll upward(depending on the model type)'
  },
  {
    element:   'div#panes div#lbinfo span[class="gray"]',
    orig:      '●OK/パス/ツモ切りは右クリックまたはダブルタップ',
    translate: '●OK/Pass/Tumper cut is right click or double tap'
  },
  {
    element:   'div#panes span[class="gray"]',
    orig:      '※下の«»でタブを移動してください。',
    translate: 'Please select game from dropdown menu'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '四般東喰赤速',
    translate: 'General Eastern Red Rapid'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A div.desc',
    orig:      '(４人打 東風 喰断アリ 赤アリ 速)',
    translate: '(4 people blowing easterly blowing ant ant red speed)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '四般東喰赤',
    translate: 'Four General Eastern Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A div.desc',
    orig:      '(４人打 東風 喰断アリ 赤アリ)',
    translate: '(4 people blowing easterly blowing ant ant red)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '三般東喰赤',
    translate: 'Three east red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A div.desc',
    orig:      '(３人打 東風 喰断アリ 赤アリ)',
    translate: '(3 people blow east wind blowing ant ant red)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '四若東速祝５',
    translate: 'Four if the East speed 5'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A div.desc',
    orig:      '(４人打 東風 喰断アリ 赤アリ 祝儀)',
    translate: '(4 people blowing easterly blowing ant ant red ali)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '三若東速祝５',
    translate: 'Three if the East speed 5'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A div.desc',
    orig:      '(３人打 東風 喰断アリ 赤アリ 祝儀)',
    translate: '(3 people blowing easterly wind Ali red ali)'
  },
  // Settings page
  {
    element:   'div.tbc div#paneDisp',
    orig:      '環境',
    translate: 'Environment'
  },
  {
    element:   'div.tbc div#paneDisp span[class="gray"]',
    orig:      ' / 設定',
    translate: ' / Configuration'
  },
  {
    element:   'div.tbc div#panes button',
    orig:      '画面方向',
    translate: 'Screen direction'
  },
  {
    element:   'div.tbc div#panes span[class="gray"]',
    orig:      '※アプリ版でのみご利用いただけます',
    translate: '* Only available in the application version'
  },
  {
    element:   'div.tbc div#panes label.bth',
    orig:      '配信ID保護',
    translate: 'Delivery ID protection'
  },
  {
    element:   'div.tbc div#panes span[class="gray"]',
    orig:      '※ログイン画面のID入力を非表示にします',
    translate: '* Hide ID input on login screen'
  },
  {
    element:   'div.tbc div#panes button',
    orig:      '入力補助',
    translate: 'Input assistance'
  },
  {
    element:   'div.tbc div#panes span[class="gray"]',
    orig:      '※縦画面のみで表示されます',
    translate: '* It is displayed only in portrait view'
  },
  {
    element:   'div.tbc div#panes button',
    orig:      '牌山表示',
    translate: 'Tayama display'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      'あり',
    translate: 'There'
  },
  {
    element:   'div.tbc div#panes button',
    orig:      'あり',
    translate: 'There'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      'なし',
    translate: 'None'
  },
  {
    element:   'div.tbc div#panes button',
    orig:      'なし',
    translate: 'None'
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