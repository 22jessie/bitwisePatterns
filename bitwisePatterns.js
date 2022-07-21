var cellsArea=document.querySelector("#cells-area");
var clearBtn=document.querySelector("#clearBtn");
var generatePatternBtn=document.querySelector("#generatePatternBtn");
var n;
var columns;
var rows;

clearBtn.disabled=true;

function generatePatternView(){
    let pattern,span;
    let row,sequence;
    let width,height;
    let option;

    cellsArea=document.querySelector("#cells-area")
    columns=document.querySelector("#columns").value.match("[0-9]+");
    rows=document.querySelector("#rows").value.match("[0-9]+");
    if(columns!=null && rows!=null){
        columns=parseInt(columns);
        rows=parseInt(rows)
        let c=cellsArea.offsetWidth
        let r=cellsArea.offsetHeight
        if(rows>0 && columns>0 && columns<c && rows<r){
            generatePatternBtn.disabled=true;
            width=(c/columns)+"px"
            height=(r/rows)+"px"
            option=getSelectedOption();
            switch(option){
                case "n":           sequence=document.querySelector("#n").value.match("[0-9]+");         break;
                case "sequence":    sequence=document.querySelector("#sequence").value.split(",").map(item => item.trim());    break
                                    sequence=sequence.split(",");
                                    break;
                default: ;
            }
            pattern=generatePattern(option,sequence)
            for(let i=1; i<rows;i++){
                row=document.createElement("div")
                for(let j=0; j<columns; j++){
                    let n=pattern[i][j];
                    span=document.createElement("span");
                    span.setAttribute("class","colorful");
                    if(n==NaN){
                        span.style.backgroundColor="rgb(0,255,0)";
                    }else{
                        span.style.backgroundColor="rgb("+n+","+n+","+n+")";
                    }
                    
                    span.style.width=width;
                    span.style.height=height;
                    row.appendChild(span);
                }
                cellsArea.appendChild(row);
            }
            clearBtn.disabled=false;
        }
    }
}

function getSelectedOption(){
    return document.querySelector('input[name="opt"]:checked').value;
    
}

function generatePattern(opt,sequence){
    let prevRow;                
    let row;
    let rowsArray;
    let cuenta;
    
    rowsArray=new Array();
    cuenta=0;
    for(let i=0; i<rows;i++){
        row=new Array();
        for(let j=0; j<columns; j++){
            switch(opt){
                case "sequence":row.push((i^j)%(sequence[(cuenta++)%sequence.length]));     break;
                case "and":     row.push(((i^j)%(i&j)));                                    break;
                case "or":      row.push((i^j)%(i|j));                                      break;
                case "simple":  row.push(i^j);                                              break;
                case "n":       row.push((i^j)%sequence);                                   break;
                default: ;                                                                  break;
            }
        }
        rowsArray.push(row);
    }
    return rowsArray;
}

function rand(num){
    return Math.floor(Math.random()*num)
}

function nextBtn(){
    let number=document.querySelector("#n");
    clearArea();
    number.value=parseInt(number.value)+1;
    generatePatternView();
    generatePatternBtn.disabled=true;
}

function clearArea(){                
    cellsArea.innerHTML="";
    clearBtn.disabled=true;
    generatePatternBtn.disabled=false;
}
