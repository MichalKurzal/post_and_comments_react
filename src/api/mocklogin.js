const loginMock = async () => {
    return await new Promise(function (resolve, reject) {
        let condition = true;
        if (condition) {
            resolve('login');
        } else {
            reject('login rejected');
        }
    });
};

export default loginMock;
