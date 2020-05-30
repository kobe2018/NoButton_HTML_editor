function keyup(element){
    //let esc_flag=true;

    element.addEventListener('keyup', function(e) {
        if(e.keyCode === 27) {//esc
            esc_flag = !esc_flag;
            console.log("esc_flag ",esc_flag );

            if(esc_flag){
                //alert("対話モード\n改行毎に「>」が出力されます");
                document.querySelector('body').style.backgroundColor = 'white';
                //document.getElementById("ID_textarea01").style.caretColor = "black";

                element.value  = element.value.slice(0, element.selectionEnd) + ">" +   element.value.slice(element.selectionEnd);
            }else{
                //alert("エディタモード\n毎行毎の「>」が出力されません");
                document.querySelector('body').style.backgroundColor = 'gray';
                //document.getElementById("ID_textarea01").style.caretColor = 'red';
            }            
        }
    }, false);

    element.addEventListener('keyup', function(e) {
        let start = element.selectionStart;
        let before_end = element.selectionEnd;

        if(esc_flag){
            //if ( e.keyCode === 13) {//enter
            if ( e.key === "Enter") { // Enterキー
            
                    element.value  = element.value.slice(0, element.selectionEnd) + ">" +   element.value.slice(element.selectionEnd);
                    console.log("before_end ",before_end);
                    console.log("after_end ",element.selectionEnd);                    
            }
            if ( e.keyCode === 13) {//enter
                element.setSelectionRange(before_end+1, before_end+1);//テキストの指定位置にカーソルをセット    
            }
        }
    }, false);
}