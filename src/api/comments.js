const getComments = async (param) => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/posts/' + param + '/comments'
    );
    const dataJSON = await data.json();
    return dataJSON;
};

export default getComments;
