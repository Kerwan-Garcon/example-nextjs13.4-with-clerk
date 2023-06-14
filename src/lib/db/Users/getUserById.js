const getUserById = async (idUser) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${idUser}`,
    {
      method: "GET",
    }
  );

  return [await res.json()];
};

export default getUserById;
