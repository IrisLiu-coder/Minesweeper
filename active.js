var row,column,level=document.getElementById("level");
var map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]],dir=[[1,0],[-1,0],[0,1],[0,-1],[-1,-1],[1,-1],[-1,1],[1,1]];
var number_style=["&ensp;","<font color='#0000C6'>1</font>","<font color='#00A600'>2</font>","<font color='#BF0060'>3</font>","<font color='#930093'>4</font>","<font color='#C6A300'>5</font>","<font color='#EA7500'>6</font>","<font color='#4F4F4F'>7</font>","<font color='#8E8E8E'>8</font>","<font color='#EA0000'>x</font>"];
var print_map="";
level.addEventListener("change",set_mine)
for(var i=0;i<16;i++){
    for(var j=0;j<30;j++){
        map[i].push({quantity:0,hide:0})
    }
}
function cango(i,j){
    if(i<0 || i>= row|| j<0 || j>=column){return false};
    return true;
}
function rangeRam(range, count) {
    var arr=[];
    for(var i=0;i<range-4;i++){arr.push(i+4);}
    arr.sort(function(){return 0.5-Math.random();})
    arr.length=count;
    return arr;
}
function setting(){
    if(level.value=="Start"){location.reload();}
    if(level.value=="Beginner"){
        row=9;column=9;
        var n=rangeRam(row*column,10);
        for(var i=0;i<10;i++){
            if(parseInt(n[i]/column)==1){
                if(parseInt(n[i]%column)==0){n[i]=2;}
                if(parseInt(n[i]%column)==1){n[i]=3;}
            }
            map[parseInt(n[i]/column)][parseInt(n[i]%column)].quantity=9;
        }
    }else if(level.value=="Intermediate"){
        row=16;column=16;
        var n=rangeRam(row*column,40);
        for(var i=0;i<40;i++){
            if(parseInt(n[i]/column)==1){
                if(parseInt(n[i]%column)==0){n[i]=2;}
                if(parseInt(n[i]%column)==1){n[i]=3;}
            }
            map[parseInt(n[i]/column)][parseInt(n[i]%column)].quantity=9;
        }
    }
    else if(level.value=="Expert"){
        row=16;column=30;
        var n=rangeRam(row*column,99);
        for(var i=0;i<99;i++){
            if(parseInt(n[i]/column)==1){
                if(parseInt(n[i]%column)==0){n[i]=2;}
                if(parseInt(n[i]%column)==1){n[i]=3;}
            }
            map[parseInt(n[i]/column)][parseInt(n[i]%column)].quantity=9;
        }
    }
}
function set_mine(){
    setting();
    for(var i=0;i<row;i++){
        for(var j=0;j<column;j++){
            if(map[parseInt(i)][parseInt(j)].quantity!=9){
                for(var k=0 ; k<8 ; k++){
                    var nx=i+dir[k][0];
                    var ny=j+dir[k][1];
                    if(cango(nx,ny)){
                        if(map[parseInt(nx)][parseInt(ny)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
                    }
                }
            } 
            print_map=print_map+number_style[map[parseInt(i)][parseInt(j)].quantity];
        }
        print_map=print_map+"<br>";
    }
    document.getElementById("answer").innerHTML="<div>"+print_map+"</div>";
    print_map="";
    cracking();
    for(var i=0;i<16;i++){for(var j=0;j<30;j++){ map[i][j].quantity=0;}}
}
function cracking(){
    for(var i=0;i<row;i++){
        for(var j=0;j<column;j++){
            print_map=print_map+"?";
        }
        print_map=print_map+"<br>";
    }
    document.getElementById("mine").innerHTML="<div>"+print_map+"</div>";

    print_map="";
}





