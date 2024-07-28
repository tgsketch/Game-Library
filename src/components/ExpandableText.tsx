interface Props {
  children: string;
  charLimit?: number;
}

import { useState } from "react";

const ExpandableText = ({ children, charLimit = 50 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div>
      {isExpanded === false
        ? children.substring(0, charLimit) + "..."
        : children}

      <br />
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "See Less" : "See More"}
      </button>
    </div>
  );
};

export default ExpandableText;
