import { useAddAlbumMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";

function PhotoList({ album }) {
  useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddAlbumMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
    </div>
  );
}

export default PhotoList;
