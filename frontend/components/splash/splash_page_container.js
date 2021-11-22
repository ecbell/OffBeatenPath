import { connect } from 'react-redux';
import splashPage from './splash-page'


const mapStateToProps = (state, ownProps) => {
  return{
    motto: 'Ready for adventure?'
  }
}

// const mapDispatchToProps = (dispatch, ownProps) => ({

// })

export default connect(mapStateToProps, null)(splashPage);