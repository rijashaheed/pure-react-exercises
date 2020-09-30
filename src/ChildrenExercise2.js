import React from "react";

const FirstChildOnly = ({ children }) => {
  return <p>{React.Children.toArray(children).splice(0, 1)}</p>;
}

const LastChildOnly = ({ children }) => {
  const arrayChildren = React.Children.toArray(children);
  return(
  <p>{arrayChildren.splice(arrayChildren.length-1)}</p>
  )
}

const Head = ({ children, number }) => {
  const arrayChildren = React.Children.toArray(children);
  return (
  <p>{arrayChildren.splice(0, number)}</p>
  )
}

const Tail = ({ children, number }) => {
  const arrayChildren = React.Children.toArray(children);
  const reverseChildrenArray = arrayChildren.reverse();
  return (
  <p>{reverseChildrenArray.splice(0, number)}</p>
  )
}

function ChildrenArray({ children }) {
  return (
    <div>
      <h3>First Child: </h3>
      <FirstChildOnly>
        {children}
      </FirstChildOnly>

      <h3>Last Child: </h3>
      <LastChildOnly>
        Last Child Only:
        {children}
      </LastChildOnly>

      <h3>Head: </h3>
      <Head number="5">       
        {children}
      </Head>

      <h3>Tail: </h3>
      <Tail number="2">
        {children}
      </Tail>

    </div>
  );
}

export default ChildrenArray;


