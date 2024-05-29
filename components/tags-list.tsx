import { posts } from "#site/content";
import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Tag } from "./tag";

export default function TagsList({sidebar = false}) {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className={sidebar ? "flex flex-col" : ""}>{sortedTags?.map((tag) => (
      <Tag tag={tag} key={tag} count={tags[tag]} sidebar={sidebar} />
    ))}</div>
  );
}