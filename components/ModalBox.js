const ModalBox = ({ classnames, modal, handleClose }) => {
  const handleSubmit = () => {};

//   const handleClose = () => {
//       classnames = "hidden";
//   }

  console.log(modal);
  console.log(handleClose);

  

  return (
    <>
      <div className={`${classnames} modal`}>
        <div className="modal-content rounded-lg">
          {/* here we go again */}
          <span onClick={handleClose} className="close">&times;</span>
          <h1 className="text-center text-gray-900 font-bold">Criteria</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">
                Agrément ONSSA
              </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">
                Certifications ISO
              </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">
                Qualité/Prix
              </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">
                Respect des délais
              </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">
                Conditionnement
              </label>
            </div>
            <div className="mt-4">
              <input type="checkbox" id="fruits" name="fruits" />
              <label className="ml-2">
                Respect des températures
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalBox;
