const SignUpOption = ({ image, title, link }) => {
  return (
    <div className="sign-up-option">
      <a href={link} className="sign-up-link">
        <img src={image} alt={title} className="sign-up-image" />
        <h3 className="sign-up-text">{title}</h3>
      </a>
    </div>
  );
};

export default SignUpOption;