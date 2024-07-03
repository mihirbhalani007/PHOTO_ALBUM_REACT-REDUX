import { useRemoveAlbumMutation } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import PhotoList from "./PhotosList";

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
        className="mr-2"
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
