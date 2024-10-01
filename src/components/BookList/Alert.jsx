//src/components/Alert.jsx

// src/components/Alert.jsx

/*const alertStyles = {
    margin: 8,
    padding: "12px 16px",
    borderRadius: 4,
    color: "white",
  };
  
  const getBgColor = variant => {
    switch (variant) {
      case "info":
        return "blue";
      case "success":
        return "green";
      case "error":
        return "red";
      case "warning":
        return "orange";
      default:
        throw new Error(`Unsupported variant prop value - ${variant}`);
    }
  };
  
  export const Alert = ({ variant, children }) => {
    return (
      <p
        style={{
          ...alertStyles,
          backgroundColor: getBgColor(variant),
        }}
      >
        {children}
      </p>
    );
  };
  
  */
// src/components/Alert.jsx

import css from "./Alert.module.css";

const Alert = ({ variant, outlined, elevated, children }) => {
  const classNames = [css.alert, css[variant]];

  if (outlined) {
    classNames.push(css["is-outlined"]);
  }

  if (elevated) {
    classNames.push(css["is-elevated"]);
  }

  return <p className={classNames.join(" ")}>{children}</p>;
};

export default Alert;
