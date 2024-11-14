import { useState } from "react";

interface TruncatedDescriptionProps {
  text: string;
}

const TruncatedDescription: React.FC<TruncatedDescriptionProps> = ({
  text,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150; // Adjust this value to change when truncation occurs
  const shouldTruncate = text.length > maxLength;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayText = isExpanded ? text : text.slice(0, maxLength);

  return (
    <div className="text-sm text-gray-700 dark:text-gray-100">
      {shouldTruncate ? (
        <>
          {displayText}
          {!isExpanded && "..."}
          <button onClick={toggleExpand} className="ml-1 font-medium underline">
            {isExpanded ? "read less" : "read more"}
          </button>
        </>
      ) : (
        text
      )}
    </div>
  );
};

export default TruncatedDescription;
