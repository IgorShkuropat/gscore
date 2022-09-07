import React from 'react';
import NextLink from 'next/link';

export const Link = ({ href, children }) => {
  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  );
};
