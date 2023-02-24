const DeleteModal = ({ setShowModal, handleDelete }) => {
  return (
    <div className="bg-black bg-opacity-70 fixed inset-0 z-50  min-w-screen min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white rounded-md p-4 w-[500px]">
        <h1 className="font-bold text-2xl mb-3">
          Are you sure you want to delete this person
        </h1>
        <p>
          This action cannot be undone and all data associated with this person
          will be permanently removed.
        </p>

        <div className="mt-10 flex flex-col gap-3">
          <button
            className="bg-blue-600 w-100 py-2 rounded-md text-white text-xl"
            onClick={handleDelete}
          >
            Yes
          </button>
          <button
            className="w-100 py-2 rounded-md text-xl"
            onClick={() => setShowModal(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
