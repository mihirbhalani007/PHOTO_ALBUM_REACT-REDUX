import {
  useFetchAlbumQuery,
  useAddAlbumMutation,
} from "../store/Apis/albumsApi";
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumList({ user }) {
  const { data, error, isLoading } = useFetchAlbumQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;

  if (isLoading) {
    content = <Skeleton times={5} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos of the album
        </ExpandablePanel>
      );
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
