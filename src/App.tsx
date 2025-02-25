// import { useEffect, useState } from "react";
import SearchComponent from "./components/SearchComponent";
import { useQuery } from "@tanstack/react-query";
import { Todo } from "./components/type";
import { Loader, Center, Text } from "@mantine/core";

const App = () => {
  /*  const [todos, setTodos] = useState<Todo[]>([]);
  
  const fetchTodo = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
      );
      const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);
 */

  const {
    data: todos,
    isLoading,
    isError,
    error,
  } = useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos",
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  // Handle loading and error states
  if (isLoading) {
    return (
      <Center style={{ height: "100vh" }}>
        <Loader size="xl" variant="dots" />
      </Center>
    );
  }

  if (isError) {
    return;
    <Center style={{ height: "100vh" }}>
      <Text c="red">Error: {error?.message}</Text>
    </Center>;
  }

  return (
    <section className="mx-auto w-1/2">
      <SearchComponent todos={todos || []} />
    </section>
  );
};

export default App;
