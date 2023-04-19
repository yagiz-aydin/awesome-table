import { Fragment } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { UserList, UserDetail } from '../pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user-detail/:id" element={<UserDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}
