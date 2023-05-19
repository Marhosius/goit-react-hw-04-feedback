import { Component } from "react";
import css from "./feedback.module.css";
import PropTypes from "prop-types";

class Section extends Component {
    render() {
        return (
            <section className={css.feedback}>
                <h2 className={css.feedbackTitle}>{this.props.title}</h2>
                {this.props.children}
            </section >
        )
    }
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Section