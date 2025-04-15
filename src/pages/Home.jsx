import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div className="py-10    shadow">
      <h1 className="text-3xl text-center mb-6">TODO List</h1>
      <TodoList />
    </div>
  );
};

export default Home;
