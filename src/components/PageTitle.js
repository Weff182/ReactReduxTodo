import React from 'react'
import style from '../styles/modules/title.module.scss'

function PageTitle({title, ...rest}) {
  return <p className={style.title} {...rest}>{title}</p>
}

export default PageTitle