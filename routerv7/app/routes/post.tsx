import type { Route } from "./+types/post";

// for client rendering
export async function clientLoader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return await res.json();
}

// for server rendering
// export async function loader({ params }: Route.LoaderArgs) {
//     const postId = params.postId;
//     const product = await db.getProduct(params.id)
//     return product;
//   }


export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <p>Title: {loaderData.title}</p>
      <p>Body: {loaderData.body}</p>
    </div>
  );
}
