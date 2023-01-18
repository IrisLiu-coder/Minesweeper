var row,column,level=document.getElementById("level");
var map=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

var print_map="";
level.addEventListener("change",set_mine)
for(var i=0;i<16;i++){
    for(var j=0;j<30;j++){
        map[i].push({quantity:0,hide:0})
    }
}
console.log( map[10][10].quantity);
function rangeRam(range, count) {
    const ramArr = [];
    const result = [];
    for (let i = range[0]; i <= range[1]; i++) {
        ramArr.push(i);
    }
    for (; count > 0; count--) {
        const ram = Math.floor(Math.random() * (ramArr.length - 1));
        result.push(ramArr[ram]);
        ramArr[ram] = ramArr[ramArr.length - 1];
        ramArr.pop();
    }
    return result;
};
function set_mine(){
    if(level.value=="Beginner"){
        row=9;column=9;
        var n=rangeRam([1,row*column],10);
        for(var i=0;i<10;i++){
            map[parseInt(n[i]/column)][parseInt(n[i]%row)].quantity=9;
        }
    }else if(level.value=="Intermediate"){
        row=16;column=16;
        var n=rangeRam([1,row*column],40);
        for(var i=0;i<40;i++){
            console.log(parseInt(n[i]/column),parseInt(n[i]%row));
            map[parseInt(n[i]/column)][parseInt(n[i]%row)].quantity=9;
            
        }
    }
    else if(level.value=="Expert"){
        row=30;column=16;
        var n=rangeRam([1,row*column],99);
        for(var i=0;i<99;i++){
            map[parseInt(n[i]/column)][parseInt(n[i]%row)].quantity=9;
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
    for(var i=0;i<row;i++){
        for(var j=0;j<column;j++){
            if(map[parseInt(i-1)][parseInt(j)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
            if(map[parseInt(i)][parseInt(j-1)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}                
            if(map[parseInt(i+1)][parseInt(j-1)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
            if(map[parseInt(i-1)][parseInt(j-1)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
            if(map[parseInt(i+1)][parseInt(j)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
            if(map[parseInt(i)][parseInt(j+1)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
            if(map[parseInt(i+1)][parseInt(j+1)].quantity==9){map[parseInt(i)][parseInt(j)].quantity++;}
            print_map=print_map+`${map[i][j].quantity}`;
        }
        print_map=print_map+"<br>";
    }
    document.getElementById("answer").innerHTML="<div>"+print_map+"</div>";
    print_map="";
}



