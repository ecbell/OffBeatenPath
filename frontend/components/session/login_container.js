import { connect } from 'react-redux';
import { login, removeErrors } from '../../actions/session_actions'
import SessionForm from './login_form'


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Log in and get off the beaten path!'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser)),
  clearErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);