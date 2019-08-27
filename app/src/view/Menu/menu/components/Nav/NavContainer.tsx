import { connect } from 'react-redux';
import * as selectSection from './../../state/section/selectors';
import { Nav } from './Nav';

const mapStateToProps = state => ({
  items: selectSection.getSections(state)
});

export const NavContainer = connect(
  mapStateToProps
)(Nav);