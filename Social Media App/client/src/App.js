import{  BrowserRouter,  Routes,  Route} from "react-router-dom";
import PhotoView from "./pages/components/PhotoView";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import UploadImage from "./pages/UploadImage";
import Search from "./pages/components/Search";
import CreateAlbum from "./pages/CreateAlbum";
import AlbumContent from "./pages/AlbumContent";
import Followers from "./pages/Followers";
import Feed from "./pages/Feed";
import Leaderboard from "./pages/Leaderboard";
import Register from "./pages/Register";
import AddFriend from "./pages/AddFriend";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/signup" element={<Register/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/upload" element={<UploadImage/>}></Route>
          <Route path="/photo-view" element={<PhotoView/>}></Route>
          <Route path="/create-album" element={<CreateAlbum/>}></Route>
          <Route path="/album-content" element={<AlbumContent/>}></Route>
          <Route path="/followers" element={<Followers/>}></Route>
          <Route path="/feed" element={<Feed/>}></Route>
          <Route path="/leaderboard" element={<Leaderboard/>}></Route>          
          <Route path="/add-friend" element={<AddFriend/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
