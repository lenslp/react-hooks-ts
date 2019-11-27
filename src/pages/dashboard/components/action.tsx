import React from 'react'
import styles from '../index.module.scss'

interface Iprops {}

const RenderAction = (props: Iprops) => {
  return (
    <div className={styles.actionWrap}>
      <span>修改</span>
      <span>删除</span>
    </div>
  )
}

export default RenderAction
