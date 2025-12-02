import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld.jsx";
import Container from "./container.jsx";
import TodoList from "../todolist/TodoList.jsx";
import Table from "../table/Table.jsx";
import AlertButton from "../button/AlertButton.jsx";
import MyButton from "../button/MyButton.jsx";
import Toolbar from "../button/Toolbar.jsx";
import SearchForm from "../form/SearchForm.jsx";
import SayHelloForm from "../form/SayHelloForm.jsx";
import Counter from "../form/Counter.jsx";

createRoot(document.getElementById("root"))
    .render(
        <StrictMode>
            <Container>
                <HelloWorld />
                <TodoList />
                <Table />

                <AlertButton text="Click me!" message="You Click Me!!!"/>
                <AlertButton text="Click you!" message="You Click You!!!"/>

                <MyButton text="Smash me!" onSmash={() => { alert("Smash Clicked!") }}/>
                <MyButton text="Smash you!" onSmash={() => { alert("Smash You Clicked!") }}/>


                <Toolbar onClick={(e) => {
                    e.stopPropagation();
                    alert("Toolbar Clicked!");
                }}/>

                <SearchForm />

                <SayHelloForm />

                <Counter />
            </Container>
        </StrictMode>
    );