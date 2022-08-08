import "./Footer.css";
const Footer = () => {
	return (
		<footer className="footer">
			{/* 3 links- privacy policy, blog, about */}
			<div className="footer-border"></div>
			<ul>
				<li>
					<a href="Privacy">Privacy Policy</a>
				</li>
				<li>
					<a href="Blog">Blog</a>
				</li>
				<li>
					<a href="About">About</a>
				</li>
			</ul>
			<p className="copyright">&copy; 2022 Status 418</p>
		</footer>
	);
};

export default Footer;
