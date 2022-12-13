import { NextPage } from "next";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// json placeholder API
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

const Home: NextPage = () => {
  const { data, error } = useSWR(baseUrl, fetcher);

  if (error) return <div>An error has occurred.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>
        {data.map((post: Post) => (
          <h1>{post.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default Home;
