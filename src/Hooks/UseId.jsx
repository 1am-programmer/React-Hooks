import React from "react";
import Email from "../router/Email";

const UseId = () => {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">USE ID</h2>
      <p>
        This ID helps distinguish between two elemets of same type, by giving it
        an ID, but unlike math.random() , it does not render a new ID every time
        the component renders.
      </p>
      <div>
        <Email />
        <article style={{ marginBlock: " 1rem" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse et vel
          asperiores magnam fugit architecto nostrum, soluta dolor ipsa totam?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ea
          commodi dolorum possimus ad ducimus eaque tenetur fuga ratione dicta
          soluta corrupti inventore perspiciatis culpa, itaque, voluptas animi
          quia deserunt rem suscipit architecto. Dicta, repellat? Delectus at
          praesentium enim impedit debitis mollitia aspernatur ut, fuga in ullam
          dicta, voluptates numquam.
        </article>
        <Email />
      </div>
    </div>
  );
};

export default UseId;
