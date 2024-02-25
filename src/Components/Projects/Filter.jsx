import React, { useContext} from 'react'
import { motion } from 'framer-motion'
import { projects_data } from '../../Data/Data'
import { generalContext } from '../../Context/GeneralContext'
const Filter = () => {
  const {filteredData , setFilteredData} = useContext(generalContext)
  const filterTypes = [
    {
      key: 'API',
      value: 'API',
    },
    {
      key: 'landing',
      value: 'Landing page',
    },
    {
      key: 'E-commerce',
      value: 'E-commerce',
    },
    {
      key: 'application',
      value: 'Application',
    },
    {
      key: 'clone',
      value: 'Clone',
    },
  ]
  const clickHandler = (item) => {
    if(!filteredData.includes(item)){
      setFilteredData([...filteredData, item])
    }else{
      setFilteredData(filteredData.filter(cut => item !== cut))
    }
  }
  function calculateNumber(name) {
    let num = projects_data.filter(item => item.type === name)
    return num.length;
  }
  return (
    <motion.div animate={{opacity: 1}} initial={{opacity: 0}} exit={{opacity: 0}}  className='filter'>
      <div className="filter_container">
      <h3 className='title_filter'>categories</h3>
      <ul>
        {filterTypes.map((item, index) => {
          if(calculateNumber(item.key)){
            return <li key={index} className={filteredData.includes(item.key) ? 'active' : 'nun'} onClick={() => clickHandler(item.key)}> <span>{item.value}</span> <span>{calculateNumber(item.key)}</span></li>
          }
        })}
      </ul>
      </div>
    </motion.div>
  )
}

export default Filter