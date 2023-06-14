export default async function getPostsById(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}/posts`,
    {
      method: "GET",
    }
  );
  return await res.json();
}
