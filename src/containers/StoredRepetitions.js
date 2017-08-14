import { connect } from 'react-redux';
import RepetitionList from '../components/RepetitionList';
import { deleteRepetition } from './../actions/';

const mapStateToProps = state => ({
  repetitions: state.repetitions
});

const mapDispatchToProps = {
  onRepetitionClick: deleteRepetition
};

const StoredRepetitions = connect(mapStateToProps, mapDispatchToProps)(
  RepetitionList
);

export default StoredRepetitions;
