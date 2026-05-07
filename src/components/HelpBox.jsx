import { string } from 'prop-types';

import './HelpBox.css';

function HelpBox({ title, text }) {
  return (
    <artcle className="help-box">
      <h2>{title}</h2>
      <p>{text}</p>
    </artcle>
  );
}

HelpBox.propTypes = {
  title: string,
  text: string,
};

export default HelpBox;
