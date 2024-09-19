import React from 'react';
import Layout from '@theme-original/Layout';
import { useEffect } from 'react';

export default function CustomLayout(props) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/plugins/nagishli.js?v=3';
    script.charset = 'utf-8';
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return <Layout {...props} />;
}
