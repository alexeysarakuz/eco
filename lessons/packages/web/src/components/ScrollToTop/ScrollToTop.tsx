import * as React from 'react';
import { withRouter } from 'react-router-dom';

interface ScrollToTopProps {
  children: React.ReactNode;
  location: Location;
}

class ScrollToTop extends React.Component<ScrollToTopProps> {
  public componentDidUpdate(prevProps: ScrollToTopProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  public render() {
    return this.props.children;
  }
}

export default withRouter<any>(ScrollToTop);
