import React from 'react';
import { useSelector } from 'react-redux';

//import { useDispatch } from 'react-redux';
//import { signOut } from '~/store/modules/auth/actions';

import createRouter from '~/routes';

export default function App() {
  //const dispatch = useDispatch();
  //dispatch(signOut());

  const signed = useSelector((state) => state.auth.signed);

  const Routes = createRouter(signed);

  return <Routes />;
}
