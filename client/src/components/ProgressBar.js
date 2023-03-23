const ProgressBar =({progress}) => {
  const colors =[
    '#D8E2DC',
    '#F4ACB7',
  ]
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
    return (
      <div className="outer-bar">
        <div className="inner-bar"
        style={{ width: `${progress}%`, backgroundColor: randomColor}}
        ></div>
      </div>
    );
  }
  
  export default ProgressBar;
  