export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-grid">
        <div>
          <a className="logo" href="#top"><span className="mark">M</span>MessPreorder</a>
          <p className="foot-note">Reserve special mess items before service starts.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <a href="#how">How it works</a>
          <a href="#order">Preorder</a>
          <a href="#halls">Halls</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="#faq">FAQ</a>
          <a href="mailto:mess@example.com">Contact mess committee</a>
        </div>
        <div>
          <h4>Hours</h4>
          <p>Breakfast 7:30 – 9:30</p>
          <p>Lunch 12:00 – 14:30</p>
          <p>Dinner 19:30 – 21:30</p>
        </div>
      </div>
      <div className="container foot-bottom">
        <span>© 2026 MessPreorder</span>
        <span>Student project. Not an official IIT Kanpur service.</span>
      </div>
    </footer>
  );
}
