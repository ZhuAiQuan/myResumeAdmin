import { useNavigate, useLocation } from 'react-router-dom'

type Props = {
  leftSideWidth: number
}

function LeftSide(props: Props) {
  const { leftSideWidth } = props;
  const router = useNavigate();
  const href = useLocation()
  const toHome = () => {
    if (href.pathname !== '/home') router('/')
  }
  return (
    <div className='left-side' style={{ width: `${leftSideWidth}px` }}>
      <div className="logo" onClick={toHome}>
        {
          leftSideWidth > 100 
          ? <img src="" />
          : <img src="" />
        }
      </div>
    </div>
  )
}

export default LeftSide