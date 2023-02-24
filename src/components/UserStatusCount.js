import React from "react";

const UserStatusCount = ({
  count = 0,
  status = "Active",
  isLoading = true,
}) => {
  return (
    <div className="w-40 rounded-md border border-blue-600 inline-flex flex-col items-center justify-center py-3 px-5">
      {isLoading ? (
        <span className="bg-gray-300 w-20 h-6 rounded-md"></span>
      ) : (
        <span className="text-3xl font-bold">{count > 0 ? count : "--"}</span>
      )}
      <span className="text-base font-bold">{status}</span>
    </div>
  );
};

export default UserStatusCount;
