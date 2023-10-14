import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
	return (
		<div className="h-screen bg-primary/30">
			<div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
				<div className="flex flex-col w-full max-w-[700px]">
					{/* <===<<=== Text ===>>===>  */}
					<h2 className="h2 text-center mb-12">
						Let&apos;s <span className="text-accent">contact.</span>
					</h2>
					{/* <===<<=== Form ===>>===> */}
					<form className="flex-1 flex flex-col gap-6 w-full mx-auto">
						{/* <===<<=== Input Group ===>>===> */}
						<div className="flex gap-x-6 w-full">
							<input
								type="text"
								name="name"
								placeholder="name"
								className="input"
							/>
							<input
								type="email"
								name="email"
								placeholder="email"
								className="input"
							/>
						</div>
						<input type="text" placeholder="Subject" className="input" />
						<textarea
							placeholder="Message"
							className="textarea"
						></textarea>
						<button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
							<span className="group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-500">
								Let&apos;s Talk
							</span>
							<BsArrowRight className="translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent" />
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
