import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { cn, getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Tag } from "./tag";

export const metadata: Metadata = {
  title: "Mahendra Singamsetty - My Blog Page",
  description: "Inforamton About Me",
};

const POSTS_PER_PAGE = 5;

interface BlogPagePrps {
  showTags?: boolean;
  searchParams?: {
    page?: string;
  }
}

export default async function Posts({ searchParams, showTags = true}: BlogPagePrps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter(post => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return <div className="container py-6 lg:py-10">
    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
      <div className="flex-1 space-y-4">
        <h1 className="inline-block">My Blog</h1>
        <p className="text-xl text-muted-foreground">
          My ramblings on all things web dev.
        </p>
      </div>
    </div>
    <hr className="mt-8" />
    <div className="grid grid-cols-12 gap-3 mt-8">
      <div className={cn("col-span-12 col-start-1 ", showTags ? "sm:col-span-8" : "sm:col-span-12")}>
        {/* <hr /> */}
        {displayPosts?.length > 0 ? (<ul className="flex flex-col">
          {displayPosts.map((post) => {
            const { slug, date, title, description, tags } = post;
            return <li key={slug}>
              <PostItem slug={slug} date={date} title={title} description={description} tags={tags} />
            </li>
          })}
        </ul>) : (<p>Nothing to see here yet</p>)}
        <QueryPagination totalPages={totalPages} className="justify-end mt-4" />
      </div>
      { showTags && <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1 sm:mx-9">
          <CardHeader>
            <CardTitle>Tags</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
      </Card>}
    </div>
  </div>
}