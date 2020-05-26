function rand(min = 0, max = 3000) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const f1 = (callback) => {
    setTimeout(() => {
        console.log('f1 foi executada');
        if (callback) callback();
    }, rand())
}


const f2 = (callback) => {
    setTimeout(() => {
        console.log('f2 foi executada');
        if (callback) callback();
    },rand())
}

const f3 = () => {
    setTimeout(() => {
        console.log('f3 foi executada');
    },rand())
}

f1(callback => {
    f2(callback => {
        f3();
    });
});