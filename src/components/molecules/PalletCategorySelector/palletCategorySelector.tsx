import React from 'react'
import { EPalletCategories } from '../../../shared/types/pallets.types';
import { palletCategoryLabels } from '../../../shared/constants/pallet.constants';
import styles from './palletCategorySelector.module.scss';
import { IPalletCategorySelectorProps } from './palletCategorySelector.types';
import { classes } from '../../../shared/utils/styles.util';
import Typography from '../../atoms/Typography/typography';

interface ISelection {
  label: string;
  value: EPalletCategories | undefined;
}

const palletCategories: ISelection[] = [{
  value: undefined,
  label: 'View all'
},{
  label: palletCategoryLabels['ACCOUNTS'],
  value: EPalletCategories.ACCOUNTS
},{
  label: palletCategoryLabels['ASSETS'],
  value: EPalletCategories.ASSETS
},{
  label: palletCategoryLabels['CONSENSUS'],
  value: EPalletCategories.CONSENSUS
},{
  label: palletCategoryLabels['GOVERNANCE'],
  value: EPalletCategories.GOVERNANCE
},{
  label: palletCategoryLabels['IDENTITY'],
  value: EPalletCategories.IDENTITY
},{
  label: palletCategoryLabels['RUNTIME'],
  value: EPalletCategories.RUNTIME
},{
  label: palletCategoryLabels['SMART_CONTRACTS'],
  value: EPalletCategories.SMART_CONTRACTS
},]

const PalletCategorySelector: React.FC<IPalletCategorySelectorProps> = (props) => {

  const renderCategory = (category: ISelection) => {
    return (
      <button
        className={classes(
          styles.category,
          props.value === category.value ? styles.active : ''
        )}
        onClick={() => props.onChange(category.value)}
        key={category.label}
      >
        <Typography element={'span'}>
          {category.label}
        </Typography>
      </button>
    )
  }

  return (
    <div className={styles.palletCategorySelector}>
      {palletCategories.map(category => renderCategory(category))}
    </div>
  )
}

export default PalletCategorySelector;
