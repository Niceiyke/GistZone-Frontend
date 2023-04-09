

function IconsBtn({Icon,isActive,color,children,...props}) {
  return (
        <button className={` ${isActive ? "flex flex-row text-red-700" : "flex flex-row"}`}>
      <span
        className={`${children != null ? " " : ""} ${color || ""}`}
        {...props}
      >
        <Icon 
        />
      </span>
      {children}
    </button>
  );
  
}

export default IconsBtn
