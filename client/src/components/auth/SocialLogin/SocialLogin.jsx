import Button from '../../common/Button/Button';

function SocialLogin() {

  return (
    <div className="space-y-4 mt-6">

      <Button
        variant="secondary"
        className="w-full"
      >
        Continue with Google
      </Button>

      <Button
        variant="secondary"
        className="w-full"
      >
        Continue with GitHub
      </Button>

    </div>
  );
}

export default SocialLogin;