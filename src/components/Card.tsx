import React from 'react';

export interface CardProps {
  title: string;
  description: string;
}
export const Card: React.FC<CardProps> = ({ title, description }) => (
  <div
    style={{
      padding: '20px',
      color: '#242322',
      backgroundColor: '#bababa',
      maxWidth: '300px',
    }}
  >
    <h4
      style={{
        margin: '0',
      }}
    >
      {title}
    </h4>
    <p
      style={{
        marginBottom: '0',
      }}
    >
      {description}
    </p>
  </div>
);
