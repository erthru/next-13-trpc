"use client";

import { client } from "@/utils/trpc/client";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";

type Props = {
  session: Session;
};

const IndexClient = (props: Props) => {
  const { data: todos, refetch } = client.getAllTodos.useQuery();
  const createTodoMutation = client.createTodo.useMutation();

  const logout = async () => {
    await signOut({ redirect: false });
    location.href = "/login";
  };

  const generateTodo = async () => {
    await createTodoMutation.mutateAsync({
      name: `todo ${new Date().getTime()}`,
    });

    refetch();
  };

  return (
    <>
      <p>hello, {props.session.user.username}</p>
      <button onClick={logout}>logout</button>
      <button onClick={generateTodo}>generate todo</button>
      <ul>
        {todos?.map((todo, i) => (
          <li key={`todo-${i}`}>{todo.name}</li>
        ))}
      </ul>
    </>
  );
};

export default IndexClient;
