import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "./site-footer";
import TagsList from "./tags-list";
import { posts } from "#site/content";
import { getAllTags, getTotalTags } from "@/lib/utils";

export default function MobileHome() {
  const totalPosts = posts.length;
  const tags = getAllTags(posts);

	return (
		<div className="">
			<Image
				src="/programmer.svg"
				alt="illustrations by Storyset"
				className="programmer w-full"
				width="100"
				height="150"
			/>
			{/* <h1 className="programmer-name tet-3xl sm:text-5xl md:text-6xl lg:text-7xl text-balance">
				Hello, I&apos;m Mahendra Singamsetty
			</h1> */}
			<div style={{ marginTop: "-15px" }}>
				<div className="block-div about-div border-b border-dotted flex items-center pl-3">
					I&apos;m Mahendra Singamsetty
				</div>
				<div className="row-div">
					<div className="num-div font-[Georgia]">16</div>
					<div className="text-div">
						years of experience in IT industry on various technogiels
						(Full-Stack)
						<div className="about-me">
							<Link href={"/about"}>About me ...</Link>
						</div>
					</div>
				</div>
			</div>
			<div className="">
				<div className="block-div blog-div border-b border-dotted flex items-center pl-3">
					BLOG
				</div>
				<div className="row-div sblog-4">
					<div className="num-div font-[Georgia]">2041</div>
					<div className="text-div">articles about various topics articles about various topics articles about various topics</div>
				</div>
			</div>
			<div>
				<div className="block-div contact-div border-b border-dotted flex items-center pl-3">
					TAGS
				</div>
        <div className="row-div">
					<div className="num-div font-[Georgia]">{getTotalTags(tags)}</div>
					<div className="text-div">
            articles about various topics:<br />
            <TagsList sidebar={true} />
            {/* <ul>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React JS</li>
              <li>Next JS</li>
              <li>Angular</li>
              <li>Node JS</li>
              <li>Express JS</li>
            </ul> */}
          </div>
				</div>
			</div>
      <div className="md:hidden">
        <SiteFooter />
      </div>
		</div>
	);
}
