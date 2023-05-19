import { Component } from "react";
import css from "./feedback.module.css";
import PropTypes from "prop-types";

export class Notification extends Component {
    render() {
        return (
            <h3 className={css.notificationTitle}>{this.props.message}</h3>
        )
    }
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}

export default Notification