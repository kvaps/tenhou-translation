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
    translate: 'Configuration',
  },
  {
    element:   'div.tbc span[style="position:absolute;bottom:2em;"] span.gray',
    orig:      '大会',
    translate: 'Tournament<br>',
  },
  {
    element:   'div.tbc span[style="position:absolute;bottom:2em;"] span.gray',
    orig:      '個室',
    translate: 'Private room<br>',
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
    orig:      '登録が完了しました。IDを紛失しないようにコピーしてください。',
    translate: 'Registration has been completed. Please copy the ID so that it will not be lost.',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"] small.gray',
    orig:      '(※180日以上対戦を行っていないIDは削除されますのでご注意ください)',
    translate: '(Please be aware that IDs not playing against 180 days or more will be deleted)',
  },
  {
    element:   'div#pane0 button[name=sx]',
    orig:      '男',
    translate: 'Man',
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '男',
    translate: 'Man',
  },
  {
    element:   'div#pane0 button[name=sx]',
    orig:      '女',
    translate: 'Woman',
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      '女',
    translate: 'Woman',
  },
  {
    element:   'div#pane0 button[name=clearid]',
    orig:      'ID変更',
    translate: 'Change ID',
  },
  {
    element:   'div#pane0 button[name=cfg]',
    orig:      '設定',
    translate: 'Configuration',
  },
  {
    element:   'div#pane0 button[name=mvlb]',
    orig:      'ロビーの移動',
    translate: 'Move the lobby',
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A',
    orig:      'ランキング戦',
    translate: 'Ranking game'
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A div.desc',
    orig:      '(段位戦、雀荘戦)',
    translate: '(Stage warfare, mahjong fight)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A',
    orig:      'イベント会場１',
    translate: 'Event Venue 1'
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A div.desc',
    orig:      '(公式イベントで使用します)',
    translate: '(Used in official event)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A',
    orig:      'イベント会場２',
    translate: 'Event Venue 2'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A',
    orig:      'その他',
    translate: 'Other'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A div.desc',
    orig:      '(個室番号を指定してロビーを移動します)',
    translate: '(Specify private room number and move lobby)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A',
    orig:      'ロビーの新規作成',
    translate: 'Create a new lobby'
  },
  {
    element:   'div.tbc div.fixed-select.sscl a.A div.desc',
    orig:      '(天鳳サイトの個室作成ページを開きます)',
    translate: '(Opens the private room creation page of Tenzhou site)'
  },

  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      '移動するロビー番号を入力してください。',
    translate: 'Please enter the lobby number to be moved.',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      '例)L8141, C00112233',
    translate: 'Example) L8141, C00112233',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      'または 8141, 00112233',
    translate: 'Or 8141, 00112233',
  },
  
  {
    element:   'div.tbl div#info span[style="font-size:75%;color:#F00"]',
    orig:      'IDが正しくありません',
    translate: 'Incorrect ID',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      '※アプリ版以外で作成したIDも使用可能です。',
    translate: '* IDs created with application version can also be used.',
  },
  {
    element:   'div.tbl div div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      '入力してあるIDをクリアしますがよろしいですか？IDを紛失しないようにコピーしてください。',
    translate: 'I will clear the ID you entered, is it OK? Please copy the ID so that it will not be lost.',
  },
  {
    element:   'div.tbl div div[style="position:relative;font-size:150%;padding:1em 0;"]',
    orig:      'このプレーヤ名で新しいIDを作成しますか？',
    translate: 'Would you like to create a new ID with this player name?',
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
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-64"]',
    orig:      '四般東喰赤速',
    translate: 'Four East Red Rapid'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-64"] div.desc',
    orig:      '(４人打 東風 喰断アリ 赤アリ 速)',
    translate: '(4 people blowing easterly blowing ant ant red speed)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-0"]',
    orig:      '四般東喰赤',
    translate: 'Four East Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-0"] div.desc',
    orig:      '(４人打 東風 喰断アリ 赤アリ)',
    translate: '(4 people blowing easterly blowing ant ant red)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-16"]',
    orig:      '三般東喰赤',
    translate: 'Three East Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-16"] div.desc',
    orig:      '(３人打 東風 喰断アリ 赤アリ)',
    translate: '(3 people blow east wind blowing ant ant red)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-1536"]',
    orig:      '四若東速祝５',
    translate: 'Four Young East Rapid 5'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-1536"] div.desc',
    orig:      '(４人打 東風 喰断アリ 赤アリ 祝儀)',
    translate: '(4 people blowing easterly blowing ant ant red ali)'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-1552"]',
    orig:      '三若東速祝５',
    translate: 'Three Young East Rapid 5'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A[id="#testplay-1552"] div.desc',
    orig:      '(３人打 東風 喰断アリ 赤アリ 祝儀)',
    translate: '(3 people blowing easterly wind Ali red ali)'
  },
  {
    element:   'div.tbc div#paneDisp',
    orig:      '個室',
    translate: 'Room '
  },
  {
    element:   'div.tbc div#paneDisp',
    orig:      '大会',
    translate: 'Tournament '
  },
  {
    element:   'div.tbc div#paneDisp',
    orig:      '牌譜',
    translate: 'Tile score'
  },
  {
    element:   'div.tbc div#paneDisp',
    orig:      '観戦',
    translate: 'Watching'
  },
  
  // Settings page
  {
    element:   'div.tbc div#paneDisp[style="font-size:125%;pointer-events:none;"]',
    orig:      '環境',
    translate: 'Environment'
  },
  {
    element:   'div.tbc div#paneDisp[style="font-size:125%;pointer-events:none;"]',
    orig:      '卓',
    translate: 'Deck'
  },
  {
    element:   'div.tbc div#paneDisp[style="font-size:125%;pointer-events:none;"]',
    orig:      '牌',
    translate: 'Tile'
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
  {
    element:   'div.tbc div#panes label.bth',
    orig:      'SEなし',
    translate: 'No SE'
  },
  {
    element:   'div.tbc div#panes label.bth',
    orig:      '標準の画像',
    translate: 'Standard image'
  },
  {
    element:   'div.tbc div#panes div#cfgUseDefaultIMG0',
    orig:      '画像URL:',
    translate: 'Image URL:'
  },
  {
    element:   'div.tbc div#panes span.bth',
    orig:      '牌背色:',
    translate: 'Tileback color:'
  },
  // Inside lobby
  {
    element:   'div#hdr td.gray',
    orig:      '四麻:',
    translate: '4:'
  },
  {
    element:   'div#hdr td.gray',
    orig:      '三麻:',
    translate: '3:'
  }, 
  {
    element:   'div#hdr',
    orig:      '新人',
    translate: 'Players'
  }, 
  {
    element:   'div#hdr span.gray',
    orig:      '1位',
    translate: '1p:'
  },
  {
    element:   'div#hdr span.gray',
    orig:      '2位',
    translate: '2p:'
  },
  {
    element:   'div#hdr span.gray',
    orig:      '3位',
    translate: '3p:'
  },
  {
    element:   'div#hdr span.gray',
    orig:      '4位',
    translate: '4p:'
  },

  {
    element:   'div#hdr span.nobr span.gray',
    orig:      'ウマ',
    translate: 'time:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '1本場',
    translate: '1 home:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '明槓ドラ',
    translate: 'ming dora:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '後',
    translate: 'rear'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '喰断',
    translate: 'rupture:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '祝儀',
    translate: 'donation:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '東西場',
    translate: 'east-west field:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '和了止め',
    translate: 'winter stop:'
  },
  {
    element:   'div#hdr span.nobr span.gray',
    orig:      '聴牌止め',
    translate: 'listening tapes:'
  },
  {
    element:   'div#panes button[name="join"]',
    orig:      '予約',
    translate: 'Join'
  },
  {
    element:   'div#panes button[name="help"]',
    orig:      'ヘルプ',
    translate: 'Help'
  },
  {
    element:   'div#panes button[name="hairi"]',
    orig:      '牌理',
    translate: 'Sets'
  },
  {
    element:   'div#panes button[name="purchase"]',
    orig:      '料金のお支払い',
    translate: 'Purchase'
  },

  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '四般東喰赤速',
    translate: 'Four East Red Rapid'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '四般南喰赤速',
    translate: 'Four South Red Rapid'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般東喰赤速',
    translate: 'Three East Red Rapid'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般南喰赤',
    translate: 'Three South Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般東喰赤',
    translate: 'Four East Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '四般東喰赤',
    translate: 'Four East Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '四般南喰赤',
    translate: 'Four South Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般南喰赤',
    translate: 'Three South Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般南喰赤',
    translate: 'Three South Red'
  },
  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般南喰赤',
    translate: 'Three South Red'
  },

  {
    element:   'div.tbc div.fixed-select.sscl div.A span.nobr',
    orig:      '三般南喰赤速',
    translate: 'Three South Red Rapid'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '三般南喰赤速',
    translate: 'Three South Red Rapid'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '四般東喰赤速',
    translate: 'Four East Red Rapid'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '四般南喰赤速',
    translate: 'Four South Red Rapid'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '三般東喰赤速',
    translate: 'Three East Red Rapid'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '三般南喰赤速',
    translate: 'Three South Red Rapid'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '四般東喰赤',
    translate: 'Four East Red'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '四般南喰赤',
    translate: 'Four South Red'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '三般南喰赤',
    translate: 'Three South Red'
  },
  {
    element:   'div#panes div.select-wrapper button[name=rule]',
    orig:      '三般東喰赤',
    translate: 'Four East Red'
  },
  // Game
  {
    element:   'div.nosel div.tbl div.tbc.bgb span',
    orig:      '自動理牌',
    translate: 'Automatic tile
'
  },
  {
    element:   'div.nosel div.tbl div.tbc.bgb span',
    orig:      'ツモ切り',
    translate: 'Tossed'
  },
  {
    element:   'div.nosel div.tbl div.tbc.bgb span',
    orig:      '自動和了',
    translate: 'Automatic Waiver'
  },
  {
    element:   'div.nosel div.tbl div.tbc.bgb span',
    orig:      '鳴きなし',
    translate: 'No squealing'
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
}, 200);