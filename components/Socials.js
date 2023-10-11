import Link from "next/link";
import {
	BsGithub,
	BsInstagram,
	BsFacebook,
	BsDribbble,
	BsLinkedin,
	BsTwitter,
} from "react-icons/bs";

const Socials = () => {
	return (
		<div className="flex items-center gap-x-5 text-lg">
			<Link
				href={"https://github.com/shariful10"}
				className="hover:text-accent transition-all duration-300"
			>
				<BsGithub />
			</Link>
			<Link
				href={"https://www.linkedin.com/in/md-shariful-islam-3132721b8/"}
				className="hover:text-accent transition-all duration-300"
			>
				<BsLinkedin />
			</Link>
			<Link
				href={""}
				className="hover:text-accent transition-all duration-300"
			>
				<BsFacebook />
			</Link>
			<Link
				href={""}
				className="hover:text-accent transition-all duration-300"
			>
				<BsDribbble />
			</Link>
			<Link
				href={""}
				className="hover:text-accent transition-all duration-300"
			>
				<BsTwitter />
			</Link>
			<Link
				href={""}
				className="hover:text-accent transition-all duration-300"
			>
				<BsInstagram />
			</Link>
		</div>
	);
};

export default Socials;
