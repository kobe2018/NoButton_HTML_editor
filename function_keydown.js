function keydown(element){
    element.addEventListener('keydown', function(e){
        let start = element.selectionStart;//selectionStart プロパティは、選択範囲の先頭のオフセットを取得する。
        let before_end = element.selectionEnd;//selectionEnd プロパティは、選択範囲の末尾のオフセットを取得する。
        let value = element.value;
        //console.log(value.slice(start,before_end));
    
        if(e.ctrlKey) if(e.keyCode === 83) save("txt",element.value); //ctrl+s

        if ( e.keyCode === 13) { // Enterキー
            let str_split = element.value.slice(0,before_end).split("\n");
            //console.log("str_split: " + str_split);
            //if(str_split.slice(-1)[0].slice(0, 1)==">"){
            //element.value  = value.slice(0,before_end) + "\n>" +   value.slice(before_end); 
        
            if(str_split.slice(-1)[0].startsWith(">") ){
                console.log(">有→　" + str_split.length +  "行目です: "+ str_split.slice(-1)[0] );
                let prog_input = str_split.slice(-1)[0].slice(1,before_end);//「>以降の文字」
                console.log("入力："+ prog_input);//「>以降の文字」
                if(prog_input === ""){
                    console.log("「>」の後に何もない");
                    element.value  = element.value.slice(0,before_end-1) + "" +   element.value.slice(before_end);
                    console.log("keydonw_selection_position " +before_end );
                    element.setSelectionRange(before_end-1,before_end-1);//テキストの指定位置にカーソルをセットする
                }else{
                    if(prog_input.match(/^version$/) ){
                        element.value  = element.value.slice(0, element.selectionEnd) +`\nDialogue Editor 対話エディタ　对话编辑器　संवाद संपादक\n2020.05.19 R0071.0`
                        +   element.value.slice(element.selectionEnd);
                    }
                    //「>」のなかは一番右側にカーソルを移動して、改行
                    function_company_web_seach(prog_input);
                    function_company_zumen_denso_search(prog_input);
                    function_company_gcode_search(prog_input);
                    function_company_savvy_seach(prog_input);
                    function_company_SLS(prog_input);

                    function_create_block_shape(prog_input);
                    
                    function_create_math_graph_bar(prog_input);
                    function_create_math_graph_plot(prog_input);
                    
                    function_create_math_calc(prog_input);
                    function_create_math_log(prog_input);
                    function_create_math_factor(prog_input);
                    function_create_math_expand(prog_input);
                    
                    function_create_speech(prog_input);    
                    function_create_help(prog_input);

                    function_create_map(prog_input);
                    
                    function_change_background_color(prog_input);

                    if(prog_input.match(/^clear$/) ){element.value ="";}

                    if(prog_input.match(/^save$/) ){save("txt",element.value);}

                    if(prog_input.match(/^save -svg$/) ){
                        //element.style.fontSize =  font_size_str + "px";
                        console.log(element.style.fontSize);
                          let text = return_change_textarea_to_svg("20",element.value);             
                        save("svg",text);
                    }


                    if(prog_input.match(/^一昨日$/) )   output_day(-2);
                    if(prog_input.match(/^昨日$/) )     output_day(-1);
                    if(prog_input.match(/^今日$/) )     output_day(0);
                    if(prog_input.match(/^今週$/) ){for(let i= 0;i<8;i++){output_day(i);}}
                    if(prog_input.match(/^今月$/) ){for(let i= 0;i<32;i++){output_day(i);}}
                    if(prog_input.match(/^明日$/) ){output_day(1);}
                    if(prog_input.match(/^明後日$/) ){output_day(2);}
                    if(prog_input.match(/^来週$/) ){output_day(7);}
                    if(prog_input.match(/^来月$/) ){output_day(30);}

                    if(prog_input.match(/^去年$/) ){output_year(-1);}
                    if(prog_input.match(/^今年$/) ){output_year(0);}
                    if(prog_input.match(/^来年$/) ){output_year(1);}

                    if(prog_input.match(/^時間$|^今$|^時刻$/) ||  prog_input.match(/^now$|^time$/)){
                        let today = new Date();
                        let hh = ( '00' + today.getHours() ).slice(-2);
                        let mm = ( '00' + today.getMinutes() ).slice(-2);
                        let ss = ( '00' + today.getSeconds() ).slice(-2);
                        if(prog_input.match(/^時間$|^今$|^時刻$/) )element.value  = element.value.slice(0,before_end) +"\n" + hh + "時" +  mm  + "分" + ss + "秒"+ element.value.slice(before_end);
                        if(prog_input.match(/^now$|^Now$|^time$|^Time$/) )element.value  = element.value.slice(0,before_end) +"\n" + hh + "h" +  mm  + "m" + ss + "s"+ element.value.slice(before_end);
                    }
                    if(prog_input.match(/^戻る$/) ){
                        //window.history.back(-1);
                        window.open('http://good.azurewebsites.net/','_blank');
                    }
                    if(prog_input.match(/^π$/) ){
                        element.value= element.value.slice(0,before_end) + " =" +Math.PI + element.value.slice(before_end);
                    }
                    if(prog_input.match(/^e$/) ){
                        element.value= element.value.slice(0,before_end) + " =" +Math.E + element.value.slice(before_end);
                    }

                    
                    if(prog_input.match(/^paste$|^Paste$|^貼り付け$|^貼付$|^ペースト$/) ){
                        console.log(navigator.clipboard );

                        if(navigator.clipboard){
                            navigator.clipboard.readText().then(function(text){
                                console.log("text" + text);
                                element.value= element.value.slice(0,before_end) + "\n" +text + element.value.slice(before_end);   
                            });
                        }
                    }

                    if(prog_input.match(/^esc$|^Esc$|^ESC$/) ){
                        esc_flag = !esc_flag;
                        if(esc_flag){
                            //alert("対話モード\n改行毎に「>」が出力されます");
                            document.querySelector('body').style.backgroundColor = 'white';
                            element.value  = element.value.slice(0, element.selectionEnd) + "" +   element.value.slice(element.selectionEnd);
                        }else{
                            //alert("エディタモード\n毎行毎の「>」が出力されません");
                            document.querySelector('body').style.backgroundColor = 'gray';
                        }    
                    }

                    if(prog_input.match(/^wrap$|^Wrap$/) ){
                        if(document.querySelector("textarea").wrap=="off"){
                            document.querySelector("textarea").wrap="soft";
                            document.querySelector("textarea").style.caretColor = "red";
                            document.querySelector("textarea").style.borderColor = 'red';
                            //document.querySelector("textarea").style.borderRight = '10px';
                            document.querySelector("textarea").style.borderRightWidth = '10px';
                            
                        }else if(document.querySelector("textarea").wrap=="soft"){
                            document.querySelector("textarea").wrap="off";
                            document.querySelector("textarea").style.caretColor = "black";
                            document.querySelector("textarea").style.borderColor = 'black';
                            document.querySelector("textarea").style.borderRightWidth = '1px';
                        }
                    }

                    if(prog_input.match(/^mail$|^Mail$|^メール$/) ){
                        window.open("mailto:",'_blank');
                    }

                    if(prog_input.match(/^new$|^New$|^新$/) ){
                        //https://www.it-swarm.dev/ja/javascript/%E5%90%8C%E3%81%98%E3%82%A6%E3%82%A3%E3%83%B3%E3%83%89%E3%82%A6%E3%81%A7%E5%90%8C%E3%81%98%E3%82%BF%E3%83%96%E3%81%A7url%E3%82%92%E9%96%8B%E3%81%8F/941061118/
                        window.open('?','_blank');//
                    }

                    if(prog_input.match(/^print$|^Print$|^印刷$/) ){
                        window.print();//
                    }
                    
                    if(prog_input.match(/^(http:\/\/.*?)$|^(https:\/\/.*?)$/) ){
                        window.open(prog_input,'_blank');
                    }
                    if(prog_input.match(/^c:\\(.*?)$|^C:\\(.*?)$/) ){
                        alert("a");
                        window.open(prog_input,'_blank');
                    }
                    
                    let reg_wiki = /^wiki([ ]|　)(.*?)$/;
                    if(prog_input.match(reg_wiki) ){
                        console.log(prog_input.match(reg_wiki)   );
                        //window.open("https://ja.wikipedia.org/wiki/"+ prog_input.match(/^wiki[ ](.*?)$/)[2] ,'_blank');
                        window.open("https://ja.wikipedia.org/wiki/"+ prog_input.match(reg_wiki)[2] ,'_blank');
                        
                    }
                    
                    function_change_font_size(prog_input);
                
                    let reg_unit_conversion_of_Temperature = /^(\-*[\d.]*)℃$/;
                    let reg_unit_conversion_of_degrees = /^(\-*[\d.]*)°$/;
                    
                    if(prog_input.match(/^[\d]{3}0年代$/)){
                        output_10years_age(prog_input);
                    
                    }else if(prog_input.match(reg_unit_conversion_of_Temperature) ){
                        console.log("arguments.length "+arguments.length);
                        console.log(prog_input.match(reg_unit_conversion_of_Temperature)   );
                        
                        let K = Number(prog_input.match(reg_unit_conversion_of_Temperature)[1] )+273.15;
                        let F = 9*Number(prog_input.match(reg_unit_conversion_of_Temperature)[1]   )/5+32;
                        element.value = element.value.slice(0,before_end-0) +" =" + K + " [K] ="  +F +  " [℉]" + element.value.slice(before_end);
                    
                    }else if(prog_input.match(reg_unit_conversion_of_degrees) ){
                        let Unit_Radians = Number(prog_input.match(reg_unit_conversion_of_degrees)[1] )*Math.PI/180;
                        element.value = element.value.slice(0,before_end-0) +" =" + Unit_Radians + " [rad]" + element.value.slice(before_end);
                    
                    }else if(prog_input.match(/^[\d]|^\-[\d]|^Math\.|^\-Math\.|^\([\d]|^\(\-[\d]|^\-\([\d]|^\(Math\.|^\-\(Math\./) ){
                        //もし**数値情報がある場合は上付き文字に置換する。
                        if(prog_input.match(/\*\*([\d\(\)\+\-]+)/)   ){
                            console.log("２桁_0 ",prog_input.match(/\*\*([\d\(\)\+\-]+)/)  );   
                            let after_str_2digits = prog_input.match(/\*\*([\d\(\)\+\-]+)/).input
                            .replace(/(\*\*)([\d\(\)\+\-]+)/g, function(){
                                let str;
                                console.log("arguments[2] ",arguments[2]);
                                str = arguments[2]
                                .replace(/0/g,"⁰")
                                .replace(/1/g,"¹")
                                .replace(/2/g,"²")
                                .replace(/3/g,"³")
                                .replace(/4/g,"⁴")
                                .replace(/5/g,"⁵")
                                .replace(/6/g,"⁶")
                                .replace(/7/g,"⁷")
                                .replace(/8/g,"⁸")
                                .replace(/9/g,"⁹")
                                .replace(/\+/g,"⁺")
                                .replace(/\-/g,"⁻")
                                .replace(/\(/g,"⁽")
                                .replace(/\)/g,"⁾");
                                return str;    
                            });
                            console.log("２桁_1 ",after_str_2digits);
                            let after_str_1digits = after_str_2digits
                            .replace(/\*\*0/g,"⁰")
                            .replace(/\*\*1/g,"¹")
                            .replace(/\*\*2/g,"²")
                            .replace(/\*\*3/g,"³")
                            .replace(/\*\*4/g,"⁴")
                            .replace(/\*\*5/g,"⁵")
                            .replace(/\*\*6/g,"⁶")
                            .replace(/\*\*7/g,"⁷")
                            .replace(/\*\*8/g,"⁸")
                            .replace(/\*\*9/g,"⁹");
                            console.log("🌟🌟🌟 ",after_str_1digits);
                            element.value = element.value.slice(0,before_end-0) +" = " + after_str_1digits + " = " + return_safeEval(prog_input)  +"" + element.value.slice(before_end);
                        }else if(prog_input.match(/\*\*([\d])/)   ){
                            let after_str_1digits = prog_input.match(/\*\*([\d])/).input
                            //.replace(/(\*\*)([\d])/g, function(){
                            .replace(/\*\*0/g,"⁰")
                            .replace(/\*\*1/g,"¹")
                            .replace(/\*\*2/g,"²")
                            .replace(/\*\*3/g,"³")
                            .replace(/\*\*4/g,"⁴")
                            .replace(/\*\*5/g,"⁵")
                            .replace(/\*\*6/g,"⁶")
                            .replace(/\*\*7/g,"⁷")
                            .replace(/\*\*8/g,"⁸")
                            .replace(/\*\*9/g,"⁹");
                            element.value = element.value.slice(0,before_end-0) +" = " + after_str_1digits + " = " + return_safeEval(prog_input)  +"" + element.value.slice(before_end);
                        }else{
                            element.value = element.value.slice(0,before_end-0) +" = " + return_safeEval(prog_input)  +"" + element.value.slice(before_end);    
                        }
                       
                        //element.value = element.value.slice(0,before_end-0) +" =" + return_safeEval(prog_input)  +"" + element.value.slice(before_end);
                        //element.value = element.value.slice(0,element.selectionEnd) +"\n" + return_safeEval(prog_input)  + element.value.slice(element.selectionEnd);
                        //element.value = element.value.slice(0,before_end-0) +" =" + return_safeEval(prog_input)  +"" + element.value.slice(before_end);
                        
                        //element.setSelectionRange(before_end, before_end);//テキストの指定位置にカーソルをセット
                    }
                    
                    
                }//}else{
            }// if(str_split.slice(-1)[0].startsWith(">") ){
        }//if ( e.keyCode === 13) { // Enterキー
    },false);//element.addEventListener('keydown', function(e) {
}