import React, { useState } from 'react';
import PageLayout from '../../layouts/PageLayout/pageLayout';
import { ReactComponent as SubstrateLogotype } from '../../../shared/assets/substrate_logotype.svg';
import { ReactComponent as SubstrateLogo } from '../../../shared/assets/substrate_logo.svg';
import { ReactComponent as SubstrateLogoRed } from '../../../shared/assets/substrate_logo_red.svg';
import styles from './landingPage.module.scss';
import Typography from '../../atoms/Typography/typography';
import Button from '../../atoms/Button/button';
import LandingBackground from '../../molecules/LandingBackground/landingBackground';
import { Link } from 'react-router-dom';

const LandingPage = () => {

  const [buttonHovered, setButtonHovered] = useState(false);

  const setHover = (state: boolean) => () => {
    setButtonHovered(state)
  }

  return (
    <PageLayout fluid={true} className={styles.landingPage}>
      <LandingBackground hover={buttonHovered}/>
      <div className='align-self-start'>
        <SubstrateLogotype />
      </div>
      <div className={styles.mainContent}>
        <SubstrateLogo className='mb-9'/>
        <Typography fontSize={40} className='font-weight-normal lh-56 text-center mb-16'>
          Start building your blockchain with&nbsp;
          <Typography
            element='span'
            className='font-weight-bolder'
          >
            Substrate Blockchain Starter Kit
          </Typography>
        </Typography>
        <span
          onMouseOver={setHover(true)}
          onMouseLeave={setHover(false)}
          onFocus={setHover(true)}
          onBlur={setHover(false)}
        >
          <Link to='/workspace'>
            <Button
              theme='outline-secondary'
              className={styles.startButton}
            >
              <SubstrateLogoRed/><span>Build your blockchain</span>
            </Button>
          </Link>
        </span>
      </div>
    </PageLayout>
  )
}

export default LandingPage;
