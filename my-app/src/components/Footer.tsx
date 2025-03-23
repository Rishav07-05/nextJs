const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-52 text-center sm:text-left">
        {/* About Us */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">About Us</h2>
          <p className="text-sm">
            We are passionate about bringing the best music experience to our
            users.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Explore
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Artists
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Events
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Follow Us</h2>
          <div className="flex justify-center sm:justify-start space-x-4">
            <a href="#" className="hover:text-white">
              🎵 Facebook
            </a>
            <a href="#" className="hover:text-white">
              📷 Instagram
            </a>
            <a href="#" className="hover:text-white">
              🐦 Twitter
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
          <p className="text-sm">📍 123 Music Lane, Los Angeles, CA</p>
          <p className="text-sm">📧 support@musicworld.com</p>
          <p className="text-sm">📞 +1 (234) 567-8900</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} MusicWorld. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
