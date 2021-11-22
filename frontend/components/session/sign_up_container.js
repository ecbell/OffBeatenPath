import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions'
import Signup from './signup'


const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session,
    formType: 'Create your free account'
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: formUser => dispatch(signup(formUser)),
  clearErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);