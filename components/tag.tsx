import Link from "next/link";
import { badgeVariants } from "./ui/badge";

interface TagProps {
	tag: string;
	current?: boolean;
	count?: number;
	sidebar?: boolean;
}

export function Tag({ tag, current, count, sidebar = false }: TagProps) {
	return !sidebar ? (
		<Link
			className={badgeVariants({
				variant: current ? "default" : "secondary",
				className: "no-underline rounded-md",
			})}
			href={`/tags/${tag}`}
		>
			{tag} {count ? `(${count})` : null}
		</Link>
	) : (
    <Link className="py-2 border-b" style={{ borderColor: 'rgba(14, 0, 178, 0.2)'}} href={`/tags/${tag}`}>{tag} {count ? `(${count})` : null}</Link>
  );
}
