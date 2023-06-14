const getPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "GET",
  });

  return await res.json();
};

export default getPosts;
