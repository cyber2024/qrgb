module.exports = function(){
    function generate(text, options, size){
        let buff = new ArrayBuffer(size);
        console.log(buff);
    }

    return generate;
}