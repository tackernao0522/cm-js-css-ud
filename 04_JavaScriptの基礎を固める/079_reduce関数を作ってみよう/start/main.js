const str = 'animation';
const strArry = str.split('');

function tag(accu, curr) {
    console.log(accu, curr); // a n i m a t i o n = currのみ渡ってきている
    return `${accu}<${curr}>`;
}


function reduce(arry, callback, defaultValue) {
    let accu = defaultValue;
    for (let i = 0; i < arry.length; i++) {
        let curr = arry[i];
        // console.log(curr) // a n i m a t i o n
        accu = callback(accu, curr); // callbackのtagが呼ばれている 変数accuに return `${accu}<${curr}>`;が返されている
    }

    return accu;  //  reduce(strArry, tag, "");に返す
}

const result = reduce(strArry, tag, ""); // return accuが返ってくる
console.log(result); // <a><n><i><m><a><t><i><o><n>
