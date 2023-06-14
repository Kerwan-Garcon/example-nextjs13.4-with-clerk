export default async function getCommentById(id) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      method: "GET",
    }
  );
  return await res.json();
}
