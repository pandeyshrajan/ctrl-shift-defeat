import { Input } from "@mui/joy";
// import { SearchTwoTone } from "@mui/icons-material";
// import { Button } from "@mui/joy";
// import { searchBarStore } from "../../stores/searchBarStore";

// function Search() {
//     const handleFormInput = (event: any) => {
//         const input = event.target.value;
//         searchBarStore.applyFilter(input);
//     };

//     return (
//         <section className="z-10 sticky top-0 p-1 mt-0 mb-0 bg-white rounded-2xl shadow-xl">
//             <Input
//                 startDecorator={<SearchTwoTone />}
//                 endDecorator={
//                     <Button sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} type="submit">
//                         Search
//                     </Button>
//                 }
//                 sx={{
//                     "--Input-radius": "16px",
//                     "--Input-decoratorChildHeight": "35px",
//                 }}
//                 placeholder="Search"
//                 onChange={handleFormInput}
//                 autoComplete="on"
//             />
//         </section>
//     );
// }

import { MenuItem, Select } from "@mui/material";
import { SearchTwoTone } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useState } from "react";
import { searchBarStore } from "../../stores/searchBarStore";
import { observer } from "mobx-react";

function Search() {
    // const [searchCriteria, setSearchCriteria] = useState("name"); // Default search criteria
    const [input, setInput] = useState("");

    const handleFormInput = (event: any) => {
        searchBarStore.searchByCriteria(input);
    };

    const handleChange = (event: any) => {
        setInput(event?.target.value);
    };

    const handleSearchCriteriaChange = (event: any) => {
        searchBarStore.setSearchCriteria(event.target.value);
    };

    return (
        <section className="z-10 sticky top-0 p-1 mt-0 mb-0 bg-white rounded-2xl shadow-xl">
            <Input
                startDecorator={
                    <>
                        <SearchTwoTone />
                        <Select value={searchBarStore.searchCriteria} onChange={handleSearchCriteriaChange} sx={{ marginLeft: "" }} className="rounded-3xl h-11">
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="id">ID</MenuItem>
                            <MenuItem value="project">Project</MenuItem>
                            <MenuItem value="interest">Interest</MenuItem>
                        </Select>
                    </>
                }
                endDecorator={
                    <Button sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} type="submit" onClick={handleFormInput}>
                        Search
                    </Button>
                }
                sx={{
                    "--Input-radius": "16px",
                    "--Input-decoratorChildHeight": "35px",
                }}
                placeholder="Search"
                onChange={handleChange}
                autoComplete="on"
            />
        </section>
    );
}

export default observer(Search);
