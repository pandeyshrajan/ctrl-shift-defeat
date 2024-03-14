import React from "react";
import { Flex, Tag } from "antd";
import { store } from "../../stores/userProfileStore";
import { searchBarStore } from "../../stores/searchBarStore";
import { observer } from "mobx-react";
const Tags = (props: any) => {
    const { tagType } = props;
    let tagsData: string[] = [];

    if (tagType === "1") {
        tagsData = store.getCurrentProfile().interestTags.map((ele) => {
            return ele.interestName;
        });
    } else if (tagType === "2") {
        tagsData = store.getCurrentProfile().projectTags.map((ele) => {
            return ele.name;
        });
    }

    const searchTagFilter = async (tagType: string, tag: string) => {
        searchBarStore.setSearchCriteria(tagType === "1" ? "Interest" : "Project");
        searchBarStore.setSearchInput(tag);
        await searchBarStore.searchByCriteria();
    };

    return (
        <Flex wrap="wrap" align="center" className="profile-tags flex flex-row align-center justify-center mt-2">
            {tagsData.map<React.ReactNode>((tag) => (
                <Tag.CheckableTag className="tag text-center align-middle" style={{ backgroundColor: "rgba(58,42,29, 0.65)", color: "white", fontWeight: "bold" }} key={tag} checked={searchBarStore.searchInput === tag} onClick={() => searchTagFilter(tagType, tag)}>
                    {tag}
                </Tag.CheckableTag>
            ))}
        </Flex>
    );
};

export default observer(Tags);
