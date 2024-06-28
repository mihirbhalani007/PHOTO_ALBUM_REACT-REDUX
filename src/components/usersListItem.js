import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border border-gray-300 rounded shadow-md">
      <div className="flex flex-row items-center justify-between p-2 bg-gray-50 rounded-lg">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {error && <div>Error deleting user..</div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
