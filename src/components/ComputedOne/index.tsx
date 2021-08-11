import React, { FC, memo } from 'react'
import './index.scss'
import { add } from 'Utils/math'
import { RouteComponentProps, withRouter } from 'react-router-dom'

type PageDispatchProps = {
  [propName: string]: any
}

type PageOwnProps = {
  [propName: string]: any
}

type PageState = {
  a: number
  b: number
}

type IProps = PageState & PageDispatchProps & PageOwnProps & RouteComponentProps

const ComputedOne: FC<IProps> = (props) => {
  const { a, b } = props
  const sum = add(a, b)

  return <p className='computed-one'>{`Hi, I'm computed one, my sum is ${sum}.`}</p>
}

export default memo(withRouter(ComputedOne))
