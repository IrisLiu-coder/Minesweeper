var row,column,level=document.getElementById("level");
var map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
var print_map="";
level.addEventListener("change",set_mine)
for(var i=0;i<16;i++){
    for(var j=0;j<30;j++){
        map[i].push({quantity:0,hide:0})
    }
}
function rangeRam(range, count) {
    var arr=[];
    for(var i=0;i<range;i++){//一個從0到100的陣列
        arr.push(i);
    }
    arr.sort(function(){//隨機打亂這個陣列
        return 0.5-Math.random();
    })
    arr.length=count;//改寫長度
    console.log(arr);
    return arr;
}
function set_mine(){
    if(level.value=="Beginner"){
        row=9;column=9;
        var n=rangeRam(row*column,10);
        for(var i=0;i<10;i++){
            map[parseInt(n[i]/column)][parseInt(n[i]%row)].quantity=9;
        }
    }else if(level.value=="Intermediate"){
        row=16;column=16;
        var n=rangeRam(row*column,40);
        for(var i=0;i<40;i++){
            map[parseInt(n[i]/column)][parseInt(n[i]%row)].quantity=9;
        }
    }
    else if(level.value=="Expert"){
        row=16;column=30;
        var n=rangeRam(row*column,99);
        for(var i=0;i<99;i++){
            map[parseInt(n[i]/column)][parseInt(n[i]%column)].quantity=9;
        }
    }
    for(var i=0;i<column;i++){
        for(var j=0;j<row;j++){
            print_map=print_map+" ";
        }
        print_map=print_map+"<br>";
    }
    document.getElementById("mine").innerHTML="<div>"+print_map+"</div>";

    print_map="";
    console.log("===");    

    for(var i=0;i<row;i++){
        for(var j=0;j<column;j++){console.log(map[parseInt(i)][parseInt(j)].quantity)
           
            if(map[parseInt(i)][parseInt(j)].quantity==9){print_map=print_map+"<font color=#EA0000>b</font>";
            }else{
                //print_map=print_map+`${map[i][j].quantity}`;
                print_map=print_map+"0";
            }
        }
        print_map=print_map+"<br>";
    }
    document.getElementById("answer").innerHTML="<div>"+print_map+"</div>";
    print_map="";

    for(var i=0;i<16;i++){for(var j=0;j<30;j++){ map[i][j].quantity=0;}}
    
}



