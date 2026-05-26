import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import SocialLogin from '../SocialLogin/SocialLogin';

function LoginForm() {

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
        Login
      </h2>

      <p className="text-gray-400 mb-8">
        Welcome back to DevSphere AI
      </p>

      <div className="space-y-5">

        <Input
          type="email"
          placeholder="Enter your email"
        />

        <Input
          type="password"
          placeholder="Enter your password"
        />

        <Button className="w-full">
          Login
        </Button>

      </div>

      <SocialLogin />

    </div>
  );
}

export default LoginForm;