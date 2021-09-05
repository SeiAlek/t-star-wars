import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HeaderBar from '../../common/components/AppBar';

const AppLayout = ({ children }) => (
  <>
    <HeaderBar title="Star Wars Characters" />
    <CssBaseline />
    <Container maxWidth="lg">
      <Box mt={12}>
        {children}
      </Box>
    </Container>
  </>
);

AppLayout.propTypes = {
  children: PropTypes.node,
};

AppLayout.defaultProps = {
  children: null,
};

export default AppLayout;
