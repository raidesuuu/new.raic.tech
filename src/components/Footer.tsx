// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 p-4 text-center">
      <p>
        © {new Date().getFullYear()} 雷のサイト. All rights reserved.
        <br />
        Powered by React, Next.js, GitHub Pages
      </p>
    </footer>
  );
};

export default Footer;
