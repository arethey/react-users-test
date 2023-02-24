import React from "react";
import UserSkeleton from "./UserSkeleton";
import Avatar from "../assets/avatar.png";
import Trash from "../assets/trash.svg";

const Users = ({
  isLoading = true,
  isError = false,
  items = [],
  refetch,
  handleDelete,
}) => {
  const RenderUsers = () => {
    if (isLoading) {
      return (
        <>
          <UserSkeleton sizes={["sm", "md", "lg"]} />
          <UserSkeleton sizes={["md", "lg", "sm"]} />
          <UserSkeleton sizes={["lg", "sm", "md"]} />
        </>
      );
    }

    if (isError) {
      return (
        <tr className="border-b text-sm text-gray-500">
          <td className="p-4 text-center text-slate-400" colSpan={4}>
            Something went wrong. <button onClick={refetch}>Try again</button>
          </td>
        </tr>
      );
    }

    if (!items.length) {
      return (
        <tr className="border-b text-sm text-gray-500">
          <td className="p-4 text-center text-slate-400" colSpan={4}>
            No users found. Try a different search or Invite a Team Member
          </td>
        </tr>
      );
    }

    return (
      <>
        {items.map((item) => (
          <tr key={item.id} className="border-b text-sm text-gray-500 group">
            <td className="p-4">
              <div className="flex items-center gap-4">
                <img src={Avatar} alt="" />
                <span>{[item.firstName, item.lastName].join(" ")}</span>
              </div>
            </td>
            <td className="p-4">{item.email}</td>
            <td className="p-4">
              {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
            </td>
            <td className="p-4">
              <button
                onClick={() => handleDelete(item.id)}
                className="hidden group-hover:flex gap-1"
              >
                <img src={Trash} alt="trash" />
                <span>Delete</span>
              </button>
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <>
      <table className="w-full text-left text-base table-fixed">
        <thead className="border-b">
          <tr>
            <th scope="col" className="p-6">
              Name
            </th>
            <th scope="col" className="p-6">
              Email
            </th>
            <th scope="col" className="p-6">
              Status
            </th>
            <th scope="col" className="p-6"></th>
          </tr>
        </thead>
        <tbody>
          <RenderUsers />
        </tbody>
      </table>
    </>
  );
};

export default Users;
