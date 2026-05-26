import OTPVerification from '../../components/auth/OTPVerification/OTPVerification';

function VerifyOTP() {

  return (

    <div
      className="
        min-h-screen
        bg-[#0f172a]
        flex
        justify-center
        items-center
      "
    >

      <OTPVerification />

    </div>

  );
}

export default VerifyOTP;