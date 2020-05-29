import { compose } from 'ramda';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as AuthActions from '../AuthActions';

interface LogoutPageProps {
  history: any;
  logout: any;
}

const LogoutPage = ({ logout, history }: LogoutPageProps): any => {
  logout();
  history.push('/');

  return null;
};

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default compose(
  withRouter,
  connect(
    null,
    mapDispatchToProps,
  ),
)(LogoutPage);
