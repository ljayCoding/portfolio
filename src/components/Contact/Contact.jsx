import './contact.css';

const Contact = () => {
  return (
    <div className="text-container">
      <h1 className="text heading">Contact Me</h1>
      <div className="text-block">
        <p className="text details">Luke Webber</p>
        <p className="text details">lukewebber392@gmail.com</p>
        <a
          href="https://www.linkedin.com/in/luke-webber-43714b25b/"
          target="_blank"
        >
          <p className="text details">LinkedIn</p>
        </a>
      </div>
    </div>
  );
};
export default Contact;
