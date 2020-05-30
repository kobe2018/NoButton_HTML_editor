function function_create_block_shape(prog_input){
    let element = document.querySelector('textarea');
    let end = element.selectionEnd;//selectionEnd プロパティは、選択範囲の末尾のオフセットを取得する。
    let value = element.value;
    
    let reg_branch = /^branch\[(.*?),(.*?),(.*?)\]$/;//ああそうだなぜかgがいらないんだった。
    if(prog_input.match(reg_branch) ){

        element.setSelectionRange(end-1,end-1);//テキストの指定位置にカーソルをセットする
        
        element.value =value.slice(0, end) + "\n"+
        "┌─────┐　　　　　　┌─────┐\n"+
        "│" +prog_input.match(reg_branch)[1] + " ├────┬→┤" + prog_input.match(reg_branch)[2] +" │\n" +
        "└─────┘　　　　│　└─────┘\n"+
        ("　　　　　　　　　　　│　　　　　　\n").repeat(3)+
        "　　　　　　　　　　　│　┌─────┐\n" +
        "　　　　　　　　　　　└→┤" + prog_input.match(reg_branch)[3] +" │\n" +
        "　　　　　　　　　　　　　└─────┘\n>"+
        value.slice(end);
        //element.setSelectionRange(end, end);
        scroll_most_bottom();
    }

    let reg_merge = /^merge\[(.*?)\]$/;//ああそうだなぜかgがいらないんだった。
    if(prog_input.match(reg_merge) ){
        element.value =value.slice(0, end) + "\n"+
        "　　　　　　┌─────┐\n"+
        "───┬──┤" +('         ' + prog_input.match(reg_merge)[1]).slice(-10) + "│\n" +
        "　　　│　　└─────┘\n"+
        "　　　│\n" +
        "　　　│\n" +
        "　　　│\n" +
        "　　　│\n" +
        "───┘\n" +
        "\n"+
        value.slice(end);
        element.setSelectionRange(end, end);
        scroll_most_bottom();
    }
//var ret = ( '000' + num ).slice( -3 );

    let reg_tree3 = /^tree\[(.*?),(.*?),(.*?)\]$/;
    let reg_tree2 = /^tree\[(.*?),(.*?)\]$/;
    let reg_tree1 = /^tree\[(.*?)\]$/;

    if(prog_input.match(reg_tree3) ){
        element.value =value.slice(0, end) + "\n"+
        "┌─────┐　　　　　　┌─────┐　　　　　　┌─────┐\n"+
        "│" +prog_input.match(reg_tree3)[1] + " ├─────→┤" +  prog_input.match(reg_tree3)[2] +" ├─────→┤" + prog_input.match(reg_tree3)[3] +" │\n" +
        "└─────┘　　　　　　└─────┘　　　　　　└─────┘\n>"+
        value.slice(end);
        element.setSelectionRange(end, end);
    }else if(prog_input.match(reg_tree2) ){          
        element.value =value.slice(0, end) + "\n"+
        "┌─────┐　　　　　　┌─────┐\n"+
        "│" +prog_input.match(reg_tree2)[1] + " ├─────→┤" +  prog_input.match(reg_tree2)[2] +" │\n" +
        "└─────┘　　　　　　└─────┘\n>"+
        value.slice(end);
        element.setSelectionRange(end, end);
    }else if(prog_input.match(reg_tree1) ){
        element.value =value.slice(0, end) + "\n"+
        "　　　　　　┌─────┐\n"+
        "─────→┤" +  prog_input.match(reg_tree1)[1] + " │\n" +
        "　　　　　　└─────┘\n>"+
        value.slice(end);
        element.setSelectionRange(end, end);
    }

    let reg_tree_arrows = /(.*?)→(.*?)→(.*)/;
    
    if(prog_input.match(reg_tree_arrows) ){
        element.value =value.slice(0, end) + "\n"+
        "┌─────┐　　　　　　┌─────┐　　　　　　┌─────┐\n"+
        "│" +prog_input.match(reg_tree_arrows)[1] + " ├─────→┤" +  prog_input.match(reg_tree_arrows)[2] +" ├─────→┤" + prog_input.match(reg_tree_arrows)[3] +" │\n" +
        "└─────┘　　　　　　└─────┘　　　　　　└─────┘\n>"+
        value.slice(end);
        element.setSelectionRange(end, end);
        scroll_most_bottom();
    }

    let reg_replace = /^replace\[(.*?),(.*?)\]$/;
    if(prog_input.match(reg_replace)){
        let before_str = prog_input.match(reg_replace)[1];
        var regExp_before_str = new RegExp( before_str, "g" ) ;
        let after_str =  prog_input.match(reg_replace)[2];
        element.value = element.value.replace(regExp_before_str,after_str);
        //element.value =value.slice(0, end).replace(regExp_before_str,after_str);
    }

    let reg_object = /^object\[(.*?),(.*?)\]$/;
    if(prog_input.match(reg_object) ){
        console.log(prog_input.match(reg_object) );
        element.value =value.slice(0, end) + `
┌─────┐
│${prog_input.match(reg_object)[1]} │
├─────┤
│${prog_input.match(reg_object)[2]} │
└─────┘         
>`+value.slice(end);
        element.setSelectionRange(end, end);
    }

}