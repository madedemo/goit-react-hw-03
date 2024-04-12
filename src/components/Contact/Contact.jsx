import css from './Contact.module.css'

const Contact = ({ name, number }) => {
  return (
    <li className={css.contact}>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
    </li>
  );
};

export default Contact;