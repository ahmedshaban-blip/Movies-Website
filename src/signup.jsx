import React, { useState, useEffect } from 'react';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const usernameRegex = /^\S+$/;

  const validate = () => {
    const newErrors = {};

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Email is not valid';
    }

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!username) {
      newErrors.username = 'Username is required';
    } else if (!usernameRegex.test(username)) {
      newErrors.username = 'Username must not contain spaces';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(password)) {
      newErrors.password =
        'Password must be at least 8 characters, include uppercase, lowercase, number, and special character';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validate());
  }, [email, name, username, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          backgroundColor: 'white',
          padding: '40px 50px',
          borderRadius: '15px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
          maxWidth: '450px',
          width: '100%',
        }}
      >
        <h2
          className="mb-5 text-center"
          style={{ fontWeight: '700', color: '#333', letterSpacing: '1.2px' }}
        >
          Create Your Account
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="form-label" style={{ fontWeight: '600' }}>
            Email address
          </label>
          <input
            type="email"
            id="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="form-label" style={{ fontWeight: '600' }}>
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="username" className="form-label" style={{ fontWeight: '600' }}>
            Username
          </label>
          <input
            type="text"
            id="username"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
          />
          {errors.username && <div className="invalid-feedback">{errors.username}</div>}
        </div>

        {/* Password */}
        <div className="mb-5" style={{ position: 'relative' }}>
          <label htmlFor="password" className="form-label" style={{ fontWeight: '600' }}>
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
          />
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              userSelect: 'none',
              borderRadius: '4px',
            }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          {errors.password && <div className="invalid-feedback">{errors.password}</div>}
        </div>

        <button
          type="submit"
          className="btn btn-primary w-100"
          disabled={!isFormValid}
          style={{ fontWeight: '600', fontSize: '1.1rem' }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
