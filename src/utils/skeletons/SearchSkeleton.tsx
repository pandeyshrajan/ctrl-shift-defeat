import Box from "@mui/joy/Box";
import Skeleton from "@mui/joy/Skeleton";
import { searchBarStore } from "../../stores/searchBarStore";

export default function SearchSkeleton() {
    return (
        <>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
            <div className="m-3 mt-5">
                <Box sx={{ m: "auto", display: "flex", alignItems: "center", gap: 2 }}>
                    <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="circular" width={48} height={48} />
                    <div>
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={200} height="1em" sx={{ mb: 1 }} />
                        <Skeleton animation="wave" loading={searchBarStore.isSearchBarLaoding} variant="rectangular" width={140} height="1em" />
                    </div>
                </Box>
            </div>
        </>
    );
}
