import { useState } from "react";
import { Input, Label, FormGroup, Form, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("en");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setEmailValid(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail) && newEmail !== ""
    );
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 6 && newPassword !== "");
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const handleSignUp = () => {
    console.log("Sign up:", { email, password, nationality });
  };

  return (
    <div className="container mt-5">
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="Your Email"
            value={email}
            onChange={handleEmailChange}
            className={`form-control ${emailValid ? "is-valid" : "is-invalid"}`}
          />
          {!emailValid && <div className="invalid-feedback">Invalid Email</div>}
        </FormGroup>

        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            id="password"
            placeholder="Your password"
            value={password}
            onChange={handlePasswordChange}
            className={`form-control ${
              passwordValid ? "is-valid" : "is-invalid"
            }`}
          />
          {!passwordValid && (
            <div className="invalid-feedback">Weak password</div>
          )}
        </FormGroup>

        <FormGroup>
          <Label for="nationality">Nationality</Label>
          <Input
            type="select"
            id="nationality"
            value={nationality}
            onChange={handleNationalityChange}
          >
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Button color="info" onClick={handleSignUp}>
            Sign Up
          </Button>
        </FormGroup>
        <FormGroup>
          <p>
            {nationality === "en" && "Hello!"}
            {nationality === "de" && "Hallo!"}
            {nationality === "fr" && "Bonjour!"}
          </p>
        </FormGroup>
        <FormGroup>
          <p>Your Email is: {email}</p>
        </FormGroup>

        <FormGroup>
          <p>Your Email is {passwordValid ? "correct" : "to weak"}.</p>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SignupPage;
