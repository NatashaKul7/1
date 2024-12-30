import {
  Form,
  Link,
  NavLink,
  redirect,
  useFetcher,
  useNavigate,
  useNavigation,
} from "react-router";
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

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "DELETE",
    });
    // return redirect("/");
    return { isDeleted: true };
  } catch (error) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();

  const isDeleted = fetcher.data?.isDeleted;
  const isDeleting = fetcher.state !== "idle";

  const navigate = useNavigate();
  const navigation = useNavigation();

  const isNavigating = Boolean(navigation.location);

  if (isNavigating) {
    <p>Navigating...</p>;
  }

  return (
    <div>
      {!isDeleted && (
        <>
          <p>Title: {loaderData.title}</p>
          <p>Body: {loaderData.body}</p>
        </>
      )}
      {/* <Link to="/about">About</Link> */}

      <button onClick={() => navigate("/")}>Redirect</button>
      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>

      {isDeleting && <p>Deleting the Post...</p>}

      {/* <Form method="delete">
        <button type="submit">Delete</button>
      </Form> */}
    </div>
  );
}
