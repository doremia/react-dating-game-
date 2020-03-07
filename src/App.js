import React from 'react';
import CharactersRow from "./components/CharactersRow"
import StoryRow from "./components/StoryRow"
import UserRow from "./components/UserRow"

function App() {
    return (
        <div className="container">
            <header className="app-header"> *** </header>
            <CharactersRow />
            <StoryRow />
            <UserRow />
        </div>
    );
}

export default App;
