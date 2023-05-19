import css from "./feedback.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <section className={css.feedback}>
            <h2 className={css.feedbackTitle}>{title}</h2>
            {children}
        </section >
    )

}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section