import React, { useEffect, useState } from 'react';
import styles from './workspacePage.module.scss';
import PageLayout from '../../layouts/PageLayout/pageLayout';
import Sidebar from '../../organisms/Sidebar/sidebar';
import WelcomeContent from '../../molecules/WelcomeContent/welcomeContent';
import { useDispatch } from 'react-redux';
import { fetchAllPallets } from '../../../redux/pallets/pallets.redux.actions';
import { fetchAllTemplates } from '../../../redux/templates/templates.redux.actions';
const WorkspacePage = () => {

  const dispatch = useDispatch();

  const fetchData = () => {
    dispatch(fetchAllPallets());
    dispatch(fetchAllTemplates());
  }

  useEffect(fetchData, []);

  const [isWelcomeDisplayed, setIsWelcomeDisplayed] = useState(true);

  return (
    <PageLayout fluid={true} className={styles.workspacePage}>
      <div className={styles.sidebarContent}>
        <Sidebar />
      </div>

      <div className={styles.workspaceContent}>
        {isWelcomeDisplayed ? <WelcomeContent
          onCreateBtnClick={() => setIsWelcomeDisplayed(false)}
        /> : null }
      </div>
    </PageLayout>
  )
}

export default WorkspacePage;
