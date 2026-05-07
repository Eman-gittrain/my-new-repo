import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <artle className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </artle>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
