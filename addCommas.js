function addCommas(num) {
    numStr = `${num}`;
    console.log(numStr)
    let i = numStr.includes(".")?numStr.indexOf("."):numStr.length;
    let val = `${numStr.slice(i-3,numStr.length)}`;
    i-=3;
    while(i>0){
        if(i<3){
            val=`${numStr.slice(i-i,i)},${val}`
            i=-1;
        }else{
        val=`${numStr.slice(i-3,i)},${val}`;
        i-=3;
        }
    }
    return val;
}

module.exports = addCommas;