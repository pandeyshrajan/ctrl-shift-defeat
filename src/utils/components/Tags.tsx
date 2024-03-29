import React from "react";
import { Flex, Tag } from "antd";

const tagsData = ["Movies", "Books", "Music", "Sports"];

const Tags = () => {
    const [selectedTags, setSelectedTags] = React.useState<string[]>(["Movies"]);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
        console.log("You are interested in: ", nextSelectedTags);
        setSelectedTags(nextSelectedTags);
    };

    return (
        <Flex gap="4px 0" wrap="wrap" align="center" className="pt-2 ml-1">
            {tagsData.map<React.ReactNode>((tag) => (
                <Tag.CheckableTag className="text-white" key={tag} checked={selectedTags.includes(tag)} onChange={(checked) => handleChange(tag, checked)}>
                    {tag}
                </Tag.CheckableTag>
            ))}
        </Flex>
    );
};

export default Tags;
