import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      {/* 3 links- privacy policy, blog, about */}
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
      <p>&copy; Status 418 2022</p>
    </footer>
  );
};

export default Footer;
