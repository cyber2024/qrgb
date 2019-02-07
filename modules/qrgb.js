module.exports = function(){
    function generate(text){
        return new Promise((resolve,reject)=>{
            // const none = '00000000';
            let buff = new Array(text.length);
            for(let i = 0; i < text.length; i++){
                let tmp = text.charCodeAt(i).toString(2);
                buff[i] = tmp;//none.substring(tmp.length) + tmp;
            }
            resolve(buff);
        })
    }
    return generate;
}