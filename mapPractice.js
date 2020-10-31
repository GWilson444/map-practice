function cleanNames(arr){
    const newArr = arr.map(function(str) {
        return str.trim();
    });
    return newArr;
}