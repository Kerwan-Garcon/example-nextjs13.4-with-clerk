const getUsers = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    method: "GET",
  });

  return await res.json();
};

export default getUsers;
