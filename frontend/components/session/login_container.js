import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './login_form'


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log in and get off the beaten path!'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);