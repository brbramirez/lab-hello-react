import Button from "./Button";

function Hero() {
  return (
    <div className="text-bg-dark p-5 row">
    <div className="col-6">
        <h1 className="text-white fw-bolder main-title text-start">Say hello to ReactJS</h1>
            <p className="text-white fw-bold main-text text-start">
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
            </p>
        <Button />
    </div>

    </div>
  );
}

export default Hero;