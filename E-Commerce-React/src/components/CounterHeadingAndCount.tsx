

interface IProps {
    headingText:string
    count:number
}
const CounterHeadingAndCount = ({headingText,count}:IProps) => {
  return (
    <div>
      <h1>{headingText}</h1>
      <p>{count}</p>
    </div>
  )
};

export default CounterHeadingAndCount
