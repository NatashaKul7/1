const Icon = ({ src, alt, action, type }) => {
  const hoverColor = {
    link: "hover:bg-indigo-200",
    delete: "hover:bg-red-200",
  };

  const image = <img src={src} alt={alt} className="w-8 p-1.5" />;

  const styles = `grow hover:cursor-pointer flex justify-center ${hoverColor[type]}`;

  const handleFunction = () => {
    if (
      type === "delete" &&
      window.confirm("Are you sure you want to delete this contact?")
    ) {
      action();
    }
  };

  if (typeof action === "function") {
    return (
      <button className={styles} onClick={handleFunction}>
        {image}
      </button>
    );
  }
  else {
    return <a href={action} className={styles}>{image}</a>
  }
};

export default Icon;
