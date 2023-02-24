import { useMemo, useState } from "react";
import { useQuery } from "react-query";

import MenuDrawer from "./assets/menu_drawer.svg";
import DeleteModal from "./components/DeleteModal";
import SearchUser from "./components/SearchUser";
import Users from "./components/Users";
import UserStatusCount from "./components/UserStatusCount";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [searchField, setSearchField] = useState("");

  const allUsers = useMemo(() => {
    let data = usersData;

    if (searchField) {
      if (data.length) {
        const value = searchField.toLowerCase();

        data = data.filter(
          (item) =>
            item.firstName.toLowerCase().includes(value) ||
            item.lastName.toLowerCase().includes(value) ||
            item.email.toLowerCase().includes(value)
        );
      }
    }

    return data;
  }, [usersData, searchField]);

  const fetchUsers = async () => {
    const response = await fetch(
      "https://voicetest20202.s3.amazonaws.com/users.json"
    );
    return await response.json();
  };

  const uniqueID = () => {
    return Math.floor(Math.random() * Date.now());
  };

  const onSuccess = (data) => {
    const users = data.map((item) => ({
      id: uniqueID(),
      ...item,
    }));
    setUsersData(users);
  };

  const usersQuery = useQuery(["users"], fetchUsers, { onSuccess });

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchField(value);
  };

  const handleDelete = () => {
    const id = showModal;
    if (usersData?.length) {
      const currData = usersData.filter((item) => item.id !== id);
      setUsersData(currData);
      setShowModal(false);
    }
  };

  const getCount = (status) => {
    if (!usersQuery.isLoading && usersData.length) {
      return usersData.filter((item) => item.status === status).length;
    }
  };

  return (
    <div className="container mx-auto flex items-start my-12">
      <img src={MenuDrawer} alt="menu drawer" />
      <div className="grow px-12">
        <div className="flex gap-2">
          <UserStatusCount
            count={getCount("approved")}
            status="Approved"
            isLoading={usersQuery.isLoading}
          />
          <UserStatusCount
            count={getCount("pending")}
            status="Pending"
            isLoading={usersQuery.isLoading}
          />
        </div>

        <div className="mt-4">
          <SearchUser searchField={searchField} handleSearch={handleSearch} />
        </div>

        <div className="mt-4">
          <Users
            isLoading={usersQuery.isLoading}
            isError={usersQuery.isError}
            refetch={usersQuery.refetch}
            items={allUsers}
            handleDelete={setShowModal}
          />
          {showModal && (
            <DeleteModal
              setShowModal={setShowModal}
              handleDelete={handleDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
