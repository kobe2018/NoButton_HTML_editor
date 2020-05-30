function save(save_type,text){
    let blob = new Blob([text], {type: "text/plain"}); // バイナリデータを作ります。
    let today = new Date();
    let month =  today.getMonth()  +1;
    let month2 =  ('00' + month ).slice( -2 );
    let dd =  ('00' + today.getDate()).slice(-2);
    let hh = ( '00' + today.getHours() ).slice(-2);
    let mm = ( '00' + today.getMinutes() ).slice(-2);
    let ss = ( '00' + today.getSeconds() ).slice(-2);

// aタグを利用してイベントを発火させます
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = today.getFullYear() +"_"+ month2 + "_"+ dd +"_"+ hh + "h" +  mm  + "m" + ss + "s"+ '_FileName.'+save_type;
    a.click();
}
/*
function save_svg(text){
    let blob = new Blob([text], {type: "text/plain"}); // バイナリデータを作ります。
    let today = new Date();
    let month =  today.getMonth()  +1;
    let month2 =  ('00' + month ).slice( -2 );
    let dd =  ('00' + today.getDate()).slice(-2);
    let hh = ( '00' + today.getHours() ).slice(-2);
    let mm = ( '00' + today.getMinutes() ).slice(-2);
    let ss = ( '00' + today.getSeconds() ).slice(-2);

// aタグを利用してイベントを発火させます
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    a.download = today.getFullYear() +"_"+ month2 + "_"+ dd +"_"+ hh + "h" +  mm  + "m" + ss + "s"+ '_FileName.svg';
    a.click();
}
*/
function function_change_background_color(prog_input){
    let element = document.querySelector('textarea');
    let reg_background_color = /^background[ ]color[ ](.*?)$/;//ああgをつけないんだった。
    if(prog_input.match(reg_background_color) ){
        let type_color = prog_input.match(reg_background_color)[1];
        element.style.backgroundColor =  type_color;
    }
}

function function_change_font_size(prog_input){
    let element = document.querySelector('textarea');
    let reg_font_size = /^size[ ](.*?)$/;//ああgをつけないんだった。
    if(prog_input.match(reg_font_size) ){
        let font_size_str = prog_input.match(reg_font_size)[1];
        element.style.fontSize =  font_size_str + "px";
    }
}


function scroll_most_bottom(){
    let element = document.querySelector("textarea");
    console.log("st " + element.scrollTop);
    console.log("sh " + element.scrollHeight);
    console.log("ch " + element.clientHeight);
    //ページの最下部に移動する場合は以下で可能
    let bottom = element.scrollHeight - element.clientHeight;
    console.log("bottom " + bottom);
    element.scrollTop  = bottom; 
}

