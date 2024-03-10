import { Input } from "@mui/joy";
import { SearchTwoTone } from "@mui/icons-material";
import { Button } from "@mui/joy";
import { searchBarStore } from "../../stores/searchBarStore";

function Search() {
    const handleFormInput = (event: any) => {
        const input = event.target.value;
        searchBarStore.applyFilter(input);
    };

    return (
        <section className="z-10 sticky top-0 p-1 mb-0 place-content-center bg-stone-400 rounded-2xl ">
            <Input
                startDecorator={<SearchTwoTone />}
                endDecorator={
                    <Button sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} type="submit">
                        Search
                    </Button>
                }
                sx={{
                    "--Input-radius": "16px",
                    "--Input-decoratorChildHeight": "35px",
                }}
                placeholder="Search"
                onChange={handleFormInput}
                autoComplete="on"
            />
        </section>
    );
}

export default Search;
