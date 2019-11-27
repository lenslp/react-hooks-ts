import React from 'react'
import { Table, Button } from 'antd'
import { columns } from './config/columns'
import { fetchAllData } from '../../services/dashborad'
import styles from './index.module.scss'

interface Iprops {}

const Dashborad = (props: Iprops) => {
  const [dataSource, changeDataSource] = React.useState()

  React.useEffect(() => {
    fetchData()
  }, [])

  // 请求列表数据
  const fetchData = async () => {
    const res = await fetchAllData()
    changeDataSource(res)
  }

  return (
    <>
      <Button type='primary' className={styles.addBtn}>
        添加
      </Button>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  )
}

export default Dashborad
