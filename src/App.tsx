import React from "react";
import Header from "./Components/Header";
import TodoListItem from "./Components/TodoListItem";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

function App() {
  return (
    <>
      <Header />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={3}
      >
        <Card sx={{ minWidth: 445, backgroundColor: "#109DA4", flexGrow: 1 }}>
          <CardHeader
            title="Create your todo list"
          />
          <CardContent>
            <TodoListItem />
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default App;
