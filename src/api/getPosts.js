const getPosts = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataJSON = await data.json();
    return dataJSON;
};

export default getPosts;
