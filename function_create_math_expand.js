
//https://tech-blog.s-yoshiki.com/2018/12/879/
//指数部と仮数部に分ける
function function_create_math_expand(prog_input){//
    let element = document.querySelector('textarea');
    let end = element.selectionEnd;//selectionEnd プロパティは、選択範囲の末尾のオフセットを取得する。
//**************************************************************   
    //const reg_math_factor = /^factor\[(\d+)\]$/;//ああgをつけないんだった。
    //const reg_math_expand_x_2 = /^(expand)\[\(x\+\d+\)²$/;
    //const reg_math_expand_x_2 = /^\((\d*)([a-z]*)([a-z])([\+\-])(\d+)*([a-z]*)\)([²³])$/;
    //const reg_math_expand_x_2 = /^\((\d*)([a-z]*)([a-z])([\+\-])(\d+)*([a-z]*)\)([(\^2)]*[²³]*[(\*\*2)]*)$/;
    const reg_math_expand_x_2 = /^\((\d*)([a-z]*)([a-z])([\+\-])(\d+)*([a-z]*)\)([(\^2)]*[(\^3)]*[²³]*[(\*\*2)]*[(\*\*3)]*)$/;

    
    
//(x+1)² = x²+2x+1
//(ax+b)² = a²x²+2abx+b²
//(x+1)³ = x³+3x
    if(prog_input.match(reg_math_expand_x_2)  ){
        console.log("reg_math_expand_x_2: " + prog_input.match(reg_math_expand_x_2)　);
        //let str ="";
        let str= prog_input.match(reg_math_expand_x_2);
        let output,output_test;

        /*
        for(let i=1;i<9;i++){
            output_test = output_test + "\n" + (i + " "+ prog_input.match(reg_math_expand_x_2)[i]);
        }
        alert(output_test);
        */

        if(str[7] == "²" || str[7] == "^2"|| str[7] == "**2"){//2乗ならば
            let a,a_sq,x,x_sq,pm,b,b_sq;
            let n1,n2,n2_1,n2_2,n3;
        
            if(str[1] == ""){n1="";n2_1=1;}else{n1 = str[1]**2;n2_1=str[1];}
            if(str[2] == ""){a="";a_sq="";}else{a = str[2];a_sq="²";}
            if(str[3] == ""){x="";x_sq="";}else{x = str[3];x_sq="²";}
            pm = str[4];
            if(str[5] == ""|| str[5] == undefined){n3="";n2_2=1;}else{n3 = str[5]**2;n2_2=str[5];}
            if(str[6] == ""){b="";b_sq="";}else{b = str[6];b_sq="²";}
            n2 = 2*n2_1*n2_2;

            output= n1+a+a_sq+x+x_sq+pm+n2+a+x+b+"+"+n3+b+b_sq;

        }else if(str[7] == "³" || str[7] == "^3"|| str[7] == "**3"){//3乗ならば
            let a,a_sq,x,x_sq,pm,b,b_sq;
            let a_cb,x_cb,b_cb;
            let n1,n2,n2_1,n2_2,n3,n3_1,n3_2,n4;

            if(str[1] == ""|| str[1] == undefined){n1="";n2_1=1;n3_1=1;}else{n1 = str[1]**3;n2_1=str[1]**2;n3_1=str[1];}
            if(str[2] == ""|| str[2] == undefined){a="";a_sq="";a_cb="";}else{a = str[2];a_sq="²";a_cb="³";}
            if(str[3] == ""|| str[3] == undefined){x="";x_sq="";x_cb="";}else{x = str[3];x_sq="²";x_cb="³";}
            pm = str[4];
            if(str[5] == ""|| str[5] == undefined){n2_2=1;n3_2=1;n4="";}else{n2_2=str[5];n3_2 = str[5]**2;n4=str[5]**3}
            if(str[6] == ""|| str[6] == undefined){b="";b_sq="";b_cb="";}else{b = str[6];b_sq="²";b_cb="³";}

            n2 = 3*n2_1*n2_2;
            n3 = 3*n3_1*n3_2;

            output= n1+a+a_cb+x+x_cb + pm + n2+a+a_sq+b+x+x_sq +"+"+ n3+a+b+b_sq+x + pm+n4+b+b_cb;
        }

/*
        console.log("length " + Object.keys(pf(num)).length );                
        console.log(JSON.stringify(pf(num)) );

        for(let i=0; i <Object.keys(pf(num)).length;i++  ){
            let obj_valu  = Object.values(pf(num))[i];
            console.log("obj_valu " + obj_valu);
            str = str + Object.keys(pf(num))[i] + replace_number_nomal_to_smallup(obj_valu);

            if(i+1 != Object.keys(pf(num)).length   ){
                str = str + "×";
            }
        }
*/
        //element.value =element.value.slice(0, end) + "\n"+ num + " = " + str + " = "+ JSON.stringify(pf(num)) +"" + element.value.slice(end);
        element.value =element.value.slice(0, end) +  " = " + output  + element.value.slice(end);
    }//if(prog_input.match(reg_math_expand_x_2) ){
}

function replace_number_nomal_to_smallup(num){
    console.log(num);
    let result = String(num).replace(/0/g,"⁰")
        .replace(/1/g,"¹")
        .replace(/2/g,"²")
        .replace(/3/g,"³")
        .replace(/4/g,"⁴")
        .replace(/5/g,"⁵")
        .replace(/6/g,"⁶")
        .replace(/7/g,"⁷")
        .replace(/8/g,"⁸")
        .replace(/9/g,"⁹");
    return result;
} 