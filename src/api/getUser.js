const getUser = async (param) => {
  const data = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + param
  );
  const dataJSON = await data.json();
  return dataJSON;
};

export default getUser;
