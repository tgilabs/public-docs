import React from 'react';
import Layout from '@theme-original/Layout';
import { useEffect } from 'react';

export default function CustomLayout(props) {
  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.src = '/plugins/accessibility/nagishli.js?v=3';
    script.charset = 'utf-8';
    script.defer = true;

    // Append the script just before the closing body tag
    document.body.appendChild(script);

    // Cleanup function to remove the script when unmounting
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return <Layout {...props} />;
}
