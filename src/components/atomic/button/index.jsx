import "./style.css";
const Button = ({ onClick, title, backgroundColor, color , hover , alignself }) => {
  return (
      <button 
        onClick={onClick}
        style={{
          backgroundColor: backgroundColor ? backgroundColor : "#fff",
          color: color ? color : "000",
          alignSelf: alignself ? alignself : "none",
          alignItems:"center",
          fontSize:"14px",
        }}
        hover={hover}
      >
        <span>{title}</span>
      </button>
  );
};
export default Button;
