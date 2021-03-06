var data = [
  {
    element:   'head title',
    orig:      '天鳳 / Web版',
    translate: 'Tenhou / Web version',
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
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"] small.gray',
    orig:      '再接続しますか？',
    translate: 'Do you want to reconnect?',
  },
  {
    element:   'div.tbl div[style="position:relative;font-size:150%;padding:1em 0;"] small.gray',
    orig:      'Wi-Fi(無線LAN)やbluetoothは電子レンジや近隣利用者の影響を受け接続が切れる場合があります',
    translate: 'Wi-Fi (wireless LAN) and bluetooth may be disconnected due to the influence of microwave ovens and neighboring users',
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
    translate: 'Automatic tile'
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
  {
    element:   'div.nosel div.tbl div.tbc.bgb',
    orig:      '終了',
    translate: 'Exit'
  },
// http://arcturus.su/tenhou/glossary.html
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      ' 鳴き',
    translate: 'Call'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      'チー',
    translate: 'Chii'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      'ポン',
    translate: 'Pon'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      '抜き',
    translate: 'Pei'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      'カン',
    translate: 'Kan'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      '暗カン',
    translate: 'Closed Kan'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      '加カン',
    translate: 'Open Kan'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      '加カン',
    translate: 'Extend Kan'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      'ロン',
    translate: 'Ron'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      'ツモ',
    translate: 'Tsumo'
  },
  {
    element:   'div.nosel div.tbl div.tbc.ts0.bblink',
    orig:      'リーチ',
    translate: 'Riichi'
  },
  // Win screen
  {
    element:   'div.nosel.tbl dib.tbc div#total span.gray',
    orig:      '滿貫',
    translate: 'Mangan'
  },
  {
    element:   'div.nosel.tbl dib.tbc div#total span.gray',
    orig:      '跳滿',
    translate: 'Haneman'
  },
  {
    element:   'div.nosel.tbl dib.tbc div#total span.gray',
    orig:      '倍滿',
    translate: 'Baiman'
  },
  {
    element:   'div.nosel.tbl dib.tbc div#total span.gray',
    orig:      '三倍滿',
    translate: 'Sanbaiman'
  },
  {
    element:   'div.nosel.tbl dib.tbc div#total span.gray',
    orig:      '累計役滿',
    translate: 'Yakuman'
  },
  {
    element:   'div.nosel.tbl div.tbc div#total span.gray',
    orig:      '符',
    translate: 'mp'
  },
  {
    element:   'div.nosel.tbl div.tbc div#total span.gray',
    orig:      '飜',
    translate: 'han'
  },
  {
    element:   'div.nosel.tbl div.tbc div#total span.gray',
    orig:      '点',
    translate: 'points'
  },
  {
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"] span.gray',
    orig:      '飜',
    translate: 'han'
  },
  // Win sets
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '門前清自摸和',
    translate: 'Menzen Tsumo',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '立直',
    translate: 'Riichi',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '一発',
    translate: 'Ippatsu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '槍槓',
    translate: 'Chan Kan',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '嶺上開花',
    translate: 'Rinjan',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '海底摸月',
    translate: 'Haidei Tsumo',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '河底撈魚',
    translate: 'Haidei ron',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '平和',
    translate: 'Pinfu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '断幺九',
    translate: 'Tanyao chuu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '一盃口',
    translate: 'Iipeikou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '自風 東',
    translate: 'Fanpai (east seat)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '自風 南',
    translate: 'Fanpai (south seat)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '自風 西',
    translate: 'Fanpai (west seat)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '自風 北',
    translate: 'Fanpai (north seat)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '場風 東',
    translate: 'Fanpai (east round)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '場風 南',
    translate: 'Fanpai (south round)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '場風 西',
    translate: 'Fanpai (west round)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '場風 北',
    translate: 'Fanpai (north round)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '役牌 白',
    translate: 'Yakuhai (haku)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '役牌 發',
    translate: 'Yakuhai (hatsu)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '役牌 中',
    translate: 'Yakuhai (chun)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '両立直',
    translate: 'Double Riichi',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '七対子',
    translate: 'Chiitoitsu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '混全帯幺九',
    translate: 'Chanta',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '一気通貫',
    translate: 'Itsuu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '三色同順',
    translate: 'Sanshoku',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '三色同刻',
    translate: 'Sanshokudoupon',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '三槓子',
    translate: 'Sankantsu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '對對和',
    translate: 'Toitoi',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '三暗刻',
    translate: 'Sanankou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '小三元',
    translate: 'Shou sangen',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '混老頭',
    translate: 'Honroutou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '二盃口',
    translate: 'Ryanpeikou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '純全帯幺九',
    translate: 'Junchan',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '混一色',
    translate: 'Honitsu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '清一色',
    translate: 'Chinitsu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '人和',
    translate: 'Renhou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '天和',
    translate: 'Tenhou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '地和',
    translate: 'Chiihou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '大三元',
    translate: 'Dai sangen',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '四暗刻',
    translate: 'Suu ankou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '四暗刻単騎',
    translate: 'Suu ankou (pair wait)',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '字一色',
    translate: 'Tsu iisou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '緑一色',
    translate: 'Ryuu iisou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '清老頭',
    translate: 'Chinroutou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '九蓮宝燈',
    translate: 'Chuuren poto',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '純正九蓮宝燈',
    translate: 'Pure chuuren poto',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '国士無双',
    translate: 'Kokushi musou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '国士無双１３面',
    translate: '13-wait Kokushi musou',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '小四喜',
    translate: 'Shou suushi',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '大四喜',
    translate: 'Dai suushi',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '四槓子',
    translate: 'Suu kantsu',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '裏ドラ',
    translate: 'Ura dora',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      '赤ドラ',
    translate: 'Red five',
},
{
    element:   'div.tbc td[width="50%"][align="center"][valign="top"] td[align="left"]',
    orig:      'ドラ',
    translate: 'Dora',
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
