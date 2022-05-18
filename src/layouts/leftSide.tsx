

type Props = {
  leftSideWidth: number
}

function LeftSide(props: Props) {
  const { leftSideWidth } = props;
  return (
    <div className='left-side' style={{ width: `${leftSideWidth}px` }}>L</div>
  )
}

export default LeftSide