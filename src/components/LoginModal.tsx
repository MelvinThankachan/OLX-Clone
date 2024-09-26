import Close from "../assets/icons/Close";
import GoogleLogo from "../assets/icons/GoogleLogo";
import Phone from "../assets/icons/Phone";

type LoginModalProps = {
  handleClose: () => void;
};

const LoginModal = ({ handleClose }: LoginModalProps) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black bg-opacity-30 transition-opacity"
        aria-hidden="true"
      />
      <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="transform overflow-hidden rounded bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 relative">
              <button
                onClick={() => handleClose()}
                className="absolute right-3 top-3"
              >
                <Close className="w-6" />
              </button>
              <div className="flex flex-col gap-24 py-5">
                <div className="flex flex-col gap-3 ">
                  <div className="flex flex-col items-center gap-3">
                    <div>
                      <img
                        src="https://statics.olx.in/external/base/img/loginEntryPointPost.png"
                        alt="guitar"
                        className="w-[100px]"
                      />
                    </div>
                    <p className="font-semibold text-sm">
                      Close deals from the comfort of your home.
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 items-center font-semibold">
                    <div className="border-2 border-transparent hover:border-2 hover:border-primary rounded w-full">
                      <button className="flex gap-2 px-4 py-3 border-2 border-primary w-full rounded">
                        <Phone className="w-4" />
                        <span className="text-sm">Continue with phone</span>
                      </button>
                    </div>
                    <div className="border-2 border-transparent hover:border-2 hover:border-[#d2e3fc] rounded w-full">
                      <button className="flex gap-2 px-4 py-2 border border-[#d2e3fc] w-full rounded bg-[#f8faff]">
                        <GoogleLogo className="w-4" />
                        <span className="text-center w-full text-sm text-gray-600 font-medium">
                          Continue with Google
                        </span>
                      </button>
                    </div>
                    <p className="text-black text-sm">OR</p>
                    <span className="text-black text-xs cursor-pointer underline underline-offset-4">
                      Login with Email
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-5 items-center text-xs text-gray-400 text-center px-10">
                  <p>All your personal details are safe with us.</p>
                  <span>
                    If you continue, you are accepting{" "}
                    <span className="text-blue-500">
                      OLX Terms and Conditions and Privacy Policy
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
