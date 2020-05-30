function function_create_help(prog_input){
    let element = document.querySelector('textarea');
    let before_end = element.selectionEnd;//selectionEnd プロパティは、選択範囲の末尾のオフセットを取得する。
    //let value = element.value;

    //let reg_speech = /^speech$/g;
    //let reg_speech = /^speech[ ](.*?)$/;
 if(prog_input.match(/^help$|^Help$/) ){ element.value  = element.value.slice(0,before_end) + "\n"+ `>clear：全消し
>help   ：使い方

【設定】
>esc    :「対話」モードと「エディタ」モードの切り替え
>wrap   ：windows幅で折り返すか切替える
>save   ：save起動

>speech[english]    :話させたいこと
>background color 色名： 背景色変更。「色名」は「red」等
>size 24： 文字サイズ

>昨日 or 今日 or 明日 or 明後日 or 来年
>時間 or 今 or 時刻 or now

>図面電送   or LCS  or cotoha or ハイパー支援 or 根拠ツリー
>G0-12345
>NA00001A
>G5J2TS100

>●→✕→▲
>tree[,]
>tree[,,]
>branch[,,]
>replace[,]
>object[,]
>merge[]

【グラフ】
>bar[10,20,30]
>barh[10,20,30]

【計算可能】
>45+22

>` + element.value.slice(before_end);
}
}