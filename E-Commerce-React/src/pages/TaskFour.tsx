import CounterHeadingAndCount from "@/components/CounterHeadingAndCount";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TaskFour = () => {
    const [count,setCount] = useState(0)
    //useState
    //We Use state in react to make re-render to component because SPA after display data can not update it without
    // ComponentwillUpdate and it happens when state change , props updated or forceUpdate and it not recommended 
    // useState always returns array consists 2 elements first is the variable that contains the inits value , second it the 
    // setter function and can only update state by this setter only . 



    //Props
    //Props in React stand for properties. They are used to pass data from a parent component
    // to a child component. Think of them as input values for a component.
    //They are read-only within the child component.
    //They can be of any type: strings, numbers, booleans, arrays, objects, or functions.
  return (
    <section className="py-10 md:py-20">
      <div className="container grid place-content-center text-center gap-4">
        <CounterHeadingAndCount 
        headingText="Task Four Counter"
        count={count}
        />
        <div className="space-x-4">
            <Button onClick={()=>setCount(count + 1)}>+</Button>
            <Button onClick={()=>setCount(count - 1)}>-</Button>
        </div>
      </div>
    </section>
  );
};

export default TaskFour;
