import PropTypes from 'prop-types'; 
import css from './Feedbackoptions.module.css';

export const Feedbackoptions = ({ options, onLeaveFback }) => {
    return (
        <div className={css.options_feedback}>
            {options.map(option => (
        <button className={css.button_feedback} key={option} onClick={() => onLeaveFback(option)}>
            {option}
        </button>
        ))}
    </div>
    )
}

Feedbackoptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFback: PropTypes.func.isRequired,
}


