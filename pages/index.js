import Head from "next/head";
import { Container } from "@chakra-ui/react";
import AddTodo from "../components/AddTodo";
import Auth from "../components/Auth";
import TodoList from "../components/TodoList";
import Footer from "../components/Footer";
import Top from "../components/Top";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Todo Task Manager</title>
        <meta
          name="description"
          content="Created by Suciu Marius for Triluxo"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW="7xl">
        <Top />
        <Auth />
        <AddTodo />
        <TodoList />
        <Footer />
      </Container>
    </div>
  );
}
