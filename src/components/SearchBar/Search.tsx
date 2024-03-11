import { Input } from "@mui/joy";
import { MenuItem, Select } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { searchBarStore } from "../../stores/searchBarStore";
import { observer } from "mobx-react";
import { Icon } from "@iconify/react";

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
        <section className="search-bar sticky top-0 p-1 pl-3 shadow-xl">
            <Input
                startDecorator={
                    <>
                        <Icon icon="line-md:search-filled" width="2em" height="2em" style={{ color: "#45b0d3" }} className="ml-2" />
                        <Select value={searchBarStore.searchCriteria} onChange={handleSearchCriteriaChange} className="h-11">
                            <MenuItem value="name">Name</MenuItem>
                            <MenuItem value="id">ID</MenuItem>
                            <MenuItem value="project">Project</MenuItem>
                            <MenuItem value="interest">Interest</MenuItem>
                        </Select>
                    </>
                }
                endDecorator={
                    <Button type="submit" onClick={handleFormInput}>
                        Search
                    </Button>
                }
                sx={{
                    "--Input-radius": "0px",
                    "--Input-decoratorChildHeight": "35px",
                    borderTopLeftRadius: "5em",
                }}
                placeholder="Search"
                onChange={handleChange}
                className="search-bar"
            />
        </section>
    );
}

export default observer(Search);
