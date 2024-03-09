import { createAPI, deleteAPI, readAPI, updateAPI } from "./api";
import React from "react";

function App() {
  const [readData, setReadData] = React.useState();

  const handleRead = async () => {
    const data = await readAPI();
    setReadData(data);
  };

  const handleCreate = async (e) => {
    e.preventDefault()
    const body = {
      id: e.target[0].value,
      title: e.target[1].value,
      description: e.target[2].value,
    };

    console.log("111", body);
    console.dir(e)

    try {
      createAPI(body);
    } catch (e) {
      alert(e);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const body = {
      id: e.target[0].value,
      title: e.target[1].value,
      description: e.target[2].value,
    };

    try {
      updateAPI(body);
    } catch (e) {
      alert(e);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    try {
      deleteAPI(e.target[0].value);
    } catch (error) {
      alert(e);
    }
  };

  return (
    <>
      <button onClick={handleRead}>read</button>
      {<div>id: {readData?.id}</div>}
      {<div>title: {readData?.title}</div>}
      {<div>description: {readData?.description}</div>}

      <form name="create" onSubmit={handleCreate}>
        <label htmlFor="id">id</label>
        <input id="id" />

        <label htmlFor="title">title</label>
        <input id="title" />

        <label htmlFor="description">description</label>
        <input id="description" />

        <button type="submit">create</button>
      </form>

      <form onSubmit={handleUpdate}>
        <label htmlFor="id">id</label>
        <input id="id" />

        <label htmlFor="title">title</label>
        <input id="title" />

        <label htmlFor="description">description</label>
        <input id="description" />

        <button type="submit">update</button>
      </form>

      <form onSubmit={handleDelete}>
        <label htmlFor="id">id</label>
        <input id="id" />

        <button type="submit">delete</button>
      </form>
    </>
  );
}

export default App;
