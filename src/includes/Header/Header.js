import React from 'react'
import { HeaderElements, ColoumnCenter } from './HeaderStyle';

function Header() {
  return (
<HeaderElements>
  <ColoumnCenter>
  <h5 title={new Date().toJSON().slice(0,10).replace(/-/g,'/')}>{new Date().toJSON().slice(0,10).replace(/-/g,'/')}</h5>
  <p>Delhi, Indi</p>
  </ColoumnCenter>
</HeaderElements>

  )
}

export default Header