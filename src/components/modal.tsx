// src/components/Modal.tsx
import React from 'react';

const Modal = () => {
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
        <div className="bg-white rounded-lg shadow-lg modal-content">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 modal-header">
            <h5 className="text-lg font-medium modal-title" id="modalLabel">
              모달제목
            </h5>
            <button
              type="button"
              className="text-black close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="p-4 modal-body">모달바디</div>
          <div className="flex items-center justify-end p-4 border-t border-gray-200 modal-footer">
            <button
              type="button"
              className="mr-2 btn btn-secondary"
              data-dismiss="modal"
            >
              닫기
            </button>
            <button type="button" className="btn btn-primary">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
