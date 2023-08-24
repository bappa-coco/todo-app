import React from "react";
import "./App.css";
import Header from "./Components/Header";
import TodoListItem from "./Components/TodoListItem";
import { Card,  Grid, Typography } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      {/* <div className="todo-app">
        <header>
          <h1>Todo List Item</h1>
        </header>
        <TodoListItem />
      </div> */}

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={3}
      >
        <Card sx={{ minWidth: 450 }}>
          <Grid item md={12} sm={12} xs={12}>
            <Typography>Create your todo</Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TodoListItem />
          </Grid>
        </Card>
      </Grid>
    </>
  );
}

export default App;
