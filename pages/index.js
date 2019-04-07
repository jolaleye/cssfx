import '../style.css';
import { useState } from 'react';
import Head from '../components/Head';
import Nav from '../components/nav';
import Header from '../components/header';
import Grid from '../components/grid';
import Preview from '../components/Preview';
import effects from '../effects/index';

export default function Index() {
  const [previewEffect, setPreviewEffect] = useState();

  const getCurrentEffect = () => {
    const { Component } = effects[previewEffect];
    return <Component />;
  };

  return (
    <>
      <Head />
      <Nav />
      <Header />
      <Grid preview={setPreviewEffect} />
      {previewEffect && <Preview close={() => setPreviewEffect()}>{getCurrentEffect()}</Preview>}
    </>
  );
}
