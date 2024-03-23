/*
    JavaScript Closures are basically functions, 
    inside functions, that have acess to the
    outer function variables
*/

function outerFunction() {
  const outer = "Outer function called";
  function innerFunction() {
    console.log("Hello from Inner");
    console.log(outer);
  }
  return innerFunction;
}

const myClosure = outerFunction();

function idGenerator() {
  let count = 1;
  return function counter() {
    return ++count;
  };
}

idGenerator();


function countNumbers() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = countNumbers();
counter.increment();
counter.getCount();

/* 

    Here is an example of an closure that I created in React
    to live update an variable based on a input field 

const [myform, setForm] = useState<type>({} as type);

const fieldUpdate = (fieldName: string) => (event: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({
        ...myform,
        [fieldName]: event.target.value
    })
}

<input type="text" onChange={fieldUpdate("text")} value={myform?.text || ''} required/>

*/
