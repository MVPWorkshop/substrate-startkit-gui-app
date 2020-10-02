import React from 'react';
import styles from './workspaceTemplateContent.module.scss';
import Typography from '../../atoms/Typography/typography';
import { ETypographyVariant } from '../../atoms/Typography/typography.types';
import { EColor, EFontFamily } from '../../../shared/types/styles.types';

const WorkspaceTemplateContent = () => {
  return (
    <div className={styles.workspaceTemplateContent}>
      <div className={styles.textContent}>
        <Typography variant={ETypographyVariant.TITLE}>
          Templates
        </Typography>
        <Typography fontFamily={EFontFamily.POPPINS} fontSize={18} color={EColor.GRAY_DARK}>
          Pre-built solutions based on your use case. Select a package
          and deploy codebase.
        </Typography>
      </div>
    </div>
  )
}

export default WorkspaceTemplateContent;
