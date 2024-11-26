//function to display content
const displayContent = (content)=>{
    result.value += content;
}
//clear screen
const calcClear = ()=>{
    result.value=""
}
//equals
const calcResult = ()=>{
    result.value = eval(result.value);
}
const calcBack = ()=>{
    result.value = result.value.slice(0,-1);
}