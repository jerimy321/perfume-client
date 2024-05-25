interface ModalProps {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  negativeAnswer?: string;
  positiveAnswer: string;
  isVisible?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> = ({
  title,
  content,
  negativeAnswer,
  positiveAnswer,
  isVisible,
  onClose,
  onConfirm,
}) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden={!isVisible}
    >
      <div className="p-6 bg-white rounded-[30px] shadow-modal-border bg-modal-bg w-[710px] min-h-[340px] py-10 flex flex-col items-center">
        <div className="flex items-center justify-center pb-10">
          {typeof title === 'string' ? (
            <h5 className="text-lg font-medium" id="modalLabel">
              {title}
            </h5>
          ) : (
            title
          )}
        </div>
        <div className="flex items-center justify-center mb-4 text-center whitespace-pre-line text-mainbutton-default text-[24px]">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            type="button"
            className="text-modal-button text-gray80 rounded-[10px] border border-gray229 bg-gray229 w-[260px] h-[80px]"
            onClick={onClose}
          >
            {negativeAnswer}
          </button>
          <button
            type="button"
            className="text-white bg-gray80 text-modal-button w-[260px] h-[80px] rounded-[10px]"
            onClick={onConfirm}
          >
            {positiveAnswer}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
