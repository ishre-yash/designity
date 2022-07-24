import React from "react";
import FormContainer from "./components/FormContainer";
import FormContainer3 from "./components/FormContainer3";
import IdeasComponent from "./components/IdeasComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormContainer4 from "./components/FormContainer4";
import Round from "./components/Round";
import TableComponent from "./components/TableComponent";
import LunchClub from "./components/LunchClub";
import AnalyticsCard from "./components/AnalyticsCard";
import Home from "./components/Home";
import UserProfile from "./containers/UserProfile";
import Settings from "./containers/Settings";
import Goals from "./components/Settings Components/Goals";
import MyFeed from "./containers/MyFeed";
import NewPosts from "./containers/NewPosts";
import MyCalendar from "./containers/MyCalendar";
import PostContainer from "./containers/PostContainer";
import InterviewRoundsCard from "./components/My Feed Components/InterviewRoundsCard";

import ShowProfilePhoto from "./components/ShowProfilePhoto";
import JobsForYou from "./containers/JobsForYou";
import Explore from "./containers/Explore";
import QuillEditor from "./components/QuillEditor";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myfeed" element={<MyFeed />} />
        <Route path="/table" element={<TableComponent />} />
        <Route path="/share-interview-experience" element={<FormContainer />} />
        <Route path="/preparation" element={<FormContainer3 />} />
        <Route path="/ideas" element={<IdeasComponent />} />
        <Route path="/numberofrounds" element={<FormContainer4 />} />
        <Route path="/round" element={<Round />} />
        <Route path="/referrals" element={<LunchClub />} />
        <Route path="/analysis" element={<AnalyticsCard />} />
        <Route path="/myprofile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/newposts" element={<NewPosts />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="/post/:id" element={<PostContainer />} />
        <Route path="/round/:id" element={<InterviewRoundsCard />} />
        <Route path="/photo" element={<ShowProfilePhoto />} />
        <Route path="/jobsforyou" element={<JobsForYou />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/editor" element={<QuillEditor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
