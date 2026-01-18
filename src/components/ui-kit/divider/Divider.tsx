import React from 'react';
import './divider.scss';

export const Divider: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={`divider ${className || ''}`}></div>;
};
