// // src/components/Search.js

import React, { useState } from "react";
import Scroll from "./Scroll";
import SearchList from "./SearchList";
import { Button, Input, InputBase, InputLabel } from "@mui/material";

function Search() {
    //     const [searchField, setSearchField] = useState("");

    //     const filteredPersons = details.filter((person: any) => {
    //         return person.name.toLowerCase().includes(searchField.toLowerCase()) || person.email.toLowerCase().includes(searchField.toLowerCase());
    //     });

    //     const handleChange = (e: any) => {
    //         setSearchField(e.target.value);
    //     };

    //     function searchList() {
    //         return (
    //             <Scroll>
    //                 <SearchList filteredPersons={filteredPersons} />
    //             </Scroll>
    //         );
    //     }

    return (
        <section className="p-1 place-content-center flex flex-col justify-center">
            {/* <div className=">
                <h2 className="f2">Search your course</h2>
            </div>
            <div className="pa2">
                <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3" type="search" placeholder="Search People" onChange={handleChange} />
            </div>
            {searchList()} */}
            {/* <InputLabel>Search for Employess </InputLabel> */}
            <Input className="" placeholder="Search" />
            <Button> Submit </Button>
        </section>
    );
}

export default Search;
