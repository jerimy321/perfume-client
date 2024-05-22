interface ModalProps {
  title: string;
  content: string;
  negativeAnswer: string;
  positiveAnswer: string;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  negativeAnswer,
  positiveAnswer,
}) => {
  return (
    <div
      className="modal fade"
      id="modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="gap-4 modal-content">
          <div className="flex items-center justify-center">
            <h5 className="pt-4 text-lg font-medium" id="modalLabel">
              {title}
            </h5>
          </div>
          <div className="flex items-center justify-center p-2">{content}</div>
          <div className="flex items-center justify-center gap-4 pb-4">
            <button type="button" className="btn " data-dismiss="modal">
              {negativeAnswer}
            </button>
            <button type="button" className="text-white bg-black btn text-md">
              {positiveAnswer}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
