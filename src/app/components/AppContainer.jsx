import React from 'react';
import { Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import { SnackbarProvider } from 'notistack';
import Routes from '../router/Routes';
import AppLayout from '../layouts/AppLayout';

const App = () => (
  <QueryParamProvider ReactRouterRoute={Route}>
    <SnackbarProvider>
      <AppLayout>
        <Routes />
      </AppLayout>
    </SnackbarProvider>
  </QueryParamProvider>
);

export default App;
