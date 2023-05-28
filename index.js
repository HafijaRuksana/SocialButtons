const Button = (props) => {
  //  Write your code here.
  const { buttonName, className } = props;
  return <button className={className}>{buttonName}</button>;
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-container">
      <Button buttonName="Like" className="button-like" />
      <Button buttonName="Comment" className="button-comment" />
      <Button buttonName="Share" className="button-share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));