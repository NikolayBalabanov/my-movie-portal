import React, { FC, useEffect, useRef } from 'react';
import ButtonClose from './UI/ButtonClose';
import ButtonConfirm from './ButtonConfirm';

interface IConfirmProps {
  onConfirm: () => void;
}

const ConfirmModal: FC<IConfirmProps> = ({ onConfirm }) => {
  const modal = useRef<HTMLDivElement | null>(null);
  const modalContent = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      modal.current?.classList.remove('opacity-0');
      modalContent.current?.classList.remove('-translate-y-10');
    });
  }, []);

  const close = (fn: () => void) => {
    modal.current?.classList.add('opacity-0');
    modalContent.current?.classList.add('-translate-y-10');
    setTimeout(() => {
      fn();
    }, 300);
  };
  return (
    <div
      ref={modal}
      onClick={() => close(onConfirm)}
      className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-30 bg-gray-500 bg-opacity-80 opacity-0 transition-opacity duration-300"
    >
      <div
        ref={modalContent}
        className="flex flex-col relative rounded-lg shadow-md bg-white px-[84px] py-[25px] -translate-y-10 duration-300 transition-transform"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col-reverse text-center mb-[20px] justify-between items-center">
          <h3 className="text-2xl font-medium leading-[17px] text-gray-900">
            The data has been saved!
          </h3>
        </div>
        <div className="flex flex-col">
          <ButtonConfirm text="Okay!" callback={() => close(onConfirm)} />
        </div>
        <ButtonClose callback={() => close(onConfirm)} />
      </div>
    </div>
  );
};

export default ConfirmModal;