import MobileHome from "@/components/mobile-home";
import Posts from "@/components/posts";

export default function Home() {

	return (
		<div className="container max-w-screen-2xl flex lg:p-0 lg:gap-2 pr-0 pl-0 lg:pl-2 lg:pr-2">
			<div className="flex-1 lg:border-r lg:border-[#009D2C]">
				<MobileHome/>
			</div>
			<div className="hidden md:inline-flex" style={{flex: 3}}>
				<Posts showTags={false}/>
			</div>
		</div>
	);
}
