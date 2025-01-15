import React from 'react';

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      <h2>Welcome to the Dashboard</h2>
      <p>Congratulations, you have successfully signed in!</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
  },
};

export default WelcomePage;
