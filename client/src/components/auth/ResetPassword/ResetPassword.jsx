import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

function ResetPassword() {

  return (
    <div>

      <h2
        className="
          text-4xl
          font-bold
          text-white
          mb-3
        "
      >
        Reset Password
      </h2>

      <p className="text-gray-400 mb-8">
        Create a new secure password.
      </p>

      <div className="space-y-5">

        <Input
          type="password"
          placeholder="New Password"
        />

        <Input
          type="password"
          placeholder="Confirm Password"
        />

        <Button className="w-full">
          Update Password
        </Button>

      </div>

    </div>
  );
}

export default ResetPassword;