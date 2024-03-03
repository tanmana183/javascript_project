var index=0
var colors=['red','green','blue','pink','yellow','purple']
function changeme(){
    document.getElementsByTagName('body')[0].style.background=colors[index++]

    if (index>colors.length-1){
        index=0
    }
}