import { Input } from "@mui/joy";
import { MenuItem, Select } from "@mui/material";
import { Button } from "@mui/material";
import { useState } from "react";
import { searchBarStore } from "../../stores/searchBarStore";
import { observer } from "mobx-react";
import { Icon } from "@iconify/react";
import { FILTER_FIELDS } from "../../utils/contants";

function Search() {
    // const [input, setInput] = useState("");

    const handleFormInput = (event: any) => {
        searchBarStore.searchByCriteria();
    };

    const handleChange = (event: any) => {
        searchBarStore.setSearchInput(event?.target.value);
    };

    const handleSearchCriteriaChange = (event: any) => {
        searchBarStore.setSearchCriteria(event.target.value);
    };

    const filterLists = () => {
        return FILTER_FIELDS.map((field: string) => {
            return <MenuItem value={field}>{field}</MenuItem>;
        });
    };

    return (
        <section className="search-bar sticky top-0 p-1 pl-3 shadow-xl">
            <Input
                startDecorator={
                    <>
                        <Icon icon="line-md:search-filled" width="2em" height="2em" style={{ color: "rgba(58,42,29, 0.75)" }} className="search-box-icon ml-2" />
                        <Select value={searchBarStore.searchCriteria} onChange={handleSearchCriteriaChange} className="h-11" style={{ backgroundColor: "rgba(245, 245, 245, 0.12)" }}>
                            {filterLists()}
                        </Select>
                    </>
                }
                endDecorator={
                    <Button className="search-bar-button" type="submit" variant="contained" onClick={handleFormInput} style={{ backgroundColor: "rgba(58,42,29, 0.85)", color: "#fff" }}>
                        Search
                    </Button>
                }
                sx={{
                    "--Input-radius": "0px",
                    "--Input-decoratorChildHeight": "35px",
                    borderTopLeftRadius: "5em",
                    backgroundColor: "rgba(245, 245, 245, 0.42)",
                    color: "rgba(58,42,29, 0.85)",
                    fontWeight: "bold",
                }}
                placeholder="Search"
                value={searchBarStore.searchInput}
                onChange={handleChange}
            />
        </section>
    );
}

export default observer(Search);
