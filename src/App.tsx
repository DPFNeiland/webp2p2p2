/*
import { Header } from './components/login/Header';
import { Container1 } from './components/login/container1';
import { Container2 } from './components/login/container2'; 
import { Container3 } from './components/Cadastrar/container3';
import { Container4 } from './components/Cadastrar/container4';
import { Header2 } from './components/Cadastrar/Header2';
*/
import { Header3 } from './components/Mapa/Header3';
import { Container5 } from './components/Mapa/container5';
import { Container6 } from './components/Mapa/container6';

import styles from './App.module.css'
import './globals.css';

export default function Home() {
  return (
    <div>
      <Header3/>
      <div className={styles.wrapper}>
        <Container5/>
        <Container6/>
      </div>  
    </div>
  )
}

        /*
          <Header/>
          <Header2/>
        */
               /*
          <Container1/>
          <Container2/>
          <Container3/>
          <Container4/>
        */