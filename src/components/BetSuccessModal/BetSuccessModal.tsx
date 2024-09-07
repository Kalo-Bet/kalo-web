import Image from "next/image";
import CancelIcon from "../CancelIcon/CancelIcon";

const SuccessPopup = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-light-background dark:bg-dark-background rounded-lg p-8 m-4 max-h-full text-center">
        <CancelIcon onClose={onClose} />
        <div className="mt-6 mb-4 flex justify-center">
          <Image alt="ticket" src='/ticket.svg' width={128} height={128} />
        </div>
        <h3 className="text-xl font-bold mb-2">Congratulations</h3>
        <p className="mb-6">Your have successfully created your bet</p>
        <button
          onClick={onClose}
          className="w-full rounded bg-btn-light dark:bg-btn-dark text-btn-text-light dark:btn-text-dark transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-btn-hover-light dark:hover:bg-btn-hover-dark font-bold py-2 px-4  focus:outline-none focus:shadow-outline"
        >
          Review Your Bet
        </button>
      </div>
    </div>
  );
};

export default SuccessPopup;