import { connect } from 'react-redux';
import { login } from '../../actions/session_actions'
import SessionForm from './login_form'


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'login'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);