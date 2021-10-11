const editPost = async (title, body, id) => {
  return fetch("https://jsonplaceholder.typicode.com/posts/" + id, {
    method: "PUT",
    body: JSON.stringify({
      id: id,
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};

export default editPost;
