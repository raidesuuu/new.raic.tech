import React from 'react';

interface DdItemProps {
  content: string;
  url: string;
}

const DropdownItem: React.FC<DdItemProps> = ({
  content,
  url
}) => {

  return (
    <a href={url} className="block px-4 py-2 dd-item hover:bg-gray-600 hover:text-blue-200">{content}</a>
  );
};

export default DropdownItem;