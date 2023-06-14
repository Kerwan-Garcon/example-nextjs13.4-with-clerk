export default async function deleteUsers(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}
