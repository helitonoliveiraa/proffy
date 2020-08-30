import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Login from './pages/Login';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/login" exact component={Login} />
        <Route path="/study" component={TeacherList} />
        <Route path="/give-classes" component={TeacherForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
