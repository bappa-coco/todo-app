import React from "react";
import { Card, CardContent, CardHeader, Grid, Paper } from "@mui/material";
import Header from "./Header";
import TodoListItem from "./TodoListItem";

function TodoCard() {
  return (
    <Paper>
      <Header />
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        py={3}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}> {/* Responsive grid */}
          <Card sx={{ minWidth: 445, backgroundColor: "#109DA4", flexGrow: 1 }}>
            <CardHeader title="Create your todo list" />

            <CardContent>
              <TodoListItem />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoCard;
