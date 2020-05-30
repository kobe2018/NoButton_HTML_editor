
function return_change_textarea_to_svg(font_size , input_textarea){
    let str_num = return_split_textarea_on_newLine(input_textarea);
    console.log("行数を表示" , str_num.length    );

    let svg_height  =   100 + str_num.length * font_size;//従来は600pt
    
    let str_svg =`<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n`;
    str_svg = str_svg + `<svg width="1600px" height="${svg_height}px" font-family="'MigMix1m4Fig0054','ＭＳ ゴシック'"  viewBox="0px 0px 1600px ${svg_height}px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n`;
    //str_svg = str_svg + `<svg width="800pt" height="${svg_height}pt" font-family="MigMix1M4Fig0054"  viewBox="0 0 800 ${svg_height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n`;

      for(let i =0;i<str_num.length;i++ ){
        console.log(str_num[i] ,"文字幅　",return_string_width(str_num[i])  );//行数を表示
        str_svg =  str_svg +`<text font-size="${font_size}px" fill="black" x="0px" y="${40+font_size*i}px" style="white-space:pre-wrap">`+
     str_num[i] + `</text>\n`
        //str_svg = str_svg +`<line x1="10" y1="${40+font_size*i}" x2="${10+5*return_string_width(str_num[i])}" y2="${40+font_size*i}" style="stroke:rgb(0,0,0);stroke-width:1" />\n`
    }
   
    //str_svg = str_svg +`<line x1="20" y1="10" x2="400" y2="280" style="stroke:rgb(0,0,0);stroke-width:1" />\n`+//斜め線
    str_svg = str_svg + "</svg>"
    return  str_svg; 
}