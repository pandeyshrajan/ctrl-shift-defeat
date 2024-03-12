import React from "react";
import { Flex, Tag } from "antd";
import { useState } from "react";

const tagsData = ["Movies", "Books", "Music", "Sports"];

const Tags = (currentTags: any, type: number) => {
    const [selectedTags, setSelectedTags] = React.useState<string[]>(["Movies"]);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <Flex wrap="wrap" align="center" className="m-1 mt-2 justify-space-between align-center text-center">
            {tagsData.map<React.ReactNode>((tag) => (
                <Tag.CheckableTag className="text-center align-middle" style={{ backgroundColor: "rgba(58,42,29, 0.65)", color: "white", fontWeight: "bold" }} key={tag} checked={selectedTags.includes(tag)} onChange={(checked) => handleChange(tag, checked)}>
                    {tag}
                </Tag.CheckableTag>
            ))}
        </Flex>
    );
};

export default Tags;
