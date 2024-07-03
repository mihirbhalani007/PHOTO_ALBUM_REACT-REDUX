import {
  useFetchAlbumQuery,
  useAddAlbumMutation,
} from "../store/Apis/albumsApi";
import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumList({ user }) {
  const { data, error, isFetching } = useFetchAlbumQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isFetching) {
    content = <Skeleton className="h-10 w-full" times={5} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumsListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={results.isLoading}>
          {" "}
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
export default AlbumList;
