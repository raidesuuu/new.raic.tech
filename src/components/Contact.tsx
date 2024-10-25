import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';

const Contact: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className='text-5xl font-bold mb-5 bold-h1'>お問い合わせ</h1>

      <div className="flex flex-wrap space-x-4 mb-10">
        <a href="https://discord.gg/tJTTM56Wg2" className="button secondary flex items-center space-x-2">
          <FaDiscord /> <span>Discord (Ticket)</span>
        </a>

        <a href="https://x.com/raic_dev" className="button secondary flex items-center space-x-2">
          <FaXTwitter /> <span>X (Twitter)</span>
        </a>

        <a href="mailto:contact@raic.tech?subject=%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B&body=%E9%9B%B7%E3%81%B8%E3%81%AE%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%0A%0A%23%20%E5%86%85%E5%AE%B9%0A%0A%2F*%20%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E5%86%85%E5%AE%B9%20*%2F" className="button secondary flex items-center space-x-2">
          <FiMail /> <span>メール</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;