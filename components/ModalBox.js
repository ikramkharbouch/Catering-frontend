const ModalBox = ({ classnames, modal, handleClose, Form }) => {
  const handleSubmit = () => {};

  return (
    <>
      <div className={`${classnames} modal`}>
        <div className="modal-content rounded-lg">
          {/* here we go again */}
          <span onClick={handleClose} className="close">&times;</span>
          <h1 className="text-center text-gray-900 font-bold">Criteria</h1>
          <Form />
        </div>
      </div>
    </>
  );
};

export default ModalBox;
