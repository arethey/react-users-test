import React from "react";

const UserSkeleton = ({ sizes = ["sm", "md", "lg"] }) => {
  const getWidth = (size) => {
    switch (size) {
      case "sm":
        return "w-20";
      case "md":
        return "w-32";
      default:
        return "w-44";
    }
  };

  return (
    <tr className="bg-white border-b">
      {sizes.map((size) => (
        <td className="p-4" key={size}>
          <div className={`bg-gray-300 h-6 rounded-md ${getWidth(size)}`}></div>
        </td>
      ))}
      <td className="p-4"></td>
    </tr>
  );
};

export default UserSkeleton;
