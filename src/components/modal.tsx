interface ModalProps {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
  negativeAnswer: string;
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      role="dialog"
      aria-labelledby="modalLabel"
      aria-hidden={!isVisible}
    >
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-4">
          {typeof title === 'string' ? (
            <h5 className="text-lg font-medium" id="modalLabel">
              {title}
            </h5>
          ) : (
            title
          )}
        </div>
        <div className="flex items-center justify-center mb-4 text-center whitespace-pre-line">
          {typeof content === 'string' ? <p>{content}</p> : content}
        </div>
        <div className="flex items-center justify-center gap-4">
          <button type="button" className="btn" onClick={onClose}>
            {negativeAnswer}
          </button>
          <button
            type="button"
            className="text-white bg-black btn"
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
